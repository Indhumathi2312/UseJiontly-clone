const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');
const { execSync } = require('child_process');

const PROJECT_DIR = 'c:\\Users\\D E L L\\Desktop\\Job Task\\Indhu\\UseJiontly-clone';
const HTML_FILE = path.join(PROJECT_DIR, 'usejointly.html');
const PUBLIC_IMAGES_DIR = path.join(PROJECT_DIR, 'public', 'images');
const PUBLIC_CSS_DIR = path.join(PROJECT_DIR, 'app');

if (!fs.existsSync(PUBLIC_IMAGES_DIR)) {
  fs.mkdirSync(PUBLIC_IMAGES_DIR, { recursive: true });
}

async function downloadFile(url, destPath) {
  try {
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream',
    });
    const writer = fs.createWriteStream(destPath);
    response.data.pipe(writer);
    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  } catch (error) {
    console.error(`Failed to download ${url}:`, error.message);
  }
}

function convertHtmlToJsx(htmlString) {
  let jsx = htmlString;
  
  // Basic replacements
  jsx = jsx.replace(/class="/g, 'className="');
  jsx = jsx.replace(/for="/g, 'htmlFor="');
  jsx = jsx.replace(/tabindex="/g, 'tabIndex="');
  jsx = jsx.replace(/xmlns:xlink="/g, 'xmlnsXlink="');
  jsx = jsx.replace(/stroke-width="/g, 'strokeWidth="');
  jsx = jsx.replace(/stroke-linecap="/g, 'strokeLinecap="');
  jsx = jsx.replace(/stroke-linejoin="/g, 'strokeLinejoin="');
  jsx = jsx.replace(/fill-rule="/g, 'fillRule="');
  jsx = jsx.replace(/clip-rule="/g, 'clipRule="');
  
  // Remove scripts for now to avoid React hydration issues or syntax errors
  jsx = jsx.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  
  // Convert HTML comments to JSX comments
  jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

  // Handle styles
  // If there are inline styles or <style> tags
  jsx = jsx.replace(/<style>([\s\S]*?)<\/style>/g, (match, content) => {
    return `<style dangerouslySetInnerHTML={{ __html: \`${content.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />`;
  });

  return jsx;
}

async function main() {
  console.log('Reading HTML file...');
  const htmlContent = fs.readFileSync(HTML_FILE, 'utf-8');
  
  // Use cheerio in XML mode to enforce self-closing tags
  const $ = cheerio.load(htmlContent, { xmlMode: false });
  
  // 1. Download Webflow CSS
  const cssLink = $('link[href*="usejointly.webflow.shared"]').attr('href');
  if (cssLink) {
    const cssUrl = cssLink.startsWith('http') ? cssLink : `https:${cssLink}`;
    console.log(`Downloading CSS: ${cssUrl}`);
    await downloadFile(cssUrl, path.join(PUBLIC_CSS_DIR, 'usejointly.css'));
  }

  // 2. Process and download Images
  const images = $('img');
  console.log(`Found ${images.length} images.`);
  
  for (let i = 0; i < images.length; i++) {
    const img = $(images[i]);
    let src = img.attr('src');
    
    if (src && src.includes('cdn.prod.website-files.com')) {
      // Create a local filename
      const urlParts = new URL(src);
      let filename = path.basename(urlParts.pathname);
      filename = decodeURIComponent(filename);
      
      console.log(`Downloading Image: ${filename}`);
      await downloadFile(src, path.join(PUBLIC_IMAGES_DIR, filename));
      
      // Update img tag
      img.attr('src', `/images/${filename}`);
      img.removeAttr('srcset');
      img.removeAttr('sizes');
      img.removeAttr('loading'); // Next.js handles loading
    }
  }

  // Also handle svgs and embedded content if necessary.
  
  // Extract body content
  let bodyContent = $('body').html();
  if (!bodyContent) {
     bodyContent = $.html();
  }
  
  console.log('Converting HTML to JSX...');
  let jsxContent = convertHtmlToJsx(bodyContent);
  
  // Fix self-closing tags manually since Cheerio might not output perfect JSX
  jsxContent = jsxContent.replace(/<(img|br|hr|input|meta|link)([^>]*?)(?<!\/)>/g, '<$1$2 />');
  
  // Clean up body class if we want, or just leave it. The HTML had <body class="body-7">
  const bodyClass = $('body').attr('class') || '';

  // We need to wrap it in a React component
  const pageTsx = `
import React from 'react';

export default function Page() {
  return (
    <div className="${bodyClass}">
      ${jsxContent}
    </div>
  );
}
`;

  const pagePath = path.join(PROJECT_DIR, 'app', 'page.tsx');
  console.log(`Writing to ${pagePath}...`);
  fs.writeFileSync(pagePath, pageTsx, 'utf-8');
  
  console.log('Running Prettier to format and check for syntax errors...');
  try {
    execSync(`npx prettier --write "${pagePath}"`, { cwd: PROJECT_DIR });
  } catch (err) {
    console.log('Prettier found syntax errors in the JSX. You may need to manually fix them.');
  }

  console.log('Done!');
}

main().catch(console.error);

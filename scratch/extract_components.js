const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const t = require('@babel/types');
const { execSync } = require('child_process');

const pagePath = path.join(__dirname, '..', 'app', 'page.tsx');
const componentsDir = path.join(__dirname, '..', 'components');

if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

const code = fs.readFileSync(pagePath, 'utf8');

const ast = parser.parse(code, {
  sourceType: 'module',
  plugins: ['jsx', 'typescript'],
});

const componentsMap = [];

traverse(ast, {
  JSXElement(path) {
    // Find the main wrapper <div className="body-7">
    const openingElement = path.node.openingElement;
    const isBody7 = openingElement.attributes.some(attr => attr.name && attr.name.name === 'className' && attr.value && attr.value.value === 'body-7');
    
    if (isBody7 && path.parent.type === 'ReturnStatement') {
      const children = path.node.children;
      let newChildren = [];
      
      let componentIndex = 1;
      
      children.forEach(child => {
        if (child.type === 'JSXElement') {
          // Determine component name based on classes
          let className = '';
          const classAttr = child.openingElement.attributes.find(a => a.name && a.name.name === 'className');
          if (classAttr && classAttr.value) {
            className = classAttr.value.value || '';
          }
          
          let compName = `Section${componentIndex++}`;
          if (className.includes('navbar')) compName = 'Navbar';
          else if (className.includes('home-header')) compName = 'Hero';
          else if (className.includes('why-jointly')) compName = 'WhyJointly';
          else if (className.includes('how-we-work')) compName = 'HowWeWork';
          else if (className.includes('case-study')) compName = 'CaseStudies';
          else if (className.includes('benefit')) compName = 'Benefits';
          else if (className.includes('one-process')) compName = 'OneProcess';
          else if (className.includes('fast-times')) compName = 'FastTimes';
          else if (className.includes('blog')) compName = 'Blog';
          else if (className.includes('footer-cta')) compName = 'FooterCTA';
          else if (className.includes('footer')) compName = 'Footer';
          
          // Generate code for this component
          const { code: componentCode } = generate(child);
          
          const fileContent = `
import React from 'react';

export default function ${compName}() {
  return (
    ${componentCode}
  );
}
`;
          fs.writeFileSync(require('path').join(componentsDir, `${compName}.tsx`), fileContent);
          componentsMap.push(compName);
          
          // Replace this child with <CompName />
          const componentTag = t.jsxElement(
            t.jsxOpeningElement(t.jsxIdentifier(compName), [], true),
            null,
            [],
            true
          );
          newChildren.push(componentTag);
          newChildren.push(t.jsxText('\n      '));
        } else {
          newChildren.push(child);
        }
      });
      
      path.node.children = newChildren;
    }
  },
});

// Add imports to the top
const importsAst = componentsMap.map(comp => {
  return t.importDeclaration(
    [t.importDefaultSpecifier(t.identifier(comp))],
    t.stringLiteral(`@/components/${comp}`)
  );
});

ast.program.body = [...importsAst, ...ast.program.body];

let { code: newCode } = generate(ast);

fs.writeFileSync(pagePath, newCode, 'utf8');
console.log('Extraction complete!');

try {
  console.log('Running prettier...');
  execSync('npx prettier --write app/page.tsx components/*.tsx', { stdio: 'inherit', cwd: require('path').join(__dirname, '..') });
} catch(e) {
  console.log('Prettier formatting failed or not installed globally, continuing.');
}

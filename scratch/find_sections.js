const fs = require('fs');
const lines = fs.readFileSync('app/page.tsx', 'utf8').split('\n');
lines.forEach((line, i) => {
  if (line.includes('className="') && (line.includes('navbar') || line.includes('header') || line.includes('footer') || line.includes('why-') || line.includes('how-we-work'))) {
    console.log(`${i + 1}: ${line.trim().substring(0, 80)}`);
  }
});

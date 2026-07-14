const fs = require('fs');
const file = 'c:\\Users\\D E L L\\Desktop\\Job Task\\Indhu\\UseJiontly-clone\\app\\page.tsx';
let data = fs.readFileSync(file, 'utf8');
data = data.replace(/style="display:none;"/g, 'style={{ display: "none" }}');
fs.writeFileSync(file, data, 'utf8');

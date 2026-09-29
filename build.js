const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const sectionsDir = path.join(srcDir, 'sections');
const outputFile = path.join(__dirname, 'index.html');

let finalHtml = '';

// Read Header
finalHtml += fs.readFileSync(path.join(srcDir, 'header.html'), 'utf8');

// Read Sections (p1 to p11)
const sections = fs.readdirSync(sectionsDir).filter(f => f.endsWith('.html')).sort((a, b) => {
    // Sort logically p1, p2, p10, etc.
    const numA = parseInt(a.replace('p', '').replace('.html', ''));
    const numB = parseInt(b.replace('p', '').replace('.html', ''));
    return numA - numB;
});

sections.forEach(sec => {
    finalHtml += fs.readFileSync(path.join(sectionsDir, sec), 'utf8');
});

// Read Footer
finalHtml += fs.readFileSync(path.join(srcDir, 'footer.html'), 'utf8');

fs.writeFileSync(outputFile, finalHtml, 'utf8');
console.log('Build complete! index.html generated successfully from modules.');

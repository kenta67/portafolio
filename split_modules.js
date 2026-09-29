const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'index.html');
const srcDir = path.join(__dirname, 'src');
const sectionsDir = path.join(srcDir, 'sections');

// Ensure directories exist
if (!fs.existsSync(srcDir)) fs.mkdirSync(srcDir);
if (!fs.existsSync(sectionsDir)) fs.mkdirSync(sectionsDir);

const html = fs.readFileSync(inputFile, 'utf8');

// We will split the file based on the <section id="pX" tags.
// Let's find the start of <main, end of </main>, etc.
const headMatch = html.match(/([\s\S]*?)<main/i);
const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
const footerMatch = html.match(/<\/main>([\s\S]*)/i);

if (!headMatch || !mainMatch || !footerMatch) {
    console.error("Could not parse main sections of index.html");
    process.exit(1);
}

// 1. Extract Header/Nav
const headerContent = headMatch[1] + '<main class="flex-grow pt-24 pb-10 px-6 z-10">\n';
fs.writeFileSync(path.join(srcDir, 'header.html'), headerContent, 'utf8');

// 2. Extract Footer/Scripts
const footerContent = '\n    </main>\n' + footerMatch[1];
fs.writeFileSync(path.join(srcDir, 'footer.html'), footerContent, 'utf8');

// 3. Extract Sections
const sectionsStr = mainMatch[1];
// Split by <section
const sections = sectionsStr.split(/(?=<section\s+id="p\d+")/i).filter(s => s.trim().length > 0);

sections.forEach((sec, i) => {
    // Find the id to name the file
    const idMatch = sec.match(/id="(p\d+)"/i);
    const fileName = idMatch ? `${idMatch[1]}.html` : `section_${i}.html`;
    fs.writeFileSync(path.join(sectionsDir, fileName), sec, 'utf8');
});

console.log(`Successfully split index.html into modules in the /src directory.`);

// Generate the build script
const buildScript = `const fs = require('fs');
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
`;

fs.writeFileSync(path.join(__dirname, 'build.js'), buildScript, 'utf8');
console.log('Created build.js script to recombine them.');

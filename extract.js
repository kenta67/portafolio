const fs = require('fs');
const transcript = fs.readFileSync('C:/Users/kenta/.gemini/antigravity-ide/brain/34911c4d-018b-4c77-be22-9859e5e860ac/.system_generated/logs/transcript_full.jsonl', 'utf8');
const lines = transcript.split('\n').filter(Boolean);
let htmlCode = '';

for (let i = lines.length - 1; i >= 0; i--) {
    const data = JSON.parse(lines[i]);
    if (data.content && data.content.includes('<!DOCTYPE html>')) {
        console.log('FOUND IN TYPE:', data.type);
        const start = data.content.indexOf('<!DOCTYPE html>');
        const end = data.content.lastIndexOf('</html>') + 7;
        if (end > 6) {
            htmlCode = data.content.substring(start, end);
            break;
        }
    }
}

if (htmlCode) {
    const modifiedHtml = htmlCode.replace(/function mostrar\(\) \{[\s\S]*?mostrar\(\);/g, `
        const paginas = [...document.querySelectorAll('.pagina')];
        const enlaces = [...document.querySelectorAll('.nav-p')];
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    enlaces.forEach(link => {
                        link.classList.toggle('activa', link.getAttribute('href') === '#' + entry.target.id);
                    });
                }
            });
        }, { threshold: 0.2 });
        
        paginas.forEach(p => observer.observe(p));
    `);
    
    fs.writeFileSync('C:/Users/kenta/Desktop/portafolio/index.html', modifiedHtml, 'utf8');
    console.log('HTML extracted successfully and saved to index.html!');
} else {
    console.log('HTML NOT FOUND');
}

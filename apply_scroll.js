const fs = require('fs');
let html = fs.readFileSync('C:/Users/kenta/Desktop/portafolio/recovered.html', 'utf8');

// Replace the tab navigation logic with ScrollSpy logic
html = html.replace(/function mostrar\(\) \{[\s\S]*?mostrar\(\);/g, `
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

// Remove hidden styles and logic
html = html.replace(/\.pagina\[hidden\] \{[^}]+\}/g, '');
html = html.replace(/paginas\.forEach\(\(p\) => \{ p\.hidden = p\.id !== actual; \}\);/g, '');

fs.writeFileSync('C:/Users/kenta/Desktop/portafolio/index.html', html, 'utf8');
console.log('Applied scrollspy to index.html');

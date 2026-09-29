document.addEventListener('DOMContentLoaded', async () => {
    const mainContent = document.getElementById('app-content');
    if (!mainContent) return;

    // Load sections dynamically
    const sections = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9', 'p10', 'p11'];
    
    for (const sec of sections) {
        try {
            const response = await fetch(`src/sections/${sec}.html`);
            if (response.ok) {
                const html = await response.text();
                mainContent.innerHTML += html;
            }
        } catch (e) {
            console.error('Error loading section', sec, e);
        }
    }

    // Initialize ScrollSpy after content is loaded
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
});
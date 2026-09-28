const fs = require('fs');

const head = `<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ResqApp · Portafolio Digital | ODS 12</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: { sans: ['Outfit', 'sans-serif'], mono: ['JetBrains Mono', 'monospace'] },
                    colors: { brand: { DEFAULT: '#10b981' } }
                }
            }
        }
    </script>
    <style>
        body {
            background-color: #0f172a;
            color: #f8fafc;
            background-image: radial-gradient(at 0% 0%, hsla(158, 100%, 35%, 0.15) 0px, transparent 50%), radial-gradient(at 100% 0%, hsla(217, 100%, 25%, 0.15) 0px, transparent 50%);
            background-attachment: fixed;
        }
        .glass-card {
            background: rgba(30, 41, 59, 0.7);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 1.5rem;
        }
        .fase-chip {
            display: inline-flex; align-items: center; padding: .35rem .9rem; border-radius: 9999px;
            font-size: .8rem; font-weight: 600; letter-spacing: .08em; text-transform: uppercase;
            background: rgba(16, 185, 129, .1); color: #6ee7b7; border: 1px solid rgba(52, 211, 153, .25);
        }
        .nav-p {
            display: inline-flex; align-items: center; gap: .4rem; padding: .45rem .8rem; border-radius: .7rem;
            color: #cbd5e1; white-space: nowrap; transition: all .2s;
        }
        .nav-p.activa { color: #6ee7b7; background: rgba(16, 185, 129, .14); box-shadow: inset 0 0 0 1px rgba(52, 211, 153, .3); }
        .pagina { min-height: 80vh; padding-top: 6rem; padding-bottom: 4rem; }
    </style>
</head>
<body class="antialiased flex flex-col relative overflow-x-hidden">
    <nav class="fixed w-full z-50 glass-card rounded-none border-t-0 border-x-0">
        <div class="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4 overflow-x-auto">
            <a href="#p1" class="font-bold text-xl flex items-center gap-2">Resq<span class="text-emerald-400">App</span></a>
            <div class="flex gap-1 text-sm font-medium">
                <a href="#p1" class="nav-p">Inicio</a>
                <a href="#p2" class="nav-p">Problema</a>
                <a href="#p3" class="nav-p">Investigación</a>
                <a href="#p4" class="nav-p">Propuesta</a>
                <a href="#p5" class="nav-p">Metodología</a>
                <a href="#p6" class="nav-p">Arquitectura</a>
                <a href="#p7" class="nav-p">Prototipo</a>
            </div>
        </div>
    </nav>
    <main class="flex-grow max-w-6xl mx-auto w-full px-6">
`;

const sections = `
        <section id="p1" class="pagina text-center">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 text-sm mb-8 mt-10">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> ODS 12
            </div>
            <h1 class="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">ResqApp</h1>
            <p class="text-2xl text-slate-200 mb-12">Conectando supermercados y consumidores para salvar productos a punto de vencer</p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                <div class="glass-card p-6 border-t-4 border-t-emerald-500"><h3 class="font-bold text-xl mb-2 text-emerald-400">Equipo</h3><p class="text-slate-300">THE GORGONITAS</p></div>
                <div class="glass-card p-6 border-t-4 border-t-blue-500"><h3 class="font-bold text-xl mb-2 text-blue-400">Contexto</h3><p class="text-slate-300">Supermercados y consumidores.</p></div>
                <div class="glass-card p-6 border-t-4 border-t-purple-500"><h3 class="font-bold text-xl mb-2 text-purple-400">ODS 12</h3><p class="text-slate-300">Reducción del desperdicio.</p></div>
            </div>
        </section>

        <section id="p2" class="pagina">
            <div class="text-center mb-10"><span class="fase-chip mb-4">Fase 1</span><h2 class="text-4xl font-bold">El problema y validación</h2></div>
            <div class="glass-card p-8 mb-6 border-l-4 border-l-red-500">
                <h3 class="text-2xl font-bold text-red-400 mb-3">Problema Identificado</h3>
                <p class="text-slate-300">Las empresas no tienen una manera rápida y efectiva de publicar y vender sus productos a punto de vencer. Esto genera una pérdida total de alimentos aptos.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="glass-card p-6"><h4 class="text-xl font-bold text-emerald-400 mb-2">Método</h4><p class="text-slate-300">Entrevistas a gerentes de sucursales locales.</p></div>
                <div class="glass-card p-6"><h4 class="text-xl font-bold text-emerald-400 mb-2">Evidencia</h4><p class="text-slate-300">Merma diaria de lácteos y panadería.</p></div>
            </div>
        </section>

        <section id="p3" class="pagina">
            <div class="text-center mb-10"><span class="fase-chip mb-4">Fase 2</span><h2 class="text-4xl font-bold">Investigación y Requerimientos</h2></div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="glass-card p-8 border-t-4 border-t-emerald-500">
                    <h3 class="text-2xl font-bold text-emerald-400 mb-4">Funcionales</h3>
                    <ul class="space-y-3 text-slate-300">
                        <li>• Gestión de perfiles y lotes de rescate.</li>
                        <li>• Feed de ofertas por cercanía y urgencia.</li>
                        <li>• Reservas (Click & Collect).</li>
                    </ul>
                </div>
                <div class="glass-card p-8 border-t-4 border-t-blue-500">
                    <h3 class="text-2xl font-bold text-blue-400 mb-4">No Funcionales</h3>
                    <ul class="space-y-3 text-slate-300">
                        <li>• Mobile-first.</li>
                        <li>• Rendimiento &lt; 2s para el feed.</li>
                        <li>• Escalable para picos en horarios de cierre.</li>
                    </ul>
                </div>
            </div>
        </section>

        <section id="p4" class="pagina">
            <div class="text-center mb-10"><span class="fase-chip mb-4">Fase 3</span><h2 class="text-4xl font-bold">Propuesta Innovadora</h2></div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="glass-card p-6"><h4 class="font-bold text-emerald-400 mb-2">¿Qué resuelve?</h4><p class="text-slate-300">El desperdicio alimentario dando visibilidad a los excedentes.</p></div>
                <div class="glass-card p-6"><h4 class="font-bold text-blue-400 mb-2">Innovación</h4><p class="text-slate-300">Red social geolocalizada para rescate rápido y competitivo.</p></div>
                <div class="glass-card p-6 md:col-span-2 border border-emerald-500/30"><h4 class="font-bold text-emerald-400 mb-2">Modelo de Negocio</h4><p class="text-slate-300">Freemium con cuentas premium para supermercados que quieran mayor visibilidad o múltiples sucursales.</p></div>
            </div>
        </section>

        <section id="p5" class="pagina">
            <div class="text-center mb-10"><span class="fase-chip mb-4">Fase 4</span><h2 class="text-4xl font-bold">Metodología</h2></div>
            <div class="glass-card p-8">
                <h3 class="text-2xl font-bold text-emerald-400 mb-4">Scrum Adaptado</h3>
                <p class="text-slate-300 mb-4">Utilizando Boehm y Turner, optamos por Scrum debido al tamaño del equipo (pequeño), alta volatilidad de requisitos, y criticidad moderada.</p>
                <div class="grid grid-cols-3 gap-4 mt-6">
                    <div class="bg-slate-800/50 p-4 rounded-xl border border-slate-700 text-center"><p class="text-white font-bold">Sprints</p><p class="text-slate-400 text-sm">2 semanas</p></div>
                    <div class="bg-slate-800/50 p-4 rounded-xl border border-slate-700 text-center"><p class="text-white font-bold">Roles</p><p class="text-slate-400 text-sm">Flexibles</p></div>
                    <div class="bg-slate-800/50 p-4 rounded-xl border border-slate-700 text-center"><p class="text-white font-bold">Artefactos</p><p class="text-slate-400 text-sm">Backlog en Trello</p></div>
                </div>
            </div>
        </section>

        <section id="p6" class="pagina">
            <div class="text-center mb-10"><span class="fase-chip mb-4">Fases 5 y 6</span><h2 class="text-4xl font-bold">Arquitectura y C4</h2></div>
            <div class="glass-card p-8 mb-6 border-l-4 border-l-blue-500">
                <h3 class="text-2xl font-bold text-blue-400 mb-3">Tres Capas</h3>
                <p class="text-slate-300">Presentación (React/Next), Lógica (API REST/Server Actions), y Datos (PostgreSQL). Elegida para mantener el sistema seguro, escalable e independiente del frontend.</p>
            </div>
            <div class="glass-card p-8 text-center bg-slate-800/50">
                <pre class="mermaid bg-transparent">
graph TD
    Client(Vecino / SPA) -->|HTTPS| API(Backend API)
    Store(Panel Comercio) -->|HTTPS| API
    API -->|SQL| DB[(Base de Datos)]
                </pre>
            </div>
        </section>

        <section id="p7" class="pagina">
            <div class="text-center mb-10"><span class="fase-chip mb-4">Fase 7</span><h2 class="text-4xl font-bold">Prototipo e Implementación</h2></div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="glass-card p-6 border-t-4 border-t-emerald-500">
                    <h4 class="font-bold text-xl text-emerald-400 mb-3">Flujo Principal</h4>
                    <ul class="space-y-2 text-slate-300">
                        <li>1. Comercio publica oferta.</li>
                        <li>2. Sistema rechaza si está vencido.</li>
                        <li>3. Vecino lo ve en su Feed.</li>
                        <li>4. Vecino aparta, Comercio entrega.</li>
                    </ul>
                </div>
                <div class="glass-card p-6 border-t-4 border-t-blue-500">
                    <h4 class="font-bold text-xl text-blue-400 mb-3">Ejecución</h4>
                    <p class="text-slate-300">La lógica de negocio bloquea intentos fraudulentos; la base de datos se actualiza instantáneamente en el Feed de los demás usuarios.</p>
                </div>
            </div>
            <div class="mt-12 text-center text-slate-500">
                <p>Portafolio completo generado. Diseño premium glassmorphism. ODS 12.</p>
            </div>
        </section>

    </main>

    <script type="module">
        import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
        mermaid.initialize({ startOnLoad: true, theme: 'dark' });
    </script>
    <script>
        const secciones = document.querySelectorAll('.pagina');
        const enlaces = document.querySelectorAll('.nav-p');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    enlaces.forEach(link => {
                        link.classList.toggle('activa', link.getAttribute('href') === '#' + entry.target.id);
                    });
                }
            });
        }, { threshold: 0.3 });
        
        secciones.forEach(s => observer.observe(s));
    </script>
</body>
</html>`;

fs.writeFileSync('C:/Users/kenta/Desktop/portafolio/index.html', head + sections, 'utf8');
console.log('Final generated successfully.');

const fs = require('fs');

const sections = [
  { id: 'inicio', title: '1. Inicio', icon: 'fa-home', contentKey: 'inicio' },
  { id: 'problema', title: '2. El problema', icon: 'fa-exclamation-triangle', contentKey: 'problema' },
  { id: 'investigacion', title: '3. Investigación', icon: 'fa-search', contentKey: 'investigacion' },
  { id: 'propuesta', title: '4. Propuesta', icon: 'fa-lightbulb', contentKey: 'propuesta' },
  { id: 'metodologia', title: '5. Metodología', icon: 'fa-cogs', contentKey: 'metodologia' },
  { id: 'arquitectura', title: '6. Arquitectura', icon: 'fa-sitemap', contentKey: 'arquitectura' },
  { id: 'c4model', title: '7. C4 Model', icon: 'fa-cubes', contentKey: 'c4model' },
  { id: 'prototipo', title: '8. Prototipo', icon: 'fa-mobile-alt', contentKey: 'prototipo' },
  { id: 'implementacion', title: '9. Implementación', icon: 'fa-laptop-code', contentKey: 'implementacion' },
  { id: 'resultados', title: '10. Resultados', icon: 'fa-chart-line', contentKey: 'resultados' },
  { id: 'evidencias', title: '11. Evidencias', icon: 'fa-folder-open', contentKey: 'evidencias' }
];

const contents = {
  inicio: `
                <div class="header-banner">
                    <span class="badge">ODS 12: Producción y Consumo Responsables</span>
                    <h1>Red Social de Rescate Alimentario</h1>
                    <p class="subtitle">Conectando supermercados y consumidores para salvar productos a punto de vencer</p>
                </div>
                
                <div class="card-grid">
                    <div class="card info-card">
                        <h3><i class="fas fa-info-circle"></i> Información del Proyecto</h3>
                        <p><strong>Equipo:</strong> THE GORGONITAS</p>
                        <p><strong>Contexto:</strong> Supermercados (como Supermall) y consumidores en busca de ofertas.</p>
                    </div>
                    
                    <div class="card highlight-card">
                        <h3><i class="fas fa-rocket"></i> La Solución</h3>
                        <p>Una plataforma interactiva tipo "red social" donde las empresas pueden publicar rápidamente sus productos próximos a vencer con grandes descuentos. Los clientes pueden visualizar estas ofertas, comparar precios entre distintas tiendas en tiempo real y decidir dónde les conviene comprar, fomentando la sana competencia y reduciendo el desperdicio de alimentos.</p>
                    </div>
                </div>

                <div class="vertical-timeline-section">
                    <div class="timeline-header">
                        <h2>La Evolución de la Idea</h2>
                        <p>Del altruismo puro a un modelo de negocio socialmente responsable y sostenible.</p>
                    </div>
                    <div class="v-timeline">
                        <div class="v-timeline-item left">
                            <div class="v-timeline-dot"></div>
                            <div class="v-timeline-content">
                                <div class="step-num">1</div>
                                <h3>El Origen: Un puente caritativo</h3>
                                <p>Sitio benéfico para donación directa a orfanatos/asilos.</p>
                            </div>
                        </div>
                        <div class="v-timeline-item right">
                            <div class="v-timeline-dot"></div>
                            <div class="v-timeline-content">
                                <div class="step-num">2</div>
                                <h3>El Problema de Validación</h3>
                                <p>Riesgo de falsas organizaciones benéficas revendiendo productos gratis.</p>
                            </div>
                        </div>
                        <div class="v-timeline-item left">
                            <div class="v-timeline-dot"></div>
                            <div class="v-timeline-content">
                                <div class="step-num">3</div>
                                <h3>La Idea Final</h3>
                                <p>Red social abierta de descuentos: competencia sana y rescate eficiente de alimentos.</p>
                            </div>
                        </div>
                    </div>
                </div>
  `,
  problema: `
                <h2 class="section-title">FASE 1: El Problema y Validación</h2>
                <div class="problem-container">
                    <div class="problem-context card" style="margin-bottom: 2rem;">
                        <h3><i class="fas fa-map-marker-alt"></i> Contexto</h3>
                        <p>Grandes supermercados (como Supermall) que manejan un alto volumen de productos perecederos diariamente.</p>
                    </div>
                    <div class="problem-statement card danger-border" style="margin-bottom: 2rem;">
                        <h3><i class="fas fa-bullseye"></i> Problema Identificado</h3>
                        <p>Las empresas <strong>no tienen una manera rápida y efectiva de publicar y vender sus productos a punto de vencer</strong>. Esto resulta en pérdida total económica y daño medioambiental (ODS 12).</p>
                    </div>
                    <div class="grid-2-col">
                        <div class="card">
                            <h3><i class="fas fa-search"></i> Método y Fuente</h3>
                            <p><strong>Fuente consultada:</strong> Entrevistas a gerentes de sucursales y observación in situ.</p>
                            <p><strong>Método:</strong> Cuestionarios estructurados y revisión de registros de mermas.</p>
                        </div>
                        <div class="card">
                            <h3><i class="fas fa-chart-bar"></i> Evidencia de Validación</h3>
                            <p><strong>Hallazgos:</strong> Se desechan diariamente grandes cantidades de lácteos y panadería un día antes de vencer, simplemente porque los clientes no están informados de las liquidaciones.</p>
                        </div>
                    </div>
                </div>
  `,
  investigacion: `
                <h2 class="section-title">FASE 2: Requerimientos</h2>
                <div class="grid-2-col req-grid">
                    <div class="card req-card">
                        <div class="req-header func">
                            <h3><i class="fas fa-check-square"></i> Funcionales</h3>
                        </div>
                        <ul class="custom-list">
                            <li><strong>Gestión:</strong> Crear perfiles, publicar productos, fijar descuento y caducidad.</li>
                            <li><strong>Feed:</strong> Mostrar ofertas a clientes ordenadas por cercanía o descuento.</li>
                            <li><strong>Comparador:</strong> Comparar precios entre tiendas competidoras.</li>
                            <li><strong>Reserva:</strong> Apartar producto para recoger en tienda (Click & Collect).</li>
                        </ul>
                    </div>
                    <div class="card req-card">
                        <div class="req-header non-func">
                            <h3><i class="fas fa-tachometer-alt"></i> No Funcionales</h3>
                        </div>
                        <ul class="custom-list">
                            <li><strong>Disponibilidad:</strong> Enfoque Mobile-first, alta disponibilidad.</li>
                            <li><strong>Rendimiento:</strong> Tiempo de respuesta < 2s para el feed en tiempo real.</li>
                            <li><strong>UX:</strong> Interfaz tipo red social, publicación en 3 clics.</li>
                            <li><strong>Seguridad:</strong> Autenticación segura de empresas.</li>
                            <li><strong>Escalabilidad:</strong> Soporte para picos de tráfico en horas de cierre.</li>
                        </ul>
                    </div>
                </div>
  `,
  propuesta: `
                <h2 class="section-title">FASE 3: Propuesta Innovadora</h2>
                <div class="card-grid">
                    <div class="card">
                        <h3><i class="fas fa-question-circle"></i> ¿Qué resuelve?</h3>
                        <p>Resuelve el desperdicio de alimentos en supermercados por falta de canales de liquidación. Beneficia a empresas (recuperan costos) y consumidores (ahorran).</p>
                    </div>
                    <div class="card">
                        <h3><i class="fas fa-lightbulb"></i> Innovación</h3>
                        <p>Plataforma estilo "red social" geolocalizada. Fomenta competencia pública entre supermercados por liquidar su stock antes de que caduque.</p>
                    </div>
                    <div class="card">
                        <h3><i class="fas fa-database"></i> Información</h3>
                        <p>Utiliza inventarios, fechas de caducidad y ubicación. Empresas deciden márgenes; clientes deciden compra basada en la mejor oferta.</p>
                    </div>
                    <div class="card">
                        <h3><i class="fas fa-leaf"></i> Impacto ODS 12</h3>
                        <p>Reduce directamente la huella de carbono y el desperdicio alimentario. Modelo de negocio Freemium o por comisión por reserva exitosa.</p>
                    </div>
                </div>
  `,
  metodologia: `
                <h2 class="section-title">FASE 4: Metodología de Desarrollo</h2>
                <div class="card">
                    <h3><i class="fas fa-project-diagram"></i> Selección: Scrum (Ágil)</h3>
                    <p>Aplicando el modelo de Boehm y Turner, optamos por Scrum.</p>
                    
                    <h4 style="margin-top:1.5rem">Justificación</h4>
                    <ul class="custom-list">
                        <li><strong>Equipo Pequeño:</strong> 3 integrantes; ideal para agilidad.</li>
                        <li><strong>Criticidad Baja:</strong> No compromete vidas humanas; permite iteraciones de software rápidas.</li>
                        <li><strong>Dinamismo:</strong> Requisitos variables debido a que es un nuevo modelo de mercado.</li>
                    </ul>

                    <h4 style="margin-top:1.5rem">Ventajas y Aplicación</h4>
                    <p><strong>Ventajas:</strong> Entregas de valor constantes, validación temprana con el usuario final.</p>
                    <p><strong>Aplicación:</strong> Sprints de 2 semanas, dailies cortas, y priorización orientada al MVP (Registro + Feed de ofertas).</p>
                </div>
  `,
  arquitectura: `
                <h2 class="section-title">FASE 5: Arquitectura de Software</h2>
                <div class="card">
                    <h3><i class="fas fa-layer-group"></i> Tres Capas (Three-Tier)</h3>
                    <p>Se ha seleccionado un patrón de arquitectura de 3 capas (Presentación, Lógica de Negocio y Acceso a Datos).</p>
                    
                    <h4 style="margin-top:1.5rem">Justificación</h4>
                    <ul class="custom-list">
                        <li><strong>Separación:</strong> Facilita el trabajo independiente en frontend y backend.</li>
                        <li><strong>Escalabilidad:</strong> El backend puede escalar ante alto volumen de lecturas en el Feed sin sobrecargar la base de datos de manera monolítica.</li>
                        <li><strong>Seguridad:</strong> Oculta la base de datos detrás de la capa de API REST.</li>
                    </ul>
                </div>
  `,
  c4model: `
                <h2 class="section-title">FASE 6: C4 Model</h2>
                <div class="card" style="margin-bottom: 2rem;">
                    <h3>C4 - Nivel 1: System Context</h3>
                    <pre class="mermaid" style="text-align: center;">
graph TD
    User(Consumidor) -->|Consulta y reserva| System(Red Social Rescate)
    Market(Supermercado) -->|Publica productos| System
    System -->|Notificaciones| Push(Servicio Push)
                    </pre>
                </div>
                <div class="card">
                    <h3>C4 - Nivel 2: Container</h3>
                    <pre class="mermaid" style="text-align: center;">
graph TD
    Client(SPA Frontend) -->|REST API| API(Backend Node API)
    Admin(Panel Supermercado) -->|REST API| API
    API -->|SQL| DB[(PostgreSQL)]
                    </pre>
                </div>
  `,
  prototipo: `
                <h2 class="section-title">FASE 7: Prototipo</h2>
                <div class="card">
                    <h3><i class="fas fa-object-group"></i> Interfaces Diseñadas</h3>
                    <p>El prototipo engloba las funcionalidades core del MVP:</p>
                    <ul class="custom-list">
                        <li><strong>Feed Principal:</strong> Tarjetas con imagen, descuento resaltado, y botón de Reserva rápida.</li>
                        <li><strong>Panel Empresa:</strong> Publicación en 3 clics con subida de foto y selector de caducidad.</li>
                    </ul>
                    <div style="text-align: center; margin-top: 2rem; opacity: 0.5;">
                        <i class="fas fa-mobile-alt fa-4x"></i>
                    </div>
                </div>
  `,
  implementacion: `
                <h2 class="section-title">FASE 7: Implementación</h2>
                <div class="card">
                    <h3><i class="fas fa-code"></i> Módulos Desarrollados</h3>
                    <h4 style="margin-top:1.5rem">1. Autenticación</h4>
                    <p>Integración de Presentación con la Lógica para inicio de sesión seguro de supermercados y consumidores.</p>
                    <h4 style="margin-top:1.5rem">2. Publicación de Ofertas (El Feed)</h4>
                    <p>Demostración completa del flujo de las Tres Capas: El comercio publica, la API lo almacena y el Frontend lo muestra en el primer lugar del Feed al cliente.</p>
                </div>
  `,
  resultados: `
                <h2 class="section-title">10. Resultados</h2>
                <div class="card"><p>El modelo es altamente viable y conecta una necesidad comercial con el ODS 12 de forma directa.</p></div>
  `,
  evidencias: `
                <h2 class="section-title">11. Evidencias</h2>
                <div class="card"><p>Repositorios, entrevistas de validación y planificación en Trello/Jira adjuntas.</p></div>
  `
};

const navHtml = sections.map(s => 
  `                <li><a href="#${s.id}" class="nav-link"><i class="fas ${s.icon}"></i> ${s.title}</a></li>`
).join('\n');

const sectionsHtml = sections.map(s => 
  `            <section id="${s.id}" class="page-section">
${contents[s.contentKey]}
            </section>`
).join('\n\n');

const fullHtml = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portafolio Digital - ODS 12</title>
    <link rel="stylesheet" href="css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        html { scroll-behavior: smooth; }
        .page-section { min-height: 50vh; margin-bottom: 4rem; padding-top: 2rem; }
        .nav-link.active { background-color: var(--primary) !important; color: white !important; }
        .nav-link.active i { color: white !important; }
    </style>
</head>
<body>
    <div class="app-container">
        <!-- Sidebar Navigation (Scrollspy) -->
        <nav class="sidebar">
            <div class="sidebar-header">
                <h2>ODS 12<span>.</span></h2>
                <p>Consumo y Producción</p>
            </div>
            <ul class="nav-links" id="sidebar-nav">
${navHtml}
            </ul>
        </nav>

        <!-- Main Content -->
        <main class="content-area">
${sectionsHtml}
        </main>
    </div>

    <!-- ScrollSpy Script -->
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const sections = document.querySelectorAll('.page-section');
            const navLinks = document.querySelectorAll('.nav-link');

            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.2
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        navLinks.forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href') === '#' + id) {
                                link.classList.add('active');
                            }
                        });
                    }
                });
            }, observerOptions);

            sections.forEach(section => observer.observe(section));
        });
    </script>
    <script type="module">
      import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
      mermaid.initialize({ startOnLoad: true, theme: 'base', themeVariables: { primaryColor: '#10b981', primaryTextColor: '#fff', primaryBorderColor: '#059669', lineColor: '#64748b', textColor: '#1e293b' } });
    </script>
</body>
</html>`;

fs.writeFileSync('index.html', fullHtml, 'utf8');

// Optional: remove old html files since it's a single page app now
const toRemove = ['problema.html', 'investigacion.html', 'propuesta.html', 'metodologia.html', 'arquitectura.html', 'c4model.html', 'prototipo.html', 'implementacion.html', 'resultados.html', 'evidencias.html'];
for(let f of toRemove) {
  if (fs.existsSync(f)) {
    fs.unlinkSync(f);
  }
}

console.log("Single page portfolio built perfectly.");

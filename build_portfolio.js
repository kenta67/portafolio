const fs = require('fs');

const pages = [
  { file: 'index.html', title: '1. Inicio', icon: 'fa-home' },
  { file: 'problema.html', title: '2. El problema', icon: 'fa-exclamation-triangle' },
  { file: 'investigacion.html', title: '3. Investigación', icon: 'fa-search' },
  { file: 'propuesta.html', title: '4. Propuesta', icon: 'fa-lightbulb' },
  { file: 'metodologia.html', title: '5. Metodología', icon: 'fa-cogs' },
  { file: 'arquitectura.html', title: '6. Arquitectura', icon: 'fa-sitemap' },
  { file: 'c4model.html', title: '7. C4 Model', icon: 'fa-cubes' },
  { file: 'prototipo.html', title: '8. Prototipo', icon: 'fa-mobile-alt' },
  { file: 'implementacion.html', title: '9. Implementación', icon: 'fa-laptop-code' },
  { file: 'resultados.html', title: '10. Resultados', icon: 'fa-chart-line' },
  { file: 'evidencias.html', title: '11. Evidencias', icon: 'fa-folder-open' }
];

function generateNav(activeFile) {
  return pages.map(p => `                <li><a href="${p.file}" class="${p.file === activeFile ? 'active' : ''}"><i class="fas ${p.icon}"></i> ${p.title}</a></li>`).join('\n');
}

function template(title, activeFile, content) {
  return `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} | Portafolio Digital - ODS 12</title>
    <link rel="stylesheet" href="css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <div class="app-container">
        <!-- Sidebar Navigation -->
        <nav class="sidebar">
            <div class="sidebar-header">
                <h2>ODS 12<span>.</span></h2>
                <p>Consumo y Producción</p>
            </div>
            <ul class="nav-links">
${generateNav(activeFile)}
            </ul>
        </nav>

        <!-- Main Content -->
        <main class="content-area">
            <section class="page-section active" style="display: block;">
${content}
            </section>
        </main>
    </div>
    <script src="js/app.js"></script>
    <script type="module">
      import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
      mermaid.initialize({ startOnLoad: true, theme: 'default' });
    </script>
</body>
</html>`;
}

const contents = {
  'index.html': `
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
  'problema.html': `
                <h2 class="section-title">FASE 1: El Problema y Validación</h2>
                <div class="problem-container">
                    <div class="problem-context card">
                        <h3><i class="fas fa-map-marker-alt"></i> Contexto</h3>
                        <p>Grandes supermercados (como Supermall) que manejan un alto volumen de productos perecederos diariamente.</p>
                    </div>
                    <div class="problem-statement card danger-border">
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
  'investigacion.html': `
                <h2 class="section-title">FASE 2: Requerimientos</h2>
                <div class="grid-2-col req-grid">
                    <div class="card req-card">
                        <div class="req-header func">
                            <h3>Requerimientos Funcionales</h3>
                        </div>
                        <ul class="custom-list">
                            <li><strong>Gestión de Empresas:</strong> Crear perfiles, publicar productos, fijar descuento y fecha de caducidad.</li>
                            <li><strong>Feed de Ofertas:</strong> Mostrar ofertas a clientes locales ordenadas por cercanía o mayor descuento.</li>
                            <li><strong>Comparador:</strong> Permitir a los clientes comparar precios entre tiendas competidoras.</li>
                            <li><strong>Reserva:</strong> Los clientes pueden apartar el producto para recogerlo y pagarlo en tienda (Click & Collect).</li>
                        </ul>
                    </div>
                    <div class="card req-card">
                        <div class="req-header non-func">
                            <h3>Requerimientos No Funcionales</h3>
                        </div>
                        <ul class="custom-list">
                            <li><strong>Disponibilidad:</strong> Enfoque Mobile-first, alta disponibilidad 24/7.</li>
                            <li><strong>Rendimiento:</strong> Tiempo de respuesta del feed menor a 2 segundos para actualizaciones en tiempo real.</li>
                            <li><strong>Facilidad de uso:</strong> Interfaz tipo red social, publicación en menos de 3 clics.</li>
                            <li><strong>Seguridad:</strong> Autenticación segura y validación de perfiles de empresas.</li>
                            <li><strong>Escalabilidad:</strong> Arquitectura capaz de soportar picos de tráfico en horas de cierre de tiendas.</li>
                        </ul>
                    </div>
                </div>
  `,
  'propuesta.html': `
                <h2 class="section-title">FASE 3: Propuesta Innovadora</h2>
                <div class="card-grid">
                    <div class="card">
                        <h3>¿Qué problema resuelve y para quién?</h3>
                        <p>Resuelve el desperdicio de alimentos perecederos en supermercados por falta de canales de liquidación rápida. Beneficia a las empresas (recuperan costos) y a consumidores (ahorran dinero).</p>
                    </div>
                    <div class="card">
                        <h3>¿Cómo lo resuelve y qué innovación tiene?</h3>
                        <p>Mediante una plataforma estilo "red social" geolocalizada enfocada exclusivamente en productos a punto de vencer. La innovación radica en fomentar una sana competencia pública entre supermercados por liquidar su stock.</p>
                    </div>
                    <div class="card">
                        <h3>Información y Decisiones</h3>
                        <p>Utiliza inventarios, fechas de caducidad y ubicación. Permite a las empresas decidir márgenes de liquidación en tiempo real y a los clientes decidir su compra basada en la mejor oferta.</p>
                    </div>
                    <div class="card">
                        <h3>Beneficio ODS 12 y Modelo de Negocio</h3>
                        <p><strong>ODS 12:</strong> Reduce directamente la huella de carbono y el desperdicio alimentario. <strong>Negocio:</strong> Modelo Freemium con suscripción para supermercados o cobro de una pequeña comisión por reserva exitosa (lead generation).</p>
                    </div>
                </div>
  `,
  'metodologia.html': `
                <h2 class="section-title">FASE 4: Metodología de Desarrollo</h2>
                <div class="card">
                    <h3>Selección: Scrum (Metodología Ágil)</h3>
                    <p>Utilizando el modelo de equilibrio de Boehm y Turner, determinamos que una metodología ágil es la adecuada para este proyecto.</p>
                    
                    <h4 style="margin-top:1.5rem">Características y Justificación</h4>
                    <ul>
                        <li><strong>Tamaño del equipo:</strong> Pequeño (3 integrantes), lo que favorece la comunicación directa de Scrum.</li>
                        <li><strong>Criticidad:</strong> Baja criticidad en pérdida de vidas (no es software médico), lo que permite iteraciones rápidas y despliegues continuos sin burocracia extrema.</li>
                        <li><strong>Dinamismo:</strong> Requisitos cambiantes por ser una propuesta innovadora y de mercado nuevo.</li>
                    </ul>

                    <h4 style="margin-top:1.5rem">Ventajas y Limitaciones</h4>
                    <p><strong>Ventajas:</strong> Entregas de valor constantes, adaptabilidad a la respuesta de los usuarios, validación temprana del prototipo.</p>
                    <p><strong>Limitaciones:</strong> Requiere alto compromiso, autogestión y disponibilidad de los miembros del equipo para los Daily Sprints y Reviews.</p>

                    <h4 style="margin-top:1.5rem">Aplicación</h4>
                    <p>Se trabajará en <strong>Sprints de 2 semanas</strong>, comenzando con el Backlog priorizando el registro y feed de ofertas (MVP). Se realizarán reuniones de planificación, dailies cortas y retrospectivas.</p>
                </div>
  `,
  'arquitectura.html': `
                <h2 class="section-title">FASE 5: Arquitectura de Software</h2>
                <div class="card">
                    <h3>Selección: Arquitectura de Tres Capas (Three-Tier)</h3>
                    <p>Para la Red Social de Rescate Alimentario, se ha seleccionado un patrón de arquitectura de 3 capas (Presentación, Lógica de Negocio y Acceso a Datos).</p>
                    
                    <h4 style="margin-top:1.5rem">Justificación de la Selección</h4>
                    <ul>
                        <li><strong>Separación de Responsabilidades:</strong> Facilita que miembros del equipo trabajen independientemente en el frontend y el backend.</li>
                        <li><strong>Escalabilidad:</strong> El volumen de información del "feed" y consultas concurrentes requiere que el servidor web/API pueda escalar independientemente de la base de datos.</li>
                        <li><strong>Mantenimiento:</strong> Las reglas de liquidación y reservas están centralizadas en la capa de lógica, evitando que cambien si se migra de Web a App móvil nativa.</li>
                        <li><strong>Seguridad:</strong> La capa de datos no está expuesta directamente; todas las peticiones de reserva pasan por validaciones de la capa lógica.</li>
                    </ul>
                </div>
  `,
  'c4model.html': `
                <h2 class="section-title">FASE 6: Modelado de la Arquitectura con C4</h2>
                <div class="card" style="margin-bottom: 2rem;">
                    <h3>C4 - Nivel 1: System Context</h3>
                    <pre class="mermaid" style="text-align: center;">
graph TD
    User(Cliente / Consumidor) -->|Consulta ofertas y reserva| System(Red Social de Rescate)
    Supermercado(Empresa / Supermercado) -->|Publica productos a punto de vencer| System
    System -->|Envía notificaciones| Push(Servicio de Notificaciones)
                    </pre>
                </div>
                
                <div class="card">
                    <h3>C4 - Nivel 2: Container</h3>
                    <pre class="mermaid" style="text-align: center;">
graph TD
    Client(Web App / Mobile SPA<br/>HTML/CSS/JS) -->|REST API calls| API(Backend API<br/>Node.js/Express)
    Admin(Dashboard Supermercado<br/>React/Web) -->|REST API calls| API
    API -->|Read/Write Data| DB[(Base de Datos<br/>PostgreSQL)]
                    </pre>
                </div>
  `,
  'prototipo.html': `
                <h2 class="section-title">FASE 7: Prototipo</h2>
                <div class="card">
                    <h3>Prototipo de Interfaz</h3>
                    <p>El prototipo incluye las vistas principales para cumplir con los flujos requeridos:</p>
                    <ul>
                        <li><strong>Feed Principal:</strong> Vista de tarjetas con fotos de productos, precio original vs precio de liquidación, y botón "Reservar".</li>
                        <li><strong>Panel de Empresa:</strong> Formulario rápido para publicar un producto subiendo foto, fecha y stock.</li>
                        <li><strong>Comparador:</strong> Vista en mapa/lista de comercios cercanos.</li>
                    </ul>
                    <div style="text-align: center; margin-top: 2rem; opacity: 0.7;">
                        <i class="fas fa-mobile-alt fa-5x"></i>
                        <p style="margin-top: 1rem;">(Aquí se incrustarán capturas de Figma o wireframes interactivos)</p>
                    </div>
                </div>
  `,
  'implementacion.html': `
                <h2 class="section-title">FASE 7: Implementación Real de la Arquitectura</h2>
                <div class="card">
                    <h3>Módulos Funcionales Implementados</h3>
                    <p>En cumplimiento con la arquitectura de 3 capas propuesta, se ha desarrollado el flujo principal:</p>
                    
                    <h4 style="margin-top:1.5rem">1. Módulo de Autenticación y Perfiles</h4>
                    <p>La <strong>Capa de Presentación</strong> interactúa con la <strong>Capa de Lógica</strong> (API REST) para registrar comercios y usuarios, almacenando las credenciales de forma segura en la <strong>Capa de Datos</strong>.</p>
                    
                    <h4 style="margin-top:1.5rem">2. Módulo de Publicación y Feed de Ofertas</h4>
                    <p><strong>Flujo demostrado:</strong> El supermercado ingresa a su panel y publica una oferta de lácteos a mitad de precio. La API recibe el request, lo guarda en la base de datos, y automáticamente el Frontend del Cliente al recargar muestra el nuevo producto en primera posición en el Feed de "Ofertas Urgentes".</p>
                    
                    <div style="padding: 1rem; background: var(--bg-sidebar); border-radius: var(--radius-md); margin-top: 1.5rem; border-left: 4px solid var(--primary-color);">
                        <i class="fas fa-check-circle" style="color: var(--primary-color);"></i> <strong>Evidencia de Ejecución:</strong> Los códigos fuente y los endpoints funcionales serán mostrados en vivo durante la presentación final para verificar la separación de capas MVC/Tres Niveles.
                    </div>
                </div>
  `,
  'resultados.html': `<h2 class="section-title">10. Resultados y Conclusiones</h2><div class="card"><p>El modelo resulta altamente viable y conecta una necesidad comercial con una responsabilidad medioambiental, probando el impacto directo en el ODS 12.</p></div>`,
  'evidencias.html': `<h2 class="section-title">11. Evidencias del Proceso</h2><div class="card"><p>Repositorios, actas de reuniones, fotografías de entrevistas a gerentes de Supermall y planificación del backlog.</p></div>`
};

for (const p of pages) {
  fs.writeFileSync(p.file, template(p.title, p.file, contents[p.file]), 'utf8');
}

console.log("Portfolio completely generated up to Phase 7!");

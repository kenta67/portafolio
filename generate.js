const fs = require('fs');

const pages = [
  {f:"propuesta.html", n:"4. Propuesta", t:"Propuesta Innovadora"},
  {f:"metodologia.html", n:"5. Metodología", t:"Metodología"},
  {f:"arquitectura.html", n:"6. Arquitectura", t:"Arquitectura"},
  {f:"c4model.html", n:"7. C4 Model", t:"C4 Model"},
  {f:"prototipo.html", n:"8. Prototipo", t:"Prototipo"},
  {f:"implementacion.html", n:"9. Implementación", t:"Implementación"},
  {f:"resultados.html", n:"10. Resultados", t:"Resultados y conclusiones"},
  {f:"evidencias.html", n:"11. Evidencias", t:"Evidencias del proceso"}
];

pages.forEach(p => {
  const content = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${p.n} | Portafolio Digital - ODS 12</title>
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
                <li><a href="index.html"><i class="fas fa-home"></i> 1. Inicio</a></li>
                <li><a href="problema.html"><i class="fas fa-exclamation-triangle"></i> 2. El problema</a></li>
                <li><a href="investigacion.html"><i class="fas fa-search"></i> 3. Investigación</a></li>
                <li><a href="propuesta.html" ${p.f === 'propuesta.html' ? 'class="active"' : ''}><i class="fas fa-lightbulb"></i> 4. Propuesta</a></li>
                <li><a href="metodologia.html" ${p.f === 'metodologia.html' ? 'class="active"' : ''}><i class="fas fa-cogs"></i> 5. Metodología</a></li>
                <li><a href="arquitectura.html" ${p.f === 'arquitectura.html' ? 'class="active"' : ''}><i class="fas fa-sitemap"></i> 6. Arquitectura</a></li>
                <li><a href="c4model.html" ${p.f === 'c4model.html' ? 'class="active"' : ''}><i class="fas fa-cubes"></i> 7. C4 Model</a></li>
                <li><a href="prototipo.html" ${p.f === 'prototipo.html' ? 'class="active"' : ''}><i class="fas fa-mobile-alt"></i> 8. Prototipo</a></li>
                <li><a href="implementacion.html" ${p.f === 'implementacion.html' ? 'class="active"' : ''}><i class="fas fa-laptop-code"></i> 9. Implementación</a></li>
                <li><a href="resultados.html" ${p.f === 'resultados.html' ? 'class="active"' : ''}><i class="fas fa-chart-line"></i> 10. Resultados</a></li>
                <li><a href="evidencias.html" ${p.f === 'evidencias.html' ? 'class="active"' : ''}><i class="fas fa-folder-open"></i> 11. Evidencias</a></li>
            </ul>
        </nav>

        <!-- Main Content -->
        <main class="content-area">
            <section class="page-section active" style="display: block;">
                <h2 class="section-title">${p.t}</h2>
                <div class="card">
                    <p><em>Contenido en desarrollo. Aquí se detallará esta sección más adelante.</em></p>
                </div>
            </section>
        </main>
    </div>
    <script src="js/app.js"></script>
</body>
</html>`;
  
  fs.writeFileSync(p.f, content, 'utf8');
});
console.log("Pages generated");

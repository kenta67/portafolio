document.addEventListener('DOMContentLoaded', () => {
    // Lógica para la línea de tiempo interactiva (Evolución de la Idea)
    const timelineSteps = document.querySelectorAll('.timeline-step');
    const stepPanes = document.querySelectorAll('.step-pane');

    if (timelineSteps.length > 0) {
        timelineSteps.forEach(step => {
            step.addEventListener('click', function() {
                // 1. Remover clase activa de todos los pasos
                timelineSteps.forEach(s => s.classList.remove('active'));
                // 2. Añadir clase activa al paso clicado
                this.classList.add('active');

                // 3. Obtener el número de paso
                const stepNum = this.getAttribute('data-step');

                // 4. Ocultar todos los paneles de contenido
                stepPanes.forEach(pane => pane.classList.remove('active'));

                // 5. Mostrar el panel correspondiente
                const targetPane = document.getElementById(`step-${stepNum}`);
                if (targetPane) {
                    targetPane.classList.add('active');
                }
            });
        });
    }
});

function lanzarConfeti() {
    // Configuración del confeti
    confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#d63384', '#ff69b4', '#ffffff']
    });
}
// Mensaje de bienvenida
const nombre = prompt("¿Cómo te llamas?");
alert("¡Hola " + nombre + "! Bienvenido a Home Finance Master!");

// Frases y videos correspondientes
const frases = [
    "La vida es lo que pasa mientras estás ocupado haciendo otros planes.",
    "El único modo de hacer un gran trabajo es amar lo que haces.",
    "No cuentes los días, haz que los días cuenten.",
    "La mente es todo. Lo que pienses, eso serás.",
    "La felicidad es una mariposa que cuando la persigues siempre está fuera de tu alcance, pero que si te sientas silenciosamente puede posarse sobre ti.",
    "La mejor venganza es un gran éxito.",
    "No te preocupes por los fracasos, preocúpate por las oportunidades que pierdes cuando ni siquiera lo intentas.",
    "La vida es un 10% lo que me pasa y un 90% cómo reacciono a ello."
];

const videos = [
    "video/video1.mp4",
    "video/video2.mp4",
    "video/video3.mp4",
    "video/video4.mp4",
    "video/video5.mp4",
    "video/video6.mp4",
    "video/video7.mp4",
    "video/video8.mp4"
];

// Función para mostrar la frase y reproducir el video correspondiente
function mostrarFraseYReproducirVideo() {
    const indice = Math.floor(Math.random() * frases.length);
    document.getElementById("frase").innerText = frases[indice];

    // Actualizar el video correspondiente a la frase
    const fraseVideo = document.getElementById('fraseVideo');
    fraseVideo.src = videos[indice];
    fraseVideo.load();
    fraseVideo.play();
}

// Configuración de reproducción para el video principal con sonido en el primer clic
document.addEventListener('click', () => {
    const video = document.getElementById('miVideo');
    video.muted = false;
    video.play();
}, { once: true });

// Evento del botón para generar la frase y reproducir el video de frase
document.getElementById('btn-generar').addEventListener('click', mostrarFraseYReproducirVideo);

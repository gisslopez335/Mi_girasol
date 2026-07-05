// ======================================
// REFERENCIAS A LAS VISTAS
// ======================================

const portada = document.querySelector(".portada");
const bienvenida = document.getElementById("bienvenida");
const historia = document.getElementById("historia");
const reencuentro = document.getElementById("reencuentro");
const cancion = document.getElementById("cancion");
const girasol = document.getElementById("girasol"); // 🌻 NUEVA VISTA

// ======================================
// BOTONES
// ======================================

const btnComenzar = document.getElementById("btnComenzar");

const btnVolver = document.getElementById("btnVolver");
const btnContinuar = document.getElementById("btnContinuar");

const volverHistoria = document.getElementById("volverHistoria");
const continuarHistoria = document.getElementById("continuarHistoria");

const volverReencuentro = document.getElementById("volverReencuentro");
const continuarReencuentro = document.getElementById("continuarReencuentro");

const volverCancion = document.getElementById("volverCancion");
const continuarCancion = document.getElementById("continuarCancion");

// 🌻 NUEVO BOTÓN GIRASOL
const btnTocar = document.getElementById("btnTocar");

// ======================================
// AUDIO Y VIDEO
// ======================================

const audio = document.getElementById("audioCancion");
const video = document.getElementById("videoCancion");

const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");

// 🌻 ANIMACIÓN GIRASOL
const animacionGirasol = document.getElementById("animacionGirasol");

// ======================================
// CAMBIAR DE VISTA
// ======================================

function mostrarVista(vista) {
    if (!vista) return;

    const vistas = [
        portada,
        bienvenida,
        historia,
        reencuentro,
        cancion,
        girasol
    ];

    // Ocultar todas las vistas
    vistas.forEach(v => {
        if (v) v.style.display = "none";
    });

    // Mostrar la seleccionada
    vista.style.display = "flex";

    // Reiniciar animación si es girasol
    if (vista === girasol) {
        animacionGirasol?.classList.remove("mostrar");
    }
}

// ======================================
// NAVEGACIÓN
// ======================================

btnComenzar?.addEventListener("click", () => {
    mostrarVista(bienvenida);
});

btnVolver?.addEventListener("click", () => {
    mostrarVista(portada);
});

btnContinuar?.addEventListener("click", () => {
    mostrarVista(historia);
});

volverHistoria?.addEventListener("click", () => {
    mostrarVista(bienvenida);
});

continuarHistoria?.addEventListener("click", () => {
    mostrarVista(reencuentro);
});

volverReencuentro?.addEventListener("click", () => {
    mostrarVista(historia);
});

continuarReencuentro?.addEventListener("click", () => {
    mostrarVista(cancion);
});

// ======================================
// AUDIO + VIDEO
// ======================================

playBtn?.addEventListener("click", () => {
    audio?.play();
    video?.play();
});

pauseBtn?.addEventListener("click", () => {
    audio?.pause();
    video?.pause();
});

// ======================================
// VISTA CANCION → GIRASOL 🌻
// ======================================

volverCancion?.addEventListener("click", () => {
    mostrarVista(reencuentro);
});

continuarCancion?.addEventListener("click", () => {
    mostrarVista(girasol);
});

// ======================================
// BOTÓN GIRASOL 🌻 "TÓCAME"
// ======================================

btnTocar?.addEventListener("click", () => {
    animacionGirasol?.classList.add("mostrar");
});

// ======================================
// BOTÓN HOME
// ======================================

const btnHome = document.getElementById("btnHome");

btnHome?.addEventListener("click", () => {
    mostrarVista(portada);
});
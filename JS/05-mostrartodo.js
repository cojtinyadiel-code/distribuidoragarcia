

document.addEventListener("DOMContentLoaded", () => {

    const contenedor = document.getElementById("productos");
    const btnMostrar = document.getElementById("btn-mas");

    // Cuántos productos mostrar inicialmente
    const cantidadInicial = 8;

    // Lista de TODOS los productos
    const productos = Array.from(contenedor.querySelectorAll(".tarjeta-producto"));

    // Comienza ocultando todo
    productos.forEach(p => p.style.display = "none");

    // Mostrar los primeros X
    function mostrarInicial() {
        for (let i = 0; i < cantidadInicial && i < productos.length; i++) {
            productos[i].style.display = "block";
        }
    }

    // Mostrar TODOS
    function mostrarTodos() {
        productos.forEach(p => p.style.display = "block");
        btnMostrar.textContent = "Ocultar ▼";
        btnMostrar.dataset.state = "abierto";
    }

    // Ocultar y volver a dejar solo los primeros
    function ocultarDeNuevo() {
        productos.forEach((p, i) => {
            if (i < cantidadInicial) p.style.display = "block";
            else p.style.display = "none";
        });
        btnMostrar.textContent = "Mostrar todos ▼";
        btnMostrar.dataset.state = "cerrado";
    }

    // Evento del botón
    btnMostrar.addEventListener("click", () => {
        if (btnMostrar.dataset.state === "abierto") {
            ocultarDeNuevo();
        } else {
            mostrarTodos();
        }
    });

    // El botón aparece al llegar a la mitad de los productos iniciales
    const indiceMitad = Math.floor(cantidadInicial / 2); // ej: 20/2 = 10
    const productoMitad = productos[indiceMitad];

    function detectarMitad() {
        const rect = productoMitad.getBoundingClientRect();
        const ventana = window.innerHeight;

        // Si el producto #10 está dentro de la vista → mostrar botón
        if (rect.top < ventana && rect.bottom > 0) {
            btnMostrar.style.opacity = "1";
            btnMostrar.style.pointerEvents = "auto";
        }
    }

    // Inicialmente ocultamos el botón
    btnMostrar.style.opacity = "0";
    btnMostrar.style.pointerEvents = "none";
    btnMostrar.dataset.state = "cerrado";

    // Detectar scroll para mostrar botón
    window.addEventListener("scroll", detectarMitad);

    // Mostrar los primeros productos
    mostrarInicial();
    // Mostrar productos de arranque
    mostrarInicial();
});

const contenedor = document.getElementById("productos");
const btnMas = document.getElementById("btn-mas");
const footer = document.getElementById("footer");

// --- EJEMPLO: 6 productos iniciales (puedes cambiarlo)
let cantidadMostrada = 8;

// Evita que el botón tape el footer
function ajustarBoton() {
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerTop <= windowHeight) {
        btnMas.classList.add("stop");
        btnMas.style.bottom = (windowHeight - footerTop + 20) + "px";
    } else {
        btnMas.classList.remove("stop");
        btnMas.style.bottom = "20px";
    }
    }

window.addEventListener("scroll", ajustarBoton);
window.addEventListener("resize", ajustarBoton);
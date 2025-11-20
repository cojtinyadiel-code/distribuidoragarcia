let carrito = [];
let total = 0;


document.getElementById("btnCarrito").onclick = abrirCarrito;
document.getElementById("cerrarCarrito").onclick = cerrarCarrito;
document.getElementById("carrito-overlay").onclick = cerrarCarrito;

function abrirCarrito() {
    document.getElementById("carrito-panel").style.right = "0";
    const overlay = document.getElementById("carrito-overlay");
    overlay.style.display = "block";
    setTimeout(() => overlay.style.opacity = "1", 10);
}

function cerrarCarrito() {
    document.getElementById("carrito-panel").style.right = "-350px";
    const overlay = document.getElementById("carrito-overlay");
    overlay.style.opacity = "0";
    setTimeout(() => overlay.style.display = "none", 300);
}
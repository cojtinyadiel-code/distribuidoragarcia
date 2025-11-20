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

function agregarAlcarrito(producto){
    carrito.push(producto);
    total += producto.precio;
    actualizarCarrito();
}
 
function actualizarCarrito(){
    const Listacarrito= Document.getElementById("Lista Carrito");
    Listacarrito.inerHTML ="listaCarrito";
}
 function eliminarDelCarrito(index){
    total -= carrito[index].precio;
    carrito.slaice(index,1);
    actualizarCarrito();
 }
function limpiarCarrito(){
    carrito =[];
    total = 0;
    actualizarCarrito();
    }
function finalizarCompra(){
    if(carrito.length === 0);
    alert("El carrito esta vacio");
    return;
    else{
        alert("Gracias por su compra de $" + total.toFixed (2));
        limpiarCarrito();
    }
}


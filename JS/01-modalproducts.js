
// Elementos del modal
const modal = document.getElementById("modalCompra");
const modalImg = document.getElementById("modalImg");
const modalNombre = document.getElementById("modalNombre");
const modalPrecio = document.getElementById("modalPrecio");
const listaVariantes = document.getElementById("listaVariantes");
const cerrarModal = document.getElementById("cerrarModal");
const btnAgregarCarrito = document.getElementById("btnAgregarCarrito");

let productoActual = {
    id: null,
    nombre: null,
    precio: null,
    cantidad: 1,
    variante: null
};

// =======================================
// SISTEMA AUTOMÁTICO PARA TODAS LAS TARJETAS
// =======================================
document.querySelectorAll(".tarjeta-producto").forEach(tarjeta => {

    tarjeta.addEventListener("click", () => {

        const id = tarjeta.id;
        const nombre = tarjeta.dataset.nombre;
        const precio = tarjeta.dataset.precio;

        productoActual.id = id;
        productoActual.nombre = nombre;

        // Cargar imagen principal de la tarjeta
        const img = tarjeta.querySelector(".imagen-producto img").src;
        modalImg.src = img;

        modalNombre.textContent = nombre;
        modalPrecio.textContent = `Precio: $${precio}`;

        listaVariantes.innerHTML = "";

        // Variantes por producto
        if (variantesProducto[id]) {

            variantesProducto[id].forEach((v, index) => {
                const btn = document.createElement("div");
                btn.classList.add("var-opcion");

                btn.innerHTML = `<img src="${v.imgMini}">`;

                if (index === 0) {
                    btn.classList.add("seleccionada");
                    modalImg.src = v.imgGrande;
                    modalPrecio.textContent = `Precio: $${v.precio}`;

                    productoActual.variante = v;
                }


                btn.addEventListener("click", () => {

                    document.querySelectorAll(".var-opcion").forEach(el => el.classList.remove("seleccionada"));
                    btn.classList.add("seleccionada");

                    modalImg.src = v.imgGrande;
                    modalPrecio.textContent = `Precio: $${v.precio}`;
                });

                listaVariantes.appendChild(btn);
            });
        }

        modal.style.display = "flex";
    });
})

btnAgregarCarrito.addEventListener("click", () => {
    
    productoActual.cantidad = parseInt(modalCantidad.value);

    console.log("Producto añadido al carrito:", productoActual);

    // En el futuro aquí se agregará:
    // carrito.push({...productoActual})
    // actualizarCarritoUI()

    alert("Producto añadido al carrito ✔");
});



// Cerrar modal
cerrarModal.addEventListener("click", () => {
    modal.style.display = "none";
});
  
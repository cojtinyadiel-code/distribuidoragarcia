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

        modalNombre.textContent = nombre;

        // Imagen principal desde la tarjeta
        modalImg.src = tarjeta.querySelector(".imagen-producto img").src;

        modalPrecio.textContent = `Precio: Q. ${precio}`;

        listaVariantes.innerHTML = "";

        // Verificar si hay variantes
        if (variantesProducto[id]) {

            // FILTRO: eliminar variantes vacías
            const variantesValidas = variantesProducto[id].filter(v =>
                v.imgMini !== "" && v.imgGrande !== ""
            );

            variantesValidas.forEach((v, index) => {

                const btn = document.createElement("div");
                btn.classList.add("var-opcion");

                btn.innerHTML = `<img src="${v.imgMini}">`;

                // Primera variante → seleccionada por defecto
                if (index === 0) {
                    btn.classList.add("seleccionada");
                    modalImg.src = v.imgGrande;
                    modalPrecio.textContent = `Precio: Q. ${v.precio}`;
                    productoActual.variante = v;
                }

                btn.addEventListener("click", () => {

                    // SOLO seleccionar variantes dentro del modal
                    listaVariantes.querySelectorAll(".var-opcion")
                        .forEach(el => el.classList.remove("seleccionada"));

                    btn.classList.add("seleccionada");

                    modalImg.src = v.imgGrande;
                    modalPrecio.textContent = `Precio: Q. ${v.precio}`;
                    productoActual.variante = v;
                });

                listaVariantes.appendChild(btn);
            });
        }

        modal.style.display = "flex";
    });
});

btnAgregarCarrito.addEventListener("click", () => {
    productoActual.cantidad = parseInt(modalCantidad.value);
    console.log("Producto añadido al carrito:", productoActual);
    alert("Producto añadido al carrito ✔");
});

// Cerrar modal
cerrarModal.addEventListener("click", () => {
    modal.style.display = "none";
});
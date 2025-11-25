// Elementos del modal
const modal = document.getElementById("modalCompra");
const modalImg = document.getElementById("modalImg");
const modalNombre = document.getElementById("modalNombre");
const modalPrecio = document.getElementById("modalPrecio");
const listaVariantes = document.getElementById("listaVariantes");
const cerrarModal = document.getElementById("cerrarModal");
const btnAgregarCarrito = document.getElementById("btnAgregarCarrito");

alert("Puedes desplazar las tarjetas de productos <br> para ver su descripción.");

const variantesProducto = {
    "producto0": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto1": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto2": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto3": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto4": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto5": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto6": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto7": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto8": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto9": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto10": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto11": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto12": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto13": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto14": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto15": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto16": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto17": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto18": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto19": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto20": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto21": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto22": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto23": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto24": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto25": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto26": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto27": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto28": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto29": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto30": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto31": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto32": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto33": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto34": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto35": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto36": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto37": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto38": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto39": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto40": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto41": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto42": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto43": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto44": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto45": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto46": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto47": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto48": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto49": [
        { imgMini: "images/aguja apple/aguja-apple-caja.jpg", imgGrande: "images/aguja apple/aguja-apple-caja.jpg", precio: "20.2" },
        // ESTA SEGUNDA VARIANTE SERÁ IGNORADA AUTOMÁTICAMENTE
        { imgMini: "", imgGrande: "", precio: "" }
    ],
};

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
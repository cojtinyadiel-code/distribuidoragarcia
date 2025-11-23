
// Elementos del modal
const modal = document.getElementById("modalCompra");
const modalImg = document.getElementById("modalImg");
const modalNombre = document.getElementById("modalNombre");
const modalPrecio = document.getElementById("modalPrecio");
const listaVariantes = document.getElementById("listaVariantes");
const cerrarModal = document.getElementById("cerrarModal");
const btnAgregarCarrito = document.getElementById("btnAgregarCarrito");

    const variantesProducto = {
    "producto0": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto1": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto2": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto3": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto4": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto5": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto6": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto7": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto8": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto9": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto10": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto11": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto12": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto13": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto14": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto15": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto16": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto17": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto18": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto19": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto20": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto21": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto22": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto23": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto24": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto25": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto26": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto27": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto28": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto29": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto30": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto31": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto32": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto33": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto34": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto35": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto36": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto37": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto38": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto39": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto40": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto41": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto42": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto43": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto44": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto45": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto46": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto47": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto48": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto49": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto50": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto51": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto52": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto53": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto54": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto55": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto56": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto57": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto58": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto59": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto60": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto61": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto62": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto63": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto64": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto65": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto66": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto67": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto68": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto69": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto70": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto71": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto72": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto73": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto74": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto75": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto76": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto77": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto78": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto79": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto80": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto81": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto82": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto83": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto84": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto85": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto86": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto87": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto88": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto89": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto90": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto91": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto92": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto93": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto94": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto95": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto96": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto97": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto98": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto99": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto100": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto101": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto102": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto103": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto104": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto105": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto106": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto107": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto108": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto109": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto110": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto111": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto112": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto113": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto114": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto115": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto116": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto117": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto118": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto119": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto120": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto121": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto122": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto123": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto124": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto125": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto126": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto127": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto128": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto129": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
    "producto130": [
        { imgMini: "", imgGrande: "", precio: "" },
        { imgMini: "", imgGrande: "", precio: "" }
    ],
}


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
        modalPrecio.textContent = `Precio: Q. ${precio}`;

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
                    modalPrecio.textContent = `Precio: Q. ${v.precio}`;

                    productoActual.variante = v;
                }


                btn.addEventListener("click", () => {

                    document.querySelectorAll(".var-opcion").forEach(el => el.classList.remove("seleccionada"));
                    btn.classList.add("seleccionada");

                    modalImg.src = v.imgGrande;
                    modalPrecio.textContent = `Precio: Q. ${v.precio}`;
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
/* 02-carritocompras.js
   Pegar este archivo en JS/02-carritocompras.js y cargarlo al final del <body>
*/

document.addEventListener("DOMContentLoaded", () => {

    /***********************
     * Configuración de variantes (ejemplo)
     * Ajusta rutas y productos según tu carpeta de imágenes
     ***********************/
//Codigo a seguir para productos y sus variantes

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
    ];
}


        // Agrega más productos/variantes aquí con las claves que uses en tus tarjetas (id="productoX")

    /***********************
     * Elementos DOM
     ***********************/
    const modal = document.getElementById("modalCompra");
    const modalImg = document.getElementById("modalImg");
    const modalNombre = document.getElementById("modalNombre");
    const modalPrecio = document.getElementById("modalPrecio");
    const listaVariantes = document.getElementById("listaVariantes");
    const cerrarModal = document.getElementById("cerrarModal");
    const btnAgregarCarrito = document.getElementById("btnAgregarCarrito");
    const selectCantidad = document.getElementById("compraCantidad");
    const inputCantidadPersonalizada = document.getElementById("cantidadPersonalizada");

    const btnCarrito = document.getElementById("btnCarrito");
    const carritoOverlay = document.getElementById("carrito-overlay");
    const carritoPanel = document.getElementById("carrito-panel");
    const cerrarCarrito = document.getElementById("cerrarCarrito");
    const carritoItems = document.getElementById("carrito-items");
    const carritoTotal = document.getElementById("carrito-total");

    /***********************
     * Estado
     ***********************/
    let productoActual = {
        id: null,
        nombre: null,
        precio: 0,
        cantidad: 1,
        variante: null,
        img: ""
    };

    
    let carrito = [];

    /***********************
     * Helpers: abrir/cerrar carrito
     ***********************/
    function abrirCarrito() {
        if (!carritoOverlay || !carritoPanel) return;
        carritoOverlay.style.display = "block";
        setTimeout(() => carritoOverlay.style.opacity = "1", 10);
        carritoPanel.style.right = "0";
        document.getElementById("btnCarrito").style.display = "none";
        document.getElementById("boton-menu").style.display = "none";
        document.getElementById("btn-mas").style.display = "none";
    }

    function cerrarCarritoFn() {
        if (!carritoOverlay || !carritoPanel) return;
        carritoOverlay.style.opacity = "0";
        carritoPanel.style.right = "-350px";
        setTimeout(() => carritoOverlay.style.display = "none", 300);
        document.getElementById("btnCarrito").style.display = "";
        document.getElementById("boton-menu").style.display = ""
        document.getElementById("btn-mas").style.display = "";
    }


    if (btnCarrito) btnCarrito.addEventListener("click", abrirCarrito);
    if (cerrarCarrito) cerrarCarrito.addEventListener("click", cerrarCarritoFn);
    if (carritoOverlay) carritoOverlay.addEventListener("click", cerrarCarritoFn);

    /***********************
     * Abrir modal al clicar tarjeta
     ***********************/
    document.querySelectorAll(".tarjeta-producto").forEach(tarjeta => {
        tarjeta.addEventListener("click", () => {
            const id = tarjeta.id || tarjeta.dataset.id;
            const nombre = tarjeta.querySelector(".titulo") ? tarjeta.querySelector(".titulo").textContent : (tarjeta.dataset.nombre || "Producto");
            const precioData = tarjeta.dataset.precio || tarjeta.dataset.precioDefault || null;

            productoActual.id = id;
            productoActual.nombre = nombre;
            productoActual.precio = precioData ? parseFloat(precioData) : 0;

            // Cargar imagen principal (si existe)
            const imgEl = tarjeta.querySelector(".imagen-producto img");
            if (imgEl && imgEl.src) {
                modalImg.src = imgEl.src;
                productoActual.img = imgEl.src;
            } else {
                modalImg.src = ""; // o un placeholder
                productoActual.img = "";
            }

            // Precio mostrado (si hay variantes se actualizará al seleccionar)
            modalNombre.textContent = nombre;
            modalPrecio.textContent = productoActual.precio ? `Precio: Q${productoActual.precio}` : "Precio: -";

            // Reset cantidad
            if (selectCantidad) {
                selectCantidad.value = "1";
                inputCantidadPersonalizada.style.display = "none";
                inputCantidadPersonalizada.value = "";
            }
            productoActual.cantidad = 1;

            // Cargar variantes (si hay)
            listaVariantes.innerHTML = "";
            if (id && variantesProducto[id]) {
                variantesProducto[id].forEach((v, index) => {
                    const btn = document.createElement("div");
                    btn.className = "var-opcion";
                    btn.innerHTML = `<img src="${v.imgMini}" alt="var-${index}" />`;
                    // primer elemento seleccionado por defecto
                    if (index === 0) {
                        btn.classList.add("seleccionada");
                        modalImg.src = v.imgGrande || v.imgMini;
                        modalPrecio.textContent = `Precio: Q${v.precio.toFixed(2)}`;
                        productoActual.variante = v;
                        productoActual.precio = v.precio;
                        productoActual.img = v.imgMini || v.imgGrande || productoActual.img;
                    }
                    btn.addEventListener("click", () => {
                        document.querySelectorAll(".var-opcion").forEach(el => el.classList.remove("seleccionada"));
                        btn.classList.add("seleccionada");
                        modalImg.src = v.imgGrande || v.imgMini;
                        modalPrecio.textContent = `Precio: Q${v.precio.toFixed(2)}`;
                        productoActual.variante = v;
                        productoActual.precio = v.precio;
                        productoActual.img = v.imgMini || v.imgGrande || productoActual.img;
                    });
                    listaVariantes.appendChild(btn);
                });
            } else {
                // No hay variantes: limpiar estado de variante y usar precio de la tarjeta (si existe)
                productoActual.variante = null;
                if (productoActual.precio) modalPrecio.textContent = `Precio: Q${productoActual.precio.toFixed ? productoActual.precio.toFixed(2) : productoActual.precio}`;
            }

            // Mostrar modal
            if (modal) modal.style.display = "flex";
        });
    });

    /***********************
     * Manejar cantidad personalizada
     ***********************/
    if (selectCantidad) {
        selectCantidad.addEventListener("change", () => {
            if (selectCantidad.value === "custom") {
                inputCantidadPersonalizada.style.display = "block";
                inputCantidadPersonalizada.focus();
            } else {
                inputCantidadPersonalizada.style.display = "none";
            }
        });
    }

    /***********************
     * Botón añadir al carrito (desde modal)
     ***********************/
    if (btnAgregarCarrito) {
        btnAgregarCarrito.addEventListener("click", () => {
            // Obtener cantidad (prefiere input personalizado si visible y válido)
            let cantidad = 1;
            if (selectCantidad) {
                if (selectCantidad.value === "custom" && inputCantidadPersonalizada) {
                    const val = parseInt(inputCantidadPersonalizada.value);
                    cantidad = (Number.isInteger(val) && val > 0) ? val : 1;
                } else {
                    cantidad = parseInt(selectCantidad.value) || 1;
                }
            } else {
                cantidad = 1;
            }

            productoActual.cantidad = cantidad;

            // Determinar precio final
            const precioFinal = productoActual.variante ? productoActual.variante.precio : productoActual.precio || 0;
            const imgParaCarrito = productoActual.img || (productoActual.variante && productoActual.variante.imgMini) || "";

            // Crear item y agregar al carrito
            const nuevoItem = {
                id: productoActual.id,
                titulo: productoActual.nombre,
                precio: Number(precioFinal),
                cantidad: Number(productoActual.cantidad),
                img: imgParaCarrito
            };

            // Si ya existe el mismo id + misma variante (si usas variantes, comparar por precio o id+precio)
            const existenteIndex = carrito.findIndex(it => it.id === nuevoItem.id && it.precio === nuevoItem.precio);
            if (existenteIndex > -1) {
                carrito[existenteIndex].cantidad += nuevoItem.cantidad;
            } else {
                carrito.push(nuevoItem);
            }

            actualizarCarrito();
            modal.style.display = "none";
            abrirCarrito(); // abrir panel para mostrar lo añadido
        });
    }

    /***********************
     * Cerrar modal
     ***********************/
    if (cerrarModal) {
        cerrarModal.addEventListener("click", () => {
            if (modal) modal.style.display = "none";
        });
    }

    /***********************
     * Actualizar UI del carrito
     ***********************/
    function actualizarCarrito() {
        if (!carritoItems || !carritoTotal) return;

        carritoItems.innerHTML = "";
        let total = 0;

        carrito.forEach((item, i) => {
            total += item.precio * item.cantidad;

            const div = document.createElement("div");
            div.className = "carrito-item";

            div.innerHTML = `
                <div style="display:flex; gap:10px; align-items:center;">
                    ${item.img ? `<img src="${item.img}" alt="${item.titulo}" style="width:56px;height:56px;object-fit:cover;border-radius:6px;">` : ""}
                    <div style="min-width:140px;">
                        <strong style="display:block;">${item.titulo}</strong>
                        <small>Cantidad: ${item.cantidad}</small>
                        <div style="font-weight:700; margin-top:4px;">Q${(item.precio * item.cantidad).toFixed(2)}</div>
                    </div>
                </div>
                <div>
                    <button class="carrito-eliminar" data-index="${i}" aria-label="Eliminar item">✕</button>
                </div>
            `;

            carritoItems.appendChild(div);
        });

        carritoTotal.textContent = "Q" + total.toFixed(2);

        // enlazar eventos eliminar
        document.querySelectorAll(".carrito-eliminar").forEach(btn => {
            btn.addEventListener("click", () => {
                const idx = parseInt(btn.getAttribute("data-index"));
                if (!isNaN(idx)) {
                    carrito.splice(idx, 1);
                    actualizarCarrito();
                }
            });
        });
    }

    /***********************
     * Inicializar (por si quieres precargar algo)
     ***********************/
    // actualizarCarrito(); // descomenta si cargas carrito desde localStorage

}); // DOMContentLoaded end

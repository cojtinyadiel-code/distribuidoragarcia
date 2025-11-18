const variantesProducto = {

    "producto1": [
        { 
            imgMini: "images/caja-ramitos-blancos-o-chapulines.jpg",
            imgGrande: "images/caja-ramitos-blancos-o-chapulines.jpg",
            precio: 18.50
        },
        { 
            imgMini: "https://via.placeholder.com/70x70/ff7777/000000?text=A2",
            imgGrande: "images/",
            precio: 19.00
        }
    ],

    "producto2": [
        { 
            imgMini: "images/aguja chaquira pony",
            imgGrande: "https://via.placeholder.com/300x220/aaffaa/000000?text=Fino+F1",
            precio: 12.90
        },
        { 
            imgMini: "https://via.placeholder.com/70x70/88dd88/000000?text=F2",
            imgGrande: "https://via.placeholder.com/300x220/88dd88/000000?text=Fino+F2",
            precio: 13.50
        }
    ],
        "producto3": [
        { 
            imgMini: "images/aguja chaquira pony",
            imgGrande: "https://via.placeholder.com/300x220/aaffaa/000000?text=Fino+F3",
            precio: 12.90
        },
        { 
            imgMini: "https://via.placeholder.com/70x70/88dd88/000000?text=F2",
            imgGrande: "https://via.placeholder.com/300x220/88dd88/000000?text=Fino+F3",
            precio: 13.50
        }
    ],
        "producto3": [
        { 
            imgMini: "images/aguja chaquira pony",
            imgGrande: "https://via.placeholder.com/300x220/aaffaa/000000?text=Fino+F4",
            precio: 12.90
        },
        { 
            imgMini: "https://via.placeholder.com/70x70/88dd88/000000?text=F2",
            imgGrande: "https://via.placeholder.com/300x220/88dd88/000000?text=Fino+F4",
            precio: 13.50
        }
    ]
};


// Elementos del modal
const modal = document.getElementById("modalCompra");
const modalImg = document.getElementById("modalImg");
const modalNombre = document.getElementById("modalNombre");
const modalPrecio = document.getElementById("modalPrecio");
const listaVariantes = document.getElementById("listaVariantes");
const cerrarModal = document.getElementById("cerrarModal");


// =======================================
// SISTEMA AUTOMÁTICO PARA TODAS LAS TARJETAS
// =======================================
document.querySelectorAll(".tarjeta-producto").forEach(tarjeta => {

    tarjeta.addEventListener("click", () => {
        const id = tarjeta.id;
        const nombre = tarjeta.dataset.nombre;
        const precio = tarjeta.dataset.precio;

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
});


// Cerrar modal
cerrarModal.addEventListener("click", () => {
    modal.style.display = "none";
});
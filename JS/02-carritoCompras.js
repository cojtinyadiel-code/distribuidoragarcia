/* 02-carritocompras.js
   Pegar este archivo en JS/02-carritocompras.js y cargarlo al final del <body>
*/

alert("Puedes desplazar las tarjetas de productos para ver su descripción.");
document.addEventListener("DOMContentLoaded", () => {

    /***********************
     * Configuración de variantes (ejemplo)
     * Ajusta rutas y productos según tu carpeta de imágenes
     ***********************/
//Codigo a seguir para productos y sus variantes

const variantesProducto = {

    "producto0": [
        { 
            imgMini: "images/",
            imgGrande: "images/caja-ramitos-blancos-o-chapulines.jpg",
            precio: 18.50
        },
        { 
            imgMini: "https://via.placeholder.com/70x70/ff7777/000000?text=A2",
            imgGrande: "images/",
            precio: 19.00
        }
    ],
    "producto1": [
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
    "producto2": [
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
    "producto4": [
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
    "producto5": [
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
    "producto6": [
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
    "producto7": [
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
    "producto8": [
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
    "producto9": [
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
    "producto10": [
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
    "producto11": [
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
    "producto12": [
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
    "producto13": [
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
    "producto14": [
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
    "producto15": [
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
    "producto16": [
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
    "producto17": [
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
    "producto18": [
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
    "producto19": [
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
    "producto20": [
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
  "producto21": [
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
    "producto22": [
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
    "producto23": [
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
    "producto24": [
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
    "producto25": [
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
    "producto26": [
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
    "producto27": [
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
    "producto28": [
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
    "producto29": [
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
    "producto30": [
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
  "producto31": [
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
    "producto32": [
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
    "producto33": [
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
    "producto34": [
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
    "producto35": [
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
    "producto36": [
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
    "producto37": [
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
    "producto38": [
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
    "producto39": [
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
    "producto40": [
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
  "producto41": [
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
    "producto42": [
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
    "producto43": [
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
    "producto44": [
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
    "producto45": [
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
    "producto46": [
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
    "producto47": [
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
    "producto48": [
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
    "producto49": [
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
    "producto50": [
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
};


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

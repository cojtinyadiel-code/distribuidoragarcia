function filtrar() {
    let texto = document.getElementById("filtro").value.toLowerCase();
    let categoria = document.getElementById("categoria").value; // si usas un select
    let tarjetas = document.querySelectorAll(".tarjeta-producto");

    tarjetas.forEach(card => {
        let titulo = card.querySelector("h3 .titulo").textContent.toLowerCase();
        let cat = card.getAttribute("data-categoria");

        let coincideTexto = titulo.includes(texto);
        let coincideCategoria = (categoria === "todas" || categoria === cat);

        if (coincideTexto && coincideCategoria) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
}

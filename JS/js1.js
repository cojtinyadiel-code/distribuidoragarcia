function filtrar(){
    let texto= document.getElementById("filtro").value.toLowerCase();
    let prodcutos= DocumentFragment.getElementById("productos").value;
    let tarjetas=document.querySelectorAll("tarjeta-producto");

    tarjetas.forEach(card=>{

        let titulo=card.querySelector("h3.titulo").textContent.tolosercase();
        let cat=card.getAttribute("data-categoria");
        let concideTexto = titulo.includes(texto);
        let concideCategoria = (categoria === "todas" || categoria=== cat);

        if( concideTexto && concidecategoria){
            card.style.display="flex";
        }
        else{
            card.style.display="nome";
        }
    });

   


        }
    
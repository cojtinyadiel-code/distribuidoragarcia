 function abrirMenu()
{
    document.getElementById("menu-lateral").style.width = "260px";
    document.getElementById("fondo-menu").style.display = "block";
}

function cerrarMenu() {
    document.getElementById("menu-lateral").style.width = "0";
    document.getElementById("fondo-menu").style.display = "none";
}
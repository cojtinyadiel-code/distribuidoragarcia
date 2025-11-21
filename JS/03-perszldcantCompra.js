const select = document.getElementById("compraCantidad");
const inputPersonal = document.getElementById("cantidadPersonalizada");

select.addEventListener("change", () => {
    if (select.value === "custom") {
        inputPersonal.style.display = "block";
        inputPersonal.focus();
    } else {
        inputPersonal.style.display = "none";
        inputPersonal.value = "";
    }
});

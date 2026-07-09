const botonNo = document.getElementById("no");
const botonSi = document.getElementById("si");

const pregunta = document.getElementById("pregunta");
const respuesta = document.getElementById("respuesta");

function moverBoton(){

    const ancho = window.innerWidth - botonNo.offsetWidth - 20;
    const alto = window.innerHeight - botonNo.offsetHeight - 20;

    const x = Math.random() * ancho;
    const y = Math.random() * alto;

    botonNo.style.left = x + "px";
    botonNo.style.top = y + "px";
}

botonNo.addEventListener("mouseover", moverBoton);
botonNo.addEventListener("click", moverBoton);

botonSi.addEventListener("click", () => {
    pregunta.classList.add("oculto");
    respuesta.classList.remove("oculto");
});

const botonNo = document.getElementById("no");
const botonSi = document.getElementById("si");

const pregunta = document.getElementById("pregunta");
const respuesta = document.getElementById("respuesta");

function moverBoton(){

    const ancho = window.innerWidth - botonNo.offsetWidth;
    const alto = window.innerHeight - botonNo.offsetHeight;

    botonNo.style.left = Math.random()*ancho + "px";
    botonNo.style.top = Math.random()*alto + "px";

}

botonNo.addEventListener("mouseenter", moverBoton);
botonNo.addEventListener("click", moverBoton);

botonSi.addEventListener("click",()=>{

    pregunta.classList.add("oculto");
    respuesta.classList.remove("oculto");

});


// Fondo animado

const canvas = document.getElementById("fondo");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize",()=>{

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});

const particulas=[];

for(let i=0;i<120;i++){

    particulas.push({

        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        r:Math.random()*3+1,
        dx:(Math.random()-0.5)*0.5,
        dy:(Math.random()-0.5)*0.5

    });

}

function animar(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="white";

    particulas.forEach(p=>{

        p.x+=p.dx;
        p.y+=p.dy;

        if(p.x<0||p.x>canvas.width)p.dx*=-1;
        if(p.y<0||p.y>canvas.height)p.dy*=-1;

        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fill();

    });

    requestAnimationFrame(animar);

}

animar();

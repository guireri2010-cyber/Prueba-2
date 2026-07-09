const botonNo=document.getElementById("no");
const botonSi=document.getElementById("si");

const pregunta=document.getElementById("pregunta");
const respuesta=document.getElementById("respuesta");

let escapado=false;

function mover(){

    if(!escapado){

        botonNo.style.position="fixed";

        escapado=true;

    }

    const ancho=window.innerWidth-botonNo.offsetWidth-20;
    const alto=window.innerHeight-botonNo.offsetHeight-20;

    botonNo.style.left=Math.random()*ancho+"px";
    botonNo.style.top=Math.random()*alto+"px";

}

botonNo.addEventListener("mouseenter",mover);

botonSi.onclick=()=>{

    pregunta.classList.add("oculto");
    respuesta.classList.remove("oculto");

};




// ====== FONDO CONSTELACIONES ======

const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");

function resize(){

    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;

}

resize();

window.addEventListener("resize",resize);

const puntos=[];

for(let i=0;i<80;i++){

    puntos.push({

        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        dx:(Math.random()-0.5)*0.4,
        dy:(Math.random()-0.5)*0.4,
        r:Math.random()*2+1

    });

}

function dibujar(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    for(let i=0;i<puntos.length;i++){

        let p=puntos[i];

        p.x+=p.dx;
        p.y+=p.dy;

        if(p.x<0||p.x>canvas.width)p.dx*=-1;
        if(p.y<0||p.y>canvas.height)p.dy*=-1;

        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle="rgba(255,255,255,.85)";
        ctx.fill();

        for(let j=i+1;j<puntos.length;j++){

            let q=puntos[j];

            let dist=Math.hypot(p.x-q.x,p.y-q.y);

            if(dist<120){

                ctx.beginPath();

                ctx.moveTo(p.x,p.y);

                ctx.lineTo(q.x,q.y);

                ctx.strokeStyle="rgba(255,255,255,"+(1-dist/120)*0.3+")";

                ctx.stroke();

            }

        }

    }

    requestAnimationFrame(dibujar);

}

dibujar();

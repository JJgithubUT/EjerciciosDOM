const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');
const h1Boton = document.querySelector('#h1Boton');
let cambiador = 0;

h1Boton.addEventListener('click', () => {
    switch (cambiador) {
        case 0:
            reiniciar();
            cuadroFrank();
            cambiador = 1;
            break;
        case 1:
            reiniciar();
            cuadroCara();
            cambiador = 0;
            break;
        default:
            break;
    }
})

const reiniciar = () => {
    lienzo.width = 400;
    lienzo.height = 400;
    ctx.fillStyle = 'rgb(46,46,46)';
    ctx.fillRect(0, 0, 400, 400);
}


const cuadroFrank = () => {

ctx.fillStyle = 'rgb(106,57,6)';
ctx.roundRect(200,100,100,150,10);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'black';
ctx.roundRect(200,100,100,20,10);
ctx.fill();

ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(230,140,10,0,Math.PI * 1, true);
ctx.fill();
ctx.beginPath();
ctx.arc(270,140,10,0,Math.PI * 2, true);
ctx.fill();
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(270,140,5,0,Math.PI * 2, true);
ctx.fill();
ctx.fillStyle = 'blue';
ctx.beginPath();
ctx.arc(230,140,5,0,Math.PI * 1, true);
ctx.fill();

ctx.fillStyle = 'black';
ctx.beginPath();
ctx.moveTo(250,150);
ctx.lineTo(260, 180);
ctx.lineTo(240,180);
ctx.fill();

ctx.beginPath();
ctx.roundRect(220,200,60,20,10);
ctx.fill();

ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.moveTo(230,200);
ctx.lineTo(250,200);
ctx.lineTo(240,210);
ctx.fill();

ctx.beginPath();
ctx.moveTo(255,200);
ctx.lineTo(275,200);
ctx.lineTo(265,210);
ctx.fill();

}

const cuadroCara = () => {
ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillRect(50, 50, 100, 50);
ctx.fillRect(250, 50, 100, 50);
ctx.fillRect(50, 200, 50, 50);
ctx.fillRect(100, 250, 200, 50);
ctx.fillRect(300, 200, 50, 50);
ctx.fillRect(150, 300, 100, 50);
ctx.fillStyle = 'red';
ctx.arc(200,170,50,10,Math.PI * 1, true);
ctx.fill();
ctx.fillRect(100, 50, 50, 50);
ctx.fillRect(250, 50, 50, 50);
}
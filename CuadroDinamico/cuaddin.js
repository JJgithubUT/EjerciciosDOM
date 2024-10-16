const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

let lado = 0;

let radio = 0;
let sentido = true;

const cuadro = {
    lado: 0,
    sentido: true,
    color: 'rgb(244, 244, 244)',
    getColor: function(){
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        const t = Math.random();
        this.color = `rgb(${r},${g},${b},${t})`;
    },
    show: function(){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.fillRect(this.lado, this.lado, this.lado, this.lado);
        ctx.fill();
    }
}

setInterval(() => {
    reloadLienzo();
    cuadro.lado = lado;
    cuadro.getColor();
    cuadro.show();
    lado = cuadro.sentido? cuadro.lado + 1: cuadro.lado - 1;
    cuadro.sentido = lado > 400? !cuadro.sentido: cuadro.sentido;
    cuadro.sentido = lado < 1? !cuadro.sentido: cuadro.sentido;

}, 0.01);

function reloadLienzo(){
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.fillRect(0, 0, 600, 400);
    ctx.fill();
};
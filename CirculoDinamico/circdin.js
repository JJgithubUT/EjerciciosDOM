const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

let radio = 0;
let sentido = true;

const circle = {
    radio: 0,
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
        //reloadLienzo();
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(300,200, this.radio, 50, Math.PI * 2, true);
        ctx.fill();
    }
}

setInterval(() => {
    reloadLienzo();
    circle.radio = radio;
    circle.getColor();
    circle.show();
    radio = circle.sentido? radio + 1: radio - 1;
    circle.sentido = radio > 200? !circle.sentido: circle.sentido;
    circle.sentido = radio < 1? !circle.sentido: circle.sentido;

}, 0.01);

function reloadLienzo(){
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.fillRect(0, 0, 600, 400);
    ctx.fill();
};
const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');
const contadorElem = document.querySelector('#contador');
let movimientos = 0;

const ball = {
    x: 0,
    y: 0,
    on: true,
    show: function(){
        if(this.on) ctx.fillStyle = 'yellow';
        else ctx.fillStyle = 'blue';
        ctx.beginPath();
        ctx.arc(this.x * 10, this.y * 10, 10, 0, Math.PI * 2 );
        ctx.fill();
        this.on = !this.on;
    }
}

let direction = 1;
let x = 0;
let y = 2;

setInterval(() => {
    ctx.clearRect(0, 0, 600, 400);
    ball.x = x;
    ball.y = y;
    ball.show();

    movimientos++;
    contadorElem.textContent = movimientos;

    if(direction === 1) x++;
    else if (direction === 2) y++;
    else if (direction === 3) x--;
    else y--;

    // Validar limites
    if(x > 60) x = 0;
    else if(x < 1) x = 60;
    if(y > 40) y = 0;
    else if(y < 1) y = 40;
}, 100);

document.querySelector('body').addEventListener('keydown', e => {
    if(e.key === 'ArrowRight') direction = 1;
    if(e.key === 'ArrowDown') direction = 2;
    if(e.key === 'ArrowLeft') direction = 3;
    if(e.key === 'ArrowUp') direction = 4;
});

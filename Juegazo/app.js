const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

const ball = {
    x: 0,
    y: 0,
    on: true,
    show: function(){
        ctx.font = "20px serif";
        ctx.fillText('😺', this.x * 10, this.y * 10);
    }
}

const food = {
    x: 0,
    y: 0, 
    show: function(){
        ctx.font = "20px serif";
        ctx.fillText('🐭', this.x * 10, this.y * 10);
    },
    aparece: function(){
        // generar valores this.x y this.y aleatorios 
        this.x = Math.floor(Math.random() * 60);
        this.y = Math.floor(Math.random() * 39);

    }
}

function checkEat(){
    return ball.x === food.x && ball.y === food.y;
}

let direction = 1;
let x = 1;
let y = 1;

food.aparece();
setInterval(() => {
    ctx.clearRect(0, 0, 600, 400);
    ball.x = x;
    ball.y = y;
    ball.show();
    food.show();
    if(checkEat()) food.aparece();
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

document.querySelector('body')
    .addEventListener('keydown', e => {
        if(e.key === 'ArrowRight') direction = 1;
        if(e.key === 'ArrowDown') direction = 2;
        if(e.key === 'ArrowLeft') direction = 3;
        if(e.key === 'ArrowUp') direction = 4;
})
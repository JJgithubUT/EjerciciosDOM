const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');
const contadorElem = document.querySelector('#contador');
const puntosMaxElem = document.querySelector('#puntosMax');
const puntosElem = document.querySelector('#puntos');
const botonReiniciarPuntos = document.querySelector('#botonReiniciarPuntos');
let puntosMax = 0;
let puntosActuales = 0;
let comidas = 3;
ctx.font = "20px serif";

let contador = 0;

document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('maxScoreSnake') !== null) {
        puntosMax = parseInt(localStorage.getItem('maxScoreSnake'), 10);
        puntosMaxElem.innerText = puntosMax;
    } else {
        localStorage.setItem('maxScoreSnake', 0);
    }

    botonReiniciarPuntos.addEventListener('click', () => {
        localStorage.setItem('maxScoreSnake', 0);
        puntosMax = 0;
        puntosMaxElem.innerText = puntosMax;
        alert('Puntos reiniciados a 0');
    });
})

const snake = [
    {
        x: 2,
        y: 1,
        show: function(){
            ctx.fillText('💀', this.x * 20, this.y * 20);
        }
    },
    {
        x: 1,
        y: 1,
        xSig: 2,
        ySig: 1,
        show: function(){
            ctx.fillText('💀', this.x * 20, this.y * 20);
        }
    },
    {
        x: 0,
        y: 1,
        xSig: 1,
        ySig: 1,
        show: function(){
            ctx.fillText('💀', this.x * 20, this.y * 20);
        }
    }
]

const food = {
    x: 0,
    y: 0, 
    show: function(){
        ctx.fillText('🐭', this.x * 20, this.y * 20);
    },
    aparece: function(){
        // generar valores this.x y this.y aleatorios 
        this.x = Math.floor(Math.random() * 29);
        this.y = Math.floor(Math.random() * 19) + 2;

    }
}

function checkEat(){
    if(snake[0].x === food.x && snake[0].y === food.y) {
        food.aparece();
        snake.push({...snake[1]});
        comidas++;
        contadorElem.textContent = comidas;

        puntosActuales++;
        puntosElem.innerText = puntosActuales;

        // Verificar si los puntos actuales son mayores
        // a los almacenados, entonces actualizamos.
        if (puntosActuales > localStorage.getItem('maxScoreSnake')) {
            localStorage.setItem('maxScoreSnake', puntosActuales);
            puntosMax = puntosActuales;
            puntosMaxElem.innerText = puntosMax;
        }
    }
}

function checkCollision() {
    for (let i = 2; i < snake.length; i++) {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            alert('¡Has perdido! No puedes chocar con tu cuerpo.');
            location.reload();
        }
    }
}

function nextMove(x, y) {
    snake.forEach((item, idx) => {
        if (idx === 0) {
            item.x = x;
            item.y = y;
        } else {
            item.x = item.xSig;
            item.y = item.ySig;
            item.xSig = snake[idx-1].x;
            item.ySig = snake[idx-1].y;
        }
    })
}

let direction = 1;
let x = 2;
let y = 1;

food.aparece();
setInterval(() => {
    ctx.clearRect(0, 0, 600, 400);
    nextMove(x, y);
    checkCollision(); // CUIDADOOOOOOOOOOOOOOOOOOOOOOOOOO
    snake.forEach(i => i.show());
    food.show();
    checkEat();

    if (direction === 1) x++;
    else if (direction === 2) y++;
    else if (direction === 3) x--;
    else y--;

    if (x > 29) x = 0;
    else if (x < 0) x = 29;
    if (y > 20) y = 0;
    else if (y < 1) y = 20;
}, 200);


document.querySelector('body')
    .addEventListener('keydown', e => {
        if(e.key === 'ArrowRight') direction = 1;
        if(e.key === 'ArrowDown') direction = 2;
        if(e.key === 'ArrowLeft') direction = 3;
        if(e.key === 'ArrowUp') direction = 4;
})
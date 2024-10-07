const images = document.querySelectorAll('.images img');
const imgUser = document.querySelector('#choiceUser');
const imgCompu = document.querySelector('#choiceCompu');
const options = ['rock', 'paper', 'scissors'];
const boardWinner = document.querySelector('#resultadosGanador');
const boardScores = document.querySelector('#puntosTablero');
let userScore = 0;
let compuScore = 0;

const getChoiceUser = (e) => {
    const image = e.target;
    const choiceUser = image.getAttribute('data-id');
    const imageSrc = image.src;
    // pintar imagen de choices
    imgUser.src = imageSrc; // actualiza la img de la chonpu
    // llamar la función play
    play(choiceUser, e);
};

const play = (choiceUser, e) => {
    // Aquí puedes implementar la lógica del juego
    const tiroCompu = options[Math.floor(Math.random() * options.length)];
    images.forEach(image => {
        if (image.getAttribute('data-id') === tiroCompu) {
            imgCompu.src = image.src;
        }
    });

    if (choiceUser === tiroCompu) {
        boardWinner.innerText = 'Empate';
    } else if (
        (choiceUser === options[0] && tiroCompu === options[2]) ||
        (choiceUser === options[2] && tiroCompu === options[1]) ||
        (choiceUser === options[1] && tiroCompu === options[0])
    ) {
        boardWinner.innerText = 'Ganaste';
        userScore++;
    } else {
        boardWinner.innerText = 'Perdiste';
        compuScore++;
    }

    boardScores.innerText = `Jugador ${ userScore } || ${ compuScore } IA`;
    
};

images.forEach(image => image.addEventListener('click', getChoiceUser));

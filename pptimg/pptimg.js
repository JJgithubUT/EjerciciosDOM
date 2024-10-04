const images = document.querySelectorAll('.images img');
const imgUser = document.querySelector('#choiceUser');
const imgCompu = document.querySelector('#choiceCompu');
const options = ['rock', 'paper', 'scissors'];

const getChoiceUser = (e) => {
    const image = e.target;
    const choiceUser = image.getAttribute('data-id');
    const imageSrc = image.src;
    // pintar imagen de choices
    imgUser.src = imageSrc; // Actualiza la imagen del usuario
    // llamar la función play
    play(choiceUser, e);
};

const play = (choiceUser, e) => {
    // Aquí puedes implementar la lógica del juego
    const tiroCompu = options[Math.floor(Math.random() * options.length)];
    images.forEach(image => {
        if (image.getAttribute('data-id') === tiroCompu) {
            imgCompu.src = image.src; // Actualiza la imagen de la computadora
        }
    });

    if (choiceUser === tiroCompu) {
        alert("EMPATE");
    } else if (
        (choiceUser === options[0] && tiroCompu === options[2]) ||
        (choiceUser === options[2] && tiroCompu === options[1]) ||
        (choiceUser === options[1] && tiroCompu === options[0])
    ) {
        alert("Ganaste");
    } else {
        alert("Perdiste");
    }
    
};

images.forEach(image => image.addEventListener('click', getChoiceUser));

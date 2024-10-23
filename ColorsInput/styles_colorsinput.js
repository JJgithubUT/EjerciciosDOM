const inputRed = document.querySelector('#red');
const inputGreen = document.querySelector('#green');
const inputBlue = document.querySelector('#blue');
const cuerpo = document.querySelector('body');
const textoH2 = document.querySelector('h2');
const textoSpan = document.querySelector('span');
const textoP1 = document.getElementById('textoP1');
const textoP2 = document.getElementById('textoP2');
const textoP3 = document.getElementById('textoP3');

let redColor = 0;
let greenColor = 0;
let blueColor = 0;

const generateColor = () => {
    return `rgb(${ redColor }, ${ greenColor }, ${ blueColor })`;
};

const toHexadecimal = (r,g,b) => {
    let redHex = r.toString(16);
    let greenHex = g.toString(16);
    let blueHex = b.toString(16);
    return `#${ redHex }${ greenHex }${ blueHex }`;
}

inputRed.addEventListener('input', (e) => {
    textoSpan.innerText = generateColor();
    redColor = e.target.value;
    cuerpo.style.backgroundColor = generateColor();
    textoH2.style.color = toContrarioColorRGB(redColor, greenColor, blueColor);
    textoP1.style.color = toContrarioColorRGB(redColor, greenColor, blueColor);
    textoP2.style.color = toContrarioColorRGB(redColor, greenColor, blueColor);
    textoP3.style.color = toContrarioColorRGB(redColor, greenColor, blueColor);
});

inputGreen.addEventListener('input', (e) => {
    textoSpan.innerText = generateColor();
    greenColor = e.target.value;
    cuerpo.style.backgroundColor = generateColor();
    textoH2.style.color = toContrarioColorRGB(redColor, greenColor, blueColor);
    textoP1.style.color = toContrarioColorRGB(redColor, greenColor, blueColor);
    textoP2.style.color = toContrarioColorRGB(redColor, greenColor, blueColor);
    textoP3.style.color = toContrarioColorRGB(redColor, greenColor, blueColor);
});

inputBlue.addEventListener('input', (e) => {
    textoSpan.innerText = generateColor();
    blueColor = e.target.value;
    cuerpo.style.backgroundColor = generateColor();
    textoH2.style.color = toContrarioColorRGB(redColor, greenColor, blueColor);
    textoP1.style.color = toContrarioColorRGB(redColor, greenColor, blueColor);
    textoP2.style.color = toContrarioColorRGB(redColor, greenColor, blueColor);
    textoP3.style.color = toContrarioColorRGB(redColor, greenColor, blueColor);
});

const toContrarioColorRGB = (red, green, blue) => {
    let contrarioRed = 255 - red;
    let contrarioGreen = 255 - green;
    let contrarioBlue = 255 - blue;
    return `rgb(${ contrarioRed }, ${ contrarioGreen }, ${ contrarioBlue })`;
}
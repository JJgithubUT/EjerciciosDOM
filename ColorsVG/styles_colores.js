const body = document.querySelector('body');
const btnChange = document.querySelector('#btnchange');
const btnChangeRandom = document.querySelector('#btnchangerandom');
const textoColor = document.querySelector('#mostrarcolortexto');
const h2 = document.querySelector('h2');

const changeColor = () => {
    const color = prompt('Escribe un color: ');
    textoColor.innerText = color;
    body.style.backgroundColor = color;
}

const changeColorRandom = () => {
    let color = '';
    let colorRGB = '';
    for (let i = 0; i < 6; i++) {
        let num = Math.floor(Math.random() * 16);
        colorRGB += num;
        color += num.toString(16);
    }
    console.log(colorRGB);
    console.log(color);
    console.log(toContrarioHexaDec(color));
    textoColor.innerText = `#${ color }`;
    h2.style.color = `${ toContrarioHexaDec(color) }`;
    body.style.backgroundColor = `#${ color }`;
    color = '';
    colorRGB = '';
}

const toContrarioHexaDec = (numhex) => {
    let red, green, blue;
    let numdec = [numhex[0], numhex[1], numhex[2], numhex[3], numhex[4], numhex[5]];
    for (let i = 0; i < 6; i++) {
        numdec[i] = parseInt(numdec[i], 16);
    }
    red = 255 - (numdec[0] * 16 + numdec[1]);
    green = 255 - (numdec[2] * 16 + numdec[3]);
    blue = 255 - (numdec[4] * 16 + numdec[5]);
    return `rgb(${ red }, ${ green }, ${ blue })`;
}

btnChange.addEventListener('click', changeColor);
btnChangeRandom.addEventListener('click', changeColorRandom);
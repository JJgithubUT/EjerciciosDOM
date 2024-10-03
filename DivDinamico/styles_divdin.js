const caja = document.getElementById('caja');
const ancho = document.getElementById('anchoCaja');
const largo = document.getElementById('largoCaja');
const grosor = document.getElementById('grosorCaja');

const grosorSombra = document.getElementById('grosorSombraCaja');
const ejeXSombra = document.getElementById('ejeXSombraCaja');
const ejeYSombra= document.getElementById('ejeYSombraCaja');

let ejeXSombraValor = 0;
let ejeYSombraValor = 0;
let grosorSombraValor = 0;

ancho.addEventListener('input', () => {
    caja.style.width = ancho.value + "vw";
});

largo.addEventListener('input', () => {
    caja.style.height = largo.value + "vh";
});

grosor.addEventListener('input', () => {
    caja.style.border = grosor.value + "px solid aqua";
});

grosorSombra.addEventListener('change', (e) => {
    grosorSombraValor = e.target.value;
    caja.style.boxShadow = `${ ejeXSombraValor }px ${ ejeYSombraValor }px ${ grosorSombraValor }px aqua`;
});

ejeXSombra.addEventListener('change', (e) => {
    ejeXSombraValor = e.target.value;
    caja.style.boxShadow = `${ ejeXSombraValor }px ${ ejeYSombraValor }px ${ grosorSombraValor }px aqua`; 
});

ejeYSombra.addEventListener('change', (e) => {
    ejeYSombraValor = e.target.value;
    caja.style.boxShadow = `${ ejeXSombraValor }px ${ ejeYSombraValor }px ${ grosorSombraValor }px aqua`; 
});
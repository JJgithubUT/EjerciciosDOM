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

ancho.addEventListener('input', (e) => {
    caja.style.width = e.target.value + "vw";
});

largo.addEventListener('input', (e) => {
    caja.style.height = e.target.value + "vh";
});

grosor.addEventListener('input', (e) => {
    caja.style.border = e.target.value + "px solid aqua";
});

grosorSombra.addEventListener('input', (e) => {
    grosorSombraValor = e.target.value;
    caja.style.boxShadow = `${ ejeXSombraValor }px ${ ejeYSombraValor }px ${ grosorSombraValor }px aqua`;
});

ejeXSombra.addEventListener('input', (e) => {
    ejeXSombraValor = e.target.value;
    caja.style.boxShadow = `${ ejeXSombraValor }px ${ ejeYSombraValor }px ${ grosorSombraValor }px aqua`; 
});

ejeYSombra.addEventListener('input', (e) => {
    ejeYSombraValor = e.target.value;
    caja.style.boxShadow = `${ ejeXSombraValor }px ${ ejeYSombraValor }px ${ grosorSombraValor }px aqua`; 
});
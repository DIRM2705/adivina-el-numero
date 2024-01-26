let numeroSecreto = 0;
let numeroMaximo = 10;
let intentos = 0;
let numerosSorteados = [];

asignarTextoElemento("h1", "Juego del número secreto");
nuevoJuego();


function verificarIntento()
{
    let numeroIngresado = parseInt(document.getElementById("valorAdivinado").value);
    if(numeroIngresado === numeroSecreto)
    {
        asignarTextoElemento("p", `¡Acertaste el número en ${intentos} ${(intentos == 1)? "intento" : "intentos"}!`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else 
    {
        asignarTextoElemento("p", `El número secreto es ${numeroIngresado > numeroSecreto ? "menor" : "mayor"}`);
        limpiarCaja();
        intentos++;
    }
}

function nuevoJuego()
{
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    asignarTextoElemento("p", `Elije un número del 1 al ${numeroMaximo}`);
    limpiarCaja();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

function limpiarCaja()
{
    document.querySelector("#valorAdivinado").value = "";
}

function asignarTextoElemento(elemento, texto)
{
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto()
{
    if(numerosSorteados.length = numeroMaximo)
    {
        asignarTextoElemento("p", "Ya no hay más números");
    }
    else
    {
        let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
        if(numerosSorteados.includes(numeroGenerado))
        {
            return generarNumeroSecreto();
        }
        else
        {
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
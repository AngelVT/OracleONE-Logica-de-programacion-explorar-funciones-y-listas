let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    //verificar si acerto
    if(numeroSecreto === numeroUsuario) {
        asignarTextoElemento('p',`Acertaste el numero secreto en ${intentos} ${(intentos == 1 ? 'intento' : 'intentos')}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('intentar').setAttribute('disabled', true);
    } else {
        //no acerto
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p',`El numero secreto es menor que ${numeroUsuario}`);
        } else {
            asignarTextoElemento('p',`El numero secreto es mayor que ${numeroUsuario}`);
        }
        intentos++;
        limpiarCaja();
    }
}

function generarSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;
    //console.log(numeroGenerado);
    //console.log(listaNumerosSorteados);
    //si ya todos los numeros fueron sorteados salir
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles')
        document.getElementById('intentar').setAttribute('disabled', true);
        document.getElementById('reiniciar').setAttribute('disabled', true);
    } else {
        //si el numero generadfo esta en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

    
    
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego Numero Secreto');
    asignarTextoElemento('p', `Ingresa un numero de 1 a ${numeroMaximo}`);
    intentos = 1;
    document.getElementById('intentar').removeAttribute('disabled');
    numeroSecreto = generarSecreto();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //resetear a condiciones iniciales
    condicionesIniciales();
}

condicionesIniciales();

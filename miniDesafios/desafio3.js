//Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];
//Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesDeProgramacion = ['JavaScript' , 'C' , 'C++' , 'Kotlin' , 'Python'];

console.log(lenguajesDeProgramacion);
//Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguajesDeProgramacion.push('Java', 'Ruby','GoLang');

console.log(lenguajesDeProgramacion);
//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

function mostrarLenguajes() {
    lenguajesDeProgramacion.forEach((lenguaje, indice) => console.log(`${lenguaje} Pocicion: ${indice}`));
    return;
}

mostrarLenguajes();
//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
console.log("---------------------------------");
function mostrarLenguajesReversa() {
    for (let indice = lenguajesDeProgramacion.length - 1; indice >= 0; indice--) {
        console.log(`${lenguajesDeProgramacion[indice]} Pocicion: ${indice}`);
    }
    return;
}

mostrarLenguajesReversa();
//Crea una función que calcule el promedio de los elementos en una lista de números.


function promedio(listaNumeros) {
    let promedio = 0;
    listaNumeros.forEach((numero) => {promedio = promedio + numero});
    promedio = promedio/listaNumeros.length;
    console.log(promedio);
    return promedio;
}

let numerosGrupo1 = [5,10,9,8,7,9,8,10];

promedio(numerosGrupo1);
//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function mostrarMayorA(listaNumeros) {
    let numeroMayor = listaNumeros[0];
    let numeroMenor = listaNumeros[0];
    for (let indice = 0; indice < listaNumeros.length; indice++) {
        if (numeroMayor < listaNumeros[indice]) {
            numeroMayor=listaNumeros[indice];
        }
        if (numeroMenor > listaNumeros[indice]) {
            numeroMenor = listaNumeros[indice];
        }
    }
    console.log(numeroMayor);
    console.log(numeroMenor);
}

function mostrarMayorB(listaNumeros) {
    let numeroMayor = listaNumeros[0];
    let numeroMenor = listaNumeros[0];
    listaNumeros.forEach((valor) => {
        if (numeroMayor < valor) {
            numeroMayor = valor;
        }
        if (numeroMenor > valor) {
            numeroMenor = valor;
        }
    });
    console.log(numeroMayor)
    console.log(numeroMenor);
}

let numerosGrupo2 = [5,12,4,-19,7,9,6,-16];

mostrarMayorA(numerosGrupo2);
mostrarMayorB(numerosGrupo2);
//Crea una función que devuelva la suma de todos los elementos en una lista.


function sumar(listaNumeros) {
    let suma = 0;
    listaNumeros.forEach((valor) => {suma = suma + valor});
    console.log(suma);
    return suma;
}
let numerosGrupo3 = [5,12,4,8,7,9,6,16];

sumar(numerosGrupo3);

//Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function verificarSiContieneA(elemento, listaNumeros) {
    let posicion = -1;
    listaNumeros.forEach((valor, indice) => {if (elemento == valor) {
        posicion = indice;
        }
    });
    console.log(posicion);
    return posicion;
}

function verificarSiContieneB(elemento, listaNumeros) {
    let posicion = listaNumeros.indexOf(elemento);
    console.log(posicion);
    return posicion;
}

let numerosGrupo4 = [5,12,4,8,-7,9,6,16];
let seBusca = -7;

verificarSiContieneA(seBusca, numerosGrupo4);
verificarSiContieneB(seBusca, numerosGrupo4);
//Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumarListas(lista1, lista2) {
    let listaSuma = [];
    if (lista1.length === lista2.length) {
        for(let indice = 0; indice < lista1.length; indice++) {
            listaSuma.push(lista1[indice] + lista2[indice]);
        }
        console.log(listaSuma);
        return listaSuma;
    } else {
        console.log("Las listas deben de ser del mismo tamaño.");
        return;
    }
}

let numerosGrupo5 = [5,12,4,8,-7,9,6,16];
let numerosGrupo7 = [5,10,-4,15,8,0,4,16];

sumarListas(numerosGrupo5,numerosGrupo7);

//Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function listaAlCuadrado(lista) {
    let listaAlCuadrado = [];
    lista.forEach((valor) => {listaAlCuadrado.push(valor*valor) });
    console.log(listaAlCuadrado)
    return listaAlCuadrado;
}

let numerosGrupo8 = [1,2,3,4,5,6,7,8,9,10];

listaAlCuadrado(numerosGrupo8);

/*console.log("experimentos");

const indiceDeNumero = (lista, num) => { const indice = lista.indexOf(num); return indice };

const index = indiceDeNumero([5,8,3,2,15,24,13], -24); console.log(index);

let vegetales = ["Repollo", "Nabo", "Rábano", "Zanahoria"];
console.log(vegetales);
// ["Repollo", "Nabo", "Rábano", "Zanahoria"]

let pos = 1,
    numElementos = 2;

let elementosEliminados = vegetales.splice(pos, numElementos);
// ["Nabo", "Rábano"] ==> Lo que se ha guardado en "elementosEliminados"

console.log(vegetales);
// ["Repollo", "Zanahoria"] ==> Lo que actualmente tiene "vegetales"

let copiaArray = vegetales.slice();

console.log(vegetales);
// ["Repollo", "Zanahoria"]; ==> Copiado en "copiaArray"

let array = Array.from("1930");
array.forEach((elemento, i) => {array[i] = parseInt(elemento)});
console.log(array);*/

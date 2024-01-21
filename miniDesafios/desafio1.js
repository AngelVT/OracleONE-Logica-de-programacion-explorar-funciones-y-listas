//Crear una función que muestre "¡Hola, mundo!" en la consola.
function consolaHolaMundo() {
    console.log("¡Hola, mundo!");
    return;
}
consolaHolaMundo();

//Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function consolaSaludo(nombre) {
    return `¡Hola, ${nombre}!`;
}

function consolaSaludo2(nombre) {
    console.log(`¡Hola, ${nombre}!`);
    return;
}

console.log(consolaSaludo('Platano'));
consolaSaludo2('Aguacate');

//Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function doblarNumero(numero) {
    return numero * 2;
}

console.log(doblarNumero(3));

//Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedio(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3)/3;
}

console.log(promedio(8,9,5));

//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function determinarMayor(valor1, valor2) {
    if (valor1 > valor2) {
        return valor1;
    } else {
        return valor2;
    }
}

console.log(determinarMayor(6,3));

//Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function cuadradoDeNumero(valor) {
    return valor*valor;
}

console.log(cuadradoDeNumero(3));
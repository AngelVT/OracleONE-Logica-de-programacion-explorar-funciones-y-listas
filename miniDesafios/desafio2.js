//Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function calcularIMC(estatura, peso) {
    let IMC = peso/(estatura*estatura);
    return IMC;
}

console.log(calcularIMC(1.75, 70));

//Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function calcularFactorial(numero) {
    let factorial = 1;
    for (let index = 1; index <= numero; index++) {
        factorial = factorial * index;
    }
    return factorial;
}

function calcularFactorialWhile(numero) {
    let factorial = 1;
    let contador = 1;
    while (contador <= numero){
        factorial = factorial * contador;
        contador++;
    }
    return factorial;
}

console.log(calcularFactorialWhile(0));
console.log(calcularFactorial(1));

//Crea una función que convierta un valor en dólares, pasado como parámetro,
//y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país).
//Para esto, considera la cotización del dólar igual a R$4,80.

function valorPesoMexicano(){
    let valorPeso = 17.09;
    return valorPeso;
}

function convertirDolarAPesosMexicanos1(valorDolares) {
    let equivalentePeso = valorPesoMexicano();
    let pesosMexicanos = valorDolares * equivalentePeso
    return pesosMexicanos;
    //return valorDolares * valorPesoMexicano();
}

function convertirDolarAPesosMexicanos2(valorDolares) {
    let equivalentePeso = 17.09;
    let pesosMexicanos = valorDolares * equivalentePeso
    return pesosMexicanos;
    //return valorDolares * equivalentePeso;
}

console.log(convertirDolarAPesosMexicanos1(5));
console.log(convertirDolarAPesosMexicanos2(5));


//Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
function calcularSalaRectangular(altura, ancho) {
    let area = altura * ancho;
    //perimetro = (altura*2) + (ancho*2);
    let perimetro = 2 * (altura + ancho)
    console.log(`El area es ${area}`);
    console.log(`El perimetro es ${perimetro}`);
    return;
}
calcularSalaRectangular(5, 6);

//Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function calcularSalaCircular(radio) {
    let pi = 3.1416;
    let perimetro = pi * (radio * 2);
    let area = pi * (radio*radio);
    console.log(`El area es ${area}`);
    console.log(`El perimetro es ${perimetro}`);
    return;
}

calcularSalaCircular(10);
//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function tabladeMultiplicar(numero) {
    for (let index = 1; index <= 10; index++) {
        console.log(numero * index);
    }
}

tabladeMultiplicar(4);
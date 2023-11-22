function promedio(num1, num2, num3) {
let result = (num1 + num2 + num3) / 3;
console.log(`El promedio de los tres números es ${result}`);
}

let numero1 = parseFloat(prompt("Ingrese el primer número"));
let numero2 = parseFloat(prompt("Ingrese el segundo número"));
let numero3 = parseFloat(prompt("Ingrese el tercer número"));

promedio(numero1, numero2, numero3);
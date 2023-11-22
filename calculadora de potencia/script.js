function calculate(base, exponente) {
    let operacion = base ** exponente;
    return operacion;
}

let num1 = parseInt(prompt("Ingresa el número 1"));
let num2 = parseInt(prompt("Ingresa el número 2"));

let result = calculate(num1, num2);
console.log(result);
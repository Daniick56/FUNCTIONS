function calculate(base, exponent) {
    let operation = base ** exponent;
    return operation;
}

let num1 = parseInt(prompt("Enter number 1"));
let num2 = parseInt(prompt("Enter number 2"));

let result = calculate(num1, num2);
console.log(result);

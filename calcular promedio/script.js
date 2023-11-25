function calculateAverage(num1, num2, num3) {
    let result = (num1 + num2 + num3) / 3;
    console.log(`The average of the three numbers is ${result}`);
}

let number1 = parseFloat(prompt("Enter the first number"));
let number2 = parseFloat(prompt("Enter the second number"));
let number3 = parseFloat(prompt("Enter the third number"));

calculateAverage(number1, number2, number3);

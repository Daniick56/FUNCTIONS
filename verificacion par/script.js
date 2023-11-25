function evenOrOdd(number) {
    if (number % 2 === 0) {
        console.log("The number is even.");
    } else {
        console.log("The number is not even.");
    }
}

let number = parseInt(prompt("Enter a number to determine if it's even or odd."));
evenOrOdd(number);

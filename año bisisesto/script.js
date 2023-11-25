function promptWhile(text) {
    let input = parseFloat(prompt(text));
    while (isNaN(input)) {
        alert("Enter a valid year.");
        input = parseFloat(prompt(text));
    }
    return input;
}

function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 !== 0 || year % 400 === 0) {
            console.log("It is a leap year.");
        } else {
            console.log("It is NOT a leap year.");
        }
    } else {
        console.log("It is NOT a leap year.");
    }
}

let userYear = promptWhile("Enter a year to determine if it is a leap year or not.");
isLeapYear(userYear);

function convertToUpperCase(inputString) {
    if (inputString !== null) {
        let conversion = inputString.toUpperCase();
        console.log(conversion);
    } else {
        console.log("User input canceled.");
    }
}

let text = prompt("Enter a text string");
convertToUpperCase(text);

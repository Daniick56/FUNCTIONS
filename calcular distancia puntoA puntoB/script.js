function promptWhile(text) {
    let input = parseFloat(prompt(text));
    while (isNaN(input)) {
        alert("Enter a numerical value.");
        input = parseFloat(prompt(text));
    }
    return input;
}

function calculateDistance(x1, y1, x2, y2) {
    const result = ((x2 - x1) ** 2) + ((y2 - y1) ** 2);
    let distance = Math.sqrt(result);
    return distance.toFixed(2);
}

let x1 = promptWhile("Enter the X-axis in the first point.");
let y1 = promptWhile("Enter the Y-axis in the first point.");
let x2 = promptWhile("Enter the X-axis in the second point.");
let y2 = promptWhile("Enter the Y-axis in the second point.");

let result = calculateDistance(x1, y1, x2, y2);
console.log(`The distance between the first point and the second point is ${result}`);

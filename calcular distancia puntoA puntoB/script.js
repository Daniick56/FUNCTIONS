function promptWhile(text) {
    let input = parseFloat(prompt(text));
    while (isNaN(input)) {
        alert("Ingrese un dato numérico.");
        input = parseFloat(prompt(text));
    }
    return input;
}

function calculateDistance(x1, y1, x2, y2) {
    const result = ((x2-x1)**2) + ((y2-y1)**2);
    let squared = result ** 0.5;
    return squared.toFixed(2);
}


let x1 = promptWhile("Ingrese el eje X en el primer punto.");
let y1 = promptWhile("Ingrese el eje Y en el primer punto.");
let x2 = promptWhile("Ingrese el eje X en el segundo punto.");
let y2 = promptWhile("Ingrese el eje Y en el segundo punto.");

let resultado = calculateDistance(x1, y1, x2, y2);
console.log(`La distancia entre el primer punto al segundo punto es de ${resultado}`);
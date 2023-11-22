function promptWhile(text) {
    let input = parseFloat(prompt(text));
    while (isNaN(input)) {
        alert("Introduce un año válido.");
        input = parseFloat(prompt(text));
    }
    return input;
}

function esBisiesto(año) {
    if (año % 4 === 0) {
        if (año % 100 != 0) {
            console.log("SI es un año bisiesto.");
        }else if (año % 400 === 0) {
            console.log("SI es un año bisiesto.");
        } 
    }else {
        console.log("NO es un año bisiesto.");
    }
}

let añoUsuario = promptWhile("Ingrese un año para determinar si este es bisiesto o no.");
esBisiesto(añoUsuario);
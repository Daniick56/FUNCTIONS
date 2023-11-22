function parOImpar(number) {
    if (number %2 ===0 ) {
        console.log("El número es par.");    
    }else {
        console.log("El número no es par.");
    }
}

let numero = parseInt(prompt("Ingrese un número para determinar si es par o impar."));
parOImpar(numero);
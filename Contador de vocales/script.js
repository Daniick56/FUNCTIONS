
function contVocales(vocales) {
    let a = vocales.includes("a");
    if (a) {
        console.log("La cadena incluye la vocal a");
    }

    let e = vocales.includes("e");
    if (e) {
        console.log("La cadena incluye la vocal e");
    }

    let i = vocales.includes("i");
    if (i) {
        console.log("La cadena incluye la vocal i");
    }

    let o = vocales.includes("o");
    if (o) {
        console.log("La cadena incluye la vocal o");
    }
    

    let u = vocales.includes("u");
    if (u) {
        console.log("La cadena incluye la vocal u");
    }
}

let cadenaUsuario = prompt("Ingrese una cadena de texto por favor.").toLowerCase();

contVocales(cadenaUsuario);
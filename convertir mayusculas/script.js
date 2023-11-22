function upperCase(cadena) {
    if (cadena !== null) {
        let conversion = cadena.toUpperCase();
        console.log(conversion);
    } else {
        console.log("Entrada de usuario cancelada.");
    }
}

let text = prompt("Ingrese una cadena de texto");
upperCase(text);

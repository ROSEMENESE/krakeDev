ejecutarPrueba1 = function () {
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}
recorrerCadena = function (cadena) {
    let caracter;
    for (let posicion = 0; posicion < cadena.length; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("caracter" + " " + caracter + " " + "posicion" + " " + posicion);
    }

    for (let posicion = 0; posicion <= cadena.length - 1; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("CARACTER" + " " + caracter + " " + "posicion" + " " + posicion);
    }
}

invertirCadena = function (cadena) {
    let palabra;
    let resultado = "";
    for (let posicion = cadena.length - 1; posicion >= 0; posicion--) {
        palabra = cadena.charAt(posicion);
        resultado = resultado + palabra;
    }
    mostrarTexto("prueba2", resultado);
}
ejecutarPrueba2 = function () {
    let msj;
    msj = recuperarTexto("txtCadena");
    invertirCadena(msj);
}
esMayuscula = function (caracter) {
    caracter = caracter.toString();
    let letra;
    letra = caracter.charCodeAt(0);
    if (letra >= 65 && letra <= 90) {
        return true;
    } else {
        return false;
    }
}

esDigito = function (caracter) {
    caracter = caracter.toString();
    let numero;
    numero = caracter.charCodeAt(0);

    if (numero >= 48 && numero <= 57) {
        return true;
    } else {
        return false;
    }
}

esGuion = function (caracter) {
    caracter = caracter.toString();
    
    if (caracter == '-'&& caracter=="*"&& caracter=="_") {
        return true;
    } else {
        return false;
    }
}

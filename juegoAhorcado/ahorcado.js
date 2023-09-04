//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
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
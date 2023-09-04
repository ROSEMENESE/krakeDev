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
buscarLetra=function(cadena,letra){
    let letraIterada;
    let existeLetra=false;
    for(let i=0;i<cadena.length;i++){
        letraIterada=cadena.charAt(i);
        if(letraIterada==letra){
            existeLetra=true;
        }
    }
    if(existeLetra==true){
       return true;
    }else{
        return  false;
    }
}
contarMayusculas = function(cadena){
    let letra;
    let contadorMayusculas=0;
    for(let i=0;i<cadena.length;i++){
        letra=cadena.charAt(i);
        esMayuscula(letra);
        if(esMayuscula(letra)){
            contadorMayusculas=contadorMayusculas+1 
        }
    }
}
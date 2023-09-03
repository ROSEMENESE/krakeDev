validarEstructura = function (placa) {
    let correcto = false;
    let msgError = ``;

    if (placa.length == 7 || placa.length == 8) {
        correcto = true;
    } if (placa.length < 7 || placa.length > 8) {
        correcto = false;
        msgError += "La placa debe tener entre 7 u 8 caracteres\n";
    } if (!esMayuscula(placa[0])) {
        correcto = false;
        msgError += "El primer caracter debe ser una letra mayuscula\n";
    } if (!esMayuscula(placa[1])) {
        correcto = false;
        msgError += "El segundo caracter debe ser una letra mayuscula\n";
    } if (!esMayuscula(placa[2])) {
        correcto = false;
        msgError += "El tercer caracter debe ser una letra mayuscula\n";
    } if (!esGuion(placa[3])) {
        correcto = false;
        msgError += "El cuarto caracter debe ser un guion\n";
    } if (!esDigito(placa[4])) {
        correcto = false;
        msgError += "El quinto caracter debe ser un digito\n";
    } if (!esDigito(placa[5])) {
        correcto = false;
        msgError += "El sexto caracter debe ser un digito\n";
    } if (placa.length == 7) {
        if (!esDigito(placa[6])) {
            correcto = false;
            msgError += "El septimo caracter debe ser un digito\n";
        }
    } if (placa.length == 8) {
        if (!esDigito(placa[7])) {
            correcto = false;
            msgError += "El octavo caracter debe ser un digito\n";
        }
    } if (correcto == false) {
        return msgError;
    } else if (correcto == true) {
        return null;
    }


}
mostrarTexto = function (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.innerHTML = mensaje;
}
mostrarTextoEnCaja = function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.value = mensaje;
}
const provincias = {
    'A': 'Azuay',
    'B': 'Bolivar',
    'U': 'Caniar',
    'C': 'Carchi',
    'X': 'Cotopaxi',
    'H': 'Chimborazo',
    'O': 'El Oro',
    'E': 'Esmeraldas',
    'W': 'Galapagos',
    'G': 'Guayas',
    'I': 'Imbabura',
    'L': 'Loja',
    'R': 'Los Rios',
    'M': 'Manabi',
    'V': 'Morona Santiago',
    'N': 'Napo',
    'S': 'Pastaza',
    'P': 'Pichincha',
    'Q': 'Orellana',
    'K': 'Sucumbios',
    'T': 'Tungurahua',
    'Z': 'Zamora Chinchipe',
    'Y': 'Santa Elena',
    'J': 'Santo Domingo de los Tsachilas'
};

obtenerProvincia = function (placa) {
    return provincias[placa[0]] || null;
}

const vehiculo = {
    'A': 'Vehiculo Comercial',
    'U': 'Vehiculo Comercial',
    'Z': 'Vehiculo Comercial',
    'E': 'Vehiculo Gubernamental',
    'X': 'Vehiculo de Uso Oficial',
    'M': 'Vehiculo Gobierno Autonomo Descentralizado',
    'B': 'Vehiculo particular',
    'C': 'Vehiculo particular',
    'D': 'Vehiculo particular',
    'H': 'Vehiculo particular',
    'O': 'Vehiculo particular',
    'W': 'Vehiculo particular',
    'G': 'Vehiculo particular',
    'F': 'Vehiculo particular',
    'L': 'Vehiculo particular',
    'I': 'Vehiculo particular',
    'R': 'Vehiculo particular',
    'V': 'Vehiculo particular',
    'N': 'Vehiculo particular',
    'S': 'Vehiculo particular',
    'P': 'Vehiculo particular',
    'Q': 'Vehiculo particular',
    'K': 'Vehiculo particular',
    'Y': 'Vehiculo particular',
    'T': 'Vehiculo particular',
    'J': 'Vehiculo particular',
}
obtenerTipoVehiculo = function (placa) {
    return vehiculo[placa[1]] || null;
}

const picoPlaca = {
    '1': 'Lunes',
    '2': 'Lunes',
    '3': 'Martes',
    '4': 'Martes',
    '5': 'Miercoles',
    '6': 'Miercoles',
    '7': 'Jueves',
    '8': 'Jueves',
    '9': 'Viernes',
    '0': 'Viernes',

}
obtenerDiaPicoYPlaca = function (placa) {
    let digito=placa[placa.length - 1];
    return picoPlaca[digito] || null;
}

limpiar = function () {
        mostrarTextoEnCaja("placa", "");
        mostrarTexto("lblValidar", "");
        mostrarTexto("lblProvincia", "");
        mostrarTexto("lblVehiculo", "");
        mostrarTexto("lblPicoPlaca", "");
}
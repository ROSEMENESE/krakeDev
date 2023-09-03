obtenerAleatorio = function () {
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorJuego;
    aleatorio = Math.random();
    numeroMultiplicado = aleatorio * 3;
    numeroEntero = parseInt(numeroMultiplicado);
    valorJuego = numeroEntero + 1;
    return valorJuego;
}

generarElemento = function () {
    let aleatorio;
    aleatorio = obtenerAleatorio();
    if (aleatorio == 1) {
        return "piedra";
    } else if (aleatorio == 2) {
        return "papel";
    } else if (aleatorio == 3) {
        return "tijera";
    }
}

determinarGanador = function (eleccionJugador1, eleccionJugador2) {
    const opciones = {
        piedra: { venceA: 'tijera' },
        papel: { venceA: 'piedra' },
        tijera: { venceA: 'papel' }
    }

    if (eleccionJugador1 === eleccionJugador2) {
        return 0;
    } else if (opciones[eleccionJugador1].venceA === eleccionJugador2) {
        return 1;
    } else {
        return 2;
    }
}

generarRuta = function (nombre) {
    return `./imagenes/${nombre}.png`;
}
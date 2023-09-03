validarPlaca = function () {
    let componente;
    let valorIngresado;
    componente = document.getElementById("placa");
    valorIngresado = componente.value;
    let erroresEstructura;
    let provincia;
    let msgProvincia = "PROVINCIA INCORRECTA";
    let vehiculo;
    let picoYPlaca;

    erroresEstructura = validarEstructura(valorIngresado);

    if (erroresEstructura == null) {
        mensaje = "ESTRUCTURA VALIDA";
        mostrarTexto("lblValidar", mensaje);
        provincia = obtenerProvincia(valorIngresado);
        vehiculo = obtenerTipoVehiculo(valorIngresado);
        picoYPlaca = obtenerDiaPicoYPlaca(valorIngresado);
        if (provincia !== null) {
            mostrarTexto("lblProvincia", provincia);
        } else if (provincia == null) {
            mostrarTexto("lblProvincia", msgProvincia);
        } if (vehiculo !== null) {
            mostrarTexto("lblVehiculo", vehiculo);
        } else if (vehiculo == null) {
            msgVehiculo = "VEHICULO INCORRECTO"
            mostrarTexto("lblVehiculo", msgVehiculo);
        } if (picoYPlaca !== null) {
            mostrarTexto("lblPicoPlaca", picoYPlaca);
        }
    } else if (erroresEstructura !== null) {
        mensaje = "ESTRUCTURA INCORRECTA";
        mostrarTexto("lblValidar", mensaje);
        mostrarTexto("lblPlaca", erroresEstructura);
    }
}

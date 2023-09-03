puntosUsuario = 0;
puntosComputador = 0;
jugar = function (seleccionado) {
    let elemento = generarElemento();
    let imagenRuta = generarRuta(elemento);
    mostrarImagen("imagenJuego", imagenRuta);
    let msgGanaste = "GANASTE LA PARTIDA!!";
    let msgEmpate = "EMPATE!!";
    let msgPerdiste = "PERDISTE LA PARTIDA!!";
    determinarGanador(elemento, seleccionado);
    if (determinarGanador(seleccionado, elemento) == 0) {
        mostrarTexto("lblResultado", msgEmpate);
    } else if (determinarGanador(seleccionado, elemento) == 1) {
        mostrarTexto("lblResultado", msgGanaste);
        puntosUsuario=puntosUsuario+1;
        mostrarTexto("puntajeUsuario",puntosUsuario);
    } else if (determinarGanador(seleccionado, elemento) == 2) {
        mostrarTexto("lblResultado", msgPerdiste);
        puntosComputador=puntosComputador+1;
        mostrarTexto("puntajeComputador",puntosComputador);
    }
    
}

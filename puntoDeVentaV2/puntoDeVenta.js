calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto;
    let cantidad;
    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;
    //1. Recuperar el nombre del producto como String
    nombreProducto = recuperarTexto("txtProducto");
    esProductoValido(nombreProducto, "lblError1");
    //2. Recuperar el precio como float
    precioProducto = recuperarFloat("txtPrecio");
    esPrecioValido(precioProducto, "lblError3");
    //3. Recuperar cantidad como int
    cantidad = recuperarInt("txtCantidad");
    esCantidadValida(cantidad, "lblError2");
    //4. Recuperar el porcentaje de descuento como int
    //5. Invocar a calcularSubtotal y el retorno guardar en la variable valorSubtotal
    if (esProductoValido(nombreProducto, "lblError1") && esCantidadValida(cantidad, "lblError2") & esPrecioValido(precioProducto, "lblError3")){
        valorSubtotal = calcularSubtotal(precioProducto, cantidad);
        mostrarTexto("lblSubtotal", valorSubtotal);
        valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad);
        mostrarTexto("lblDescuento", valorDescuento);
        valorIVA = calcularIVA(valorSubtotal);
        mostrarTexto("lblValorIVA", valorIVA);
        valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
        mostrarTexto("lblTotal", valorTotal);
    }


}
limpiar = function () {
    mostrarTextoEnCaja("txtProducto", "");
    mostrarTextoEnCaja("txtCantidad", "0");
    mostrarTextoEnCaja("txtPrecio", "0.0");
    mostrarTextoEnCaja("txtPorcentajeDescuento", "0");
    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblDescuento", "0.0");
    mostrarTexto("lblValorIVA", "0.0");
    mostrarTexto("lblTotal", "0.0");
    mostrarTexto("lblResumen", "");
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */
}
/* SI TODO FUNCIONA, HACER UN PUSH */

esProductoValido = function (producto, idComponenteError) {
    let errorProducto = false;
    if (producto == "") {
        mostrarTexto(idComponenteError, " CAMPO OBLIGATORIO");
        errorProducto = true;
    } if (producto.length > 10) {
        mostrarTexto(idComponenteError, " MAXIMO 10 CARACTERES");
        errorProducto = true;
    } if (errorProducto == false) {
        mostrarTexto(idComponenteError, "");   
    }
    return !errorProducto;
}

esCantidadValida = function (cantidad, idComponenteError) {
    let errorCantidad = false;

    if (isNaN(cantidad)) {
        mostrarTexto(idComponenteError, " CAMPO OBLIGATORIO");
        errorCantidad = true;
    } if (cantidad < 0 || cantidad > 100) {
        mostrarTexto(idComponenteError, " MAXIMO 100 PRODUCTOS");
        errorCantidad = true;
    }if(errorCantidad==false){
        mostrarTexto(idComponenteError,"");
    }
    return !errorCantidad;
}

esPrecioValido = function (precio, idComponenteError) {
    let errorPrecio = false;
    if (isNaN(precio)){
        mostrarTexto(idComponenteError, " CAMPO OBLIGATORIO");
        errorPrecio = true
    }if (precio < 0 || precio > 50) {
        mostrarTexto(idComponenteError, "PRECIO MAXIMO 50");
        errorPrecio = true;
    }if(errorPrecio==false){
        mostrarTexto(idComponenteError,"");
    }
    return !errorPrecio;
}

calcularValorDescuento = function (monto, porcentajeDescuento) {//
    let valorDescuento;
    valorDescuento = monto * porcentajeDescuento / 100;
    return valorDescuento;
}

calcularIVA = function (monto) {
    let valorIVA;
    valorIVA = monto * 12 / 100;
    return parseFloat(valorIVA.toFixed(3));
}

calcularSubtotal = function (precio, cantidad) {
    let subtotal;
    subtotal = precio * cantidad;
    return subtotal.toFixed(2);
}

calcularTotal = function (subtotal, descuento, iva) {
    let total;
    
        total = subtotal - descuento + iva;
        return total.toFixed(2);

}

    calcularDescuentoPorVolumen = function (subtotal, cantidad){ 
        let descuento;


        if (cantidad < 3) {
            descuento = subtotal;
            return descuento.toFixed(2);
        } else if (cantidad >= 3 && cantidad <= 5) {
            descuento = (subtotal * 3) / 100;
            return descuento.toFixed(2);
        } else if (cantidad >= 6 && cantidad <= 11) {
            descuento = (subtotal * 4) / 100;
            return descuento.toFixed(2);
        } else{
            descuento = (subtotal * 5) / 100;
            return descuento.toFixed(2);
        }
      
    }
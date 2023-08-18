calcularValorDescuento=function(monto,porcentajeDescuento){
    let valorDescuento;
    valorDescuento=monto*porcentajeDescuento/100;
    return valorDescuento;
}

calcularIVA=function(monto){
    let valorIVA;
    valorIVA=monto*12/100;
    return valorIVA;
}

calcularSubtotal=function(precio,cantidad){
    let subtotal;
    subtotal=precio*cantidad;
    return subtotal;
}

 calcularTotal=function(subtotal,descuento,iva){
    let total;
    total=subtotal - valorDescuento + valorIVA;
    return total;
 }

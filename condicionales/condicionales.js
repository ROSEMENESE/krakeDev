calcularTasaInteres=function(ingresoAnual){
    let ingresoAnual;
    let interes;
    let ingresoAnualTotal;
    
    ingresoAnualTotal=parseFloat(ingresoAnual);

    if(ingresoAnualTotal<300000){
        interes=ingresoAnualTotal*16/100;
    }else if(ingresoAnualTotal>=300000 && ingresoAnualTotal<500000){
        interes=ingresoAnualTotal*15/100;
    }else if(ingresoAnualTotal>=500000 && ingresoAnualTotal<1000000){
        interes=ingresoAnualTotal*14/100;
    }else if(ingresoAnualTotal>=1000000 && ingresoAnualTotal<2000000){
        interes=ingresoAnualTotal*13/100;
    }else if(ingresoAnualTotal>=2000000){
        interes=ingresoAnualTotal*12/100;
    }
    return interes;
}

calcularCapacidadPago=function(edad,ingresos,egresos){
    let edad;
    let ingresos;
    let egresos;
    let liquidez;
    let cuotaPago;

    edad=parseInt(edad);
    ingresos=parseFloat(ingresos);
    egresos=parseFloat(egresos);
    liquidez=ingresos-egresos;

    if(edad>50){
        cuotaPago=liquidez*30/100;
    }else if(edad<=50){
        cuotaPago=liquidez*40/100;
    }
    return cuotaPago;
}

calcularDescuento=function(precio,cantidad){
    let precio;
    let cantidad;
    let valorPagar;
    let descuento;
    let totalPago;

    precio=parseFloat(precio);
    cantidad=parseInt(cantidad);
    valorPagar=precio*cantidad;

    if(cantidad<3){
        totalPago=valorPagar
    }else if(cantidad>3 && cantidad <=5){
        descuento=valorPagar*2/100;
        totalPago=valorPagar-descuento;
    }else if(cantidad>=6 && cantidad <=11){
        descuento=valorPagar*3/100;
        totalPago=valorPagar-descuento;
    }else if(cantidad>=12){
        descuento=valorPagar*4/100;
        totalPago=valorPagar-descuento;
    }
    return totalPago;
}

determinarColesterolLDL=function(nivelColesterol){
    let nivelColesterol;
    let mensaje;
    
    nivelColesterol=parseFloat(nivelColesterol);
    if(nivelColesterol<100){
        mensaje="ÓPTIMO"
    }else if(nivelColesterol>=100 && nivelColesterol<=129){
        mensaje="CASI ÓPTIMO"
    }else if(nivelColesterol>=130 && nivelColesterol<=159){
        mensaje="LIMITE SUPERIOR DEL RANGO NORMAL"
    }else if(nivelColesterol>=160 && nivelColesterol<=189){
        mensaje="ALTO"
    }else if(nivelColesterol>=190){
        mensaje="MUY ALTO"
    }
    return mensaje;
}

validarClave=function(clave){
    clave=clave.toString();//me aseguro de que la clave sea un string
    if(clave.length>=8 && clave.length<=16){
        return true;
    }else{
        return false;
    }
}

esMayuscula=function(caracter){
    caracter=caracter.toString();
    let letra;
    letra=caracter.charCodeAt(0);
    if(letra>=65 && letra<=90){
        return true;
    }else{
        return false;
    }
}
esMinuscula=function(caracter){
    caracter=caracter.toString();
    let nombre;
    nombre=caracter.charCodeAt(0);
    if(nombre>=97 && nombre<=122){
        return true;
    }else{
        return false;
    }  
}

esDigito=function(caracter){
    caracter=caracter.toString();
    let numero;
    numero=caracter.charCodeAt(0);

    if(numero>=48 && numero<=57){
        return true;
    }else{
        return false;
    }
}

darPermiso=function(notaMatematica,notaFisica,notaGeometria){
    let notaMath;
    let notaFisic;
    let notaGeo;

    notaMath=parseFloat(notaMatematica);
    notaFisic=parseFloat(notaFisica);
    notaGeo=parseFloat(notaGeometria);

    if(notaMath>90 || notaFisic>90 || notaGeo>90){
        return true;
    }else{
        return false;
    }
}

otorgarPermiso=function(notaMatematica,notaFisica,notaGeometria){
    let noteMath;
    let noteFisic;
    let noteGeometric;

    noteMath=parseFloat(notaMatematica);
    noteFisic=parseFloat(notaFisica);
    noteGeometric=parseFloat(notaGeometria);

    if(noteMath>90 || noteFisic>90 && noteGeometric>80){
        return true;
    }else{
        return false;
    }
}

dejarSalir=function(){
    let calMath;
    let calFisic;
    let calGeomtric;

    calMath=parseFloat(notaMatematica);
    calFisic=parseFloat(notaFisic);
    calGeomtric=parseFloat(notaGeometria);
   
    if((calMath>=90 || calFisic>=90 || notaGeo>=90) && calFisic>calMath){
        return true;
    }else{
        return false;
    }
}
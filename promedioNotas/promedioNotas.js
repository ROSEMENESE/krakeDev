calcularPromedioNotas=function(){
    let nota1;
    let nota2;
    let nota3;
    let promedio;
    let resultado;
    let reprobado;
    let buenTrabajo;
    let excelente;
    let datosIncorrectos;
    nota1=recuperarFloat("nota1");
    nota2=recuperarFloat("nota2");
    nota3=recuperarFloat("nota3");

    promedio=calcularPromedio(nota1,nota2,nota3);
    resultado=promedio.toFixed(2);
    reprobado="REPROBADO"
    buenTrabajo="BUEN TRABAJO"
    excelente="EXCELENTE"
    datosIncorrectos="DATOS INCORRECTOS"

    mostrarTexto("promedio",resultado);
    
    if(promedio<5 && promedio>0){
        mostrarImagen("imagenNotas","./imagenes/reprobado.gif");
        mostrarTexto("texto",reprobado);
    }else if(promedio>=5 && promedio<=8){
        mostrarImagen("imagenNotas","./imagenes/buenTrabajo.gif");
        mostrarTexto("texto",buenTrabajo);
    }else if(promedio>8 && promedio<=10){
        mostrarImagen("imagenNotas","./imagenes/excelente.gif");
        mostrarTexto("texto",excelente);
    }else if(promedio>10){
        mostrarImagen("imagenNotas","./imagenes/error.gif");
        mostrarTexto("texto",datosIncorrectos);
    }
}
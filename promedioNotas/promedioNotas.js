calcularPromedioNotas=function(){
    let nota1;
    let nota2;
    let nota3;
    let promedio;
    let resultado;
    nota1=recuperarFloat("nota1");
    nota2=recuperarFloat("nota2");
    nota3=recuperarFloat("nota3");

    promedio=calcularPromedio(nota1,nota2,nota3);
    resultado=promedio.toFixed(2);

    mostrarTexto("promedio",resultado);
    
    if(promedio>7){
        mostrarImagen("imagenNotas","./imagenes/soyExito.gif");
    }else{
        mostrarImagen("imagenNotas","./imagenes/fracaso.gif");
    }
}
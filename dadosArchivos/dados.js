jugar=function(){
    let aleatorio;
    let msgGanaste1;
    let msgGanaste2;
    let msgPerdiste1;
    let msgPerdiste2;
    aleatorio=lanzarDado();
    cambiarTexto("lblNumero",aleatorio)
    msgGanaste1="ES MAYOR A 3";
    msgGanaste2="GANASTE";
    msgPerdiste1="ES MENOR A 3";
    msgPerdiste2="ESTAS DE MALAS";
    if(aleatorio>3){
        cambiarTexto("msg1",msgGanaste1);
        cambiarTexto("msg2",msgGanaste2);
    }else{
        cambiarTexto("msg1",msgPerdiste1);
        cambiarTexto("msg2",msgPerdiste2);
    }
}

//Crear una función llamada lanzarDado
//No recibe parámetros
//Retorna un número aleatorio entre 1 y 6
lanzarDado=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio=Math.random();//entre 0 y 1
    numeroMultiplicado=aleatorio*6;
    numeroEntero=parseInt(numeroMultiplicado);//entre 0 y 5
    valorDado=numeroEntero+1;//entre 0 y 6 
    return valorDado;
}
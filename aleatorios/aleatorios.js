numA=function(){
    let nAleatorio;
    nAleatorio=Math.floor(Math.random()*100);
    return nAleatorio;
}
generarAleatorios=function(){
let aleatorios=[];
    let numero= recuperarInt("txtNumber");
    if(numero>=5 && numero<=20){
        for(let i=0;i<numero;i++){
            console.log(aleatorios);
            let num1=numA();
            aleatorios.push(num1);
        }
       mostrarResultados(aleatorios);
    }
}

mostrarResultados=function(arregloNumeros){
    let cmpTabla=document.getElementById("divTabla");
    let contenidoTabla="<table><tr><th>NUMERO</th></tr>"
    let numeros;
    for(let i=0;i<arregloNumeros.length;i++){
        numeros=arregloNumeros[i];
        contenidoTabla+="<tr><td>";
        contenidoTabla+=numeros;
        contenidoTabla+="<tr><td>";
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;

}

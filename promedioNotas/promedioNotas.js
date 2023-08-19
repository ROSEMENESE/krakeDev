calcularPromedioNotas=function(){
    let nota1;
    let nota2;
    let nota3;
    let promedio;
    nota1=recuperarFloat("nota1");
    nota2=recuperarFloat("nota2");
    nota3=recuperarFloat("nota3");

    promedio=calcularPromedio(nota1,nota2,nota3);

    mostrarTexto("promedio",promedio);
}
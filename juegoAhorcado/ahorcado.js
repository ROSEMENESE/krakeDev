//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta=" ";
let intentos=0;
let coincidencias =0;
let errores=0;
esMayuscula = function(caracter) {

    caracter = caracter.charCodeAt(0);

    if (caracter >= 65 && caracter <= 90) {
        return true;
    } else {
        return false;
    }
}

guardarPalabra = function () {
    let letra = recuperarTexto("txtSecreta");
    if (letra.length == 5){
        let mayusculas=true;
        for(let i=0;i<letra.length;i++){
            if(!esMayuscula(letra.charAt(i))){
                mayusculas=false;
            }
        }
        if(mayusculas){
        palabraSecreta=letra;
        console.log(palabraSecreta);
        }else{
            alert("SOLO LETRAS MAYUSCULAS")
        }
    }else{
        alert("DEBE INGRESAR UNA PALABRA DE 5 LETRAS MAYUSCULAS");
    }
   
}

mostrarLetra=function(letra,posicion){
      mostrarTexto("div"+posicion,letra); 
}

validar=function(letra){
    let letrasEncontradas=0;
    for(let i=0;i<palabraSecreta.length;i++){
         if(letra===palabraSecreta.charAt(i)){
            mostrarLetra(letra,i);
            letrasEncontradas=letrasEncontradas+1;
            coincidencias=coincidencias+1;
        }
    }
    if(letrasEncontradas===0){
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
        errores=errores+1;
        intentos=intentos+1;
    }

}

ingresarLetra=function(){
    let letra;
    letra=recuperarTexto("txtLetra");
    validar(letra);
    if(esMayuscula(letra)){
        if(coincidencias==5){
            alert("HA GANADO");
        }else if(intentos== 10){
            alert("HA PERDIDO");
        }
    }else{
        alert("SOLO SE ACEPTAN MAYUSCULAS");
       
    }
    
    
}
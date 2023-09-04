//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta=" ",
esMayuscula = function (caracter) {
    caracter = caracter.toString();
    let letra;
    letra = caracter.charCodeAt(0);
    if (letra >= 65 && letra <= 90) {
        return true;
    } else {
        return false;
    }

}
guardarPalabra = function () {
    let palabra = recuperarTexto("txtSecreta");
    valido=false;
    if (palabra.length == 5){
        let mayusculas=true;
        for(let i=0;i<palabra.length;i++){
            if(!esMayuscula(palabra.charAt(i))){
                mayusculas=false;
            }
        }
        if(mayusculas){
        palabraSecreta=palabra;
        console.log(palabraSecreta);
        }else{
            alert("SOLO LETRAS MAYUSCULAS")
        }
    }else{
        alert("DEBE INGRESAR UNA PALABRA DE 5 LETRAS MAYUSCULAS");
    }
}
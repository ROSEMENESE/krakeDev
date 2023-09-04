let ErroresClave = " ";

ejecutarValidacion = function() {
     let msj;
     msj = recuperarTexto("txtClave");
     validarPassword(msj);
    
     if (!ErroresClave) {
       mostrarTexto("txtMsj","PASSWORD VALIDA");
    } else if(ErroresClave) {
        mostrarTexto("txtMsj",ErroresClave);
    }
}

validarPassword = function(password) {
    if (password.length >= 8 && password.length <= 16) {
        let validacion1 = false;
        let validacion2 = false;
        let validacion3 = false;

        for (let i = 0; i < password.length; i++) {
            let palabra = password.charAt(i);

            if (esMayuscula(palabra)) {
                validacion1 = true;

            }
            if (esDigito(palabra)) {
                validacion2 = true;

            }
            if (esGuion(palabra)) {
                validacion3 = true;

            }
        }

        if (!validacion1) {
            ErroresClave += "El password debe contener al menos una letra mayuscula.\n";
        }

        if (!validacion2) {
            ErroresClave += "El password debe contener al menos un numero.\n";
        }

        if (!validacion3) {
            ErroresClave += "El password debe contener al menos un caracter especial (*, - , _).\n";
        }
        if (validacion1 && validacion2 && validacion3) {
            return "";

        } else {
            return ErroresClave;
        }
    } else if(!password.length >= 8 || !password.length <= 16){
        ErroresClave+="Debe contener entre 8 a 16 caracteres\n";
        return ErroresClave;
    }
}
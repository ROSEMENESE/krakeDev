let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1786963254", nombre: "Leonel", apellido: "Enriquez", sueldo: 700.0 }
]
let esNuevo = false;

mostrarOpcionEmpleado = function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
    deshabilitarFunciones();
}

mostrarOpcionRol = function () {
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}

mostrarOpcionResumen = function () {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}

mostrarEmpleados = function () {
    let cmpTabla = document.getElementById("tablaEmpleados");
    let contenidoTabla = "<table><tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>SUELDO</th>" +
        "</tr>";
    let elementoCliente;
    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i];
        contenidoTabla +=
            "<tr><td>" + elementoEmpleado.cedula + "</td>"
            + "<td>" + elementoEmpleado.nombre + "</td>"
            + "<td>" + elementoEmpleado.apellido + "</td>"
            + "<td>" + elementoEmpleado.sueldo + "</td>"
            + "</tr>"
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

ejecutarNuevo = function () {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo = true;

}
buscarEmpleado = function (cedula) {
    let elementoEmpleado;
    let empleadoEncontrado;
    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i];
        if (elementoEmpleado.cedula == cedula) {
            empleadoEncontrado = elementoEmpleado;
            break;
        }
    }
    if (elementoEmpleado.cedula == cedula) {
        return empleadoEncontrado;
    } else {
        esNuevo = true;
        return null;
    }
}

agregarEmpleado = function (empleado) {
    let respuesta;
    respuesta = buscarEmpleado(empleado.cedula);
    let empleadoValido;
    if (respuesta == null) {
        empleados.push(empleado);
        empleadoValido = true;
    } else {
        empleadoValido = false;
    }
    return empleadoValido;
}

guardar = function () {
    let cedulaNueva = recuperarTexto("txtCedula");
    let nombreNuevo = recuperarTexto("txtNombre");
    let apellidoNuevo = recuperarTexto("txtApellido");
    let sueldoNuevo = recuperarFloat("txtSueldo");
    let error = true;
    if (cedulaNueva === "") {
        mostrarTexto("lblErrorCedula", "CAMPO OBLIGATORIO");
        error = true;
    } else {
        mostrarTexto("lblErrorCedula", "");
        if (cedulaNueva.length == 10) {
            for (let i = 0; i < cedulaNueva.length; i++) {

                let numero = cedulaNueva.charAt(i);

                if (esDigito(numero)) {
                    error = false;
                } else {
                    mostrarTexto("lblErrorCedula", "La cedula debe contener digitos")
                }
            }
        } else {
            mostrarTexto("lblErrorCedula", "La cedula debe contener 10 digitos")
        }

    }
    if (nombreNuevo === "") {
        mostrarTexto("lblErrorNombre", "CAMPO OBLIGATORIO");
        error = true;
    } else {
        mostrarTexto("lblErrorNombre", "");
        if (nombreNuevo.length >= 3) {
            for (let i = 0; i < nombreNuevo.length; i++) {
                let letra = nombreNuevo.charAt(i);
                if (esMayuscula(letra)) {
                    error = false;

                } else {
                    mostrarTexto("lblErrorNombre", "El nombre debe contener solo mayusculas");
                }
            }
        } else {
            mostrarTexto("lblErrorNombre", "El nombre debe contener 3 caracteres minimo");
        }


    }

    if (apellidoNuevo === "") {
        mostrarTexto("lblErrorApellido", "CAMPO OBLIGATORIO");
        error = true;
    } else {
        mostrarTexto("lblErrorApellido", "")
        if (apellidoNuevo.length >= 3) {
            for (let i = 0; i < apellidoNuevo.length; i++) {
                let letra2 = apellidoNuevo.charAt(i);
                if (esMayuscula(letra2)) {
                    error = false;
                } else {
                    mostrarTexto("lblErrorApellido", "El apellido debe contener solo mayusculas");
                }
            }
        } else {
            mostrarTexto("lblErrorApellido", "El apellido debe contener 3 caracteres minimo");
        }

    }

    if (isNaN(sueldoNuevo)) {
        mostrarTexto("lblErrorSueldo", "CAMPO OBLIGATORIO");
        error = true;
    } else {
        mostrarTexto("lblErrorSueldo", "")
        if (sueldoNuevo >= 400 && sueldoNuevo <= 5000) {
            error = false;
        } else {
            mostrarTexto("lblErrorSueldo", "Sueldo debe estar entre 400 y 5000");
        }
    }

    if (error == false && esNuevo == true) {

        let nuevoEmpleado = {};
        nuevoEmpleado.cedula = cedulaNueva;
        nuevoEmpleado.nombre = nombreNuevo;
        nuevoEmpleado.apellido = apellidoNuevo;
        nuevoEmpleado.sueldo = sueldoNuevo;

        let empleadoAgregado = agregarEmpleado(nuevoEmpleado);

        if (empleadoAgregado) {
            alert("EMPLEADO GUARDADO CORRECTAMENTE");
            mostrarEmpleados();
            deshabilitarFunciones();
        } else {
            alert("YA EXISTE UN EMPLEADO CON LA CEDULA:" + " " + cedulaNueva);
        }
    } else {
        alert("YA EXISTE UN EMPLEADO CON LA CEDULA:" + " " + cedulaNueva);
    }


}

deshabilitarFunciones = function () {
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}




let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1786963254", nombre: "Leonel", apellido: "Enriquez", sueldo: 700.0 }
]
let esNuevo = false;
let roles = [];

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
    deshabilitarComponente("GuardarRol");
    mostrarRoles();
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
            esNuevo = false;
        } else {
            alert("YA EXISTE UN EMPLEADO CON LA CEDULA:" + " " + cedulaNueva);
        }
    } else {
        alert("YA EXISTE UN EMPLEADO CON LA CEDULA:" + " " + cedulaNueva);
    }
    let empleadoModificado = buscarEmpleado(cedulaNueva);

    if (empleadoModificado) {
        empleadoModificado.nombre = nombreNuevo;
        empleadoModificado.apellido = apellidoNuevo;
        empleadoModificado.sueldo = sueldoNuevo;
        alert("EMPLEADO MODIFICADO CORRECTAMENTE: ");
        mostrarEmpleados(empleadoModificado);
        deshabilitarFunciones();

    }
}

deshabilitarFunciones = function () {
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

habilitarFunciones = function () {
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
}

ejecutarBusqueda = function () {
    let NumCedula = recuperarTexto("txtBusquedaCedula");
    let empleado = buscarEmpleado(NumCedula);
    if (empleado == null) {
        alert("EMPLEADO NO EXISTE");
    } else {
        mostrarTextoEnCaja("tx  tCedula", empleado.cedula);
        mostrarTextoEnCaja("txtNombre", empleado.nombre);
        mostrarTextoEnCaja("txtApellido", empleado.apellido);
        mostrarTextoEnCaja("txtSueldo", empleado.sueldo);
        habilitarFunciones();
        deshabilitarComponente("txtCedula");
    }
}
limpiar = function () {
    mostrarTextoEnCaja("txtCedula", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtSueldo", "");
    mostrarTexto("lblErrorCedula", "");
    mostrarTexto("lblErrorNombre", "");
    mostrarTexto("lblErrorApellido", "");
    mostrarTexto("lblErrorSueldo", "");
    deshabilitarFunciones();
    esNuevo = false;
}

buscarPorRol = function () {
    let cedulaRol;
    cedulaRol = recuperarTexto("txtBusquedaPorRol");
    let rol = buscarEmpleado(cedulaRol);
    if (rol != null) {
        mostrarTexto("infoCedula", rol.cedula);
        mostrarTexto("infoNombre", rol.nombre + " " + rol.apellido);
        mostrarTexto("infoSueldo", rol.sueldo);
    } else {
        alert("EMPLEADO NO EXISTE");
    }
}

calcularAporteEmpleado = function (sueldo) {
    let aporteEmpleado = (sueldo * 9.45) / 100;
    return aporteEmpleado;
}

calcularValorAPagar = function (sueldo, aporte, descuento) {
    let valorAPagar = sueldo - aporte - descuento;
    return valorAPagar;
}

calcularRol = function () {
    let sueldo = recuperarFloatDiv("infoSueldo");
    let descuento = recuperarFloat("txtDescuentos");
    let valido = false;
    if (isNaN(descuento) || descuento < 0 || descuento > sueldo) {
        valido = false;
        mostrarTexto(
            "lblErrorSueldo",
            "El valor del descuento debe estar entre 0 y " + sueldo);
    } else {
        valido = true;
        mostrarTexto("lblErrorSueldo", "");
        let aporte = calcularAporteEmpleado(sueldo);
        mostrarTexto("infoIESS", aporte);
        let total = calcularValorAPagar(sueldo, aporte, descuento);
        mostrarTexto("infoPago", total);
    }
    habilitarComponente("GuardarRol");

}

buscarRol = function (cedula) {
    let elementoRol;
    let rolEncontrado = null;
    for (let i = 0; i < roles.length; i++) {
        elementoRol = roles[i];
        if (elementoRol.cedula == cedula) {
            rolEncontrado = elementoRol;
            break;
        }
    }
    return rolEncontrado;
}

agregarRol = function (rol) {
    let respuestaRol;
    let validar = false;
    respuestaRol = buscarRol(rol.cedula);
    if (respuestaRol == null) {
        roles.push(rol);
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

calcularAporteEmpleador = function (sueldoDelEmpleado) {
    let aporterIess;
    aporterIess = (sueldoDelEmpleado * 11.15) / 100;
    return aporterIess;
}

guardarRol = function () {
    let valorAPagar = recuperarFloatDiv("infoPago");
    let aporteEmpleado = recuperarFloatDiv("infoIESS");
    let nombre = recuperarTextoDiv("infoNombre");
    let cedula = recuperarTextoDiv("infoCedula");
    let sueldo = recuperarFloatDiv("infoSueldo");

    let aporteEmpleador = calcularAporteEmpleador(sueldo);

    let rolNuevo = {};
    rolNuevo.cedula = cedula;
    rolNuevo.nombre = nombre;
    rolNuevo.sueldo = sueldo;
    rolNuevo.valorAPagar = valorAPagar;
    rolNuevo.aporte = aporteEmpleado;
    rolNuevo.aporterIess = aporteEmpleador;

    let rol1 = agregarRol(rolNuevo);

    if (rol1) {
        alert("EL ROL HA SIDO GUARDADO");
        deshabilitarComponente("GuardarRol");
    }
}

mostrarRoles = function () {
    let cmbTabla;
    let contenidoTabla;
    cmbTabla = document.getElementById("tablaResumen");
    contenidoTabla =
        "<table> <tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>VALOR A PAGAR</th>" +
        "<th>APORTE EMPLEADO</th>" +
        "<th>APORTE EMPLEADOR</th>" +
        "</tr>";
    for (let i = 0; i < roles.length; i++) {
        let elementoRol = roles[i];
        contenidoTabla +=
            "<tr><td>" +
            elementoRol.cedula +
            "</td>" +
            "<td>" +
            elementoRol.nombre +
            "</td>" +
            "<td>" +
            elementoRol.valorAPagar +
            "</td>" +
            "<td>" +
            elementoRol.aporte +
            "</td>" +
            "<td>" +
            elementoRol.aporteIess +
            "</td>" +
            "</tr>";
    }
    contenidoTabla += "</table>";
    cmbTabla.innerHTML = contenidoTabla;

}

mostrarTotales = function () {
    let totalEmpleado = 0;
    let totalEmpleador = 0;
    let totalPagar = 0;
  
    for (let i = 0; i < roles.length; i++) {
      totalEmpleado += roles[i].aporteIess;
      totalEmpleador += roles[i].aporte;
      totalPagar += roles[i].valorAPagar;
    }
  
    mostrarTexto("infoTotalPago", totalPagar);
    mostrarTexto("infoAporteEmpresa", totalEmpleador);
    mostrarTexto("infoAporteEmpleado", totalEmpleado);
  }
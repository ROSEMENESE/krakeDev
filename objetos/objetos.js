probarAtributos = function () {
    let persona = {
        nombre: "Pedro",
        apellido: "Morales",
        edad: 24,
        estaVivo:true
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if(persona.estaVivo==false){
        console.log("no esta vivo");
    }else{
        console.log("si esta vivo");
    }
}

crearProducto=function(){
    let producto1={
        nombre: "jeans",
        precio: 5.50,
        stock: 10
    }
    let producto2={
        nombre: "camisas",
        precio: 3.75,
        stock:8
    }
    console.log(producto1.nombre);
    console.log(producto2.precio);
    if(producto1.stock==producto2.stock){
        console.log("Ambos productos tienen el mismo stock");
    }else if(producto1.stock>producto2.stock){
        console.log("Producto 1 tiene mayor stock");
    }else if(producto1.stock<producto2.stock){
        console.log("Producto 2 tiene mayor stock");
    }
}

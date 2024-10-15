//FUNCIONES
/*function hello(){
    console.log("Hola JS");
    console.log("Hola html");
    console.log("Hola css");
}

hello();
hello();
hello();
hello();
hello();*/

//retorno de una función

/*function hello(){

    return "hola JS";

}

const result = hello();
console.log(result);
*/
//hello();
/*
function hello(){
    return{};
}

console.log(hello());*/

/*function hello(){
    return{
        nombre:"Raúl"
    }
}
console.log(hello());
*/
//funcion que retorna otra funcion
/*
function hello(){
    return function (){
        return "Hola JS"
    }
}

console.log(hello()());*/

// === USO DE PARAMETROS EN FUNCIONES ===
/*
function helpconJS(name){
    return "Hola" + name

}

console.log("Eso tilin");
console.log("Ete sech");
console.log("Rorropirrorro");
console.log("Yael");
*/

//pasar mas de un parametro a la funcion
/*
function helpconJS(x,y){
    return x / y;

}

console.log(helpconJS(10,20));
console.log(helpconJS(10,80));
*/

//control de errores en parametros
/*
function helpconJS(x,y){
    if(y ==undefined){
        y=0;
    }
    return x + y;

}

console.log(helpconJS(10));
*/

//=== OBJETOS ===

const user = {
    nombre : "QUETACHENDO",
    apellidoM : "Nava",
    edad:16,
    edoCivil:"17 años seguidos de solteria",
    domicilio : {
        ciudad : "CDMX",
        calle : "Cuahtemoc",
        numero : 268 
    },
    amigos:["Cuahtemoc", "Luis"],
    activo:false,
    sendMensaje: function(){
        return "enviado msj"
    }
}

//alert ciudad, calle, numero..
//consola, los amigos
//alert (Activo o Dado baja)
//consola nombre, apellidos, estado civil...!!
//alert (estado del mensaje)*/

alert(user.domicilio.ciudad, user.domicilio.calle, user.domicilio.numero);

console.log(user.amigos, user.nombre, user.apellido, user.edoCivil);

alert(user.senMensaje(), user.activo);



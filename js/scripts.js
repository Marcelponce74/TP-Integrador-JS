//Capturamos los valores ingresados por el usuario
// nombre apellido correoElectronico expRegular botonCalcular categoria cantidad

const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const correoElectronico = document.getElementById("correoElectronico")
const expRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
const botonCalcular = document.getElementById("botonCalcular")
const categoria = document.getElementById ("categoria")
const cantidadEntradas = parseInt (document.getElementById ("cantidadEntradas").value)


//Inicializamos las variables
// total totalAPagar

let total = 0
let totalAPagar = 0

// Valor de cada entrada

const valorEntrada = 200


// funcion que calcula el total a pagar con descuento según cantidad de entradas y categoria

function resumen (){
    console.log(categoria.value)
    console.log(cantidadEntradas.value)
    totalAPagar.innerHTML = cantidad.value
    if (categoria === "estudiante" ) {
            total = (valorEntrada * cantidadEntradas) 
            totalAPagar -= ( total * 0.8 ) // 80 % de descuento
    } else if (categoria === "trainee"){
            total = (valorEntrada * cantidadEntradas) 
            totalAPagar -=  ( total * 0.5 )  // 50 % de descuento
    } else if (categoria === "junior") {
            total -= (valorEntrada * cantidadEntradas) 
            totalAPagar -= ( total * 0.85 ) // 15 % de descuento
    } else if (categoria === "públicogeneral"){
            total = (valorEntrada * cantidadEntradas) 
            totalAPagar = total
    } else {
    console.log ("Debe seleccionar una opción válida") // si no se ingresa el valor esperado
    }
    return totalAPagar
}

//Validaciones


function validarNombre() {
    if(nombre.value.length<3){
        document.getElementById("errorNombre").innerHTML = "El nombre no es válido";
    } else {
        document.getElementById("errorNombre").innerHTML = "El nombre es correcto";
    }
}

function validarApellido() {
    if(apellido.value.length<3){
        document.getElementById("errorApellido").innerHTML = "El apellido no es válido";
    } else {
        document.getElementById("errorApellido").innerHTML = "El apellido es correcto";
    }
}

function validarEmail() {
    if(!expRegular.test(email.value)){
        document.getElementById("errorCorreo").innerHTML = "El email no es válido"
    } else {
        document.getElementById("errorCorreo").innerHTML = "El email es correcto"
    }
}

botonCalcular.addEventListener("click", validarNombre);
botonCalcular.addEventListener("click", validarApellido);
botoncalcular.addEventListener("click", validarEmail);



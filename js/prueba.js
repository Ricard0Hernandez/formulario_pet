function valida(){
    const tipoDeInput = input.dataset.tipo;
    if(validadores[tipoDeInput]){
       validadores[tipoDeInput](input)
    }
   
    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = " "
    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input)
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMissMatch",
    "patternMismatch",
    "customError"
]

const mensajesDeError = {
    nombre:{
        valueMissing:"el campo nombre no puede estar vacio"
    },
    email:{
        valueMissing:"el campo correo no puede estar vacio",
        typeMissMatch: "el correo no es valido"
    },
    password:{
        valueMissing:"el campo contraseña no puede estar vacio",
        patternMismatch: "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales."
    },
    nacimiento: {
        valueMissing:"este campo no puede estar vacio",
        customError:"debes tener al menos 18 años de edad"
    },
    numero: {
        valueMissing: "este campo no puede estar vacio",
        patternMismatch: "el formato requerido es xx-xxx-xxx-xx 10 numeros",
    },
    direccion: {
        valueMissing: "este campo no puede estar vacio",
        patternMismatch: "la direcion debe contener entre 18 a 40 caracteres",  
    },
    ciudad: {
        valueMissing: "este campo no puede estar vacio",
        patternMismatch: "la ciudad debe contener entre 18 a 40 caracteres",  
    },
    estado: {
        valueMissing: "este campo no puede estar vacio",
        patternMismatch: "el estado debe contener entre 18 a 40 caracteres",  
    },   
};

const validadores = {
    nacimiento: input => validarNacimiento(input),
};


function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = ""
    tipoDeErrores.forEach(erro => {
        if(input.validity[error]){
            console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })

    return mensaje;
}

function validarNacimiento(input) {
    const fechaCliente = new Date(input.value);
    let mensaje = " ";
    if (mayorDeEdad(fechaCliente)){
       mensaje = "Debes tener al menos 18 años de edad" 
    };

   input.setCustomValidity(mensaje);
}

function mayorDeEdad(fecha) {
    const fechaActual = new Date();
    const diferenciasFechas = new Date(
        fecha.getUTCFullYear() + 18,
        fecha.getUTCFullMonth(),
        fecha.getUTCDate()
    );
    return (fechaActual >= diferenciasFechas);
}
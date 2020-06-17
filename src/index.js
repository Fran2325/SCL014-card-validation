import validator from "./validator.js";
console.log(validator);

let creditCardNumber;

// funcion para hacer cambio de una pantalla a otra
const move = (close, open) => {
  document.getElementById(close).style.display = "none";
  document.getElementById(open).style.display = "block";
};

//captura del  boton, con su id
const btnValidation = document.getElementById("btnValidation");

// función con metodo addEventListener.
btnValidation.addEventListener("click", () => {
  // captura del valor(digitos) de la tarjeta del usuario
  creditCardNumber = document.getElementById("creditCardNumber").value;

  let mensajeError = document.getElementById("mensajeError");
  let resultadoFinal = document.getElementById("showResult");
  let cardFlag = document.getElementById("cardFlag");
  let firstNumber = parseInt(creditCardNumber.charAt(0));
  let numero = creditCardNumber.length > 0 && creditCardNumber.length <= 16;

  /*condional, donde el usario digita de 0 a 16 numeros, si es verdadero, cambia a la pantalla 'respuesta', y 
  ejecuta el validator y un mensaje*/
  if (numero && firstNumber === 3) {
    move("welcome", "validationResult");
    cardFlag = " Marca: American Express";
    console.log(numero, cardFlag);
    resultadoFinal.innerHTML = validator.isValid(creditCardNumber) + cardFlag;
  } else if (numero && firstNumber === 4) {
    move("welcome", "validationResult");
    cardFlag = " Marca : VISA";
    resultadoFinal.innerHTML = validator.isValid(creditCardNumber) + cardFlag;
    console.log(numero, cardFlag);
  } else if (numero && firstNumber === 5) {
    move("welcome", "validationResult");
    cardFlag = " Marca: MASTERCARD";
    console.log(numero, cardFlag);
    resultadoFinal.innerHTML = validator.isValid(creditCardNumber) + cardFlag;
  } else if (numero < 16) {
    // si false, imprime un mensaje para ingresar numero menor a 16 digitos
    mensajeError.innerHTML =
      "Por favor, ingrese el numero de la tarjeta con 16 digitos";
  }else if(!numero) {
    move("welcome", "validationResult");
    resultadoFinal.innerHTML = validator.isValid(creditCardNumber);
  }
});

// Función para ocultar los digitos del usuario
const ocultarNumero = document.getElementById("creditCardNumber");
// funcion con metodo addEventListener, que escucha el 'evento' y cambiará el numero digitado por #.
ocultarNumero.addEventListener("keyup", () => {
  let ocultarNum = document.getElementById("creditCardNumber").value;
  validator.maskify(ocultarNum);
});
// console.log(ocultarNumero);

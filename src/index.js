import validator from './validator.js';
console.log(validator);

let creditCardNumber;


const move = (close,open) => {
    document.getElementById(close).style.display= 'none';
    document.getElementById(open).style.display= 'block';
   
}

const btnValidation  = document.getElementById('btnValidation');

btnValidation .addEventListener('click', () => {
    creditCardNumber = document.getElementById('creditCardNumber').value; 
console.log(creditCardNumber);

let textUno = document.getElementById('textoUno');
 
 if (creditCardNumber.length > 0 ){
    move("welcome", "validationResult");
    isValid(creditCardNumber);

    
 } else {
    textUno.innerHTML = 'Por favor, ingrese el numero de la tarjeta';
     
 }
 
});


const isValid = (creditCardNumber) =>{
    let list = creditCardNumber.split('');
     console.log(list);
     
}


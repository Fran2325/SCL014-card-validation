const validator = {
  isValid: creditCardNumber => {
    // numeros digitados por el usuario(creditCardNumber) son tranformados en un array de strings, con el metodo .split('').
    const array_CreditCardNumber = creditCardNumber.split("");

    /* se usa metodo .filter(), donde es creado un nuevo array con elementos, de acuerdo con la condición dada. 
  No cambia los elementos del 1ª array. Los recoje y almacena en nuevo array(pares).*/
    const indice_Par = array_CreditCardNumber.filter(
      (elem, indice) => indice % 2 === 0
    );

    /*se usa el metodo .map(), que verifica todos los elementos, y con una funcion damos un parametro y retorna un 
  argumento(elemento *2, del array) y los tranforma en 'number'.*/
    const indice_Par_veces_Dos = indice_Par.map(elem => elem * 2);

    // con el metodo .filter(), separamos los elementos <10
    const indice_Par_menores_Diez = indice_Par_veces_Dos.filter(
      elem => elem < 10
    );

    // con el metodo .filter(), separamos los elementos >= a 10
    const indice_Par_Mayores_Diez = indice_Par_veces_Dos.filter(
      resposta => resposta >= 10
    );

    // los elementos >= 10 son analizados y retorna retorna una operacion (elemento -9)
    const indice_Par_MenosNueve = indice_Par_Mayores_Diez.map(elem => elem - 9);

    // metodo .concat(), concatena los numeros (< 10 con los  >=  10)
    const paresResult = indice_Par_menores_Diez.concat(indice_Par_MenosNueve);

    /* se usa metodo array.filter, donde se crea un nuevo array con elementos, de acuerdo con la condición dada.No cambia los 
elementos del 1ª array. Los recoje y almacena en nuevo array(impares).*/
    const resultImpares = array_CreditCardNumber.filter(
      (elem, indice) => indice % 2 !== 0
    );

    /*se usa el metodo .map(), que verifica todos los elementos, y con una funcion damos un parametro y retorna un 
  argumento. Los elementos impares son analizados y retorna retorna una operacion (elemento * 1),  y los tranforma en 'number'.*/
    const imparesResult = resultImpares.map(elem => elem * 1);

    // metodo .concat(), concatena los numeros los arrays  finales de impares y pares
    const concat_Impares_Pares = paresResult.concat(imparesResult);

    // metodo .reduce(), con dos parametros, y retorna la suma de los 2
    const finaResult = concat_Impares_Pares.reduce(
      (valorAnterior, valorActual) => valorAnterior + valorActual
    );

    // condicional, donde si es verdadera retorna un alert de valido, si falsa, retorna un alert de invalido
    if (finaResult % 10 === 0) {
      return "Tu tarjeta es valida" + "<br>" + "<br>";
    } else {
      return "Tu tarjeta es invalida" + "<br>" + "<br>";
    }
  },

  //metodo para ocultar numero 
  maskify: creditCardNumber => {
    // console.log(creditCardNumber);
  }
};

export default validator;

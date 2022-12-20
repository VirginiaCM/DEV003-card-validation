
const validator =  {
  
  //algoritmo para enmascarar

  maskify: function (creditCardNumber) {
    // declarar un array vacío que luego se va llenar
    const hiddeNumber = [];
    // se hace un bucle for, donde se va iterando
    for(let i =0; i < creditCardNumber.length; i++){
      // los últimos 4 numeros
      if(i< creditCardNumber.length-4){
        //se agrega # al array
        hiddeNumber.push('#');
      }else{
        //se agrega los otros i numeros
        hiddeNumber.push(creditCardNumber[i]);
      }
    }

    // retorna todo junto
    return hiddeNumber.join('');
  },


  // algoritmo de Luhn para validar tarjeta de Crédito
 
  isValid: function (creditCardNumber)  {
    
    // se declara un array para revertir la posición de los numeros 

    const arrayReverseOfNumber = creditCardNumber.toString().split('').reverse();
    
    // se declara un array de suma
    const arrayToSum = [];
   
    //se llama a los elementos  del array
    arrayReverseOfNumber.forEach((e,i) =>{ // números pares e impares
    
      //Mediante condicional if...else aplicamos algoritmo de Luhn para validar tarjeta 
      //Numeros pares
      if(i%2!==0){ 
        const numPar = e*2; // números en posición par se multiplica * 2
        if(numPar >= 10) { // condicional si resultado mayor a 10
          // resultado mayor a 10 se suman los 2 digitos
          arrayToSum.push(
            numPar.toString().split('').reduce((a,b) => parseInt (a) + parseInt(b))); 

        // suma de los nuevos números pares y los impares
        } else {
          arrayToSum.push(numPar);
        }
      } else {
        arrayToSum.push(parseInt(e));
      }
    });

    // Resultado número debe ser multiplo de 10 = Tarjeta Válida
    const totalSum = arrayToSum.reduce((a,b) => a + b);{
      if (totalSum %10 === 0){
        return true;
      
      } else { // si no cumple con la condicional = Tarjeta no Válida
        return false;
      }
       
    }

  }
}
 
export default validator;




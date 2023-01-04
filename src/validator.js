
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

    const longitud = creditCardNumber.length;
    let suma = 0;
    // asegurarnos que la longitud sea par
    if(longitud % 2 === 0)
    {
      //Comenzar a duplicar desde el primer número
      for(let i = 0; i < longitud; i++)
      {
        let digito = parseInt(creditCardNumber[i]);
        if (i % 2 === 0) // Sólo duplicaremos las posiciones impares

        
        {
          if ((digito *= 2) > 9) //Condicional si el número es de dos cifras
          {
            //separamos los números como dos variables
            const num2 = digito % 10;
            const num1 = parseInt(digito / 10);

            // sumamos las cifras
            digito = num1 + num2;
          }
        }
        suma += digito;
      }
    }
    //El resultado debe ser múltiplo de 10
    return (suma % 10) === 0;

  }

}
   


export default validator;





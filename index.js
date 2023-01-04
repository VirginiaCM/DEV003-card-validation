import validator from './validator.js';

document.getElementById("button").addEventListener("click", funcionvalidar)
document.getElementById("cc").addEventListener("keyup", funcionhabilitar)


// Función habilitar 
function funcionhabilitar(){
  if(document.getElementById("cc").value.length >=12){
    document.getElementById("button").disabled = false
  }else{
    document.getElementById("button").disabled = true
  }
  
} 



// Función Validar

function funcionvalidar(){
  const tarjeta = document.getElementById ("cc").value
 

  const mascara = validator.maskify(tarjeta)
  document.getElementById("cc").value = mascara

  const tarjetaValida = validator.isValid(tarjeta)

  if (tarjetaValida === true){

    document.getElementById("mensaje").innerHTML = "Tarjeta Válida"

  } else {
    document.getElementById("mensaje").innerHTML = "Tarjeta no Válida"
  }  

}







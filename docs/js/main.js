function calcular(){

  let pesoUsuario = document.getElementById('peso').value;
  let alturaUsuario = document.getElementById('altura').value;
  let resultadoMC, pesoMin, pesoMax;

  resultadoMC = pesoUsuario / (alturaUsuario * alturaUsuario);
  pesoMin = 18.5 * alturaUsuario * alturaUsuario + 0.01;
  pesoMax = 24.99999999999999999999999999999999999999999999999999999999999 * alturaUsuario * alturaUsuario;

  document.getElementById('mensaje-peso').innerHTML='<p><b style="font-size:22px; text-decoration:underline;">Resultado</b></p><p>Tu índice de masa corporal es de: <b>' + resultadoMC.toFixed(2) +"</b></p>";

  if (resultadoMC < 16){
    document.getElementById('mensaje-alerta').innerHTML="<p><b>Delgadez severa</b></p>";
    }else if(resultadoMC < 17){
      document.getElementById('mensaje-alerta').innerHTML="<p><b>Delgadez moderada</b></p>";
    }
    else if(resultadoMC<18.5){
      document.getElementById('mensaje-alerta').innerHTML="<p><b>Delgadez leve</b></p>";
    }
    else if(resultadoMC<25){
      document.getElementById('mensaje-alerta').innerHTML="<p><b>Peso saludable - Normal</b></p>";
    }
    else if(resultadoMC<30){
      document.getElementById('mensaje-alerta').innerHTML="<p><b>Sobrepeso - Preobesidad</b></p>";
    }
    else if(resultadoMC<35){
      document.getElementById('mensaje-alerta').innerHTML="<p><b>Obesidad leve</b></p>";
    }
    else if(resultadoMC<40){
      document.getElementById('mensaje-alerta').innerHTML="<p><b>Obesidad media</b></p>";
    }
    else if(resultadoMC>=40){
      document.getElementById('mensaje-alerta').innerHTML="<p><b>Obesidad mórbida</b></p>";
    }

  document.getElementById('mensaje-descrip').innerHTML = "<p>El peso ideal según la altura de " + alturaUsuario + " m. está entre " + pesoMin.toFixed(2) + " y " + pesoMax.toFixed(2) + ".";
}


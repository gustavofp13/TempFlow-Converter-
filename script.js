function calcularTemp() {
  let undTemp = document.getElementById('temps').value;
  let tempInput = document.getElementById('input').valueAsNumber;


  
  if (undTemp === "Celsius") {
    const tempF = (tempInput * 9) / 5 + 32;
    const tempK = tempInput  + 273.15;
    document.getElementById('undtemp1').innerHTML = "Fahrenheit"
    document.getElementById('undtemp2').innerHTML = "Kelvin"
    document.getElementById("resultadoF").innerHTML = tempF;
    document.getElementById("resultadoK").innerHTML = tempK
  }

  if (undTemp === "Kelvin"){
    let tempC = (tempInput-273.15).toFixed(2)
    let tempF = ((tempInput- 273.15) * (9/5) + 32 ).toFixed(2)
    document.getElementById('undtemp1').innerHTML= "Fahrenheit"
    document.getElementById('undtemp2').innerHTML = "Celsius"
    document.getElementById("resultadoF").innerHTML = tempF;
    document.getElementById("resultadoK").innerHTML = tempC;
  }
  
  if (undTemp === "Fahrenheit"){
    let tempK = ((tempInput -32) * (5/9) + 273.15).toFixed(2)
    let tempC = ((tempInput -32) * (5/9)).toFixed(2)
    document.getElementById('undtemp2').innerHTML = "Celsius"
    document.getElementById('undtemp1').innerHTML = "Kelvin"
    document.getElementById("resultadoF").innerHTML = tempK;
    document.getElementById("resultadoK").innerHTML = tempC;
  }

  
}

document.getElementById("botao").addEventListener("click", calcularTemp);

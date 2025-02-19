
function calculateBMI() {

  let weight = document.getElementById('weight').value;
  let height = document.getElementById('height').value;

 
  height = height / 100;

  
  let bmi = weight / (height * height)

  
  let result = document.getElementById('result');

  result.textContent = 'Tu IMC is ' + bmi.toFixed(2)

}

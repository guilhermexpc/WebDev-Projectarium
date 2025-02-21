const mainForm = document.getElementById('main-form');
const imcValue = document.getElementById("imc-value");
const imcDescription = document.getElementById('imc-description');

const imcRanges = [
  { maxIndice: 18.4, message: "Você está abaixo do peso!" },
  { maxIndice: 24.9, message: "Você está no peso ideal", classname: "success" },
  { maxIndice: 29.9, message: "Cuidado! Você está com sobrepeso", classname: "warning" },
  { maxIndice: 34.9, message: "Atenção! Você está com obesidade grau 1", classname: "warning" },
  { maxIndice: 39.9, message: "Atenção! Você está com obesidade grau 2", classname: "warning" },
  { maxIndice: Infinity, message: "Atenção! Você esta com obesidade grau 3 (mórbida)", classname: "warning" },

];

mainForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;


  imcResult = imcCalculate(weight, height);
  imcValue.textContent = imcResult;
  imcClassification(imcResult)

  document.getElementById('information').classList.remove('hidden');
});

function imcCalculate(weight, height) {
  const imc = (weight / (height * height)).toFixed(2);
  return imc;
}

function imcClassification(value) {
  imcValue.classList.remove("warning", "success");
  const result = imcRanges.find(item => value <= item.maxIndice);
  if (result.classname) {
    imcValue.classList.add(result.classname);
  }
  imcDescription.textContent = result.message;

}



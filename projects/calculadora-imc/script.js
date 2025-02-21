const mainForm = document.getElementById('main-form');
const imcValue = document.getElementById("imc-value");
const imcDescription = document.getElementById('imc-description');

const imcRanges = {
  masc: [
    { limite: 18.4, message: "Você está abaixo do peso!" },
    { limite: 24.9, message: "Você está no peso ideal", classname: "success" },
    { limite: 29.9, message: "Cuidado! Você está com sobrepeso", classname: "warning" },
    { limite: 34.9, message: "Atenção! Você está com obesidade grau 1", classname: "warning" },
    { limite: 39.9, message: "Atenção! Você está com obesidade grau 2", classname: "warning" },
    { limite: Infinity, message: "Atenção! Você esta com obesidade grau 3 (mórbida)", classname: "warning" }
  ],

  female: [
    { limite: 18.4, message: "Você está abaixo do peso!" },
    { limite: 24.9, message: "Você está no peso ideal", classname: "success" },
    { limite: 29.9, message: "Cuidado! Você está com sobrepeso", classname: "warning" },
    { limite: 32.9, message: "Atenção! Você está com obesidade grau 1", classname: "warning" },
    { limite: 38.9, message: "Atenção! Você está com obesidade grau 2", classname: "warning" },
    { limite: Infinity, message: "Atenção! Você esta com obesidade grau 3 (mórbida)", classname: "warning" }
  ]
};

mainForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  // ageTypeValue = document.querySelector('input[name="age-type"]:checked').value;
  genderTypeValue = document.querySelector('input[name="gender-type"]:checked').value;

  imcResult = imcCalculate(weight, height);
  imcValue.textContent = imcResult;
  imcClassification(imcResult, genderTypeValue);
  document.getElementById('information').classList.remove('hidden');
});

function imcCalculate(weight, height) {
  const imc = (weight / (height * height)).toFixed(2);
  return imc;
}

function imcClassification(value, genderType) {
  imcValue.classList.remove("warning", "success");
  const imcMasc = imcRanges.masc;
  const imcFemale = imcRanges.female;

  const result = genderType == 0 ? imcMasc.find(item => value <= item.limite) : imcFemale.find(item => value <= item.limite);

  console.log("imc: " + result.limite + " description: " + result.message);
  if (result.classname) {
    imcValue.classList.add(result.classname);
  }
  imcDescription.textContent = result.message;
}







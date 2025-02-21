const baseValue = document.getElementById("baseValue")
const proportionalBaseValue = document.getElementById("proportionalBaseValue")
const referenceValue = document.getElementById("refValue")
const resultValue = document.getElementById("proportionalRefValue")
const calculate = document.getElementById("calculate");

function getProportionalValue() {
  resultValue.value = calculateProportionalValue(baseValue.value, proportionalBaseValue.value, refValue.value);


}

function calculateProportionalValue(base, proportionalBase, refValue) {
  if (base == 0 || proportionalBase == 0 || refValue == 0) {
    alert("Todos os campos devem ser preenchidos");
    return "";
  }
  const result = (proportionalBase * refValue) / base;
  return result;
}
document.getElementById("calculate").addEventListener("click", getProportionalValue);


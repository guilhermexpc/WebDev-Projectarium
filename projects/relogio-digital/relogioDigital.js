
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
const dia = document.getElementById("dia");
const mes = document.getElementById("mes");
const ano = document.getElementById("ano");
let angle = 5; // Ângulo inicial

function setHours() {
  let dateToday = new Date();
  let horaAtual = dateToday.getHours();
  let minutoAtual = dateToday.getMinutes();
  let segundoAtual = dateToday.getSeconds();

  if (horaAtual < 10) horaAtual = '0' + horaAtual;
  if (minutoAtual < 10) minutoAtual = '0' + minutoAtual;
  if (segundoAtual < 10) segundoAtual = '0' + segundoAtual;

  horas.textContent = horaAtual;
  minutos.textContent = minutoAtual;
  segundos.textContent = segundoAtual;
}

function setDate() {
  let date = new Date();
  dia.textContent = date.getDay() < 10 ? "0" + date.getDay() : date.getDay();
  mes.textContent = date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth();
  ano.textContent = date.getFullYear().toString().slice(2);
}
setDate();
setInterval(() => {
  setHours();
})

// setInterval(updateBackground, 100);

function updateBackground() {
  // Atualiza o background com o ângulo atual
  document.body.style.background = `linear-gradient(${angle}deg, var(--bg-main), var(--bg-detail))`;

  // Incrementa o ângulo
  angle += 5;
  // Reseta o ângulo se ultrapassar 360 graus
  if (angle >= 360) {
      angle = 0; // Retorna ao ângulo inicial
  }
}

let dias = document.getElementById("dias");
let horas = document.getElementById("horas");
let minutos = document.getElementById("minutos");
let segundos = document.getElementById("segundos");

const fim = new Date("2022-12-31T23:59:59");

function contador() {
  setInterval(() => {
    const atual = new Date();
    const contagem = fim - atual;
    days = parseInt(contagem / 86400000);
    hours = parseInt(contagem / 3600000) % 24;
    minutes = parseInt(contagem / 60000) % 60;
    seconds = parseInt(contagem / 1000) % 60;
    dias.innerText = ("00" + days).slice(-2);
    horas.innerText = ("00" + hours).slice(-2);
    minutos.innerText = ("00" + minutes).slice(-2);
    segundos.innerText = ("00" + seconds).slice(-2);
  }, 1000);
}
contador();

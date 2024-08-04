const elemHorario = document.querySelector(".horario")

function atualizarHoras() {
const horas = new Date().getHours().toString().padStart(2,"0");
const minutos = new Date().getMinutes().toString().padStart(2,"0");
const horario = horas + ":" + minutos

elemHorario.innerText = horario
}
atualizarHoras()

setInterval(() => {
atualizarHoras()
}, 5000 )
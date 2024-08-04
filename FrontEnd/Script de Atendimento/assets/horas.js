const elemHorario = document.querySelector(".horario")

function atualizarHoras() {
const horas = new Date().getHours().toString().padStart(2,"0");
const minutos = new Date().getMinutes().toString().padStart(2,"0");
const horario = horas + ":" + minutos

elemHorario.innerText = horario
}



function verificarHorario() {
    // Obtém a hora atual
    let agora = new Date();
    let horaAtual = agora.getHours();
    console.log()
    let minutoAtual = agora.getMinutes();

    // Define o horário desejado (por exemplo, 14:30)
    let horaDesejada = 19;
    let minutoDesejado = 0;

    // Verifica se o horário atual é igual ao horário desejado
    if (horaAtual === horaDesejada && minutoAtual === minutoDesejado) {
        alert("Intervalo! 🎉");
    }
}

setInterval(() => {
    atualizarHoras();
    verificarHorario();
    }, 5000 )




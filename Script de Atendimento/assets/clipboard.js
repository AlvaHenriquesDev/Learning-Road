var copyText;

function copy1() {
    copyText = document.getElementById("bomDia");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
}
    
function copy2() {
    copyText = document.getElementById("boaTarde");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
}
    
function copy3() {
    copyText = document.getElementById("boaNoite");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
}
    
function copy4() {
    copyText = document.getElementById("algoMais");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
}
    
function copy5() {
    copyText = document.getElementById("obrigado");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
}

function ordem() {
    copyText = document.getElementById("ordemServico")
    copyText.select();
    navigator.clipboard.writeText(copyText.value)
}

function att() {
    // Get the text field
    copyText = document.getElementById("att");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
}

function password() {
    copyText = document.getElementById("password");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
}

function ams() {
    copyText = document.getElementById("loginAMS");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
}

function login() {
    copyText = document.getElementById("login");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
}

function gpon() {
    copyText = document.getElementById("senhaGPON");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
}

function logGpon() {
    copyText = document.getElementById("logGPON");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
}

function ordemServico() {
    copyText = document.getElementById("os");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
}

function logDatac() {
    copyText = document.getElementById("logDatac");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
}
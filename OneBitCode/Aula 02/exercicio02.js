const num1 = parseInt(prompt("Insira um numero"));
const num2 = parseInt(prompt("Insira um numero"));
const sum = num1 + num2;
const sub = num1 - num2;
const multi = num1 * num2;
const div = num1 / num2;

alert(`Os numeros foram: ${num1} e ${num2}
Adição: ${num1} + ${num2} = ${sum}
Subtração: ${num1} - ${num2} = ${sub}
Multiplicação: ${num1} * ${num2} = ${multi})
Divisão: ${num1} / ${num2} = ${div.toFixed(2)}`)
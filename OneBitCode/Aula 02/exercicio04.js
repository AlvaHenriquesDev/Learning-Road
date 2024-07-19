const valorProd = parseFloat(prompt("Insira o Valor (em Reais do produto): "));
const porcDesc = parseFloat(prompt("Insira o percentual de desconto (%): "));
const valorDesc = valorProd * (porcDesc / 100)
const valorFim = valorProd - valorDesc;

alert(`
O valor do Produto é de R$ ${valorProd}
O desconto é de R$ ${valorDesc}
O Preço total foi de R$ ${valorFim}
`)
let cadastro = "des"
const pecaUn = 1
let quantPeca = 11
let pesoPeca = 100
const limiteCaixa = 10
let caracteres = cadastro.length
//----------------------------------------

if (cadastro.length < 4) {
console.log ('ERRO DE CADASTRO')  
}
else {
  console.log ('CADASTRAR PEÇA')
}
if (pecaUn > pesoPeca) {
console.log ('PESO LIBERADO PARA CADASTRO')  
}
else {
  console.log ('PESO NÃO PERMITIDO PARA CADASTRO')
}
if (quantPeca > limiteCaixa) {
  console.log ('CAIXA NÃO TEM CAPACIDADE SUFICIENTE')
} else {
  console.log ('CAPACIDADE DA CAIXA DENTRO DO PERMITIDO')
}

// peça superior a 100g, pode cadastrar
// capacidade de cada caixa, caso a lista seja superior 10 un, imprima: caixa não tem capacidade suficiente.
// nome da peça inferior a 3 caracteres, informar mensagem de erro.

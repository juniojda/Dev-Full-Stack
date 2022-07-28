// cadastro de evento
const data_Atual = new Date()
let data_Evento = new Date('2022/07/28')

// cadastro de participantes
const idade_Minima = 18
const participantes = 10
let cadastro = 100
let idade = 39

//---------------------------------------------------
if (data_Evento > data_Atual)
{
  console.log ('CADASTRO DO EVENTO PERMITIDO')
}
else 
{
  console.log ('CADASTRO DO EVENTO NÃO PERMITIDO POR DATA INVÁLIDA')
}
if (cadastro > 100) 
{
  console.log ('LIMITE DE CADASTRO DE PARTICIPANTES ATINGIDO')
}
else 
{
  console.log ('CADASTRAR PARTICIPANTE')
}
if (idade < idade_Minima)
{
  console.log ('CADASTRO DE PARTICIPANTE NÃO PERMITIDO POR IDADE')
}
else 
{
  console.log ('CADASTRO DE PARTICIPANTE PERMITIDO')
}
if (data_Evento > data_Atual && idade > 18 && cadastro < 100) 
{
  console.log ('EVENTO CADASTRADO')
}
else 
{
  console.log ('EVENTO IMPOSSIBILITADO')
}

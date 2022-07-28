// cadastro de evento
const Data_Atual = new Date()
let Data_evento = new Date('2022/07/28')
// cadastro de participantes
const Idade_minima = 18
const Participantes = 10
let cadastro = 100
let Idade = 17
//---------------------------------------------------
if (Data_evento => Data_Atual)
{
  console.log('EVENTO CADASTRADO')
}
else 
{
  console.log ('EVENTO NÃO PERMITIDO')
}
if (cadastro > 100) 
{
  console.log ('LIMITE DE CADASTRO EXCEDIDO')
}
else 
{
  console.log ('CADASTRAR PARTICIPANTE')
}
if (Idade < Idade_minima)
{
  console.log ('PARTICIPANTE MENOR DE IDADE')
}
else 
{
  console.log ('PARTICIPANTE PERMITIDO')
}
if (Data_evento > Data_Atual && Idade>=18 && cadastro ==100) 
{
  console.log ('EVENTO CADASTRADO')
}
else 
{
  console.log ('EVENTO IMPOSSIBILITADO')
}

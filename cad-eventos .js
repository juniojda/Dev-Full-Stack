// cadastro de evento
const data_Atual = new Date();
let data_Evento = new Date('2022/08/03');

// cadastro de participantes
const idadeMinima = 17;
let participantes = ["Junio", "Daniel", "João"];
let quantidadeParticipantes = participantes.length;
const limiteParticipantes = 100;
let idade = 39;

//---------------------------------------------------
if (data_Evento > data_Atual)
{
  console.log ('CADASTRO DO EVENTO PERMITIDO');
}
else 
{
  console.log ('CADASTRO DO EVENTO NÃO PERMITIDO POR DATA INVÁLIDA');
}
if (participantes.length <= limiteParticipantes) 
{
  console.log ('LIMITE DE CADASTRO DE PARTICIPANTES ATINGIDO');
}
else 
{
  console.log ('CADASTRAR PARTICIPANTE');
}
if (idade < idadeMinima)
{
  console.log ('CADASTRO DE PARTICIPANTE NÃO PERMITIDO POR IDADE');
}
else 
{
  console.log ('CADASTRO DE PARTICIPANTE PERMITIDO');
}
if (data_Evento > data_Atual && idade > idadeMinima && participantes.length <= limiteParticipantes)
{
  console.log ('EVENTO CADASTRADO');
}
else 
{
  console.log ('EVENTO IMPOSSIBILITADO');
}

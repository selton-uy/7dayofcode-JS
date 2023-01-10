let nome      = prompt('Qual seu nome?');
let idade     = prompt('Quandos anos você tem?');
let linguagem = prompt('Qual linguagem de programação você está estudando?');
let pergunta  = prompt(`Você gosta de estudar ${linguagem}? responda 1 para SIM ou 2 para NÃO.`);

document.write(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

if(pergunta == 1){
    document.write('Muito bom! Continue estudando e você terá muito sucesso.');
}if(pergunta == 2){
    document.write('Ahh que pena... Já tentou aprender outras linguagens?');
}

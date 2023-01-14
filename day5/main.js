alert("Bem vinde ao mercado mooni's.");
alert('Melhores preços e ofertas pra você!');

let fruta = [];
let legume = [];
let verdura = [];
let tempero = [];
let ovos = [];
const listaDeCategoria = [fruta, legume, verdura, tempero, ovos];

var c = 0

function verificaCategoria(produto, categoria){

    if(categoria == 1){
        fruta.push(produto);
    }
    if(categoria == 2){
        legume.push(produto);
    }
    if(categoria == 3){
        verdura.push(produto);
    }
    if(categoria == 4){
        tempero.push(produto);
    }
    if(categoria == 5){
        ovos.push(produto);
    }
}

var produto = prompt('Qual produto você deseja? digite NAO caso queira parar.').toUpperCase();
var categoria = prompt('Qual categoria se encaixa? [1]FRUTA [2]LEGUME [3]VERDURA [4]TEMPERO [5]OVOS');
verificaCategoria(produto,categoria);

while(produto){

    produto = prompt('Qual outro produto você deseja? digite NAO caso queira parar.').toUpperCase();

    if(produto == 'NAO'){
        alert('Obrigado pela preferencia');
        break;
    }

    var categoria = prompt('Qual categoria se encaixa? [1]FRUTA [2]LEGUME [3]VERDURA [4]TEMPERO [5]OVOS');
    verificaCategoria(produto,categoria);
    console.log(listaDeCategoria);
    c++
}
document.write(`Você comprou: Frutas ${fruta}`);
document.write(`Legumes<br> ${legume}`);
document.write(`Verdura<br> ${verdura}`);
document.write(`Tempero<br> ${tempero}`);
document.write(`Ovo <br> ${ovos}`);

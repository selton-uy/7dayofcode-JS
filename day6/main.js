let produto = document.getElementById('produto');
let categoria = document.getElementById('categoria');
let carrinho = [];
let produtosDoCarrinho = document.getElementById('produtosDoCarrinho')

function mostraCarrinho(){
    produtosDoCarrinho.innerHTML = carrinho;
    console.log(carrinho)

}
function verificaCategoria(){
    if(categoria.value == 0){
        alert('Selecione uma caetgoria');
    }
}
function enviar(){
    verificaCategoria();

    if (produto.value == ''){
        alert('Verifique as informações e tente novamente');
        if(carrinho.length == 0){
            excluir();
        }
    
    }else{
        carrinho.push(produto.value);
        carrinho.push(categoria.value)
        mostraCarrinho();
    }
    produto.value = ''

}
function excluir(){
    carrinho.pop();
    carrinho.pop();
    mostraCarrinho();

}


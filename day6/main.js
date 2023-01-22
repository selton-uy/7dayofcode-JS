let produto = document.getElementById('produto');
let categoria = document.getElementById('categoria');
let carrinho = document.querySelector('div#carrinho');
function enviar(){

    carrinho.innerHTML = produto.value;


}


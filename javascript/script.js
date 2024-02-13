/* ATIVAR MENU HAMBURGUER */

const aside = document.querySelector("aside")
const burguer = document.querySelector(".hamburguer")

function mostrarAside() {
    aside.style.display = "flex";
    aside.classList.toggle("active")
}

burguer.addEventListener("click", mostrarAside)

const botaocarrinho = document.querySelector("#botao-carrinho")
const carrinho = document.querySelector("#carrinho")
const fecharCarrinho = document.querySelector("#fechar");

function EsconderCarrinho() {
    carrinho.classList.toggle("active")
}


function mostrarCarrinho() {
    carrinho.classList.add("active")
}

fecharCarrinho.addEventListener("click", EsconderCarrinho); 
botaocarrinho.addEventListener("click", EsconderCarrinho)

/* SCROLL NAVEGACAO */

const nav = document.querySelector(".nav2")

window.addEventListener("scroll", function sumir() {
    if (burguer.div.display =! 'none' ) {
        if (window.pageYOffset>10) {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'inline-block';
        }
    }
})

/* ADICIONAR E REMOVER O PRODUTO AO CARRINHO */

const addcarrinho = document.querySelector(".card-button")
const imgproduto = document.querySelector(".card-img")
const remover = document.querySelector(".remove-item")
const produto = document.querySelectorAll(".menu li a .produto-carrinho")

function removerItemDoCarrinho(item){
    item.style.display = 'none';
}

function adicionarItemAoCarrinho() {
    if (produto.style.display === 'none') {
        produto.style.display = 'grid';
     } else {
        produto.style.display = 'none';
     }
}

produto.forEach()
addcarrinho.addEventListener("click", adicionarItemAoCarrinho)
remover.addEventListener("click", removerItemDoCarrinho)

/* MUDAR O VALOR DENTRO DO CARRINHO */

function incrementQuantity(button) {
    const input = button.parentElement.querySelector('.qtdd-item');
    input.value = parseInt(input.value) + 1;
    updateTotal();
}

function decrementQuantity(button) {
    const input = button.parentElement.querySelector('.qtdd-item');
    if (parseInt(input.value) > 0) {
        input.value = parseInt(input.value) - 1;
        updateTotal();
    }
}

function updateTotal() {
}

function incrementQuantity(button) {
    const input = button.parentElement.querySelector('.qtdd-item');
    input.value = parseInt(input.value) + 1;
    updateTotal();
}

function decrementQuantity(button) {
    const input = button.parentElement.querySelector('.qtdd-item');
    if (parseInt(input.value) > 0) {
        input.value = parseInt(input.value) - 1;
        updateTotal();
    }
}

function updateTotal() {
    const valorUnElements = document.querySelectorAll('.valor-un-carrinho');
    const qtddInputs = document.querySelectorAll('.qtdd-item');
    let total = 0;

    for (let i = 0; i < valorUnElements.length; i++) {
        const valorUn = parseFloat(valorUnElements[i].innerText);
        const qtdd = parseInt(qtddInputs[i].value);
        total += valorUn * qtdd;
    }

    document.querySelector('.valor-total').innerText = total.toFixed(2);
}




///Remover item  do Carrinho///

function removeItem(element) {
    // Encontrar o elemento pai do item que deve ser removido
    var produtoCarrinho = element.closest('.produto-carrinho');

    // Remover o elemento do DOM
    produtoCarrinho.remove();

}

function recalculateTotal() {

}



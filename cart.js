if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
}

function ready () {
    /*Função para selecionar e remover o item do carrinho
    -passando por todos os botões
    -dando target no item clicado*/
    let removeCartItemButtons = document.getElementsByClassName("btn-danger");
     for (let i = 0; i < removeCartItemButtons.length; i++){
        let button = removeCartItemButtons[i]; 
        button.addEventListener("click", removeCartItem)
    }
    /*Função para nao deixar o input do cart ser 0 ou negativo e dar update no total do cart */
    let quantityInputs = document.getElementsByClassName("cartQuantityInput");
    for (let i = 0; i < quantityInputs.length; i++){
        let input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
    /*Função do botão de adicionar ao cart */
    let addToCartButtons = document.getElementsByClassName('addCart');
    for (let i = 0; i < addToCartButtons.length; i++) {
        let button = addToCartButtons[i];
        button.addEventListener('click', addToCartClick);
    }
}

function removeCartItem(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal();
}

function quantityChanged(event) {
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
}

function addToCartClick(event) {
    let buttonClicked = event.target;
    let shopItem = buttonClicked.parentElement.parentElement;
    let title = shopItem.getElementsByClassName("itemName")[0].innerText;
    let price = shopItem.getElementsByClassName("priceTag")[0].innerText;
    let imgSrc = shopItem.getElementsByClassName("itemImg")[0].src;
    console.log(imgSrc);
    addItemToCart(title, price, imgSrc);
    updateCartTotal();
}

function addItemToCart (title, price, imgSrc) {
    let cartRow = document.createElement("div");
    cartRow.classList.add("cartStatus");
    let cartItems = document.getElementsByClassName("cartStatus")[0];
    let cartItemNames = cartItems.getElementsByClassName("cartItemTitle");
    for (let i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i] == title) {
            alert("O item já está no carrinho");
            return;
        }

    }
    let cartRowContents = `<div class="cartItem">
                        <img src="${imgSrc}">
                        <div class= "cartCard">
                            <label class="cartProdLabel">Camisetas</label>
                            <p class="cartItemTitle">${title}</p>
                        </div>
                        <span class="cartPriceTag">${price}</span>
                        <div class="cartQuantity cartColumn">
                            <input class="cartQuantityInput" type="number" value="1">
                            <button class="btn btn-danger" type="button">REMOVE</button>
                        </div>
                    </div>`
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName("btn-danger")[0].addEventListener("click", removeCartItem);
    cartRow.getElementsByClassName("cartQuantityInput")[0].addEventListener("change", quantityChanged);
}

/*Função para atualizar o preço total da compra
-passar por todos os itens pegando o preço e a quantidade
-multiplicar preço por quantidade
-somar */
function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName("cartStatus")[0];
    let cartRows = cartItemContainer.getElementsByClassName("cartItem");
    let total = 0;
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i];
        let priceElement = cartRow.getElementsByClassName("cartPriceTag")[0];
        let quantityElement = cartRow.getElementsByClassName("cartQuantityInput")[0];
        let price = parseFloat(priceElement.innerText.replace("R$ ",""));
        let quantity = quantityElement.value;
        total = total + (price*quantity);
        console.log(price * quantity);
    }
    total = Math.round(total * 100)/100;
    document.getElementsByClassName("totalNumber")[0].innerText = "R$ " + total;
}


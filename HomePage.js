// let cartItem = document.getElementsByClass("addCart");

// document.getElementsByClass("addCart").addEventListener("click", myFunction);

// function myFunction() {
//   document.getElementsByClass("addCart").createElement = ;
// }

// (function(){
//     const addCart = document.querySelectorAll("addCart");

//     addCart.forEach(function(btn){
//         btn.addEventListener("click", function(e){
//             if (event.target.parentElement.classList.contains("addCart"))
//             {
//                 console.log(event.target.parentElement.previousElementsSibling);
//             }
//         })

//     })
// })

let removeCartItemButtons = document.getElementsByClassName("btn-danger");
for (let i = 0; i < removeCartItemButtons.length; i++){
    let button = removeCartItemButtons[i];
    button.addEventListener("click", function(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove()
})
}

function updateCartTotal() {
    
}


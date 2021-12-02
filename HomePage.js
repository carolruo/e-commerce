

// let cartItem = document.getElementsByClass("addCart");

// document.getElementsByClass("addCart").addEventListener("click", myFunction);

// function myFunction() {
//   document.getElementsByClass("addCart").createElement = ;
// }

(function(){
    const addCart = document.querySelectorAll("addCart");

    addCart.forEach(function(btn){
        btn.addEventListener("click", function(e){
            if (event.target.parentElement.classList.contains("addCart"))
            {
                console.log(event.target.parentElement.previousElementsSibling);
            }
        })

    })
})
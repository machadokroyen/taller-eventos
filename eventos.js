document.addEventListener("DOMContentLoaded", function(){
    let conte = document.querySelector("div");
    let boton = document.querySelector("button");
    
    conte.addEventListener("click", function() {
        alert("Hola! Soy el div");
    });

    boton.addEventListener("click", function (x){
        alert('Hola!');
        x.stopPropagation();
    });
})

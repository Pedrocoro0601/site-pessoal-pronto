/*var mensagem = "Bem vindo ao site do Dr. Pedro Henrique";

alert(mensagem);
*/





var main = document.getElementById("main");
var botao = document.getElementById("botao")
var body = document.getElementById("body")
var clicked = true;
var clicks = 0;
var footer = document.getElementById("footer")
var header = document.getElementById("header")
var logo = document.getElementById("logo")


botao.addEventListener("click", ()=> {
    if (clicked == true) {
        botao.innerText = "Clique novamente"
        main.style.border = "24px solid"
        main.style.borderImage = "url(imagens/skull-border.svg)"
        main.style.borderImageSlice = 32
        main.style.borderImageRepeat = "round" 
        body.style.backgroundColor = "gray"
        header.style.backgroundColor = "black"
        footer.style.backgroundColor = "black"
        logo.src = "https://o.remove.bg/downloads/a036d6ae-5b0c-48cd-8b5e-a7f5f08e62ec/48-489122_bone-skull-png-image-background-skull-head-drawing__1_-removebg-preview.png"

        clicks++  
      
        clicked = false
    }
    else 
    {
    main.style.border = "0px solid"
    botao.innerText = "Clique aqui"
    body.style.backgroundColor = "white"
    header.style.backgroundColor = "rgb(40, 19, 80)"
    footer.style.backgroundColor = "rgb(40, 19, 80"
    logo.src = "imagens/logomarca.png"
    clicked = true
    clicks++ 
    }

     footer.innerText = "Você clicou:" + " " + clicks + "x"


    console.log(clicks);

});









/*var mensagem = "Bem vindo ao site do Dr. Pedro Henrique";

alert(mensagem);
*/





var main = document.getElementById("main");
var botao = document.getElementById("botao")
var body = document.getElementById("body")
var clicked = true;

botao.addEventListener("click", ()=> {
    if (clicked == true) {
        botao.innerText = "Clique novamente"
        main.style.border = "24px solid"
        main.style.borderImage = "url(https://skullctf.com/images/skull-border.svg)"
        main.style.borderImageSlice = 32
        main.style.borderImageRepeat = "round"     
      
        clicked = false
    }
    else 
    {
    main.style.border = "0px solid"
    botao.innerText = "Clique aqui"
    clicked = true
    }


});









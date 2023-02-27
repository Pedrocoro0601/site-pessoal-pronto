var main = document.getElementById("main");
var botao = document.getElementById("botao")
var body = document.getElementById("body")
var clicked = true;
var clicks = 0;
var footer = document.getElementById("footer")
var header = document.getElementById("header")
var logo = document.getElementById("logo")
var logobird = document.getElementById("logobird")
var logodog = document.getElementById("logodog")
var logohorse = document.getElementById("logohorse")
var hospital = document.getElementById("hospital")
var medico = document.getElementById("medico")
var colorfundoesquerdacima = document.getElementById("colorfundoesquerdacima")
var colorfundo = document.getElementById("colorfundo")
var fundoli1 = document.getElementById("fundoli1")
var fundoli2 = document.getElementById("fundoli2")
var fundoli3 = document.getElementById("fundoli3")
var colorbotao1 = document.getElementById("colorbotao1")
var colorbotao2 = document.getElementById("colorbotao2")
var colorbotao3 = document.getElementById("colorbotao3")
var colorbotao4 = document.getElementById("colorbotao4")
var saibamais1 = document.getElementById("saibamais1")
var saibamais2 = document.getElementById("saibamais2")
var saibamais3 = document.getElementById("saibamais3")
var saibamais0 = document.getElementById("saibamais0")

var audio = new Audio('musica/lobo2.mp3');



botao.addEventListener("click", ()=> {
    if (clicked == true) {
        audio.play();
        botao.innerText = "Volte ao normal"
        main.style.border = "24px solid"
        main.style.borderImage = "url(imagens/skull-border.svg)"
        main.style.borderImageSlice = 32
        main.style.borderImageRepeat = "round" 
        body.style.backgroundColor = "gray"
        header.style.backgroundColor = "black"
        footer.style.backgroundColor = "black"
        logo.src = "imagens/caveira.png"
        footer.style.color = "red"
        logo.style.width = "140px"
        logobird.src = "imagens/esqueleto-ave.png"
        logodog.src = "imagens/esqueleto-dog.png"
        logohorse.src = "imagens/esqueleto-cavalo.png"
        hospital.src = "imagens/hospital.jpg"
        medico.src = "imagens/medico.jpg"
        colorfundoesquerdacima.style.backgroundColor = "black"
        colorfundo.style.backgroundColor = "black"
        colorfundoesquerdacima.style.color = "red"
        fundoli1.style.backgroundColor = "gray"
        fundoli2.style.backgroundColor = "gray"
        fundoli3.style.backgroundColor = "gray"
        fundoli1.style.color = "red"
        fundoli2.style.color = "red"
        fundoli3.style.color = "red"
        colorbotao1.style.color = "red"
        colorbotao2.style.color = "red"
        colorbotao3.style.color = "red"
        colorbotao4.style.color = "red"
        saibamais1.style.backgroundColor = "red"
        saibamais2.style.backgroundColor = "red"
        saibamais3.style.backgroundColor = "red"
        saibamais1.style.color = "black"
        saibamais2.style.color = "black"
        saibamais3.style.color = "black"
        saibamais0.style.backgroundColor = "red"
        saibamais0.style.color = "black"
        
        clicks++  
      
        clicked = false
    }
    else 
    {
    audio.pause();
    main.style.border = "0px solid"
    botao.innerText = "Não clique aqui"
    body.style.backgroundColor = "white"
    header.style.backgroundColor = "rgb(40, 19, 80)"
    footer.style.backgroundColor = "rgb(40, 19, 80"
    logo.src = "imagens/logomarca.png"
    footer.style.color = "white"
    logo.style.width = "200px"
    logobird.src = "/imagens/arara.svg"
    logodog.src = "/imagens/dog.svg"
    logohorse.src = "/imagens/cow.svg"
    hospital.src = "imagens/consultorio-vet.jpg"
    medico.src = "imagens/vet-oftalmo.jpg"
    colorfundoesquerdacima.style.backgroundColor = "rgb(40, 19, 80)"
    colorfundo.style.backgroundColor = "rgb(40, 19, 80)"
    colorfundoesquerdacima.style.color = "white"
    fundoli1.style.backgroundColor = "yellow"
    fundoli2.style.backgroundColor = "yellow"
    fundoli3.style.backgroundColor = "yellow"
    fundoli1.style.color = "rgb(40, 19, 80)"
    fundoli2.style.color = "rgb(40, 19, 80)"
    fundoli3.style.color = "rgb(40, 19, 80)"
    colorbotao2.style.color = "white"
    colorbotao3.style.color = "white"
    colorbotao1.style.color = "white"
    colorbotao4.style.color = "white"
    saibamais3.style.backgroundColor = "rgb(40, 19, 80)"
    saibamais1.style.backgroundColor = "rgb(40, 19, 80)"
    saibamais2.style.backgroundColor = "rgb(40, 19, 80)"
    saibamais2.style.color = "white"
    saibamais3.style.color = "white"
    saibamais1.style.color = "white"
    saibamais0.style.backgroundColor = "yellow"
    saibamais0.style.color = "rgb(40, 19, 80)"
    clicked = true
    
    }
     footer.innerText = "Falei para nao clicar e você ainda clicou" + " " + clicks + "x"
     console.log(clicks);
});









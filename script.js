let hamburger = document.querySelector("#hamburger")
let menu = document.querySelector("section")
let tracos = document.querySelectorAll("span")

function  controlarMenu(){
    menu.classList.toggle("aparecerMenu");
    tracos[1].classList.toggle("sumirIgualTiro");
    tracos[0].classList.toggle("virarX1");
    tracos[2].classList.toggle("virarX2");
}


hamburger.onclick = controlarMenu;
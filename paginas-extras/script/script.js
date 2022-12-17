/* Animação do Surgimento do Menu */

let menu = document.getElementById("div-menu-simbolo");
let div_menu = document.getElementById("menu-lateral");
let body = document.querySelector("body");

let cont_menu = 0;

function chamarMenu() {
    if (cont_menu % 2 == 0) {
        div_menu.style.left = "0px";
        div_menu.style.transition = "1s";

        menu.style.left = "150px";
        menu.style.transition = "1s";
        menu.style.transitionDelay = ".1s";

        body.style.overflowY = "hidden";
    } else {
        div_menu.style.left = "-250px";
        div_menu.style.transition = "1s";

        menu.style.left = "10px";
        menu.style.transition = ".5s";

        body.style.overflowY = "unset";
    }
    cont_menu++;
}
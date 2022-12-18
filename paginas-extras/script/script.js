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

/* Adicionar Nova Linha na Tabela Armas */

let tabela_armas = document.querySelector("div#tabela-armas");

function novaLinhaArmas() {
    let nova_linha_armas = document.createElement("div");
    tabela_armas.appendChild(nova_linha_armas);
    nova_linha_armas.classList.add("armas-info");

    let nova_linhas = document.getElementsByClassName("armas-info");

    let cont_classes_armas = nova_linhas.length;

    let linha_atual_armasInfo = nova_linhas.length - 1;

    for (let i = 1; i <= 6; i++) {
        let input =  document.createElement("input");

        nova_linha_armas.appendChild(input);

        switch (i) {
            case 1:
                input.setAttribute("id", `tipo${cont_classes_armas}`);
                input.classList.add("tipo")
                break;
            case 2:
                input.setAttribute("id", `arma${cont_classes_armas}`);
                input.classList.add("arma")
                break;
            case 3:
                input.setAttribute("id", `alcance${cont_classes_armas}`);
                input.classList.add("alcance")
                break;
            case 4:
                input.setAttribute("id", `dano${cont_classes_armas}`);
                input.classList.add("dano")
                break;
            case 5:
                input.setAttribute("type", "number");
                input.setAttribute("id" , `balas${cont_classes_armas}`);
                input.classList.add("balas")
                break;
            case 6:
                input.setAttribute("type", "number");
                input.setAttribute("max", "20");
                input.setAttribute("id", `critico${cont_classes_armas}`);
                input.classList.add("critico")
                break;
        }

        nova_linhas[linha_atual_armasInfo].appendChild(input);
    
    }

    //bordaInferiorArmas();
}

/* Adicionando Novas Linhas na Tabela Inventário */

let tabela_inventario = document.querySelector("div#tabela-inventario");

function novaLinhaInventario() {
    let nova_linha_inventario = document.createElement("div");
    tabela_inventario.appendChild(nova_linha_inventario);
    nova_linha_inventario.classList.add("inventario-detalhes");

    let nova_linhas = document.getElementsByClassName("inventario-detalhes");

    let cont_classes_inventario = nova_linhas.length;

    let linha_atual_inventarioInfo = nova_linhas.length - 1;

    for (let i = 1; i <= 2; i++) {
        let input =  document.createElement("input");

        nova_linha_inventario.appendChild(input);

        switch (i) {
            case 1:
                input.setAttribute("id", `inventario${cont_classes_inventario}`);
                input.classList.add("inventario")
                break;
            case 2:
                input.setAttribute("id", `detalhes${cont_classes_inventario}`);
                input.classList.add("detalhes")
                break;
        }

        nova_linhas[linha_atual_inventarioInfo].appendChild(input);
    
    }
}

/* Adicionando Nova Linha aos Traumas */

let tabela_traumas = document.querySelector("div#tabela-traumas");

function novaLinhaTraumas() {
    let nova_linha_traumas = document.createElement("div");
    tabela_traumas.appendChild(nova_linha_traumas);
    nova_linha_traumas.classList.add("traumas-info");

    let nova_linhas = document.getElementsByClassName("traumas-info");

    let cont_classes_traumas = nova_linhas.length;

    let linha_atual_traumasInfo = nova_linhas.length - 1;

    for (let i = 1; i <= 2; i++) {
        let input =  document.createElement("input");

        nova_linha_traumas.appendChild(input);

        switch (i) {
            case 1:
                input.setAttribute("id", `trauma${cont_classes_traumas}`);
                input.classList.add("trauma")
                break;
            case 2:
                input.setAttribute("id", `descricao${cont_classes_traumas}`);
                input.classList.add("descricao")
                break;
        }

        nova_linhas[linha_atual_traumasInfo].appendChild(input);
    
    }
}
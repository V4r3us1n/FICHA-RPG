if (localStorage.getItem("token") == null) {
    alert("Você precisa estar logado para acessar essa página");
    window.location.href = "./login.html";
}

let userLogado = JSON.parse(localStorage.getItem("userLogado"));

let logado = document.querySelector("#logado");

function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = ".//login.html";
}

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

/* TEXT AREA */
function textAreaArmas() {
    /* Adicionando classe para todos os itens da tabela de acordo com a linha em que estão */
    let div_armasInfo = document.getElementsByClassName("armas-info");

    for (let i = 0; i < div_armasInfo.length; i++) {
        div_armasInfo[i].children.length;
        for (let j = 0; j < div_armasInfo[i].children.length;  j++) {
            div_armasInfo[i].children[j].classList.add(`armas-info${i}`)
        }
    }

    /* Tornando os itens das linhas responsivos */

    let textareai = document.getElementsByClassName("armas-info");

    let textarea = [];

    /*
    for (let i = 0; i < textareai.length; i++) {
        textareai[i].addEventListener("keyup", f => {
            textareai[i].style.height = "auto";
            for (let i = 0; i < textareai.length; i++) {
                textareai[i].style.height = "auto";
            }
            let N_linhas = f.target.scrollHeight;
            textareai[i].style.height = `${N_linhas}px`;
            for (let i = 0; i < textareai.length; i++) {
                textareai[i].style.height = `${N_linhas}px`;
            }
        })
    }
    */
    for (let i = 0; i < textareai.length; i++) {
        textarea.push(`armas-info${i}`);
    }

    for (let c0 = 0; c0 < textarea.length; c0++) {
        let area_Text = document.getElementsByClassName(`${textarea[c0]}`);
        for (let c1 = 0; c1 < area_Text.length; c1++) {
            area_Text[c1].addEventListener("keyup", f => {
                area_Text[c1].style.height = "auto";
                for (let c2 = 0; c2 < area_Text.length; c2++) {
                    area_Text[c2].style.height = "auto";
                }
                let N_linhas = f.target.scrollHeight;
                if (N_linhas < 30) {
                    N_linhas = 30;
                }
                area_Text[c1].style.height = `${N_linhas}px`;
                for (let c3 = 0; c3 < area_Text.length; c3++) {
                    area_Text[c3].style.height = `${N_linhas}px`;
                }
            })
        }
    }
}

textAreaArmas();

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
        let input;

        if (i == 5) {
            input = document.createElement("input");
        } else {
            input = document.createElement("textarea");
        }

        nova_linha_armas.appendChild(input);

        switch (i) {
            case 1:
                input.setAttribute("id", `tipo${cont_classes_armas}`);
                input.classList.add("tipo");
                input.setAttribute("rows", "1");
                break;
            case 2:
                input.setAttribute("id", `arma${cont_classes_armas}`);
                input.classList.add("arma");
                input.setAttribute("rows", "1");
                break;
            case 3:
                input.setAttribute("id", `alcance${cont_classes_armas}`);
                input.classList.add("alcance");
                input.setAttribute("rows", "1");
                break;
            case 4:
                input.setAttribute("id", `dano${cont_classes_armas}`);
                input.classList.add("dano");
                input.setAttribute("rows", "1");
                break;
            case 5:
                input.setAttribute("type", "number");
                input.setAttribute("id" , `balas${cont_classes_armas}`);
                input.classList.add("balas");
                break;
            case 6:
                input.setAttribute("id", `critico${cont_classes_armas}`);
                input.classList.add("critico");
                input.setAttribute("rows", "1");
                break;
        }

        nova_linhas[linha_atual_armasInfo].appendChild(input);
    
    }

    textArea();
    //bordaInferiorArmas();
}

/* TEXT AREA */
/* Responsividade da Text Area */

function textAreaInventario() {
    /* Adicionando classe para todos os itens da tabela de acordo com a linha em que estão */
    let div_invDet = document.getElementsByClassName("inventario-detalhes");

    for (let i = 0; i < div_invDet.length; i++) {
        div_invDet[i].children.length;
        for (let j = 0; j < div_invDet[i].children.length;  j++) {
            div_invDet[i].children[j].classList.add(`inventario-detalhes${i}`)
        }
    }

    /* Tornando os itens das linhas responsivos */

    let textarea = [];

    for (let i = 0; i < div_invDet.length; i++) {
        textarea.push(`inventario-detalhes${i}`);
    }

    for (let c0 = 0; c0 < textarea.length; c0++) {
        let area_Text = document.getElementsByClassName(`${textarea[c0]}`);
        for (let c1 = 0; c1 < area_Text.length; c1++) {
            area_Text[c1].addEventListener("keyup", f => {
                area_Text[c1].style.height = "auto";
                for (let c2 = 0; c2 < area_Text.length; c2++) {
                    area_Text[c2].style.height = "auto";
                }
                let N_linhas = f.target.scrollHeight;
                if (N_linhas < 30) {
                    N_linhas = 30;
                }
                area_Text[c1].style.height = `${N_linhas}px`;
                for (let c3 = 0; c3 < area_Text.length; c3++) {
                    area_Text[c3].style.height = `${N_linhas}px`;
                }
            })
        }
    }
}

textAreaInventario();

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
        let input =  document.createElement("textarea");

        nova_linha_inventario.appendChild(input);

        switch (i) {
            case 1:
                input.setAttribute("id", `inventario${cont_classes_inventario}`);
                input.classList.add("inventario");
                input.setAttribute("rows", "1");
                break;
            case 2:
                input.setAttribute("id", `detalhes${cont_classes_inventario}`);
                input.classList.add("detalhes");
                input.setAttribute("rows", "1");
                break;
        }

        nova_linhas[linha_atual_inventarioInfo].appendChild(input);
    
    }

    textAreaInventario();
    
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
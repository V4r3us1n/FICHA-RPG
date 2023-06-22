function exibirSenha() {
    let senha = document.querySelector("#senha");
    let  confirmar_senha = document.querySelector("#confirmar-senha");

    let exibir_senha = document.querySelector("#exibir-senha");

    if (exibir_senha.checked == true) {
        senha.type = "text";
        confirmar_senha.type = "text";
        console.log("oi")
    } else {
        console.log("tchau")
        senha.type = "password";
        confirmar_senha.type = "password";
    }
}


/*
function cadastrarUsuario() {
    let usuario = document.querySelector("#usuario");
    let confirmar_usuario = document.querySelector("#confirmar-usuario");

    let senha = document.querySelector("#senha");
    let confirmar_senha = document.querySelector("#confirmar_senha");

    

    if (usuario.value != confirmar_usuario.value) {
        alert("[ERRO!] O nome digitado em Usuário e em Confirmar Usuário devem ser iguais!");
        usuario.classList.add("dados-incorretos");
        confirmar_usuario.classList.add("dados-incorretos");
    } else {
        if (senha.value != confirmar_senha.value) {
            alert("[ERRO!] A senha tem que ser digitado da mesma forma nos dois campos!");
            senha.classList.add("dados-incorretos");
            confirmar_senha.classList.add("dados-incorretos");
            
        } else {

        }
    }
}*/

let usuario = document.querySelector("#usuario");
let labelUser = document.querySelector("#userLabel");
let validUser = false;



let senha = document.querySelector("#senha");
let labelSenha = document.querySelector("#senhaLabel");
let validSenha = false;

let confirmarSenha = document.querySelector("#confirmar-senha");
let labelConfirmarSenha = document.querySelector("#senhaLabel2");
let validConfirmarSenha = false;

let confirmarUsuario = document.querySelector("#confirmar-usuario");
let labelConfirmarUsuario = document.querySelector("#userLabel2");
let validConfirmarUsuario = false;

usuario.addEventListener("keyup", () => {
    if (usuario.value.length <= 4) {
        labelUser.setAttribute("style", "color: red");
        labelUser.innerHTML = "Usuário *Insira no mínimo 5 caracteres para o nome*";
        usuario.setAttribute("style", "border-color: red");
        validUser = false;
    } else {
        labelUser.setAttribute("style", "color: green");
        labelUser.innerHTML = "Usuário";
        usuario.setAttribute("style", "border-color: green");
        validUser = true;
    }
})

senha.addEventListener("keyup", () => {
    if(senha.value.length <= 5) {
        labelSenha.setAttribute("style", "color: red");
        labelSenha.innerHTML = "Senha *deve ter no mínimo 6 caracteres*";
        senha.setAttribute("style", "border-color: red");
        validSenha = false;
    } else {
        labelSenha.setAttribute("style", "color: green");
        labelSenha.innerHTML = "Senha";
        senha.setAttribute("style", "border-color: green");
        validSenha = true;
    }
})


confirmarSenha.addEventListener("keyup", () => {
    if (senha.value != confirmarSenha.value) {
        labelConfirmarSenha.setAttribute("style", "color: red");
        labelConfirmarSenha.innerHTML = "Confirmar Senha *repita a sua senha neste campo*";
        confirmarSenha.setAttribute("style", "border-color: red");
        validConfirmarSenha = false;
    } else {
        labelConfirmarSenha.setAttribute("style", "color: green");
        labelConfirmarSenha.innerHTML = "Confirmar Senha";
        confirmarSenha.setAttribute("style", "border-color: green");
        validConfirmarSenha = true;
    }
})

confirmarUsuario.addEventListener("keyup", () => {
    if (usuario.value != confirmarUsuario.value) {
        labelConfirmarUsuario.setAttribute("style", "color: red");
        labelConfirmarUsuario.innerHTML = "Confirmar Usuário *repita seu nome de usuário aqui*";
        confirmarUsuario.setAttribute("style", "border-color: red");
        validConfirmarUsuario = false;
    } else {
        labelConfirmarUsuario.setAttribute("style", "color: green");
        labelConfirmarUsuario.innerHTML = "Confirmar Usuário";
        confirmarUsuario.setAttribute("style", "border-color: green");
        validConfirmarUsuario = true;
    }
})

function cadastrarUsuario() {
    if (validUser && validConfirmarUsuario && validSenha && validConfirmarSenha) {
        let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]");

        listaUser.push(
            {
                userCad: usuario.value,
                senhaCad: senha.value
            }
        )
        
        localStorage.setItem("listaUser", JSON.stringify(listaUser));

        alert("Seu cadastro foi realizado com sucesso!")

        setTimeout(() => {
            window.location.href = "../paginas-extras/login.html";
        }, 3000)
    } else {
        alert("[ERRO!] Não foi possível realizar seu cadastro, por favor verifique suas informações e tente novamente!");
    }
}
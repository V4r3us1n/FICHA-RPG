function irParaCadastro() {
    window.location.href = "./paginas-extras/cadastro.html";
}

function entrar() {
    let usuario = document.querySelector("#usuario");
    let userLabel = document.querySelector("#userLabel");

    let senha = document.querySelector("#senha");
    let senhaLabel = document.querySelector("#senhaLabel");

    let listaUser = [];

    let userValid = {
        nome: null,
        user: null,
        senha: null
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'));

    listaUser?.forEach(item => {
        if (usuario.value == item.userCad && senha.value == item.senhaCad) {
            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }
    });

    usuario.classList.remove("dados-incorretos");
    userLabel.classList.remove("dados-incorretos");
    senha.classList.remove("dados-incorretos");
    senhaLabel.classList.remove("dados-incorretos");

    if (usuario.value == userValid.user && senha.value == userValid.senha) {
        window.location.href = "../index.html";

        let mathRandom = Math.random().toString('6').substr(2);
        let token = mathRandom + mathRandom;

        localStorage.setItem('token', token);
        localStorage.setItem('userLogado', JSON.stringify(userValid));
    } else {
        let msgError = alert("[ERRO!] Por favor, verifique se os dados inseridos estão corretos!");
        usuario.classList.add("dados-incorretos");
        userLabel.classList.add("dados-incorretos");
        senha.classList.add("dados-incorretos");
        senhaLabel.classList.add("dados-incorretos");
    }
}
let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");

function validaNome() {
    let txtNome = document.querySelector("#txtNome");
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido";
    } else {
        txtNome.remove();
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail");

    if (email.value.indexOf("@") == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = "Email inválido";
    } else {
        txtEmail.remove();
    }
}
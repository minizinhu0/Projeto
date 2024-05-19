const form = document.querySelector("#form");
const nomeInput = document.querySelector("#nome"); // Corrigido o seletor para #nome
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

let shouldSubmitForm = false; // Variável para controlar o envio do formulário

function mostrarSenha() {
    var inputPass = document.getElementById('password');
    var btnShowPass = document.getElementById('btn-senha');

    if (inputPass.type === 'password') {
        inputPass.setAttribute('type', 'text');
        btnShowPass.classList.replace('bi-eye', 'bi-eye-slash');
    } else {
        inputPass.setAttribute('type', 'password');
        btnShowPass.classList.replace('bi-eye-slash', 'bi-eye');
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //Validação de campo de nome.
    if (nomeInput.value === "") { // Corrigido para nomeInput
        alert('Você precisa preencher o seu nome.');
        return;
    }

    //Validação campo de e-mail.
    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert('Você precisa colocar um E-mail válido.');
        return;
    }

    //Validação campo de senha
    if (!validatePassword(passwordInput.value, 8)) {
        alert(" A senha precisa conter 8 dígitos.");
        return;
    }

    if (!validateUpperCase(passwordInput.value)) {
        alert(" A senha precisa conter pelo menos um caractere maiúsculo.");
        return;
    }

    // Se todas as validações passarem, definimos shouldSubmitForm como true
    shouldSubmitForm = true;
    
    // E submetemos o formulário manualmente
    if (shouldSubmitForm) {
        form.submit();
    }
});

// Função de Validação de email utilizando regex
function isEmailValid(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// Função que valida a senha.
function validatePassword(password, minDigits) {
    return password.length >= minDigits;
}

// Função que valida se a senha contém pelo menos um caractere maiúsculo.
function validateUpperCase(password) {
    const passwordPattern = /[A-Z]/;
    return passwordPattern.test(password);
}

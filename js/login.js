// Inputs do cadastro
const form = document.querySelector('#registro-form');
const regemail = document.querySelector('#email-area');
const reguser = document.querySelector('#ruser-area');
const regpass = document.querySelector('#rpass-area');
const confpass = document.querySelector('#confpass-area');

// Botão de cadastrar
const regButton = document.querySelector("#regButton");

// Container de cadastro
const cadDiv = document.querySelector('#registro-section');

// Container de sucesso no cadastro
const alertCadastro = document.querySelector('#cadastro-sucesso');

// Submit button function - CADASTRAR
form.addEventListener('submit', (event) => {

    event.preventDefault() // Removendo o comportamento padrão do form no navegador

    const result = checkInputs()

    if (result === true) {
        cadDiv.style.display = 'none'; 
        alertCadastro.classList.add('flex');
    }

})

// Função display erro no input
function errorCall(input, errorMessage) {

    const formControl = input.parentElement; // parentElement retorna a referência pai de um elemento, no caso a div a qual o input passado no parâmetro pertence.
    const smallError = formControl.querySelector('small') // elemento <small> da <div> pai do <input> passado como parâmetro.

    smallError.innerText = errorMessage // texto de <small> será o parâmetro errorMessage

    formControl.classList.remove('success')
    formControl.classList.add('error')

}

// Função display sucesso no input
function successCall(input) {

    const formControl = input.parentElement; // parentElement retorna a referência pai de um elemento, no caso a div a qual o input passado no parâmetro pertence.

    formControl.classList.remove('error')
    formControl.classList.add('success')

}

// Função de checagem dos inputs
function checkInputs() {

    const reguserValue = reguser.value.trim()
    const regemailValue = regemail.value.trim()
    const regpassValue = regpass.value.trim()
    const confpassValue = confpass.value.trim()
    const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    let validation = 0
    
    if (reguserValue === '') {
        errorCall(reguser, 'Preencha esse campo')
    } else if (reguserValue.length < 3) {
        errorCall(reguser, 'Seu usuário deve ter no mínimo 3 caracteres!')
    } else {
        successCall(reguser)
        validation += 1
    }

    if (regemailValue === '') {
        errorCall(regemail, 'Preencha esse campo')
    } else if (regemailValue.match(emailregex)) {
        successCall(regemail)
        validation += 1
    } else {
        errorCall(regemail, 'Preencha com um e-mail válido!')
    }

    if (regpassValue === '') {
        errorCall(regpass, 'Preencha esse campo!')
    } else if (regpassValue.length < 8) {
        errorCall(regpass, 'Sua senha deve ter no mínimo 8 caracteres!')
    } else {
        successCall(regpass)
        validation += 1
    }

    if (confpassValue === '') {
        errorCall(confpass, 'Preencha esse campo')
    } else if (confpassValue.length < 8 ){
        errorCall(confpass, 'Sua senha deve ter no mínimo 8 caracateres!')
    } else if(confpassValue != regpassValue) {
        errorCall(confpass, 'As senhas precisam ser iguais!')
    } else {
        successCall(confpass)
        validation += 1
    }

    if (validation === 4) {
        return true
    } else {
        return false
    }

}

// Função de voltar à tela de login após cadastro
function backHome() {
    window.location.href = 'signin.html'
}

passArea1 = document.querySelector('#password-area');
passArea2 = document.querySelector('#rpass-area');
passArea3 = document.querySelector('#confpass-area');
showBtn1 = document.querySelector('#showBtn1');
showBtn2 = document.querySelector('#showBtn2');
showBtn3 = document.querySelector('#showBtn3');

function showPass(input, button) {

    if (input.type === 'password') {
        input.type = 'text';
        button.className = 'showBtn bi bi-eye-slash-fill'
    } else {
        input.type = 'password';
        button.className = 'showBtn bi bi-eye-fill'
    }
}

function toggleLoginPass() {
    showPass(passArea1, showBtn1)
}

function toggleRegPass() {
    showPass(passArea2, showBtn2)
}

function toggleConfPass() {
    showPass(passArea3, showBtn3)
}
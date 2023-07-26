//Haz tú validación en javascript acá
const inputs = document.querySelectorAll('input');
const userNameField = document.querySelector("[name=Nombre]");
const userEmailField = document.querySelector("[name=Email]");
const userAsuntoField = document.querySelector("[name=Asunto]");
const userMensajeField = document.querySelector("[name=Mensaje]");


let form = document.querySelector("#form");
let btn = document.querySelector("#btn");

function validar() {
    const desabilitar = false;

    if (form.Nombre.value == '') {
        desabilitar = true;
    }

    if (form.Email.value == '') {
        desabilitar = true;
    }

    if (form.Asunto.value == '') {
        desabilitar = true;
    }

    if (form.Mensaje.value == '') {
        desabilitar = true;
    }

    if (desabilitar == true) {
        btn.disabled = true;
    } else {
        btn.disabled = false;
        }
}

form.addEventListener("keyup", validar)


const validateEmptyField = (e) => {
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.length === 0) {
        field.nextElementSibling.innerText = 'Campo requerido';
    } else {
        field.nextElementSibling.innerText = "";
    }
}

userNameField.addEventListener("blur",validateEmptyField);
userEmailField.addEventListener("blur",validateEmptyField);
userAsuntoField.addEventListener("blur",validateEmptyField);
userMensajeField.addEventListener("blur",validateEmptyField);


const validateFocus = (e) => {
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.length === 0) {
        field.nextElementSibling.innerText = '';
    } 
}

userNameField.addEventListener("focus",validateFocus);
userEmailField.addEventListener("focus",validateFocus);
userAsuntoField.addEventListener("focus",validateFocus);
userMensajeField.addEventListener("focus",validateFocus);

inputs.forEach( input =>{
    input.onfocus = ()=>{
        input.previousElementSibling.classList.add("top");
        
        input.previousElementSibling.classList.add("focus");
        
        input.parentNode.classList.add("focus");
        
    }
    input.onblur = ()=>{
        if (input.value.trim( ).length == 0) {
        input.previousElementSibling.classList.remove("top");
        }
        input.previousElementSibling.classList.remove("focus");
        input.parentNode.classList.remove("focus");
    }
})

const textareas = document.querySelectorAll('textarea');
textareas.forEach( textarea =>{
    textarea.onfocus = ()=>{
        textarea.previousElementSibling.classList.add("top");
        textarea.previousElementSibling.classList.add("focus");
        textarea.parentNode.classList.add("focus");
    }
    textarea.onblur = ()=>{
        if (textarea.value.trim( ).length == 0) {
        textarea.previousElementSibling.classList.remove("top");
        }
        textarea.previousElementSibling.classList.remove("focus");
        textarea.parentNode.classList.remove("focus");
    }
})


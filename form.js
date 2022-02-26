const form = document.querySelector('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('number');

// Error Mesaage 
function error(input, message) {
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback messages';
}

// Success Message
function success(input) {
    input.className = 'form-control is-valid';
}

// Check Required
function checkRequired(inputs) {
    inputs.forEach((input) => {
        if (input.value === '') {
            error(input, `${input.id} is required!`);
        } else {
            success(input);
        }
    });
}

// Check Email
function checkEmail(input){
    const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(re.test(input.value)){
            success(input);
        }else{
            error(input,`${input.id} adress in not corrected!`);
        }
}

// Check Length
function checkLength(input,min,max){
    if(input.value.length < min){
        error(input,`${input.id} minimum ${min} characters!`);
    }else if(input.value.length > max){
        error(input,`${input.id} maximum ${max} characters!`);
    }else{
        success(input);
    }
}

// Check Phone
function checkPhone(input){
    var phoneno = /^\d{10}$/;
    if(phoneno.test(input.value)){
        success(input);
    }else{
        error(input,`${input.id} must be 10 characters!`);
    }
}

form.addEventListener('submit', (e) => {
    checkRequired([name, email, phone]);
    checkEmail(email);
    checkLength(name,8,15);
    checkPhone(phone);

    e.preventDefault();
});

// button disabled
function control(formId) {
    let invalids = document.getElementById(formId).querySelectorAll(':invalid').length,
        dsButton = document.getElementById(formId).querySelector('#dsButton');
    if (invalids == 0) {
        dsButton.removeAttribute('disabled');
    } else {
        dsButton.setAttribute('disabled', 'disabled');
    }
}

control('form1');
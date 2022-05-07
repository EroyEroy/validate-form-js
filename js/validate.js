let form = document.querySelector('.js-form'),
    formInputs = document.querySelectorAll('.js-input'),
    inputEmail = document.querySelector('.js-input-email'),
    passVisible = document.querySelector('#test-btn'),
    inputPhone = document.querySelector('.js-input-phone'),
    pass1 = document.querySelector('#password1'),
    pass2 = document.querySelector('#password2');
// показ паролей по кнопке
function show() {
    if (pass1.type == 'password' && pass2.type == 'password') {
        pass1.type = 'text';
        pass2.type = 'text';
        passVisible.style.backgroundImage = 'url("../img/eye-invisible.png")';
    } else {
        pass1.type = 'password';
        pass2.type = 'password';
        passVisible.style.backgroundImage = 'url("../img/eye-visible.png")';
    }
}

function validateEmail(email) {
    let re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    let re = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    return re.test(String(phone));
}

form.onsubmit = function() {
    let emailVal = inputEmail.value,
        phoneVal = inputPhone.value,
        pass1Val = pass1.value,
        pass2Val = pass2.value,
        emptyInputs = Array.from(formInputs).filter(input => input.value === '');

    formInputs.forEach(function(input) {
        if (input.value === '') {
            input.classList.add('is-invalid');
        } else {
            input.classList.remove('is-invalid');
        }
    });
    if (emptyInputs.length != 0) {
        return false;
    }

    if (!validateEmail(emailVal)) {
        inputEmail.classList.add('is-invalid');
        return false;
    } else {
        inputEmail.classList.remove('is-invalid');
    }
    if (!validatePhone(phoneVal)) {
        inputPhone.classList.add('is-invalid');
        return false;
    } else {
        inputPhone.classList.remove('is-invalid');
    }
    if (pass1Val != pass2Val) {
        pass1.classList.add('is-invalid');
        pass2.classList.add('is-invalid');
        return false;
    } else {
        pass1.classList.remove('is-invalid');
        pass2.classList.remove('is-invalid');
    }
    alert('OK');
    form.reset();
};
let pass1 = document.querySelector('#password1'),
	pass2 = document.querySelector('#password2'),
    passVisible = document.querySelector('#test-btn');
// показ паролей по кнопке
function show() {
    if (pass1.type == 'password' || (pass1.type === 'password' && pass2.type === 'password')) {
        pass1.type = 'text';
		pass2.type = 'text';
        passVisible.style.backgroundImage = 'url("../img/eye-invisible.png")';
    } else {
        pass1.type = 'password';
		pass2.type = 'password';
        passVisible.style.backgroundImage = 'url("../img/eye-visible.png")';
    }
}
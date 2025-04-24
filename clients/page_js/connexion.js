
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const submitBtn = document.querySelector('.submit-btn');

    function validateForm() {
        const isEmailValid = emailInput.value.trim() !== '';
        const isPasswordValid = passwordInput.value.trim() !== '';

        emailInput.nextElementSibling.classList.toggle('visible', !isEmailValid);
        passwordInput.nextElementSibling.classList.toggle('visible', !isPasswordValid);

        emailInput.classList.toggle('valid', isEmailValid);
        emailInput.classList.toggle('invalid', !isEmailValid);
        passwordInput.classList.toggle('valid', isPasswordValid);
        passwordInput.classList.toggle('invalid', !isPasswordValid);

        submitBtn.disabled = !(isEmailValid && isPasswordValid);
        submitBtn.classList.toggle('active', !submitBtn.disabled);
    }

    emailInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (submitBtn.disabled) {
            return;
        }
        console.log('Formulaire valide, tentative de connexion...');
    });
});

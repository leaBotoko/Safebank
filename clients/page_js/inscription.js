



document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const submitButton = document.querySelector('.submit-btn');
    const fullname = document.getElementById('fullname');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const terms = document.getElementById('terms');

    const passwordCriteria = {
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
        special: false,
    };

    function checkPassword() {
        const value = password.value;
        passwordCriteria.length = value.length >= 8;
        passwordCriteria.uppercase = /[A-Z]/.test(value);
        passwordCriteria.lowercase = /[a-z]/.test(value);
        passwordCriteria.number = /\d/.test(value);
        passwordCriteria.special = /[!@#$%^&*]/.test(value);

        document.getElementById('length').classList.toggle('valid', passwordCriteria.length);
        document.getElementById('uppercase').classList.toggle('valid', passwordCriteria.uppercase);
        document.getElementById('lowercase').classList.toggle('valid', passwordCriteria.lowercase);
        document.getElementById('number').classList.toggle('valid', passwordCriteria.number);
        document.getElementById('special').classList.toggle('valid', passwordCriteria.special);
    }

    function checkForm() {
        const passwordMatch = password.value === confirmPassword.value;
        const validForm = passwordMatch && Object.values(passwordCriteria).every(criteria => criteria);

        submitButton.disabled = !validForm || !terms.checked;
    }

    password.addEventListener('input', () => {
        checkPassword();
        checkForm();
    });

    confirmPassword.addEventListener('input', checkForm);

    fullname.addEventListener('input', checkForm);
    email.addEventListener('input', checkForm);
    phone.addEventListener('input', checkForm);
    terms.addEventListener('change', checkForm);
});

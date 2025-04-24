document.addEventListener('DOMContentLoaded', () => {
    // Éléments du formulaire
    const loginForm = document.querySelector('.login-form');
    const usernameInput = document.querySelector('input[name="username"]');
    const passwordInput = document.querySelector('input[name="password"]');
    const togglePasswordBtn = document.querySelector('.toggle-password');
    const loginButton = document.querySelector('.login-button');
    const rememberMeCheckbox = document.querySelector('input[name="remember-me"]');

    // Fonction pour valider le nom d'utilisateur
    const validateUsername = (username) => {
        return username.length >= 3;
    };

    // Fonction pour valider le mot de passe
    const validatePassword = (password) => {
        return password.length >= 6;
    };

    // Gestionnaire pour afficher/masquer le mot de passe
    if (togglePasswordBtn) {
        togglePasswordBtn.addEventListener('click', () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            // Mettre à jour l'icône
            const icon = togglePasswordBtn.querySelector('i');
            icon.classList.toggle('fa-eye');
            icon.classList.toggle('fa-eye-slash');
        });
    }

    // Validation en temps réel du nom d'utilisateur
    usernameInput.addEventListener('input', () => {
        const isValid = validateUsername(usernameInput.value);
        usernameInput.classList.toggle('is-invalid', !isValid);
    });

    // Validation en temps réel du mot de passe
    passwordInput.addEventListener('input', () => {
        const isValid = validatePassword(passwordInput.value);
        passwordInput.classList.toggle('is-invalid', !isValid);
    });

    // Gestionnaire de soumission du formulaire
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;
        const rememberMe = rememberMeCheckbox.checked;

        // Valider les champs
        if (!validateUsername(username) || !validatePassword(password)) {
            showError('Veuillez vérifier vos identifiants');
            return;
        }

        // Simuler la connexion
        try {
            loginButton.classList.add('loading');
            loginButton.innerHTML = '<i class="fas fa-spinner"></i> Connexion en cours...';
            
            // Simuler un délai de connexion
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Simulation de vérification des identifiants (à remplacer par une vraie API)
            if (username === 'admin' && password === 'admin123') {
                // Stocker les préférences de connexion si "Se souvenir de moi" est coché
                if (rememberMe) {
                    localStorage.setItem('rememberedUsername', username);
                } else {
                    localStorage.removeItem('rememberedUsername');
                }

                // Rediriger vers le tableau de bord
                window.location.href = 'admin.html';
            } else {
                throw new Error('Identifiants incorrects');
            }
        } catch (error) {
            showError(error.message);
            loginButton.classList.remove('loading');
            loginButton.innerHTML = '<i class="fas fa-sign-in-alt"></i> Se connecter';
        }
    });

    // Fonction pour afficher les erreurs
    const showError = (message) => {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
        
        // Supprimer l'erreur précédente s'il y en a une
        const existingError = document.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }

        // Insérer le message d'erreur avant le bouton de connexion
        loginButton.parentNode.insertBefore(errorDiv, loginButton);

        // Supprimer le message après 5 secondes
        setTimeout(() => {
            errorDiv.remove();
        }, 5000);
    };

    // Restaurer le nom d'utilisateur si "Se souvenir de moi" était coché
    const rememberedUsername = localStorage.getItem('rememberedUsername');
    if (rememberedUsername) {
        usernameInput.value = rememberedUsername;
        rememberMeCheckbox.checked = true;
    }

    // Ajouter des styles CSS pour les messages d'erreur
    const style = document.createElement('style');
    style.textContent = `
        .error-message {
            color: var(--error-color);
            background-color: rgba(231, 76, 60, 0.1);
            padding: 0.8rem;
            border-radius: var(--border-radius);
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.9rem;
            animation: fadeIn 0.3s ease-out;
        }
    `;
    document.head.appendChild(style);
}); 
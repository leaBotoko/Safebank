document.addEventListener('DOMContentLoaded', function() {
    // Gestion de la navigation
    const navLinks = document.querySelectorAll('.nav-links li');
    const contentSections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Mise à jour des classes actives pour la navigation
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Affichage de la section correspondante
            const targetSection = link.getAttribute('data-section');
            contentSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetSection) {
                    section.classList.add('active');
                }
            });
        });
    });

    // Fonction pour charger les données du dashboard
    function loadDashboardData() {
        // Simulation de données pour l'exemple
        const dashboardData = {
            transactions: 1234,
            activeClients: 567,
            activeAlerts: 23
        };

        // Mise à jour des statistiques
        document.querySelector('.stat-card:nth-child(1) .stat-number').textContent = dashboardData.transactions;
        document.querySelector('.stat-card:nth-child(2) .stat-number').textContent = dashboardData.activeClients;
        document.querySelector('.stat-card:nth-child(3) .stat-number').textContent = dashboardData.activeAlerts;
    }

    // Fonction pour charger les transactions
    function loadTransactions() {
        // Simulation de données pour l'exemple
        const transactions = [
            { id: 1, date: '2024-03-20', client: 'Jean Dupont', amount: '1500 €', status: 'Complétée' },
            { id: 2, date: '2024-03-19', client: 'Marie Martin', amount: '2300 €', status: 'En attente' }
        ];

        const tbody = document.getElementById('transactions-table-body');
        tbody.innerHTML = transactions.map(t => `
            <tr>
                <td>${t.id}</td>
                <td>${t.date}</td>
                <td>${t.client}</td>
                <td>${t.amount}</td>
                <td>${t.status}</td>
                <td>
                    <button class="btn-primary" onclick="viewTransaction(${t.id})">Voir</button>
                </td>
            </tr>
        `).join('');
    }

    // Fonction pour charger les clients
    function loadClients() {
        // Simulation de données pour l'exemple
        const clients = [
            { id: 1, name: 'Jean Dupont', email: 'jean@example.com', date: '2024-01-15', status: 'Actif' },
            { id: 2, name: 'Marie Martin', email: 'marie@example.com', date: '2024-02-20', status: 'Actif' }
        ];

        const tbody = document.getElementById('clients-table-body');
        tbody.innerHTML = clients.map(c => `
            <tr>
                <td>${c.id}</td>
                <td>${c.name}</td>
                <td>${c.email}</td>
                <td>${c.date}</td>
                <td>${c.status}</td>
                <td>
                    <button class="btn-primary" onclick="viewClient(${c.id})">Voir</button>
                </td>
            </tr>
        `).join('');
    }

    // Fonction pour charger les alertes
    function loadAlerts() {
        // Simulation de données pour l'exemple
        const alerts = [
            { id: 1, type: 'warning', message: 'Transaction suspecte détectée', date: '2024-03-20 14:30' },
            { id: 2, type: 'info', message: 'Nouvelle inscription client', date: '2024-03-20 12:15' }
        ];

        const alertsList = document.querySelector('.alerts-list');
        alertsList.innerHTML = alerts.map(a => `
            <div class="alert-item ${a.type}">
                <div class="alert-header">
                    <span class="alert-type">${a.type}</span>
                    <span class="alert-date">${a.date}</span>
                </div>
                <div class="alert-message">${a.message}</div>
            </div>
        `).join('');
    }

    // Gestion du formulaire de paramètres
    const settingsForm = document.getElementById('admin-settings-form');
    if (settingsForm) {
        settingsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(settingsForm);
            // Simulation de sauvegarde
            console.log('Paramètres sauvegardés:', Object.fromEntries(formData));
            alert('Paramètres sauvegardés avec succès !');
        });
    }

    // Chargement initial des données
    loadDashboardData();
    loadTransactions();
    loadClients();
    loadAlerts();
});

// Fonctions globales pour les actions
function viewTransaction(id) {
    alert(`Voir la transaction ${id}`);
}

function viewClient(id) {
    alert(`Voir le client ${id}`);
} 
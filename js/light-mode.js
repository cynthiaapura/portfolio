document.addEventListener("DOMContentLoaded", () => {
    const body = document.getElementById('body');
    const themeToggleBtn = document.getElementById('themeToggleBtn');

    // Fonction pour récupérer le thème stocké
    function getThemeFromLocalStorage() {
        return localStorage.getItem('theme');
    }

    // Fonction pour définir le thème initial lors du chargement de la page
    function setInitialTheme() {
        const savedTheme = getThemeFromLocalStorage();
        if (savedTheme === 'dark-mode') {
            body.classList.add('dark-mode');
        }
    }

    // Fonction pour basculer entre les modes clair et sombre
    function toggleTheme() {
        body.classList.toggle('dark-mode');

        // Enregistrer le thème sélectionné dans le stockage local
        localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode');
    }

    // Écouteur d'événement pour le clic sur le bouton de basculement de thème
    themeToggleBtn.addEventListener('click', toggleTheme);

    // Définir le thème initial lors du chargement de la page
    setInitialTheme();
});
// Função para verificar a preferência do sistema
function getSystemThemePreference() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Função para atualizar os ícones do tema
function updateThemeIcons(isDark) {
    // Desktop icons
    document.getElementById('theme-toggle-dark-icon').classList.toggle('hidden', !isDark);
    document.getElementById('theme-toggle-light-icon').classList.toggle('hidden', isDark);
    
    // Mobile icons
    document.getElementById('theme-toggle-dark-icon-mobile').classList.toggle('hidden', !isDark);
    document.getElementById('theme-toggle-light-icon-mobile').classList.toggle('hidden', isDark);
}

// Função para definir o tema
function setTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
        updateThemeIcons(true);
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
        updateThemeIcons(false);
    }
}

// Inicialização do tema
function initializeTheme() {
    // Verifica se há uma preferência salva
    const savedTheme = localStorage.theme;
    
    if (savedTheme) {
        // Usa a preferência salva
        setTheme(savedTheme);
    } else {
        // Usa a preferência do sistema
        const systemTheme = getSystemThemePreference();
        setTheme(systemTheme);
    }
}

// Listener para mudanças na preferência do sistema
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.theme) {
        // Só atualiza automaticamente se o usuário não tiver definido uma preferência
        setTheme(e.matches ? 'dark' : 'light');
    }
});

// Event listeners para os botões de tema
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa o tema
    initializeTheme();

    // Desktop toggle
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.classList.contains('dark');
        setTheme(isDark ? 'light' : 'dark');
    });

    // Mobile toggle
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    themeToggleMobile.addEventListener('click', () => {
        const isDark = document.documentElement.classList.contains('dark');
        setTheme(isDark ? 'light' : 'dark');
    });
}); 
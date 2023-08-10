let root = document.querySelector(":root");
let themeMode = localStorage.getItem('theme');
const themeModeToggle = document.querySelector('button.toggle-mode');
const iconMode = document.querySelectorAll(".icon-mode");

const setTheme = themeName => {
    localStorage.setItem('theme', themeName);
}

const toggleIconThemeMode = () => {
    themeMode = localStorage.getItem('theme')

    iconMode.forEach(icon => {
        if (icon.classList.contains(`icon-${themeMode}`)) {
            icon.classList.remove("visible");
        }
        else {
            icon.classList.add("visible");
        }
    });
}

if (themeMode === 'dark') {
    setTheme('dark');
}

toggleIconThemeMode()

// When someone clicks the button
themeModeToggle.addEventListener('click', () => {
    themeMode = localStorage.getItem('theme')

    if (themeMode !== 'dark') {
        root.setAttribute('data-theme', 'dark');
        setTheme('dark');
    } else {
        root.setAttribute('data-theme', 'light');
        setTheme('light');
    }

    toggleIconThemeMode();

});



const buttonToggleMode = document.querySelector('button.toggle-mode');
const iconLight = document.querySelector(".icon-light");
const iconDark = document.querySelector(".icon-dark");

let darkModeState = false;

// MediaQueryList object
const useDark = window.matchMedia("(prefers-color-scheme: dark)");

// Toggles the "dark-mode" class
function toggleDarkMode(state) {
    localStorage.setItem("dark", state);

    if (state) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.removeAttribute('data-theme', 'dark');
    }

    darkModeState = state;
}

const toggleIconThemeMode = (state) => {
    if (state) {
        iconLight.classList.add("visible");
        iconDark.classList.remove('visible')
        toggleDarkMode(darkModeState);
    }
    else {
        iconDark.classList.add("visible");
        iconLight.classList.remove('visible')
    }
}

// Initial setting
toggleDarkMode(localStorage.getItem("dark") == "true");
toggleIconThemeMode(darkModeState)

// Listen for changes in the OS settings.   
// Note: the arrow function shorthand works only in modern browsers,
// for older browsers define the function using the function keyword.
useDark.addEventListener("change", (event) => {
    toggleDarkMode(event.matches)
    toggleIconThemeMode(event.matches)
});


// Toggles the "dark-mode" class on click and sets localStorage state
buttonToggleMode.addEventListener("click", () => {
    darkModeState = !darkModeState;

    toggleDarkMode(darkModeState);
    toggleIconThemeMode(darkModeState)
});


document.addEventListener('DOMContentLoaded', function() {
    var switchInput = document.querySelector('.switch input');
    var lightText = document.querySelector('.switch .text.light');
    var darkText = document.querySelector('.switch .text.dark');
    var buttontodown = document.getElementById('arrow-icon');
    var landingsSection = document.getElementById('landings');

    switchInput.addEventListener('change', function() {
        if (switchInput.checked) {
            lightText.style.color = 'white';
            darkText.style.color = 'black';
        } else {
            lightText.style.color = 'black';
            darkText.style.color = 'white';
        }
    });

    buttontodown.addEventListener('click', function() {
        landingsSection.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const themeSwitch = document.getElementById("theme-switch");
    const body = document.body;

    themeSwitch.addEventListener("change", function() {
        if (themeSwitch.checked) {
            body.classList.remove("light-mode");
            body.classList.add("dark-mode");
        } else {
            body.classList.remove("dark-mode");
            body.classList.add("light-mode");
        }
    });

    body.classList.add("light-mode");
});

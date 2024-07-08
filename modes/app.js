const modeToggle = document.getElementById('modeToggle');

modeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', modeToggle.checked);
});

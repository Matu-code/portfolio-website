function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

// Darkmode

// document.addEventListener('DOMContentLoaded', () => {
//     const toggleButton = document.getElementById('dark-mode-toggle');
//     toggleButton.addEventListener('click', () => {
//         document.body.classList.toggle('dark-mode');
//         let mode = 'disabled';
//         if (document.body.classList.contains('dark-mode')) {
//             mode = 'enabled';
//         }
//         localStorage.setItem('dark-mode', mode);
//     });

//     // Load the user's preference from localStorage
//     const currentMode = localStorage.getItem('dark-mode');
//     if (currentMode === 'enabled') {
//         document.body.classList.add('dark-mode');
//     }
// });
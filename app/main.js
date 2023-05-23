const darkButton = document.querySelector('.btn-dark');
const moon = document.querySelector('.fa-moon');

darkButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if (moon.classList.contains('fa-moon')) {
        moon.classList.replace('fa-moon', 'fa-sun');
    } else {
        moon.classList.replace('fa-sun', 'fa-moon');
    }
});

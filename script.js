document.addEventListener('DOMContentLoaded', () => {
    const mainNav = document.getElementById('main-nav');
    const menuToggle = mainNav.querySelector('.menu-toggle');

    // Функція, що перемикає клас для розгортання/згортання меню
    function toggleMenu() {
        mainNav.classList.toggle('menu-expanded');
        mainNav.classList.toggle('menu-collapsed');
    }

    // Додаємо обробник подій для мобільного меню
    if (window.innerWidth <= 768) {
        menuToggle.addEventListener('click', toggleMenu);
        // Згортаємо меню за замовчуванням
        mainNav.classList.add('menu-collapsed');
    }

    // Обробник подій для прокручування сторінки
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const navHeight = mainNav.offsetHeight;

        // Згортаємо меню при прокручуванні вниз і розгортаємо при прокручуванні вгору
        if (currentScrollY > navHeight && currentScrollY > lastScrollY) {
            mainNav.classList.remove('menu-expanded');
            mainNav.classList.add('menu-collapsed');
        } else if (currentScrollY < lastScrollY) {
            mainNav.classList.remove('menu-collapsed');
            mainNav.classList.add('menu-expanded');
        }

        lastScrollY = currentScrollY;
    });
});
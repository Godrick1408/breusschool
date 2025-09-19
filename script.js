document.addEventListener('DOMContentLoaded', () => {
    const mainNav = document.getElementById('main-nav');
    const menuToggle = mainNav.querySelector('.menu-toggle');
    
    // Функція, що перемикає клас для розгортання/згортання меню
    function toggleMenu() {
        mainNav.classList.toggle('menu-expanded');
    }

    // Додаємо обробник кліків для мобільного меню
    if (window.innerWidth <= 768) {
        menuToggle.addEventListener('click', toggleMenu);
    } else {
        mainNav.classList.remove('menu-expanded');
    }

    // Прибираємо згортання/розгортання на комп'ютері
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        mainNav.classList.remove('menu-expanded');
      }
    });

    // Обробка випадаючих меню (для мобільного)
    const dropdownLinks = mainNav.querySelectorAll('.dropdown > a');

    dropdownLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 
            
            const parentDropdown = link.parentElement;
            
            // Закриваємо всі інші відкриті підменю, якщо вони існують
            dropdownLinks.forEach(otherLink => {
                const otherDropdown = otherLink.parentElement;
                if (otherDropdown !== parentDropdown) {
                    otherDropdown.classList.remove('active');
                }
            });
            
            // Перемикаємо клас 'active' на поточному елементі
            parentDropdown.classList.toggle('active');
        });
    });
});

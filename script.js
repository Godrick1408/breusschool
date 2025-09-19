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
    const dropdowns = mainNav.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');

        link.addEventListener('click', (e) => {
            // Запобігаємо переходу за посиланням
            e.preventDefault(); 
            
            // Якщо поточне меню вже відкрито, закриваємо його
            if (dropdown.classList.contains('active')) {
                dropdown.classList.remove('active');
            } else {
                // Закриваємо всі інші відкриті меню перед відкриттям поточного
                dropdowns.forEach(otherDropdown => {
                    otherDropdown.classList.remove('active');
                });
                
                // Відкриваємо поточне меню
                dropdown.classList.add('active');
            }
        });
    });
});

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
            // Запобігаємо переходу за посиланням тільки на мобільних пристроях
            if (window.innerWidth <= 768) {
                e.preventDefault(); 
                
                // Перевіряємо, чи є підменю у цьому пункті
                const dropdownContent = dropdown.querySelector('.dropdown-content');
                if (dropdownContent) {
                     // Закриваємо всі інші відкриті підменю, якщо вони існують
                     dropdowns.forEach(otherDropdown => {
                         if (otherDropdown !== dropdown) {
                             otherDropdown.classList.remove('active');
                         }
                     });
                     
                     // Перемикаємо 'active' клас на поточному елементі
                     dropdown.classList.toggle('active');
                }
            }
        });
    });
});

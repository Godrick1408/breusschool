document.addEventListener('DOMContentLoaded', () => {
    const mainNav = document.getElementById('main-nav');
    const menuToggle = mainNav.querySelector('.menu-toggle');
    const menuItems = mainNav.querySelector('.menu-items');
    
    // Функція, що перемикає клас для розгортання/згортання меню
    function toggleMenu() {
        mainNav.classList.toggle('menu-expanded');
        mainNav.classList.toggle('menu-collapsed');
    }

    // Додаємо обробник кліків для мобільного меню
    if (window.innerWidth <= 768) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    // Прибираємо згортання/розгортання на комп'ютері
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        mainNav.classList.remove('menu-expanded', 'menu-collapsed');
        menuItems.style.maxHeight = 'none';
      } else {
        mainNav.classList.add('menu-collapsed');
        menuItems.style.maxHeight = '0';
      }
    });
});

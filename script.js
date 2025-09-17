document.addEventListener('DOMContentLoaded', () => {
    const mainNav = document.getElementById('main-nav');
    const menuToggle = mainNav.querySelector('.menu-toggle');
    const menuItems = mainNav.querySelector('.menu-items');
    const header = document.querySelector('header');
    
    // Перевіряємо, чи ми на мобільній версії
    const isMobile = window.innerWidth <= 768;

    // Сховати меню на мобільному, якщо воно було розгорнуте
    if (isMobile) {
        menuItems.style.maxHeight = '0';
    }

    // Додаємо обробник подій для прокручування сторінки
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > header.offsetHeight && currentScrollY > lastScrollY) {
            // Згортаємо меню при прокручуванні вниз, якщо прокручено нижче хедера
            mainNav.classList.remove('menu-expanded');
            mainNav.classList.add('menu-collapsed');
        } else if (currentScrollY < lastScrollY) {
            // Розгортаємо меню при прокручуванні вгору
            mainNav.classList.remove('menu-collapsed');
            mainNav.classList.add('menu-expanded');
        }

        lastScrollY = currentScrollY;
    });

    // Додаємо обробник кліків для мобільного меню
    if (isMobile) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('menu-expanded');
            mainNav.classList.toggle('menu-collapsed');
        });
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

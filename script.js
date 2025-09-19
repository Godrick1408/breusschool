
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
                const isAlreadyActive = dropdown.classList.contains('active');

                // Закриваємо всі відкриті підменю
                dropdowns.forEach(otherDropdown => {
                    otherDropdown.classList.remove('active');
                });
                
                // Якщо меню не було активним, відкриваємо його
                if (!isAlreadyActive) {
                    e.preventDefault(); 
                    dropdown.classList.add('active');
                }
            }
        });
    });
});


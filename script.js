document.addEventListener('DOMContentLoaded', () => {
    const mainNav = document.getElementById('main-nav');
    const menuToggle = mainNav.querySelector('.menu-toggle');
    
    function toggleMenu() {
        mainNav.classList.toggle('menu-expanded');
    }

    if (window.innerWidth <= 768) {
        menuToggle.addEventListener('click', toggleMenu);
    } else {
        mainNav.classList.remove('menu-expanded');
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        mainNav.classList.remove('menu-expanded');
      }
    });

    const dropdowns = mainNav.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');

        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();

                const isAlreadyActive = dropdown.classList.contains('active');

                if (isAlreadyActive) {
                    dropdown.classList.remove('active');
                } else {
                    dropdowns.forEach(otherDropdown => {
                        otherDropdown.classList.remove('active');
                    });
                    dropdown.classList.add('active');
                }
            }
        });
    });
});

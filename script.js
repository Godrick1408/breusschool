document.addEventListener('DOMContentLoaded', () => {
  const mainNav = document.getElementById('main-nav');
  const menuToggle = mainNav.querySelector('.menu-toggle');

  function closeAllDropdowns() {
    dropdowns.forEach(d => {
      d.classList.remove('active');
      const hdr = d.querySelector(':scope > a');
      if (hdr) hdr.setAttribute('aria-expanded', 'false');
    });
  }

  function toggleMenu() {
    mainNav.classList.toggle('menu-expanded');
    // якщо меню закривається — закриваємо підменю
    if (!mainNav.classList.contains('menu-expanded')) {
      closeAllDropdowns();
    }
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      mainNav.classList.remove('menu-expanded');
      closeAllDropdowns();
    }
  });

  const dropdowns = mainNav.querySelectorAll('.dropdown');

  function onToggle(e) {
    // На десктопі залишаємо стандартну поведінку (hover / посилання)
    if (window.innerWidth > 768) return;

    // Блокуємо перехід за посиланням на мобільних, щоб зробити відкриття/закриття
    e.preventDefault();
    e.stopPropagation();

    const header = e.currentTarget;
    const dropdown = header.closest('.dropdown');
    const isActive = dropdown.classList.contains('active');

    if (isActive) {
      dropdown.classList.remove('active');
      header.setAttribute('aria-expanded', 'false');
    } else {
      closeAllDropdowns();
      dropdown.classList.add('active');
      header.setAttribute('aria-expanded', 'true');
    }
  }

  dropdowns.forEach(dropdown => {
    // вибираємо тільки заголовок (без посилань всередині підменю)
    const header = dropdown.querySelector(':scope > a') || dropdown.querySelector('a');
    if (!header) return;

    header.addEventListener('click', onToggle);
    // Додаємо touchstart (не-пасивний), щоб на iOS/Android перехопити дотик до того, як спрацює hover/фокус
    header.addEventListener('touchstart', onToggle, { passive: false });
  });

  // Якщо натиснули поза меню — закриваємо підменю
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      if (!e.target.closest('#main-nav')) {
        closeAllDropdowns();
      }
    }
  });
});
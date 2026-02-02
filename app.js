// Simple SPA-style navigation
const navItems = document.querySelectorAll('.nav-item, .btn[data-page]');
const pages = document.querySelectorAll('.page');

function showPage(id) {
  pages.forEach(p => {
    p.classList.toggle('visible', p.id === id);
  });
  navItems.forEach(btn => {
    if (btn.classList.contains('nav-item')) {
      btn.classList.toggle('active', btn.dataset.page === id);
    }
  });
}

navItems.forEach(btn => {
  btn.addEventListener('click', () => {
    const page = btn.dataset.page;
    if (page) showPage(page);
  });
});

// Default page
showPage('dashboard');

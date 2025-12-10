document.addEventListener('DOMContentLoaded', function () {
  // Theme toggle
  const themeToggle = document.getElementById('themeToggle');
  const stored = localStorage.getItem('site-theme');
  if (stored) document.documentElement.setAttribute('data-theme', stored);

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('site-theme', next);
  }
  themeToggle.addEventListener('click', toggleTheme);

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navList = document.querySelector('.nav-list');
  navToggle.addEventListener('click', function () {
    if (navList.style.display === 'block') navList.style.display = '';
    else navList.style.display = 'block';
  });

  // Project modal
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modalBody');
  const modalTitle = document.getElementById('modalTitle');
  const modalClose = document.getElementById('modalClose');

  const projects = {
    tahanan: {
      title: 'Tahanan ng Pagmamahal — Orphanage Management System',
      body: '<p>Capstone web system to manage residents, donations, events, reporting, and role-based access for staff and administrators. Built as a responsive web app with modular components and an emphasis on data integrity and reporting.</p><p><strong>Tech:</strong> HTML, CSS, JavaScript, PHP, Firebase   , MySQL and FirebaseAuth.</p>'
    },
    pims: {
      title: 'PIMS — Inventory Management System',
      body: '<p>Inventory management system built with Python and Django. Implements stock tracking, low-stock alerts, CSV import/export.</p><p><strong>Tech:</strong> Python, Django, SQLite, JavaScript.</p>'
    }
  };

  document.querySelectorAll('[data-project]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-project');
      const p = projects[key];
      if (!p) return;
      modalTitle.textContent = p.title;
      modalBody.innerHTML = p.body;
      modal.setAttribute('aria-hidden', 'false');
    });
  });

  function closeModal() {
    modal.setAttribute('aria-hidden', 'true');
  }

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
});

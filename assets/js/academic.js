// Small, dependency-free interactions for the academic profile.
(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('[data-theme-toggle]');
  const updateThemeLabel = () => {
    const dark = root.dataset.theme === 'dark';
    themeButton?.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    themeButton?.setAttribute('aria-pressed', String(dark));
    const icon = themeButton?.querySelector('i');
    if (icon) icon.className = dark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  };
  themeButton?.addEventListener('click', () => {
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = theme;
    try { localStorage.setItem('academic-theme', theme); } catch (_) { /* Optional preference storage. */ }
    updateThemeLabel();
  });
  updateThemeLabel();
  document.querySelector('[data-print-cv]')?.addEventListener('click', () => window.print());
})();

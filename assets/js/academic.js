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

  // Publications: switch between selected and all papers, and filter by research topic.
  const list = document.querySelector('[data-publication-list]');
  if (!list) return;
  const cards = Array.from(list.querySelectorAll('.publication-card'));
  const viewButtons = Array.from(document.querySelectorAll('[data-view]'));
  const topicButtons = Array.from(document.querySelectorAll('[data-topic]'));
  const status = document.querySelector('[data-publication-status]');
  const state = { view: 'selected', topic: 'all' };
  const isFeatured = (card) => card.dataset.featured === 'true';
  // Selected view keeps the curated order; the full list is newest first.
  const rank = (card) => (state.view === 'selected' && isFeatured(card)
    ? Number(card.dataset.featuredRank)
    : 100 + Number(card.dataset.dateRank));
  const markActive = (buttons, key) => buttons.forEach((button) => {
    const active = button.dataset[key] === state[key];
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  const render = () => {
    let inView = 0;
    let shown = 0;
    cards.sort((a, b) => rank(a) - rank(b)).forEach((card) => {
      const visibleInView = state.view === 'all' || isFeatured(card);
      const matchesTopic = state.topic === 'all' || card.dataset.topics.split(' ').includes(state.topic);
      card.hidden = !(visibleInView && matchesTopic);
      if (visibleInView) inView += 1;
      if (!card.hidden) shown += 1;
      list.append(card);
    });
    markActive(viewButtons, 'view');
    markActive(topicButtons, 'topic');
    if (status) status.textContent = `Showing ${shown} of ${inView} ${state.view === 'selected' ? 'selected publications' : 'publications'}`;
  };
  viewButtons.forEach((button) => button.addEventListener('click', () => { state.view = button.dataset.view; render(); }));
  topicButtons.forEach((button) => button.addEventListener('click', () => { state.topic = button.dataset.topic; render(); }));
  document.querySelectorAll('[data-topic-link]').forEach((link) => link.addEventListener('click', () => {
    state.view = 'all';
    state.topic = link.dataset.topicLink;
    render();
  }));
  render();
})();

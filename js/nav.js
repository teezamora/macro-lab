/* ============================================================
   LATTITUDE — nav.js
   Shared utilities used across all pages
   ============================================================ */

// Donut ring renderer — call this on any recipe page
// segments: array of { pct, color } in draw order
function renderDonutRing(segments) {
  const circumference = 2 * Math.PI * 38; // r=38
  let offset = 0;

  segments.forEach(({ pct, color, id }) => {
    const el = document.getElementById(id);
    if (!el) return;
    const len = circumference * pct;
    el.setAttribute('stroke-dasharray', `${len} ${circumference - len}`);
    el.setAttribute('stroke-dashoffset', -offset);
    offset += len;
  });
}

// Filter pill toggle (home screen)
function initFilterPills() {
  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });
}

// Serving size scaler
// config: { total: {}, servingsTotal: number, fields: [...] }
function initServingScaler(config) {
  let current = 1;
  const { total, servingsTotal, update } = config;

  document.querySelector('.serving-btn-minus')?.addEventListener('click', () => {
    current = Math.max(1, current - 1);
    document.querySelector('.serving-count-display').textContent = current;
    update(current, servingsTotal, total);
  });

  document.querySelector('.serving-btn-plus')?.addEventListener('click', () => {
    current = Math.min(servingsTotal, current + 1);
    document.querySelector('.serving-count-display').textContent = current;
    update(current, servingsTotal, total);
  });
}

// ── BOTTOM NAV (mobile only) ──────────────────────────────────────
(function renderBottomNav() {
  const path   = window.location.pathname;
  const page   = path.split('/').pop() || 'index.html';
  const isRecipeDetail = path.includes('/recipes/');
  const base   = isRecipeDetail ? '../' : '';

  const items = [
    {
      href: base + 'index.html',
      label: 'Home',
      active: page === 'index.html' || page === '',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>`
    },
    {
      href: base + 'recipes.html',
      label: 'Recipes',
      active: page === 'recipes.html' || isRecipeDetail,
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3v7"/></svg>`
    },
    {
      href: base + 'workout.html',
      label: 'Workout',
      active: page === 'workout.html',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="6.5" y1="6.5" x2="17.5" y2="17.5"/><path d="M4.5 9.5L3 11l4.5 4.5L9 14"/><path d="M19.5 14.5L21 13l-4.5-4.5L15 10"/><line x1="3" y1="17" x2="7" y2="21"/><line x1="17" y1="3" x2="21" y2="7"/></svg>`
    },
    {
      href: base + 'profile.html',
      label: 'Goals',
      active: page === 'profile.html',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`
    }
  ];

  const nav = document.createElement('nav');
  nav.className = 'bottom-nav';
  nav.setAttribute('aria-label', 'Main navigation');
  nav.innerHTML = items.map(item => `
    <a href="${item.href}" class="bottom-nav-item${item.active ? ' active' : ''}">
      <span class="bottom-nav-icon">${item.icon}</span>
      <span class="bottom-nav-label">${item.label}</span>
    </a>
  `).join('');

  document.body.appendChild(nav);
}());

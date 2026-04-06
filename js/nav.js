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

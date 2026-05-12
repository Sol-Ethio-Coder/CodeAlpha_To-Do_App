/**
 * mobile.js
 * Sidebar drawer, backdrop, FAB, swipe gestures.
 */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  const sidebar   = document.getElementById('sidebar');
  const backdrop  = document.getElementById('sidebar-backdrop');
  const btnHam    = document.getElementById('btn-hamburger');
  const btnClose  = document.getElementById('btn-sidebar-close');
  const btnFab    = document.getElementById('btn-fab');
  const btnAddForm= document.getElementById('btn-open-form');

  /* ── Open / close ── */
  function openDrawer() {
    sidebar.classList.add('is-open');
    backdrop.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
    btnHam && btnHam.setAttribute('aria-expanded', 'true');
  }

  function closeDrawer() {
    sidebar.classList.remove('is-open');
    backdrop.classList.remove('is-visible');
    document.body.style.overflow = '';
    btnHam && btnHam.setAttribute('aria-expanded', 'false');
  }

  const isOpen = () => sidebar.classList.contains('is-open');

  /* ── Button listeners ── */
  btnHam   && btnHam.addEventListener('click', openDrawer);
  btnClose && btnClose.addEventListener('click', closeDrawer);
  backdrop && backdrop.addEventListener('click', closeDrawer);

  /* Close after tapping a filter on mobile */
  document.querySelectorAll('.nav-btn[data-filter]').forEach(b =>
    b.addEventListener('click', () => { if (window.innerWidth <= 960) closeDrawer(); })
  );

  /* Escape key & resize */
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && isOpen()) closeDrawer(); });
  window.addEventListener('resize',   () => { if (window.innerWidth > 960 && isOpen()) closeDrawer(); });

  /* ── FAB → open add form ── */
  btnFab && btnFab.addEventListener('click', () => {
    if (btnAddForm) btnAddForm.click();
    requestAnimationFrame(() => {
      const fw = document.getElementById('add-form-wrap');
      if (fw && fw.classList.contains('open')) {
        fw.scrollIntoView({ behavior: 'smooth', block: 'start' });
        document.getElementById('task-input')?.focus();
      }
    });
  });

  /* ── Swipe gestures ── */
  let tx = 0, ty = 0;
  document.addEventListener('touchstart', e => {
    tx = e.touches[0].clientX;
    ty = e.touches[0].clientY;
  }, { passive: true });

  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - tx;
    const dy = e.changedTouches[0].clientY - ty;
    if (Math.abs(dy) > Math.abs(dx)) return;
    if (dx >  55 && tx < 30 && !isOpen()) openDrawer();
    if (dx < -55 && isOpen())             closeDrawer();
  }, { passive: true });
});

/**
 * background.js
 * Spawns floating particles and handles mouse parallax on the orbs.
 * Purely visual — no app logic.
 */
(function () {
  const container = document.getElementById('particles');
  if (!container) return;

  const COLORS = [
    'rgba(168,85,247,.7)', 'rgba(192,38,211,.6)', 'rgba(0,212,180,.6)',
    'rgba(255,179,71,.5)', 'rgba(79,195,247,.55)', 'rgba(255,255,255,.4)',
  ];

  /* ── Spawn particles ── */
  for (let i = 0; i < 28; i++) {
    const el  = document.createElement('span');
    el.className = 'particle';
    const s   = 2 + Math.random() * 4;
    const dur = 12 + Math.random() * 16;
    const del = Math.random() * dur;
    el.style.cssText = `width:${s}px;height:${s}px;left:${Math.random()*100}%;bottom:-${s}px;background:${COLORS[Math.floor(Math.random()*COLORS.length)]};animation-duration:${dur}s;animation-delay:-${del}s`;
    container.appendChild(el);
  }

  /* ── Mouse parallax on orbs ── */
  document.addEventListener('mousemove', e => {
    const cx = innerWidth / 2, cy = innerHeight / 2;
    const dx = (e.clientX - cx) / cx, dy = (e.clientY - cy) / cy;
    document.querySelectorAll('.orb').forEach((orb, i) => {
      const depth = (i + 1) * 6;
      orb.style.transform  = `translate(${dx * depth}px, ${dy * depth}px)`;
      orb.style.transition = 'transform 1.2s cubic-bezier(.25,.46,.45,.94)';
    });
  });
})();

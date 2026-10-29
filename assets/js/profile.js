// Native anchors handle navigation, including when JavaScript is disabled.
const sections = [...document.querySelectorAll('main > section[id]')];
const navLinks = [...document.querySelectorAll('nav a')];
function markSection() {
  const current = sections.filter(section => section.getBoundingClientRect().top <= 120).at(-1) || sections[0];
  for (const link of navLinks) {
    if (link.hash === `#${current.id}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
}
let pending = false;
window.addEventListener('scroll', () => {
  if (pending) return;
  pending = true;
  requestAnimationFrame(() => { markSection(); pending = false; });
}, { passive: true });
function revealPublication() {
  let id = location.hash.slice(1);
  try { id = decodeURIComponent(id); } catch { /* Unknown fragments leave navigation usable. */ }
  const target = document.getElementById(id);
  const details = target?.closest('details');
  if (details && !details.open) {
    details.open = true;
    target.scrollIntoView();
  }
  markSection();
}
window.addEventListener('hashchange', revealPublication);
revealPublication();

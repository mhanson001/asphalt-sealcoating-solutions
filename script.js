(() => {
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
const layers = [...document.querySelectorAll('[data-parallax]')];
let ticking = false;
const render = () => {
ticking = false;
if (reduced.matches) {
layers.forEach((el) => el.style.setProperty('--parallax-y', '0px'));
return;
}
const mobileScale = window.innerWidth < 700 ? 0.58 : 1;
const vh = window.innerHeight || 1;
layers.forEach((el) => {
const rect = el.getBoundingClientRect();
const center = rect.top + rect.height / 2;
const delta = (center - vh / 2) / vh;
const depth = Number(el.dataset.parallax || 0);
const y = Math.max(-110, Math.min(110, -delta * depth * 320 * mobileScale));
el.style.setProperty('--parallax-y', `${y.toFixed(2)}px`);
});
};
const requestRender = () => {
if (!ticking) {
ticking = true;
requestAnimationFrame(render);
}
};
addEventListener('scroll', requestRender, { passive: true });
addEventListener('resize', requestRender, { passive: true });
reduced.addEventListener?.('change', requestRender);
requestRender();
const heroVideo = document.querySelector('.hero video');
if (heroVideo && !reduced.matches) {
const play = heroVideo.play();
if (play?.catch) play.catch(() => {});
}
})();
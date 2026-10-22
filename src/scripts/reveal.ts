// Fade elements in as they enter the viewport and animate [data-count] numbers.
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const revealEls = document.querySelectorAll<HTMLElement>('[data-reveal]');
if (!('IntersectionObserver' in window) || reduce) {
  revealEls.forEach((el) => el.classList.add('is-visible'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  revealEls.forEach((el) => io.observe(el));
}

const counters = document.querySelectorAll<HTMLElement>('[data-count]');
const runCount = (el: HTMLElement) => {
  const target = Number(el.dataset.count);
  if (reduce || !Number.isFinite(target)) {
    el.textContent = String(target);
    return;
  }
  const start = performance.now();
  const dur = 1400;
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / dur);
    el.textContent = String(Math.round(target * (1 - Math.pow(1 - t, 3))));
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};
if ('IntersectionObserver' in window && !reduce) {
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        runCount(entry.target as HTMLElement);
        io.unobserve(entry.target);
      }
    }
  });
  counters.forEach((el) => io.observe(el));
} else {
  counters.forEach(runCount);
}

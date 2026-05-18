/* =========================================================
   WORKSHOP DMC — CAMINHO 2 — Interações
   ========================================================= */

(function () {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1. Scroll reveal (fade-in) ---------- */
  const fadeEls = document.querySelectorAll('.fade-in');

  if (prefersReduced || !('IntersectionObserver' in window)) {
    fadeEls.forEach(el => el.classList.add('is-visible'));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );
    fadeEls.forEach(el => io.observe(el));
  }

  /* ---------- 2. Count-up nos números de ancoragem ---------- */
  const countEls = document.querySelectorAll('[data-countup]');

  function easeOutExpo(t) {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }

  function animateCount(el) {
    const target = parseInt(el.dataset.countup, 10);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const duration = 1200;
    const start = performance.now();

    if (prefersReduced) {
      el.textContent = prefix + target.toLocaleString('pt-BR') + suffix;
      return;
    }

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);
      const value = Math.floor(eased * target);
      el.textContent = prefix + value.toLocaleString('pt-BR') + suffix;
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = prefix + target.toLocaleString('pt-BR') + suffix;
    }
    requestAnimationFrame(tick);
  }

  if ('IntersectionObserver' in window) {
    const countIO = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            countIO.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    countEls.forEach(el => countIO.observe(el));
  } else {
    countEls.forEach(animateCount);
  }

  /* ---------- 3. Sticky CTA mobile (aparece após hero) ---------- */
  const stickyCta = document.querySelector('.sticky-cta');
  const hero = document.querySelector('#hero');

  if (stickyCta && hero && 'IntersectionObserver' in window) {
    const stickyIO = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            stickyCta.classList.add('is-visible');
          } else {
            stickyCta.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0 }
    );
    stickyIO.observe(hero);
  }

  /* ---------- 4. Smooth scroll para anchors ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href.length < 2) return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerHeight = 0;
        const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({
          top,
          behavior: prefersReduced ? 'auto' : 'smooth'
        });
      }
    });
  });

  /* ---------- 5. FAQ — fecha outros ao abrir um (acordeão único) ---------- */
  // Opcional: comente se preferir múltiplos abertos
  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('toggle', function () {
      if (this.open) {
        document.querySelectorAll('.faq-item[open]').forEach(other => {
          if (other !== this) other.open = false;
        });
      }
    });
  });

})();

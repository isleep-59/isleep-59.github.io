(() => {
  'use strict';
  const slides = [...document.querySelectorAll('.slide')];
  const counter = document.querySelector('#counter');
  const prev = document.querySelector('#prev');
  const next = document.querySelector('#next');
  const progress = document.querySelector('#progress');
  const overview = document.querySelector('#overview');
  const lightbox = document.querySelector('#lightbox');
  const image = document.querySelector('#lightbox-image');
  const sizeButton = document.querySelector('#image-size');
  let current = 0;
  function show(index, updateHash = true) {
    current = Math.max(0, Math.min(slides.length - 1, index));
    slides.forEach((slide, i) => { slide.classList.toggle('active', i === current); slide.inert = i !== current; });
    counter.textContent = `${String(current + 1).padStart(2, '0')} / ${slides.length}`;
    prev.disabled = current === 0;
    next.disabled = current === slides.length - 1;
    progress.style.width = `${(current + 1) / slides.length * 100}%`;
    document.title = `${current + 1}. ${slides[current].querySelector('h1').textContent} · 全局工作空间`;
    document.querySelectorAll('#overview-list button').forEach((b, i) => b.setAttribute('aria-current', String(i === current)));
    if (updateHash) history.replaceState(null, '', `#slide-${current + 1}`);
    window.scrollTo(0, 0);
  }
  function fromHash() { const m = location.hash.match(/^#slide-(\d+)$/); show(m ? Number(m[1]) - 1 : 0); }
  function openDialog(dialog) { dialog.showModal(); document.documentElement.classList.add('dialog-open'); }
  function closeDialog(dialog) { dialog.close(); }
  [overview, lightbox].forEach(dialog => {
    dialog.addEventListener('close', () => document.documentElement.classList.remove('dialog-open'));
    dialog.addEventListener('click', e => { if (e.target === dialog) { const r = dialog.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) closeDialog(dialog); } });
  });
  document.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', () => closeDialog(document.getElementById(b.dataset.close))));
  slides.forEach((slide, i) => {
    const b = document.createElement('button'); b.type = 'button';
    const num = document.createElement('span'); num.textContent = String(i + 1).padStart(2, '0');
    b.append(num, document.createTextNode(slide.querySelector('h1').textContent));
    b.addEventListener('click', () => { closeDialog(overview); show(i); });
    document.querySelector('#overview-list').append(b);
  });
  document.querySelectorAll('[data-zoom]').forEach(b => b.addEventListener('click', () => {
    image.src = b.dataset.zoom; image.alt = b.querySelector('img').alt;
    image.classList.remove('actual-size'); sizeButton.textContent = '原始尺寸';
    document.querySelector('#lightbox-title').textContent = image.alt;
    openDialog(lightbox);
  }));
  sizeButton.addEventListener('click', () => { const full = image.classList.toggle('actual-size'); sizeButton.textContent = full ? '适合窗口' : '原始尺寸'; });
  prev.addEventListener('click', () => show(current - 1)); next.addEventListener('click', () => show(current + 1));
  document.querySelector('#overview-open').addEventListener('click', () => openDialog(overview));
  async function fullscreen() {
    try { if (document.fullscreenElement) await document.exitFullscreen(); else await document.documentElement.requestFullscreen(); } catch (_) { document.querySelector('#fullscreen').textContent = '请用浏览器全屏'; }
  }
  document.querySelector('#fullscreen').addEventListener('click', fullscreen);
  document.addEventListener('keydown', e => {
    if (overview.open || lightbox.open || e.altKey || e.metaKey || e.ctrlKey || /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
    if (['ArrowRight', 'PageDown'].includes(e.key) || (e.key === ' ' && e.target === document.body)) { e.preventDefault(); show(current + 1); }
    else if (['ArrowLeft', 'PageUp'].includes(e.key)) { e.preventDefault(); show(current - 1); }
    else if (e.key === 'Home') { e.preventDefault(); show(0); }
    else if (e.key === 'End') { e.preventDefault(); show(slides.length - 1); }
    else if (e.key.toLowerCase() === 'o') openDialog(overview);
    else if (e.key.toLowerCase() === 'f') fullscreen();
  });
  let start;
  document.querySelector('#deck').addEventListener('touchstart', e => { if(e.touches.length===1) start = {x:e.touches[0].clientX, y:e.touches[0].clientY}; else start = null; }, {passive:true});
  document.querySelector('#deck').addEventListener('touchend', e => { if (!start) return; const dx=e.changedTouches[0].clientX-start.x, dy=e.changedTouches[0].clientY-start.y; if (Math.abs(dx)>70 && Math.abs(dx)>Math.abs(dy)*1.5) show(current+(dx<0?1:-1)); start=null; }, {passive:true});
  window.addEventListener('hashchange', fromHash);
  fromHash();
})();

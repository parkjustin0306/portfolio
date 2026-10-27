/*
  <seal-logo> — animated 박제완 seal. No dependencies, transparent background.

  Usage:
    <script src="seal-logo.js" defer></script>
    <seal-logo color="#ffffff" style="width:240px"></seal-logo>

  Attributes (all optional):
    color="#ffffff"    ink color (default: currentColor)
    accent="#7E6E91"   color of the light sweep at the end (accent="none" to skip)
    loop="false"       draw once and hold (default: loops)
    trigger="view"     start when scrolled into view (default: on load)

  JS: el.play() restarts · el.finish() jumps to the final logo · 'seal-logo:done' event after each draw.
  Reduced-motion users get the finished logo.

  Timeline: the frame draws from the top centre in both directions → strokes write in order
  (박 → 제 → 완), stems wipe downward → green light sweep → hold → fade out → loop.
*/
(() => {
  const NS = 'http://www.w3.org/2000/svg';
  // writing order. s = stroked path, f = filled stem with sheared top (x, top, bottom)
  const ITEMS = [
    ['s', 'M80 70 V226 A22 22 0 0 0 102 248 H158'],
    ['s', 'M80 158 H158'],
    ['f', 158, 70, 260],
    ['f', 212, 66, 288],
    ['s', 'M212 170 H242'],
    ['s', 'M66 316 H184 A28 28 0 0 1 212 344 V448'],
    ['s', 'M264 82 H364'],
    ['s', 'M314 82 Q314 172 264 232'],
    ['s', 'M324 160 Q342 204 374 232'],
    ['s', 'M372 152 H396'],
    ['f', 396, 66, 238],
    ['f', 440, 66, 238],
    ['s', 'M316 266 A27 27 0 1 0 316.01 266'],
    ['s', 'M316 326 V362'],
    ['s', 'M262 362 H384'],
    ['f', 412, 266, 394],
    ['s', 'M412 320 H448'],
    ['s', 'M278 390 V418 A24 24 0 0 0 302 442 H448'],
  ];
  const FRAME = [
    'M256 32 H450 A30 30 0 0 1 480 62 V450 A30 30 0 0 1 450 480 H256',
    'M256 32 H62 A30 30 0 0 0 32 62 V450 A30 30 0 0 0 62 480 H256',
  ];
  const T = { frame: 820, strokeStart: 380, stroke: 300, stagger: 85, sweep: 750, hold: 1700, fade: 420, rest: 260 };
  const easeIO = x => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  const easeOut = x => 1 - Math.pow(1 - x, 3);
  const clamp = x => x < 0 ? 0 : x > 1 ? 1 : x;
  let uid = 0;

  class SealLogo extends HTMLElement {
    static get observedAttributes() { return ['color', 'accent']; }
    attributeChangedCallback() { if (this.svg) this.applyColors(); }

    connectedCallback() {
      if (this.svg) return;
      if (!this.style.display) this.style.display = 'block';
      const id = 'seal' + (++uid);
      const el = (tag, attrs, parent) => { const n = document.createElementNS(NS, tag); for (const k in attrs) n.setAttribute(k, attrs[k]); parent && parent.appendChild(n); return n; };
      const svg = this.svg = el('svg', { viewBox: '0 0 512 512', role: 'img', 'aria-label': '박제완', 'shape-rendering': 'geometricPrecision' });
      svg.style.cssText = 'display:block;width:100%;height:auto;overflow:visible';
      const defs = el('defs', {}, svg);
      const grad = el('linearGradient', { id: id + 'g', x1: '0', y1: '0', x2: '1', y2: '0.35' }, defs);
      this.stops = [0, 0.5, 1].map((o, i) => el('stop', { offset: o, 'stop-opacity': i === 1 ? 1 : 0 }, grad));
      const mask = el('mask', { id: id + 'm', maskUnits: 'userSpaceOnUse', x: 0, y: 0, width: 512, height: 512 }, defs);

      this.root = el('g', {}, svg);
      this.root.style.transformOrigin = '256px 256px';
      const art = el('g', { id: id + 'a' }, this.root);
      this.parts = [];
      this.frame = FRAME.map(d => el('path', { d, fill: 'none', 'stroke-width': 22, 'stroke-linecap': 'butt' }, art));
      ITEMS.forEach(([type, a, b, c], k) => {
        if (type === 's') {
          const p = el('path', { d: a, fill: 'none', 'stroke-width': 24, 'stroke-linecap': 'butt', 'stroke-linejoin': 'round' }, art);
          this.parts.push({ type, p, k });
        } else {
          const cp = el('clipPath', { id: `${id}c${k}` }, defs);
          const r = el('rect', { x: a - 14, y: b - 8, width: 28, height: 0 }, cp);
          const p = el('path', { d: `M${a - 12} ${b + 7} L${a + 12} ${b - 7} V${c} H${a - 12} Z`, 'clip-path': `url(#${id}c${k})` }, art);
          this.parts.push({ type, p, r, h: c - b + 16, k });
        }
      });
      // light sweep: an accent band clipped to the logo shape
      // mask = a static, fully-drawn white copy of the art (works for any ink color)
      const maskArt = art.cloneNode(true);
      maskArt.removeAttribute('id');
      maskArt.querySelectorAll('path').forEach(p => {
        p.removeAttribute('clip-path');
        if (p.getAttribute('fill') === 'none') p.setAttribute('stroke', '#fff'); else p.setAttribute('fill', '#fff');
      });
      mask.appendChild(maskArt);
      const sweepG = el('g', { mask: `url(#${id}m)` }, this.root);
      this.sweep = el('rect', { x: -400, y: -60, width: 300, height: 640, fill: `url(#${id}g)`, transform: 'rotate(18 256 256)' }, sweepG);

      this.appendChild(svg);
      this.applyColors();
      this.reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
      setTimeout(() => {
        this.measure();
        if (this.reduced) return this.finish();
        if (this.getAttribute('trigger') === 'view' && 'IntersectionObserver' in window) {
          this.render(0);
          const io = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { io.disconnect(); this.play(); } }, { threshold: 0.4 });
          io.observe(this);
        } else this.play();
      }, 0);
    }
    disconnectedCallback() { this.stop(); }

    applyColors() {
      const ink = this.getAttribute('color') || 'currentColor';
      const accent = this.getAttribute('accent') || '#7E6E91';
      this.frame.forEach(n => n.setAttribute('stroke', ink));
      this.parts.forEach(p => p.p.setAttribute(p.type === 's' ? 'stroke' : 'fill', ink));
      this.stops.forEach(s => s.setAttribute('stop-color', accent));
      this.noSweep = accent === 'none';
    }

    measure() {
      [...this.frame, ...this.parts.filter(p => p.type === 's').map(p => p.p)].forEach(p => {
        const L = p.getTotalLength(); p._L = L;
        p.style.strokeDasharray = `${L} ${L + 2}`;
      });
      this.drawEnd = T.strokeStart + (this.parts.length - 1) * T.stagger + T.stroke;
      this.total = this.drawEnd + 80 + T.sweep;
    }

    render(t) {
      const f = easeIO(clamp(t / T.frame));
      this.frame.forEach(p => { p.style.strokeDashoffset = p._L * (1 - f); p.style.opacity = f > 0 ? 1 : 0; });
      this.parts.forEach(part => {
        const u = easeOut(clamp((t - T.strokeStart - part.k * T.stagger) / T.stroke));
        if (part.type === 's') { part.p.style.strokeDashoffset = part.p._L * (1 - u); part.p.style.opacity = u > 0 ? 1 : 0; }
        else part.r.setAttribute('height', part.h * u);
      });
      const s = clamp((t - this.drawEnd - 80) / T.sweep);
      this.sweep.setAttribute('x', -420 + easeIO(s) * 1040);
      this.sweep.style.opacity = this.noSweep || s <= 0 || s >= 1 ? 0 : 0.95;
    }

    play() {
      if (!this.drawEnd) return;
      this.stop();
      if (this.reduced) return this.finish();
      const loop = this.getAttribute('loop') !== 'false';
      let t0 = performance.now(), fired = false;
      this.root.style.opacity = 1; this.root.style.transform = '';
      const tick = () => {
        const t = performance.now() - t0;
        this.render(t);
        if (t >= this.total && !fired) { fired = true; this.dispatchEvent(new CustomEvent('seal-logo:done')); if (!loop) return this.finish(); }
        if (loop) {
          const ft = clamp((t - this.total - T.hold) / T.fade);
          this.root.style.opacity = 1 - easeIO(ft);
          this.root.style.transform = `scale(${1 - 0.03 * easeIO(ft)})`;
          if (t > this.total + T.hold + T.fade + T.rest) { t0 = performance.now(); fired = false; this.root.style.opacity = 1; this.root.style.transform = ''; }
        }
        this.next(tick);
      };
      this.next(tick);
    }
    finish() { this.stop(); this.root.style.opacity = 1; this.root.style.transform = ''; this.render(1e9); }
    next(fn) { let done = false; const run = () => { if (done) return; done = true; cancelAnimationFrame(this.raf); clearTimeout(this.to); fn(); }; this.raf = requestAnimationFrame(run); this.to = setTimeout(run, 34); }
    stop() { cancelAnimationFrame(this.raf); clearTimeout(this.to); }
  }
  if (!customElements.get('seal-logo')) customElements.define('seal-logo', SealLogo);
})();

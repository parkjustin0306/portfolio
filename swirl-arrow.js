/*
  <swirl-arrow> — arrow button. Hover/focus: the arrow spins with a water-like swirl splash
  (2 arcs + 3 droplets spiralling just outside it), lands pointing down, then bounces until the pointer leaves.

  Usage:
    <script src="swirl-arrow.js" defer></script>
    <swirl-arrow></swirl-arrow>
    <a href="#work"><swirl-arrow></swirl-arrow></a>

  Attributes (all optional):
    color="#EAE6DF"         arrow color at rest
    active-color="#7E6E91"  arrow color while hovered (default: same as color)
    accent="#7E6E91"        swirl / droplet color
    size="56"               hit area in px (splash radius scales with it)
    arrow-size="24"         arrow glyph size in px (default: size × 0.43)
    ring="true"             show a circular outline
    trigger="parent"        react to hover/focus on the closest <a>/<button> (for "See my work →" links)
    speed="1"               animation speed multiplier (lower = slower)
    direction="up"          site addition: land pointing ↑ (e.g. "Back to top"); default lands ↓
                            also "right" (→, e.g. "About") and "left" (←, e.g. "Work"); the bounce follows the arrow
  Reduced-motion: arrow just turns down, no swirl or bounce.
*/
(() => {
  const NS = 'http://www.w3.org/2000/svg';
  const mk = (tag, attrs = {}, parent, ns = NS) => {
    const n = ns ? document.createElementNS(ns, tag) : document.createElement(tag);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    parent && parent.appendChild(n); return n;
  };


  class SwirlArrow extends HTMLElement {
    attr(n) { return this.getAttribute(n) ?? this.getAttribute(n.replace(/-/g, '')); }
    connectedCallback() {
      if (this._b) return;
      const size = +this.getAttribute('size') || 56;
      const color = this.getAttribute('color') || '#EAE6DF';
      const accent = this.getAttribute('accent') || '#7E6E91';
      const sp = +this.getAttribute('speed') || 1;
      this.k = 1.7 / sp; // base timing is stretched so the splash reads clearly
      this.SPIN = 760 * this.k;
      this.color = color; this.activeColor = this.attr('active-color') || color;
      // where the arrow lands (degrees of spin from →), and which way it bounces once it has landed
      const dir = this.getAttribute('direction') || 'down';
      const LAND = { down: 450, up: -450, right: 360, left: -540 };
      this.land = LAND[dir] ?? 450;
      this.spinDir = this.land < 0 ? -1 : 1;                              // -1 mirrors the spin
      this.bounceAxis = dir === 'left' || dir === 'right' ? 'X' : 'Y';
      this.bounceSign = dir === 'up' || dir === 'left' ? -1 : 1;
      this.reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
      this.style.display = 'inline-block';
      this.style.width = this.style.height = size + 'px';

      const parentMode = this.getAttribute('trigger') === 'parent';
      const b = this._b = mk('div', parentMode ? { 'aria-hidden': 'true' } : { role: 'button', tabindex: '0', 'aria-label': this.getAttribute('label') || 'Scroll down' }, this, null);
      this.hasRing = this.getAttribute('ring') === 'true';
      b.style.cssText = `position:relative;width:${size}px;height:${size}px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;outline:none;-webkit-tap-highlight-color:transparent;` +
        (this.hasRing ? `box-shadow:inset 0 0 0 1.5px ${color}33;transition:box-shadow 300ms` : '');
      this.ringOn = `inset 0 0 0 1.5px ${color}`; this.ringOff = `inset 0 0 0 1.5px ${color}33`;

      // splash layer, centred, 4× the button so the swirl can travel outward
      const fx = mk('svg', { viewBox: '-100 -100 200 200', 'aria-hidden': 'true' }, b);
      fx.style.cssText = `position:absolute;left:50%;top:50%;width:${size * 3.6}px;height:${size * 3.6}px;transform:translate(-50%,-50%);overflow:visible;pointer-events:none`;
      const k = 56 / 200 * (200 / (size * 3.6)) * size / 56 * 3.6; // viewBox units per px ≈ 1 at size 56
      const R = size / 2 / k;
      this.arcs = [
        { r: R + 2, w: 2.6, c: accent, dash: 0.28, a0: 0, delay: 0 },
        { r: R + 7, w: 2, c: accent, dash: 0.22, a0: 180, delay: 90 },
      ].map(o => {
        const C = 2 * Math.PI * o.r;
        const el = mk('circle', { r: o.r, fill: 'none', stroke: o.c, 'stroke-width': o.w, 'stroke-linecap': 'round', 'stroke-dasharray': `${C * o.dash} ${C}` }, fx);
        el.style.opacity = 0;
        return Object.assign(o, { el, C });
      });
      this.drops = [40, 160, 280].map((a, i) => {
        const el = mk('circle', { r: [2.4, 1.8, 2.1][i], fill: accent }, fx);
        el.style.opacity = 0;
        return { el, a, d0: R, d1: R + 11 + i * 2, delay: 120 + i * 50 };
      });

      // arrow: outer = bounce, inner = rotation
      this.bounceEl = mk('div', {}, b, null);
      this.bounceEl.style.cssText = 'display:flex;will-change:transform';
      const as = +this.attr('arrow-size') || Math.round(size * 0.43);
      const arrow = this.rotEl = mk('svg', { viewBox: '0 0 24 24', width: as, height: as, fill: 'none', stroke: color, 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, this.bounceEl);
      arrow.style.cssText = 'display:block;will-change:transform;transition:stroke 220ms ease';
      mk('path', { d: 'M1 12 H22' }, arrow);
      mk('path', { d: 'M15.5 5.5 L22 12 L15.5 18.5' }, arrow);

      const on = () => this.enter(), off = () => this.leave();
      const t = parentMode ? (this.closest('a,button') || this.parentElement) : b;
      t.addEventListener('pointerenter', on);
      t.addEventListener('pointerleave', off);
      t.addEventListener(parentMode ? 'focusin' : 'focus', on);
      t.addEventListener(parentMode ? 'focusout' : 'blur', off);
      if (!parentMode) b.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse') { this.active ? off() : on(); } });
    }

    enter() {
      if (this.active) return; this.active = true;
      clearTimeout(this.tm);
      if (this.hasRing) this._b.style.boxShadow = this.ringOn;
      this.rotEl.setAttribute('stroke', this.activeColor);
      const k = this.k, SPIN = this.SPIN;
      const cur = this.currentAngle();
      this.rotA && this.rotA.cancel();
      if (this.reduced) {
        this.rotA = this.rotEl.animate([{ transform: `rotate(${cur}deg)` }, { transform: `rotate(${((this.land % 360) + 540) % 360 - 180}deg)` }], { duration: 200, fill: 'forwards' });
        return;
      }
      // a turn or so with a soft overshoot, landing on this arrow's direction
      const L = this.land;
      this.rotA = this.rotEl.animate([
        { transform: `rotate(${cur}deg) scale(1)` },
        { transform: `rotate(${Math.round(L * 0.555)}deg) scale(0.82)`, offset: 0.45 },
        { transform: `rotate(${L + 12 * this.spinDir}deg) scale(1.08)`, offset: 0.82 },
        { transform: `rotate(${L}deg) scale(1)` },
      ], { duration: SPIN, easing: 'cubic-bezier(0.45,0,0.2,1)', fill: 'forwards' });

      this.arcs.forEach(o => o.el.animate([
        { transform: `rotate(${o.a0}deg) scale(0.85)`, opacity: 0, strokeDashoffset: o.C * 0.1 },
        { opacity: 1, offset: 0.18 },
        { transform: `rotate(${o.a0 + 200}deg) scale(1.05)`, opacity: 0.85, offset: 0.55 },
        { transform: `rotate(${o.a0 + 340}deg) scale(1.18)`, opacity: 0, strokeDashoffset: -o.C * 0.2 },
      ], { duration: 900 * k, delay: o.delay * k, easing: 'cubic-bezier(0.2,0.6,0.2,1)', fill: 'both' }));

      this.drops.forEach(d => d.el.animate([
        { transform: `rotate(${d.a}deg) translateX(${d.d0}px) scale(0.4)`, opacity: 0 },
        { opacity: 1, offset: 0.15 },
        { transform: `rotate(${d.a + 70}deg) translateX(${d.d1}px) scale(1)`, opacity: 0.9, offset: 0.7 },
        { transform: `rotate(${d.a + 90}deg) translateX(${d.d1 + 3}px) scale(0)`, opacity: 0 },
      ], { duration: 720 * k, delay: d.delay * k, easing: 'cubic-bezier(0.15,0.7,0.3,1)', fill: 'both' }));

      this.tm = setTimeout(() => {
        if (!this.active) return;
        this.bounceA = this.bounceEl.animate([
          { transform: `translate${this.bounceAxis}(0)`, easing: 'cubic-bezier(0.33,0,0.67,1)' },
          { transform: `translate${this.bounceAxis}(${7 * this.bounceSign}px)`, offset: 0.45, easing: 'cubic-bezier(0.33,0,0.67,1)' },
          { transform: `translate${this.bounceAxis}(${-1 * this.bounceSign}px)`, offset: 0.8 },
          { transform: `translate${this.bounceAxis}(0)` },
        ], { duration: 820, iterations: Infinity });
      }, SPIN - 40);
    }

    leave() {
      if (!this.active) return; this.active = false;
      clearTimeout(this.tm);
      if (this.hasRing) this._b.style.boxShadow = this.ringOff;
      this.rotEl.setAttribute('stroke', this.color);
      if (this.bounceA) {
        const m = new DOMMatrix(getComputedStyle(this.bounceEl).transform);
        const off = (this.bounceAxis === 'X' ? m.m41 : m.m42) || 0;
        this.bounceA.cancel();
        this.bounceEl.animate([{ transform: `translate${this.bounceAxis}(${off}px)` }, { transform: `translate${this.bounceAxis}(0)` }], { duration: 200, easing: 'ease-out' });
        this.bounceA = null;
      }
      const cur = this.currentAngle();
      this.rotA && this.rotA.cancel();
      this.rotA = this.rotEl.animate([{ transform: `rotate(${cur}deg)` }, { transform: 'rotate(0deg)' }], { duration: 380, easing: 'cubic-bezier(0.2,0,0,1)', fill: 'forwards' });
    }

    currentAngle() {
      const m = new DOMMatrix(getComputedStyle(this.rotEl).transform);
      let a = Math.atan2(m.b, m.a) * 180 / Math.PI;
      if (a < -1 && this.spinDir > 0) a += 360;
      return Math.round(a);
    }
  }
  if (!customElements.get('swirl-arrow')) customElements.define('swirl-arrow', SwirlArrow);
})();

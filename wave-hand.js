/*
  <wave-hand> — companion to <swirl-arrow>. Hidden at rest; on hover/focus of the parent link
  the hand pops in with the same swirl splash (2 arcs + 3 droplets), then keeps waving
  with little motion lines until the pointer leaves.

  Usage:
    <script src="wave-hand.js" defer></script>
    <a class="hero-link" href="mailto:you@site.com">Say hi<wave-hand trigger="parent"></wave-hand></a>

  Attributes (all optional):
    color="#7E6E91"   hand color (shown only on hover)
    accent="#7E6E91"  swirl / droplet color
    size="36"         hit/space reserved in px (splash scales with it)
    hand-size="26"    glyph size in px
    trigger="parent"  react to hover/focus on the closest <a>/<button>
    speed="1"         animation speed multiplier (lower = slower)
    rest="hidden"     "hidden" (default) or "visible" — show the hand (in the link's text color) at rest
  Reduced motion: the hand simply fades in, no splash or waving.

  Site version: animation unchanged from the original component; the Lucide hand glyph and its
  extra motion lines are swapped for the site's own green waving-hand icon (already drawn tilted,
  with its own motion arcs).
*/
(() => {
  const NS = 'http://www.w3.org/2000/svg';
  const HAND_D = 'M306.3 615.4C272.3 611.3 241.4 598.8 213 577.6C202.4 569.7 175.5 543.9 165 531.5C144.7 507.6 129.2 475.7 123.1 445.5C119.2 426.1 118.9 416.5 119.2 338L119.5 262.5L122.2 255.2C132 228.3 155.2 211.7 183 211.7C200.8 211.7 214.3 217.3 227.1 230C241.2 244.1 247 260 247 284.8L247 297.5L327.2 217.4C401 143.8 408.1 137 414.6 133.7C432 124.8 451.3 124.6 469 133.2C475.3 136.3 486.8 146.5 491.5 153.4L493.5 156.3L498.4 152.9C511.6 144.1 532.2 141.3 547.5 146.5C572.9 154.9 589.6 179.1 587.7 204.5L587.1 211.5L595.2 215.3C614.1 224.3 627 244.9 627 266C627 282.2 621.1 296.4 609.4 308.9C605.2 313.4 601.9 317.2 602.1 317.3C630.1 336.1 638.4 365.5 623.9 394.8C619.2 404.4 625.9 397.2 526.9 499C491.9 535 459.7 567.5 455.4 571.1C414.1 605.9 360.1 621.9 306.3 615.4ZM540.5 591.8C540.3 591.1 537.8 582.6 535 573C532.2 563.4 529.7 554.8 529.4 553.8C529 552.6 530.1 551.8 534.2 550.5C558.2 542.6 576.8 524.7 586.2 500.3C587.9 496 589.3 492.4 589.4 492.2C589.7 491.9 629.1 503.8 629.7 504.3C630.4 505.1 624.8 519.5 620.3 528.5C606.3 556.5 584 576.8 554.5 588.3C542.1 593.1 541.1 593.4 540.5 591.8ZM361.2 571.1C390.3 564.8 415.1 551.3 437.5 529.6C453.5 513.9 582.2 381.1 584.9 377.4C587.4 374 588.7 366.8 587.6 362.6C586.7 359 581.4 354.2 576.9 353C567.9 350.6 569 349.6 517.2 401.3L470 448.5L455 433.5L440 418.5L510.4 348C549.1 309.2 581.5 276.1 582.4 274.3C583.3 272.5 584 268.8 584 266C584 256.5 574.5 250 564.3 252.4C562.4 252.9 539.3 275.3 489.7 324.8L418 396.5L402.8 381.2L387.5 366L465.2 288.3C508.6 244.8 543.4 209.3 543.9 207.7C547.5 198.1 542.1 188.4 532.2 186.4C524.7 184.9 526 183.8 443.5 266.1L365.5 344L350.5 329L335.5 314L394.7 254.7C427.2 222.2 454.3 194.4 455 193C460.1 183.1 456.1 172.7 446.2 170C437.2 167.6 444.3 161.1 320 285.5C257 348.5 205.2 400 204.8 400C204.3 400 204 371 204 335.6L204 271.2L201.2 265.9C194.6 253.1 179.4 250.2 169 259.6C161.6 266.3 161.9 262.1 162.3 350C162.7 437 162.3 431.9 169.6 454C178.1 479.5 189 496 214 521C241.5 548.5 259.8 560 289.8 568.5C310.5 574.5 340.4 575.5 361.2 571.1ZM260.5 201.9C251.7 199.2 242.8 196.5 240.8 196L237.1 194.9L239.6 187.7C251.1 155.4 272 130.9 300.6 116.3C310 111.5 325.7 105.3 326.3 106.1C327 107 338.2 146.2 337.8 146.5C337.7 146.6 333.9 148.2 329.5 149.9C305.8 159.3 290.4 175 281 199.3C279.4 203.2 277.8 206.5 277.3 206.7C276.9 206.8 269.3 204.7 260.5 201.9Z';
  const mk = (tag, attrs = {}, parent, ns = NS) => {
    const n = ns ? document.createElementNS(ns, tag) : document.createElement(tag);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    parent && parent.appendChild(n); return n;
  };

  class WaveHand extends HTMLElement {
    attr(n) { return this.getAttribute(n) ?? this.getAttribute(n.replace(/-/g, '')); }
    connectedCallback() {
      if (this._b) return;
      const size = +this.attr('size') || 36;
      const color = this.attr('color') || '#7E6E91';
      const accent = this.attr('accent') || '#7E6E91';
      this.k = 1.7 / (+this.attr('speed') || 1);
      this.reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
      this.restVisible = this.attr('rest') === 'visible';
      this.style.display = 'inline-block';
      this.style.width = this.style.height = size + 'px';
      this.style.verticalAlign = 'middle';

      const parentMode = this.attr('trigger') === 'parent';
      const b = this._b = mk('div', parentMode ? { 'aria-hidden': 'true' } : { role: 'button', tabindex: '0', 'aria-label': this.attr('label') || 'Say hi' }, this, null);
      b.style.cssText = `position:relative;width:${size}px;height:${size}px;display:flex;align-items:center;justify-content:center;cursor:pointer;outline:none;-webkit-tap-highlight-color:transparent`;

      // splash layer — same recipe as <swirl-arrow>
      const fx = mk('svg', { viewBox: '-100 -100 200 200', 'aria-hidden': 'true' }, b);
      const fxSize = size * 3.6;
      fx.style.cssText = `position:absolute;left:50%;top:50%;width:${fxSize}px;height:${fxSize}px;transform:translate(-50%,-50%);overflow:visible;pointer-events:none`;
      const R = (size / 2) * (200 / fxSize);
      this.arcs = [
        { r: R + 2, w: 2.6, dash: 0.28, a0: 30, delay: 40 },
        { r: R + 7, w: 2, dash: 0.22, a0: 210, delay: 130 },
      ].map(o => {
        const C = 2 * Math.PI * o.r;
        const el = mk('circle', { r: o.r, fill: 'none', stroke: accent, 'stroke-width': o.w, 'stroke-linecap': 'round', 'stroke-dasharray': `${C * o.dash} ${C}` }, fx);
        el.style.opacity = 0;
        return Object.assign(o, { el, C });
      });
      this.drops = [70, 190, 310].map((a, i) => {
        const el = mk('circle', { r: [2.4, 1.8, 2.1][i], fill: accent }, fx);
        el.style.opacity = 0;
        return { el, a, d0: R, d1: R + 11 + i * 2, delay: 160 + i * 50 };
      });

      // hand: pop wrapper → wave wrapper (pivot at the wrist)
      const hs = +this.attr('hand-size') || Math.round(size * 0.72);
      this.popEl = mk('div', {}, b, null);
      this.popEl.style.cssText = `display:flex;will-change:transform,opacity;opacity:${this.restVisible ? 1 : 0}`;
      const svg = this.svg = mk('svg', { viewBox: '115 102 519 519', width: hs, height: hs, fill: color }, this.popEl);
      svg.style.cssText = 'display:block;overflow:visible;transition:fill 220ms ease';
      this.color = color;
      this.waveEl = mk('g', {}, svg);
      this.waveEl.style.cssText = 'transform-box:view-box;transform-origin:250px 560px';   // pivot at the wrist
      mk('path', { 'fill-rule': 'evenodd', d: HAND_D }, this.waveEl);
      this.lines = [];

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
      const k = this.k;
      clearTimeout(this.tm);
      this.svg.setAttribute('fill', this.color);
      this.popA && this.popA.cancel();
      if (this.reduced) {
        this.popA = this.popEl.animate([{ opacity: this.restVisible ? 1 : 0 }, { opacity: 1 }], { duration: 200, fill: 'forwards' });
        return;
      }
      // pop in: swings up from the wrist with a small overshoot
      this.popA = this.popEl.animate([
        { transform: 'scale(0.2) rotate(-70deg)', opacity: this.restVisible ? 1 : 0 },
        { transform: 'scale(1.14) rotate(12deg)', opacity: 1, offset: 0.6 },
        { transform: 'scale(0.96) rotate(-4deg)', offset: 0.82 },
        { transform: 'scale(1) rotate(0deg)', opacity: 1 },
      ], { duration: 560 * k, easing: 'cubic-bezier(0.3,0,0.2,1)', fill: 'forwards' });

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

      // then wave on a loop: two quick waves, a beat of rest
      this.tm = setTimeout(() => {
        if (!this.active) return;
        const D = 1500;
        this.waveA = this.waveEl.animate([
          { transform: 'rotate(0deg)' },
          { transform: 'rotate(16deg)', offset: 0.12 },
          { transform: 'rotate(-9deg)', offset: 0.26 },
          { transform: 'rotate(15deg)', offset: 0.4 },
          { transform: 'rotate(-5deg)', offset: 0.54 },
          { transform: 'rotate(4deg)', offset: 0.64 },
          { transform: 'rotate(0deg)', offset: 0.72 },
          { transform: 'rotate(0deg)' },
        ], { duration: D, iterations: Infinity, easing: 'ease-in-out' });
        this.lineA = this.lines.map((p, i) => p.animate([
          { opacity: 0, transform: 'scale(0.6)' },
          { opacity: 1, transform: 'scale(1)', offset: 0.12 + i * 0.14 },
          { opacity: 0, transform: 'scale(1.15)', offset: 0.34 + i * 0.14 },
          { opacity: 0 },
        ], { duration: D, iterations: Infinity }));
      }, 520 * k);
    }

    leave() {
      if (!this.active) return; this.active = false;
      clearTimeout(this.tm);
      [this.waveA, ...(this.lineA || [])].forEach(a => a && a.cancel());
      this.waveA = null; this.lineA = null;
      this.popA && this.popA.cancel();
      if (this.restVisible) {
        this.svg.setAttribute('fill', 'currentColor');
        this.popA = this.popEl.animate([{ transform: 'scale(1)' }, { transform: 'scale(1)' }], { duration: 1 });
      } else {
        this.popA = this.popEl.animate([
          { transform: 'scale(1) rotate(0deg)', opacity: 1 },
          { transform: 'scale(0.4) rotate(-30deg)', opacity: 0 },
        ], { duration: 240, easing: 'cubic-bezier(0.4,0,1,1)', fill: 'forwards' });
      }
    }
  }
  if (!customElements.get('wave-hand')) customElements.define('wave-hand', WaveHand);
})();

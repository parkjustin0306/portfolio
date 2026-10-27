/* Justin Park — portfolio behaviour. No dependencies. */
(() => {
  'use strict';

  /* ============================================================
     CONTENT — edit these arrays to update the site.
     For images, put a path in `src` (e.g. "assets/echo.jpg");
     leave src '' to show the grey placeholder text instead.
     ============================================================ */

  const PROJECTS = [
    { name: 'designRIT', hue: 145, cat: 'Leadership', label: 'designRIT Community', year: 'Feb 2026-Now', src: 'assets/designrit_poster.jpg', video: 'assets/designrit_video.mp4', fit: 'contain', mediaBg: '#F9F9F7', labelDark: true, logo: 'assets/designrit_logo.svg', img: '[designRIT directory]', href: '#project', desc: "Leading the V2 rebuilt of RIT's design community platform.", role: 'Lead Admin', tags: ['Leadership', 'Community', 'Product Strategy', 'Web Development'],
      details: {
        tools: ['VS Code', 'Claude', 'Figma', 'Google Workspace', 'Netlify'],
        overview: 'Leading product strategy and the V2 rebuild of designRIT community platform, expanding networking and member discovery.',
        highlights: [
          'Co-founded and grew RIT’s student design community to 30+ active members',
          'Took over as Lead Admin, overseeing community operations and member engagement',
          'Own product strategy and roadmap for the V2 design community directory',
          'Scope and ship platform features for networking and member discovery',
          'Lead the admin team in establishing community foundations, developing marketing strategies, and planning the platform rollout'
        ],
        links: [{ label: 'View Site', href: 'https://designrit.com/' }]
      } },
    { name: 'Global Wings V2', hue: 200, cat: 'Intern', label: 'Private Aviation Site', year: 'May-Oct 2026', src: 'assets/gwjets_poster.jpg', video: 'assets/gwjets_video.mp4', logo: 'assets/gwjets_logo.svg', img: '[Range-ring tool screenshot]', href: '#project', desc: 'Designed and developed a custom aviation website.', role: 'Website Designer & Developer Intern', tags: ['Web Development', 'Product Design', 'Product Management', 'Client Work'],
      details: {
        tools: ['VS Code', 'Claude', 'Photoshop', 'Google Analytics 4', 'GoDaddy'],
        overview: 'Led end-to-end design and development of a custom private aviation website, working as a solo designer and developer replacing the existing Wix site and aligning stakeholder priorities.',
        highlights: [
          'Worked independently to launch a custom private aviation website, replacing Wix site',
          'Led product strategy, translating business needs into product requirements and a phased roadmap',
          'Led recurring stakeholder meetings with company leadership to gather requirements, align priorities, and incorporate feedback',
          'Designed and developed responsive pages across aircraft inventory, charter, brokerage, company information, and online tools',
          'Integrated Google Analytics 4 to track website traffic, engagement, and page interactions'
        ],
        links: [{ label: 'View Site', href: 'https://gwjets.com/' }]
      } },
    { name: 'Echo', hue: 30, cat: 'Hackathon', label: 'World Bank × Hack-Nation', year: 'Oct 2026', src: 'assets/echo_poster.jpg', video: 'assets/echo_app.mp4', fit: 'contain', mediaBg: '#E5E0D6', logo: 'assets/echo_logo.png', logoLight: true, img: '[Echo app screens]', href: '#project', desc: 'Led product strategy and frontend of an offline-first AI tourism app.', role: 'Product Manager & Front-End Developer', tags: ['Product Management', 'Product Strategy', 'Frontend Development', 'Cross-Collaboration'],
      details: {
        tools: ['VS Code', 'GitHub', 'Claude', 'Figma', 'Replit'],
        overview: 'Led product strategy and frontend development for an offline-first AI tourism app translating visitor feedback into Swahili insights for the World Bank × Hack-Nation “Small AI for Development” global hackathon, participating through Columbia University’s hub.',
        highlights: [
          'Led product strategy for a 3-person team',
          'Translated user needs into product requirements and UI designs',
          'Turned wireframes into an interactive mobile frontend',
          'Collaborated on AI-powered features with backend developers',
          'Prioritized accessibility, offline use, and multilingual feedback',
          'Designed workflows turning visitor feedback into actionable insights'
        ],
        links: [
          { label: 'View Site', href: 'https://global-hackthon-cloumbia-hub-2026--db4048.replit.app/' },
          { label: 'GitHub', href: 'https://github.com/parkjustin0306/GlobalHackthon-CloumbiaHub-2026' }
        ]
      } },
    { name: 'EZ Reader', hue: 222, featured: true, cat: 'Product', label: 'Chrome extension', year: 'Oct-Dec 2025', src: 'assets/ezr_poster.jpg', video: 'assets/ezr_video.mp4', logo: 'assets/ezr_logo.png', img: '[EZ Reader screenshot]', href: '#project', desc: 'Accessibility-focused extension for comfortable reading.', role: 'Product Designer & Developer', tags: ['Product Design', 'User Research', 'Usability Testing', 'Frontend Development', 'Chrome API'],
      details: {
        overview: 'A Chrome extension that improves readability for people with dyslexia, vision impairments, and those seeking customizable websites or reading experiences. Focused on accessible UX/UI, it gained 20+ users in 48 hours and earned a 5-star Chrome Web Store rating.',
        highlights: [
          'Owned product development from concept to launch',
          'Conducted user research and usability testing with 5+ users',
          'Built reading accessibility features, including fonts, rulers, and contrast controls',
          'Reached 20+ users in the first 48 hours',
          'Earned 10+ five-star Chrome Web Store reviews',
          'Adopted for daily use by a student with dyslexia',
          'Used AI-assisted development to accelerate implementation'
        ],
        tools: ['VS Code', 'Cursor', 'Claude', 'Canva', 'Photoshop'],
        links: [
          { label: 'View Site', href: 'https://parkjustin0306.github.io/ezreader/' },
          { label: 'Chrome Web Store', href: 'https://chromewebstore.google.com/detail/andfappmfejelcpnaocbdenoekppfjjj' }
        ]
      } },
    { name: 'Colorblind Helper', hue: 285, cat: 'Product', label: 'Marketing site', year: 'Dec 2025', src: 'assets/color_poster.jpg', video: 'assets/color_video.mp4', logo: 'assets/color_logo.png', logoLight: true, img: '[Colorblind Helper site]', href: '#project', desc: 'Marketing site for Colorblind Helper extension.', role: 'Website Developer', tags: ['Web Development', 'Marketing', 'Chrome API']
      ,
      details: {
        highlights: [
          'Inspired a close friend with colorblindness to create an extension through EZ-Reader',
          'Designed and developed a responsive marketing website',
          'Communicated product features through clear website content',
          'Supported marketing and user acquisition',
          'Helped grow the extension to 900+ active users',
          'Supported a product with 5+ five-star reviews'
        ],
        overview: 'Inspired by my EZ-Reader Chrome extension, a close friend with colorblindness created Colorblind Helper. Collaborated as a freelance web designer to build its marketing site, supporting growth to 900+ users and 5-star rating on Chrome Web Store.',
        tools: ['VS Code', 'Cursor', 'Canva', 'Photoshop'],
        links: [{ label: 'View Site', href: 'https://colorblindhelperr-bit.github.io/colorblind-helper/' }]
      } }
  ];
  /* hue: colour of the card's cover (0–360 on the colour wheel). featured: true puts that card first.
     Add src: 'assets/….jpg' (screenshot) and/or video: 'assets/….mp4' to replace the colour cover.
     logo: 'assets/….png' (16:10) fades in over the card's video/image on hover (cards only, not the pop-up).
     labelDark: true makes the corner category label dark over a light video (it turns white again over the logo on hover).
     fit: 'contain' shows a tall/odd-shaped video or image whole (no cropping), centred on mediaBg (a colour).
     Best size: 16:10 (e.g. 1600×1000) — the card and the pop-up use the same 16:10 frame, so nothing gets cropped differently.
     details (optional, shown in the pop-up when a card is opened):
       overview: 'paragraph', highlights: ['bullet', …], tools: ['VS Code', …] (the Tools section),
       skills: ['skill', …] (the Skills section, defaults to the card's tags),
       links: [{ label: 'Visit site', href: 'https://…' }]
     Anything in [brackets] is a placeholder for you to fill in. */

  /* Experience rows, newest first. end: null = still doing it.
     tags: short chips under the title (a leading number turns green). Leave tags out for a one-line row. */
  const EXPERIENCE = [
    { id: 'drit', icon: 'people', logo: 'assets/logos/exp-designrit.png', role: 'Lead Admin', org: 'designRIT', when: '02.2026 – Now', end: null, live: true },
    { id: 'gw', icon: 'plane', logo: 'assets/logos/exp-globalwings.svg', role: 'Website Design & Development Intern', org: 'Global Wings', when: '05.2026 – 10.2026', end: '2026-10', live: true },
    { id: 'tj', icon: 'bag', logo: 'assets/logos/exp-traderjoes.png', role: 'Crew Member', org: 'Trader Joe’s', when: '10.2023 – 07.2024', end: '2024-07', early: true },
    { id: 'sr', icon: 'cart', logo: 'assets/logos/exp-shoprite.png', role: 'Cashier', org: 'ShopRite', when: '02.2023 – 06.2023', end: '2023-06', early: true }
  ];

  const PHOTOS = [
    { src: 'assets/korea-sm.jpg', label: '[Photo 1]', alt: 'Justin in Korea', title: 'Seoul, South Korea', caption: 'Gyeongbokgung Palace' },
    { src: 'assets/vermontski-sm.jpg', label: '[Photo 2]', alt: 'Justin and friends snowboarding in Vermont', title: 'Jeffersonville, Vermont', caption: "Smugglers' Notch Resort" },
    { src: 'assets/nyc-sm.jpg', label: '[Photo 3]', alt: 'Justin in New York City', title: 'NYC, New York', caption: 'Brooklyn Bridge' },
    { src: 'assets/poland-sm.jpg', label: '[Photo 4]', alt: 'Justin in Poland', title: 'Kraków, Poland', caption: 'Main Market Square' },
    { src: 'assets/spain-sm.jpg', label: '[Photo 5]', alt: 'Justin in Spain', title: 'Benidorm, Spain', caption: 'Beach in Benidorm' },
    { src: 'assets/toronto-sm.jpg', label: '[Photo 6]', alt: 'Justin in Toronto', title: 'Toronto, Canada', caption: 'CN Tower' },
    { src: 'assets/niagara-sm.jpg', label: '[Photo 7]', alt: 'Justin looking out at Niagara Falls', title: 'Niagara, Canada', caption: 'Niagara Falls Canada' },
    { src: 'assets/travis-sm.jpg', label: '[Photo 8]', alt: 'Travis Scott concert at Madison Square Garden', title: 'Madison Square Garden, NYC', caption: 'Travis Scott Concert' },
    { src: 'assets/opium-sm.jpg', label: '[Photo 9]', alt: 'Playboi Carti concert at Prudential Center', title: 'Prudential Center, NJ', caption: 'Playboi Carti Concert' }
  ];

  /* "Currently listening to" card. Swap the placeholders for real ones:
     src: 'assets/cover.jpg' (leave '' for a coloured placeholder), title, artist. */
  const ALBUMS_I_LOVE = [
    { src: 'assets/nightcrawler.jpeg', title: 'Rodeo', artist: 'Travis Scott' },
    { src: 'assets/skeletons.jpeg', title: 'ASTROWORLD', artist: 'Travis Scott' },
    { src: 'assets/jackboys.jpeg', title: 'JACKBOYS', artist: 'Travis Scott' },
    { src: 'assets/longliveasap.jpeg', title: 'LONG.LIVE.A$AP', artist: 'A$AP Rocky' },
    { src: 'assets/finewhine.jpeg', title: 'AT.LONG.LAST.A$AP', artist: 'A$AP Rocky' },
    { src: 'assets/takecare.jpeg', title: 'Take Care', artist: 'Drake' },
    { src: 'assets/freespirit.jpg', title: 'Care Package', artist: 'Drake' },
    { src: 'assets/playboicarti.jpeg', title: 'Playboi Carti', artist: 'Playboi Carti' },
    { src: 'assets/agreatchaos.jpeg', title: 'A Great Chaos', artist: 'Ken Carson' },
    { src: 'assets/wedonttrustyou.jpeg', title: "WE DON'T TRUST YOU", artist: 'Future, Metro Boomin' }
  ];
  const ARTISTS_I_LOVE = [
    { src: 'assets/travisscott.jpeg', name: 'Travis Scott' },
    { src: 'assets/asaprocky.jpeg', name: 'A$AP Rocky' },
    { src: 'assets/carti.jpeg', name: 'Playboi Carti' },
    { src: 'assets/drake.jpeg', name: 'Drake' },
    { src: 'assets/future.jpeg', name: 'Future' },
    { src: 'assets/youngthug.jpeg', name: 'Young Thug' },
    { src: 'assets/gunna.jpeg', name: 'Gunna' },
    { src: 'assets/kencarson.jpeg', name: 'Ken Carson' },
    { src: 'assets/dontoliver.jpeg', name: 'Don Toliver' },
    { src: 'assets/ninevicious.jpeg', name: 'Nine Vicious' }
  ];
  /* Songs with a deezer track id (or a real title + artist) play a 30-second preview.
     Rows still saying [Song name] are placeholders and can't be played. */
  const MY_CLASSICS = [
    { src: 'assets/finewhine.jpeg', title: 'Fine Whine', artist: 'A$AP Rocky', deezer: 100835968 },
    { src: 'assets/finewhine.jpeg', title: 'L$D', artist: 'A$AP Rocky' },
    { src: 'assets/nightcrawler.jpeg', title: 'Nightcrawler', artist: 'Travis Scott, Swae Lee, Chief Keef' },
    { src: 'assets/pickupthephone.jpg', title: 'pick up the phone', artist: 'Young Thug, Travis Scott, Quavo' },
    { src: 'assets/skeletons.jpeg', title: 'SKELETONS', artist: 'Travis Scott, The Weeknd' },
    { src: 'assets/playboicarti.jpeg', title: 'dothatshit!', artist: 'Playboi Carti' },
    { src: 'assets/dollazonmyhead.jpeg', title: 'DOLLAZ ON MY HEAD', artist: 'Gunna, Young Thug' },
    { src: 'assets/excitement.jpeg', title: 'Excitement', artist: 'Trippie Redd, PARTYNEXTDOOR' },
    { src: 'assets/les.jpeg', title: 'Les', artist: 'Childish Gambino' },
    { src: 'assets/pride.jpeg', title: 'LOVE.', artist: 'Kendrick Lamar, Zacari' },
    { src: 'assets/takecare.jpeg', title: 'Under Ground Kings', artist: 'Drake' },
    { src: 'assets/freespirit.jpg', title: 'Free Spirit', artist: 'Drake, Rick Ross' },
    { src: 'assets/weekend.jpeg', title: 'Weekend', artist: 'Mac Miller, Miguel' },
    { src: 'assets/secondhand.jpeg', title: 'Secondhand', artist: 'Don Toliver, Rema' },
    { src: 'assets/secondhand.jpeg', title: 'Rendezvous', artist: 'Don Toliver, Yeat' },
    { src: 'assets/yes.jpeg', title: 'yes', artist: 'Ken Carson' },
    { src: 'assets/fashionkilla.png', title: 'My Whole Heart', artist: 'Nine Vicious', deezer: 3919123411 },
    { src: 'assets/tokyo.jpeg', title: 'Tokyo', artist: 'Nine Vicious' },
    { src: 'assets/havana.jpeg', title: 'Havana', artist: 'Pz' },
    { src: 'assets/pz.png', title: 'TAMAGOTCHI', artist: 'Pz', deezer: 4095925611 }
  ];

  const SONGS = [
    { src: 'assets/pz.png', alt: 'Tamagotchi cover', title: 'TAMAGOTCHI', artist: 'Pz', deezer: 4095925611 },   // Deezer track: TAMAGOTCHI by Pz'
    { src: 'assets/fashionkilla.png', alt: 'EMOTIONS album cover', title: "My Whole Heart", artist: 'Nine Vicious', deezer: 3919123411 },
    { src: 'assets/finewhine.jpeg', alt: 'ALLA album cover', title: 'Fine Whine', artist: 'A$AP Rocky', deezer: 100835968 }
  ];

  /* Same breakpoint as styles.css: phones in portrait (≤768 wide) and
     phones in landscape (short + touch screen). */
  const MOBILE_QUERY = '(max-width: 768px), (max-height: 500px) and (pointer: coarse)';
  const mobileMQ = window.matchMedia(MOBILE_QUERY);
  const isMobile = () => mobileMQ.matches;

  /* ---------- helpers ---------- */
  const $ = (id) => document.getElementById(id);
  const el = (tag, props = {}, ...kids) => {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(props)) {
      if (k === 'class') n.className = v;
      else if (k === 'text') n.textContent = v;
      else if (k === 'html') n.innerHTML = v;
      else if (k.startsWith('on')) n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v);
    }
    kids.flat().forEach((c) => c != null && n.append(c));
    return n;
  };
  const media = (item, placeholderText) =>
    item.src
      ? el('img', { src: item.src, alt: item.alt || '', loading: 'lazy' })
      : el('div', { class: 'placeholder', text: placeholderText });
  const wrap = (i, n) => ((i % n) + n) % n;
  // same external-link icon as the View Resume button on the About page
  const LINK_ICON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>';
  const EXPAND_ICON = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>';
  const CHEVRON = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';

  function dotsInto(container, n, current, labelFn, go) {
    container.replaceChildren(
      ...Array.from({ length: n }, (_, k) =>
        el('button', { type: 'button', class: 'dot', 'aria-label': labelFn(k), 'aria-current': k === current ? 'true' : 'false', onclick: () => go(k) }, el('span'))
      )
    );
  }

  /* Sliding dots (About page carousels only): the dots are built once and one sage pill travels
     between them like an inchworm. The leading edge moves first and the trailing edge catches up,
     so the pill stretches across the gap, then settles on the new dot. */
  function slideDots(container, n, current, labelFn, go) {
    container._go = go;
    let btns = [...container.querySelectorAll('.dot')];
    if (btns.length !== n) {
      container.replaceChildren(
        ...Array.from({ length: n }, (_, k) => el('button', { type: 'button', class: 'dot', onclick: () => container._go(k) }, el('span'))),
        el('span', { class: 'dot-pill', 'aria-hidden': 'true' })
      );
      container.classList.add('slide-dots', 'no-anim');
      btns = [...container.querySelectorAll('.dot')];
      window.addEventListener('resize', () => placePill(container, false), { passive: true });
    }
    btns.forEach((b, k) => {
      b.setAttribute('aria-current', k === current ? 'true' : 'false');
      b.setAttribute('aria-label', labelFn(k));
    });
    const prev = container.dataset.cur == null ? -1 : +container.dataset.cur;
    container.dataset.cur = String(current);
    if (prev === current) return;
    if (prev >= 0) container.dataset.dir = current > prev ? 'r' : 'l';
    placePill(container, prev >= 0);
  }
  function placePill(container, animate) {
    const pill = container.querySelector('.dot-pill');
    const b = container.querySelectorAll('.dot')[+container.dataset.cur];
    if (!pill || !b) return;
    const w = parseFloat(getComputedStyle(container).getPropertyValue('--pill-w')) || 22;
    const x = b.offsetLeft + (b.offsetWidth - w) / 2;
    if (!animate) container.classList.add('no-anim');
    pill.style.left = x + 'px';
    pill.style.right = (container.clientWidth - x - w) + 'px';
    if (!animate) {
      void pill.offsetWidth;                         // land in place first, then turn transitions back on
      requestAnimationFrame(() => container.classList.remove('no-anim'));
    }
  }

  /* ---------- theme ---------- */
  const root = document.documentElement;
  function applyThemeLabels() {
    const dark = root.dataset.theme !== 'light';
    document.querySelectorAll('.theme-toggle').forEach((b) => b.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode'));
    document.querySelectorAll('.theme-row-label').forEach((s) => { s.textContent = dark ? 'Light mode' : 'Dark mode'; });
  }
  document.querySelectorAll('.theme-toggle').forEach((b) =>
    b.addEventListener('click', () => {
      const next = root.dataset.theme === 'light' ? 'dark' : 'light';
      root.dataset.theme = next;
      try { localStorage.setItem('jp-theme', next); } catch (e) { /* storage unavailable */ }
      applyThemeLabels();
    })
  );
  applyThemeLabels();

  /* ---------- mobile menu ---------- */
  const menuToggle = $('menuToggle');
  const mobileNav = $('mobileNav');
  function setMenu(open) {
    mobileNav.hidden = !open;
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  menuToggle.addEventListener('click', () => setMenu(mobileNav.hidden));
  mobileNav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !mobileNav.hidden) { setMenu(false); menuToggle.focus(); } });
  mobileMQ.addEventListener('change', () => { if (!isMobile()) setMenu(false); });

  /* ---------- signatures ---------- */
  const navSigLink = $('navSigLink');
  const navLogo = $('navLogo');
  // Seal logo: draws once on load, redraws each time it's hovered / focused, then holds
  const replayNav = () => { if (navLogo && navLogo.play) navLogo.play(); };
  navSigLink.addEventListener('mouseenter', replayNav);
  navSigLink.addEventListener('focus', replayNav);
  // footer seal: draws once when it first comes into view, then redraws only while the seal itself is hovered
  const ftSeal = document.querySelector('.ft-seal');
  if (ftSeal) ftSeal.addEventListener('mouseenter', () => { if (ftSeal.play) ftSeal.play(); });


  /* ---------- Work page only (projects + project pop-up) ---------- */
  if ($('track')) {
  /* ---------- projects: grid, two per row (featured card first) ---------- */
  const track = $('track');
  const emptyMsg = $('emptyMsg');
  // card order on the page (left → right, top → bottom); anything not listed goes after these
  const CARD_ORDER = ['Global Wings V2', 'designRIT', 'Echo', 'EZ Reader', 'Colorblind Helper'];
  const rank = (p) => { const i = CARD_ORDER.indexOf(p.name); return i < 0 ? CARD_ORDER.length : i; };
  const ordered = [...PROJECTS].sort((a, b) => rank(a) - rank(b));
  const visibleProjects = () => ordered;            // the pop-up's ← → walk through the cards in this order

  // first sentence of the description, shown under the card on hover
  const blurb = (p) => (p.short || (p.desc.match(/^.*?[.!?](?=\s|$)/) || [p.desc])[0]);
  // just the year for the label on the image (e.g. "Feb 2026-Now" -> "2026")
  const yearOf = (p) => ((p.year || '').match(/\d{4}/) || [p.year])[0];

  // what fills a project's 16:10 frame: video if given, else image, else the colour cover's big name
  const projMedia = (p) => {
    if (p.video) {
      const v = el('video', { src: p.video, playsinline: '', loop: '', autoplay: '', preload: 'metadata', 'aria-label': p.name + ' preview' });
      if (p.src) v.poster = p.src;
      v.muted = true;                 // must be muted for autoplay to work
      return v;
    }
    return p.src ? el('img', { src: p.src, alt: p.name + ' preview', loading: 'lazy' })
                 : el('span', { class: 'cover-word', 'aria-hidden': 'true', text: p.name });
  };
  const hasMedia = (p) => !!(p.video || p.src);

  function renderProjects() {
    track.replaceChildren(
      ...ordered.map((p) =>
        el('article', { class: 'proj', role: 'listitem', style: '--h:' + (p.hue ?? 140) },
          el('div', { class: 'ph' + (hasMedia(p) ? '' : ' cover') + (p.logoLight ? ' logo-light' : '') + (p.fit === 'contain' ? ' fit-contain' : '') + (p.labelDark ? ' label-dark' : ''), style: p.mediaBg ? '--media-bg:' + p.mediaBg : '' },
            projMedia(p),
            p.logo ? el('img', { class: 'proj-logo', src: p.logo, alt: '', 'aria-hidden': 'true', loading: 'lazy', decoding: 'async' }) : null,
            el('span', { class: 'mono cover-cat', text: p.cat }),
            el('span', { class: 'proj-expand', 'aria-hidden': 'true', html: EXPAND_ICON }),
            el('div', { class: 'proj-labels' },
              el('span', { class: 'proj-chip' }, el('span', { class: 'proj-chip-name', text: p.name }), el('span', { class: 'proj-chip-dot', 'aria-hidden': 'true', text: '•' }), el('span', { class: 'proj-chip-year', text: yearOf(p) })),
              el('p', { class: 'proj-desc' }, el('span', { text: blurb(p) }))      // slides in next to the name on hover
            )
          ),
          // the button stretches over the whole card (see .proj-open::after), so a click anywhere opens it
          el('button', { type: 'button', class: 'proj-open', 'aria-haspopup': 'dialog', 'aria-label': 'Open ' + p.name + ' project details', onclick: (e) => openProject(p, e.currentTarget.closest('.proj')) })
        )
      ),
      // placeholder card that evens out the grid
      el('div', { class: 'proj proj-soon', role: 'listitem' },
        el('div', { class: 'ph soon-ph' },
          el('span', { class: 'mono soon-tag' }, el('span', { class: 'soon-dot', 'aria-hidden': 'true' }), 'Coming Soon'),
          el('div', { class: 'soon-in' },
            el('p', { class: 'soon-msg', html: 'Currently building <span class="green">something new.</span><br>Check back <span class="green">soon!</span>' }),
            el('span', { class: 'soon-load', 'aria-hidden': 'true' }, el('i'), el('i'), el('i'))
          )
        )
      )
    );
    emptyMsg.hidden = ordered.length !== 0;
  }

  /* ---------- project pop-up: grows out of the card, blurs the page behind ---------- */
  const dlg = $('projDialog');
  const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let openerCard = null;
  function section(title, ...kids) { return el('section', { class: 'pd-sec' }, el('h4', { class: 'mono pd-label', text: title }), ...kids); }
  const panel = $('pdPanel');
  let navList = [], navIndex = 0;
  // copy of the MOTION / PAUSED button for the pop-up's media (state is kept in sync by the toggle code below)
  function pdMotionButton() {
    const c = $('motionToggle').cloneNode(true);
    c.removeAttribute('id'); c.classList.add('pd-motion');
    return c;
  }
  function renderProject(p) {
    const d = p.details || {};
    const skills = d.skills || p.tags || [];
    const tools = d.tools || [];
    const links = (d.links || []).filter((l) => l && l.href);
    $('pdBody').replaceChildren(
      el('div', { class: 'pd-media' + (hasMedia(p) ? '' : ' cover') + (p.fit === 'contain' ? ' fit-contain' : ''), style: '--h:' + (p.hue ?? 140) + (p.mediaBg ? ';--media-bg:' + p.mediaBg : '') },
        projMedia(p),
        p.logo ? el('img', { class: 'pd-logo', src: p.logo, alt: '', 'aria-hidden': 'true', decoding: 'async' }) : null,
        p.video && $('motionToggle') ? pdMotionButton() : null),
      el('div', { class: 'pd-content' },
        el('div', { class: 'mono pd-meta' }, el('span', { text: p.label }), el('span', { text: '·' }), el('span', { text: p.cat }), el('span', { text: '·' }), el('span', { text: p.year })),
        el('h3', { id: 'pdTitle', class: 'display pd-title', text: p.name }),
        el('p', { class: 'pd-lead', text: d.overview || p.desc }),
        el('div', { class: 'pd-grid' },
          el('div', { class: 'pd-main' },
            d.highlights && d.highlights.length ? section('Highlights', el('ul', { class: 'pd-list' }, ...d.highlights.map((h) => el('li', { text: h })))) : null
          ),
          el('aside', { class: 'pd-side' },
            section('My role', el('p', { class: 'pd-text', text: p.role })),
            skills.length ? section('Skills', el('div', { class: 'pd-chips' }, ...skills.map((t) => el('span', { class: 'pd-chip', text: t })))) : null,
            tools.length ? section('Tools', el('div', { class: 'pd-chips' }, ...tools.map((t) => el('span', { class: 'pd-chip', text: t })))) : null,
            links.length ? section('Links', el('div', { class: 'pd-links' }, ...links.map((l) =>
              el('a', { class: 'btn-solid pd-link', href: l.href, target: '_blank', rel: 'noopener noreferrer' }, l.label, el('span', { class: 'pd-link-icon', 'aria-hidden': 'true', html: LINK_ICON }))))) : null
          )
        )
      )
    );
    panel.scrollTop = 0;
  }
  function openProject(p, card) {
    navList = visibleProjects();                       // arrows walk through the projects in grid order
    navIndex = Math.max(0, navList.indexOf(p));
    $('pdPrev').hidden = $('pdNext').hidden = navList.length < 2;
    renderProject(p);
    openerCard = card;
    document.documentElement.classList.add('modal-open');
    dlg.showModal();
    if (!reduceMotion() && card && panel.animate) {
      // FLIP: start the pop-up at the card's spot and size, then grow it into place
      const from = card.getBoundingClientRect(), to = panel.getBoundingClientRect();
      const dx = (from.left + from.width / 2) - (to.left + to.width / 2);
      const dy = (from.top + from.height / 2) - (to.top + to.height / 2);
      const sc = Math.max(0.2, Math.min(from.width / to.width, 1));
      panel.animate([
        { transform: `translate(${dx}px, ${dy}px) scale(${sc})`, opacity: 0.4 },
        { transform: 'none', opacity: 1 }
      ], { duration: 380, easing: 'cubic-bezier(.2,.8,.2,1)' });
    }
  }
  // previous / next project inside the pop-up (loops around)
  function stepProject(dir) {
    if (navList.length < 2) return;
    navIndex = (navIndex + dir + navList.length) % navList.length;
    renderProject(navList[navIndex]);
    if (!reduceMotion()) {
      panel.style.setProperty('--from', (dir > 0 ? 40 : -40) + 'px');
      panel.classList.remove('swap'); void panel.offsetWidth; panel.classList.add('swap');
    }
    // closing returns focus to this project's card if it is on the page
    const cards = [...track.querySelectorAll('.proj')];
    const match = cards.find((c) => c.querySelector('.proj-name') && c.querySelector('.proj-name').textContent === navList[navIndex].name);
    if (match) openerCard = match;
  }
  $('pdPrev').addEventListener('click', () => stepProject(-1));
  $('pdNext').addEventListener('click', () => stepProject(1));
  dlg.addEventListener('keydown', (e) => {
    if (e.target.closest && e.target.closest('input, textarea')) return;
    if (e.key === 'ArrowLeft') { stepProject(-1); e.preventDefault(); }
    else if (e.key === 'ArrowRight') { stepProject(1); e.preventDefault(); }
  });
  function closeProject() {
    if (!dlg.open) return;
    const finish = () => { dlg.close(); };
    if (!reduceMotion() && panel.animate) {
      dlg.classList.add('closing');
      panel.animate([{ transform: 'none', opacity: 1 }, { transform: 'scale(.96)', opacity: 0 }], { duration: 180, easing: 'ease-in' }).onfinish = () => { dlg.classList.remove('closing'); finish(); };
    } else finish();
  }
  dlg.addEventListener('close', () => {
    document.documentElement.classList.remove('modal-open');
    const btn = openerCard && openerCard.querySelector('.proj-open');
    if (btn) btn.focus({ preventScroll: true });
  });
  dlg.addEventListener('cancel', (e) => { e.preventDefault(); closeProject(); });          // Esc key
  dlg.addEventListener('click', (e) => { if (e.target === dlg) closeProject(); });        // click on the blurred backdrop
  $('pdClose').addEventListener('click', closeProject);

  renderProjects();

  /* ---------- MOTION / PAUSED toggle (next to "A Few Things I've Made." and on the pop-up's media) ----------
     MOTION (default): every card video plays, the logo fades in on hover; the pop-up plays its video.
     PAUSED: videos stop and the logos show; hovering a card plays its video instead (the pop-up just stays paused on its logo).
     Both buttons share one setting. */
  const motionBtn = $('motionToggle');
  if (motionBtn) {
    let paused = false;
    const play = (v) => { const r = v.play(); if (r && r.catch) r.catch(() => {}); };
    const hot = (box) => box.matches(':hover') || box.contains(document.activeElement);
    const pdMedia = () => $('pdBody').querySelector('.pd-media');
    function syncVideo(v, box) {
      if (!v) return;
      if (paused && !hot(box)) v.pause(); else play(v);
    }
    function applyMotion() {
      track.classList.toggle('is-paused', paused);
      dlg.classList.toggle('is-paused', paused);
      document.querySelectorAll('.motion-toggle').forEach((b) => {
        b.classList.toggle('is-paused', paused);
        b.setAttribute('aria-pressed', String(paused));
        b.setAttribute('aria-label', paused ? 'Play project videos' : 'Pause project videos');
        b.querySelector('.mt-label').textContent = paused ? 'Paused' : 'Motion';
      });
      track.querySelectorAll('.proj').forEach((card) => syncVideo(card.querySelector('.ph video'), card));
      const m = pdMedia();
      const mv = m && m.querySelector('video');
      if (mv) { if (paused) mv.pause(); else play(mv); }   // pop-up: PAUSED simply pauses (its button sits on the media, so no hover-to-play here)
    }
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.motion-toggle')) return;
      paused = !paused; applyMotion();
    });
    // in PAUSED mode a card's video plays only while the card is hovered (or keyboard-focused)
    function hoverPlay(box) {
      const v = box.querySelector('video');
      if (!v) return;
      const start = () => { if (paused) play(v); };
      const stop = () => { if (paused && !hot(box)) v.pause(); };
      box.addEventListener('mouseenter', start);
      box.addEventListener('mouseleave', stop);
      box.addEventListener('focusin', start);
      box.addEventListener('focusout', () => setTimeout(stop, 0));
    }
    track.querySelectorAll('.proj').forEach(hoverPlay);
    // the pop-up is rebuilt for every project (open, ← →): wire up its media and match the current setting
    new MutationObserver(() => {
      const m = pdMedia();
      if (!m) return;
      applyMotion();
    }).observe($('pdBody'), { childList: true });
    dlg.addEventListener('close', () => { const m = pdMedia(); const v = m && m.querySelector('video'); if (v) v.pause(); });
    applyMotion();
  }
  }

  /* ---------- About page: experience list ---------- */
  if ($('expList')) {
  const EXP_ICONS = {
    plane: '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
    people: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    bag: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/>',
    cart: '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>'
  };
  const tag = (t) => {
    const m = t.match(/^([\d+]+)\s(.*)$/);
    return el('li', {}, m ? [el('b', { text: m[1] }), ' ' + m[2]] : t);
  };
  $('expList').replaceChildren(
    ...EXPERIENCE.map((e) =>
      el('li', { class: 'exp-row' + (e.early ? ' is-early' : '') },
        e.logo
          ? el('span', { class: 'exp-mark is-logo', 'aria-hidden': 'true' }, el('img', { src: e.logo, alt: '', width: '44', height: '44', loading: 'lazy' }))
          : el('span', { class: 'exp-mark', 'aria-hidden': 'true', html: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + EXP_ICONS[e.icon] + '</svg>' }),
        el('div', { class: 'exp-main' },
          el('h3', { class: 'exp-title' }, el('span', { class: 'exp-role', text: e.role }), el('span', { class: 'exp-org', text: ' · ' + e.org })),
          e.tags ? el('ul', { class: 'exp-tags' }, e.tags.map(tag)) : null
        ),
        el('span', { class: 'exp-when mono' }, el('i', { class: 'exp-live' + (e.live ? '' : ' is-past'), 'aria-hidden': 'true' }), el('span', { html: e.when.replace(/\./g, '<b class="exp-sep">.</b>') }))
      )
    )
  );
  }

  /* ---------- About page: fun facts. Each card plays its little animation when it scrolls in, and again on hover ---------- */
  if ($('ffGrid')) {
  const cards = [...document.querySelectorAll('.ff-card')];
  const play = (c) => { c.classList.remove('play'); void c.offsetWidth; c.classList.add('play'); };
  if ('IntersectionObserver' in window) {
    const fio = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { setTimeout(() => play(en.target), 250); fio.unobserve(en.target); }
    }), { threshold: 0.5 });
    cards.forEach((c) => fio.observe(c));
  } else cards.forEach(play);
  cards.forEach((c) => c.addEventListener('mouseenter', () => play(c)));
  }

  /* ---------- About page: tools & skills picker (click an icon, the panel shows that skill) ---------- */
  if ($('skPicker')) {
  const tiles = [...document.querySelectorAll('.sk-tile')];
  const panel = $('skPanel');
  const pad = (n) => String(n).padStart(2, '0');
  let cur = 0;
  function showSkill(i, focus) {
    cur = (i + tiles.length) % tiles.length;
    const t = tiles[cur];
    tiles.forEach((b, k) => { b.setAttribute('aria-selected', String(k === cur)); b.tabIndex = k === cur ? 0 : -1; });
    if (focus) t.focus();
    panel.setAttribute('aria-labelledby', t.id);
    const logo = t.querySelector('.sk-logo-set');
    let icon;
    if (logo) icon = logo.cloneNode(true);                     // brand logos: shown as-is
    else {                                                     // line icons: they draw themselves
      icon = t.querySelector('svg').cloneNode(true);
      icon.setAttribute('width', '60'); icon.setAttribute('height', '60');
      icon.querySelectorAll('path, circle, rect, line, polyline').forEach((sh) => { if (!sh.hasAttribute('stroke-dasharray')) sh.setAttribute('pathLength', '1'); });
    }
    $('skBig').classList.toggle('is-logos', !!logo);
    $('skBig').replaceChildren(icon);
    $('skCount').textContent = pad(cur + 1) + ' / ' + pad(tiles.length);
    $('skGroup').textContent = t.dataset.group;
    $('skName').textContent = t.dataset.name;
    $('skDesc').textContent = t.dataset.desc;
    $('skPairs').replaceChildren(...t.dataset.pairs.split('|').map((name) => {
      let k = tiles.findIndex((b) => b.dataset.name === name);
      if (k < 0) k = tiles.findIndex((b) => b.dataset.name.split(' & ').includes(name));   // "Claude" -> the "Cursor & Claude" tile
      return el('button', { type: 'button', class: 'sk-chip', text: name, onclick: () => showSkill(k) });
    }));
    panel.classList.remove('swap'); void panel.offsetWidth; panel.classList.add('swap');
    clearTimeout(drawDone);                                    // once drawn, drop the dash trick so every line joins up cleanly
    drawDone = setTimeout(() => panel.classList.remove('swap'), 1000);
  }
  let drawDone;
  tiles.forEach((t, k) => {
    t.addEventListener('click', () => showSkill(k));
    t.addEventListener('keydown', (e) => {
      const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
      if (step) { e.preventDefault(); showSkill(cur + step, true); }
      else if (e.key === 'Home') { e.preventDefault(); showSkill(0, true); }
      else if (e.key === 'End') { e.preventDefault(); showSkill(tiles.length - 1, true); }
    });
  });
  $('skPrev').addEventListener('click', () => showSkill(cur - 1));
  $('skNext').addEventListener('click', () => showSkill(cur + 1));
  showSkill(0);
  }

  /* ---------- footer banana milk: one full shake per hover, never cut short or restarted mid-shake ---------- */
  document.querySelectorAll('.ft-milk').forEach((m) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const shake = () => { if (!m.classList.contains('shake')) m.classList.add('shake'); };
    m.addEventListener('mouseenter', shake);
    const words = m.parentElement && m.parentElement.querySelector('.ft-bm');   // hovering the words "Banana Milk" shakes the bottle too
    if (words) words.addEventListener('mouseenter', shake);
    m.addEventListener('animationend', () => m.classList.remove('shake'));
  });

  /* ---------- typing loops: type a phrase, pause, delete it, type the next ---------- */
  function typeLoop(out, phrases, hold = 2800) {
    if (!out || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let p = 0, i = 0, deleting = false, timer = null, paused = false;
    // Hovering the line freezes the typing exactly where it is (the green cursor keeps blinking);
    // moving off picks up from that same letter. The hover area is kept as wide as the full line,
    // so it doesn't shrink out from under the mouse while the text is short.
    const line = out.parentElement;
    line.style.minWidth = Math.ceil(line.getBoundingClientRect().width) + 'px';
    out.textContent = '';
    const later = (ms) => { timer = setTimeout(tick, ms); };
    function tick() {
      timer = null;
      if (paused) return;
      const text = phrases[p];
      if (!deleting) {
        out.textContent = text.slice(0, ++i);
        if (i >= text.length) { deleting = true; return later(hold); }   // hold the full line before deleting
        later(85);
      } else {
        out.textContent = text.slice(0, --i);
        if (i <= 0) { deleting = false; p = (p + 1) % phrases.length; return later(400); }
        later(40);
      }
    }
    line.addEventListener('mouseenter', () => { paused = true; clearTimeout(timer); timer = null; });
    line.addEventListener('mouseleave', () => { paused = false; if (!timer) later(deleting ? 120 : 180); });
    later(500);
  }
  typeLoop($('typeText'), ['Human-Centered Computing @ RIT']);   // hero subtitle
  typeLoop($('abLocText'), ['NJ, NYC, & ROC'], 3500);              // About intro: where I'm from / where I am

  /* ---------- footer clock: live time in New York, with a sun by day and a moon at night ---------- */
  (function footerClock() {
    const time = $('ftClockTime'), icon = $('ftClockIcon');
    if (!time || !icon) return;
    const SUN = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/></svg>';   // same icons as the light/dark button
    const MOON = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    const fmt = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', hour: 'numeric', minute: '2-digit', hour12: true });
    const hourFmt = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', hour: 'numeric', hourCycle: 'h23' });
    let night = null;
    function tick() {
      const now = new Date();
      time.textContent = fmt.format(now);
      time.dateTime = now.toISOString();
      const h = +hourFmt.format(now);
      const isNight = h < 6 || h >= 18;                     // moon from 6pm to 6am
      if (isNight !== night) { night = isNight; icon.innerHTML = isNight ? MOON : SUN; }
      setTimeout(tick, 60000 - (now.getSeconds() * 1000 + now.getMilliseconds()) + 50);   // update right on the minute
    }
    tick();
  })();

  /* ---------- About page only (polaroids, sub-nav, music player) ---------- */
  if ($('polaStack')) {
  /* ---------- photo carousel: a pile of polaroids ----------
     Every photo is a polaroid in the pile. "Next" (or clicking / swiping the top photo) tosses it
     off to the right and it slides in at the back; "Previous" pulls the back photo out and drops it on top. */
  let photo = 0;
  const ROT = [-3, 2.5, -1.8, 3.2, -2.4];          // each polaroid keeps its own little tilt
  const stack = $('polaStack');
  const cards = PHOTOS.map((p, i) => {
    const year = p.year || ((p.caption || '').match(/\b(19|20)\d{2}\b/) || [''])[0];   // "summer of 2025" -> 2025
    const card = el('div', { class: 'pola pola-film', 'aria-hidden': 'true' },
      el('div', { class: 'film-frame' },
        el('span', { class: 'film-edge film-edge-top mono' }, el('span', { text: p.title }), el('span', { text: year })),
        el('div', { class: 'film-photo' }, el('img', { src: p.src, alt: p.alt || '', decoding: 'async', loading: 'lazy' })),
        el('span', { class: 'film-edge film-edge-bottom mono' }, el('span', { text: (p.caption || '').replace(/\.$/, '') }))
      )
    );
    card.style.setProperty('--r', ROT[i % ROT.length] + 'deg');
    card.addEventListener('animationend', () => card.classList.remove('toss', 'untoss'));
    stack.append(card);
    return card;
  });
  function renderPhoto() {
    const n = PHOTOS.length;
    cards.forEach((c, i) => {
      c.dataset.pos = String(wrap(i - photo, n));
      c.setAttribute('aria-hidden', i === photo ? 'false' : 'true');
    });
    const segs = $('photoDots');
    if (segs.children.length !== n) {
      segs.replaceChildren(...PHOTOS.map((_, k) => el('button', { type: 'button', class: 'pola-seg', onclick: () => goPhoto(k, k > photo ? 1 : -1) }, el('span'))));
    }
    [...segs.children].forEach((b, k) => {
      b.setAttribute('aria-current', k === photo ? 'true' : 'false');
      b.setAttribute('aria-label', 'Show photo ' + (k + 1) + ' of ' + n + ': ' + PHOTOS[k].title);
    });
    $('photoCount').textContent = String(photo + 1).padStart(2, '0') + ' / ' + String(n).padStart(2, '0');
  }
  function animate(card, cls) {
    card.classList.remove('toss', 'untoss');
    void card.offsetWidth;                          // restart the animation if it is already running
    card.classList.add(cls);
  }
  function goPhoto(k, dir) {
    const from = photo;
    photo = wrap(k, PHOTOS.length);
    if (photo === from) return;
    if (dir > 0) animate(cards[from], 'toss');
    else animate(cards[photo], 'untoss');
    renderPhoto();
  }
  $('photoNext').addEventListener('click', () => goPhoto(photo + 1, 1));
  stack.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goPhoto(photo + 1, 1); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); goPhoto(photo - 1, -1); }
  });
  stack.addEventListener('click', () => goPhoto(photo + 1, 1));
  let touchX = null;
  stack.addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; }, { passive: true });
  stack.addEventListener('touchend', (e) => {
    if (touchX == null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    touchX = null;
    if (Math.abs(dx) > 40) { e.preventDefault(); goPhoto(photo + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1); }
  });

  /* ---------- sub-nav: highlight the section you're reading ---------- */
  const subnav = $('abSubnav');
  const subLinks = subnav ? [...subnav.querySelectorAll('a')] : [];
  const subSecs = subLinks.map((a) => document.querySelector(a.getAttribute('href')));
  let subCur = -1;
  function spy() {
    const line = window.innerHeight * 0.35;
    let cur = 0;
    subSecs.forEach((s, i) => { if (s && s.getBoundingClientRect().top <= line) cur = i; });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) cur = subSecs.length - 1;
    if (cur === subCur) return;
    subCur = cur;
    subLinks.forEach((a, i) => a.setAttribute('aria-current', i === cur ? 'true' : 'false'));
    // narrow screens: the sub-nav is a sideways row, keep the current one in view
    if (subnav.scrollWidth > subnav.clientWidth) subnav.scrollTo({ left: subLinks[cur].getBoundingClientRect().left - subnav.getBoundingClientRect().left + subnav.scrollLeft - 24, behavior: 'smooth' });
  }
  if (subLinks.length) {
    let spyQ = false;
    const spyFrame = () => { if (spyQ) return; spyQ = true; requestAnimationFrame(() => { spyQ = false; spy(); }); };   // once per frame, not per scroll event
    window.addEventListener('scroll', spyFrame, { passive: true });
    window.addEventListener('resize', spyFrame, { passive: true });
    spy();
  }

  /* ---------- "Currently listening to": a little music library. Tap a row to open it inside the card ---------- */
  if ($('libCard')) {
  const lib = $('libCard');
  const NOTE_SVG = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/></svg>';
  const cover = (item, i) => item.src
    ? el('span', { class: 'lib-cover' }, el('img', { src: item.src, alt: '', loading: 'lazy', onerror: (e) => { const c = e.target.parentNode; c.className = 'lib-cover is-empty'; c.style.setProperty('--h', (i * 47 + 140) % 360); c.innerHTML = NOTE_SVG; } }))
    : el('span', { class: 'lib-cover is-empty', style: '--h:' + ((i * 47 + 140) % 360), html: NOTE_SVG });
  $('libAlbumList').replaceChildren(...ALBUMS_I_LOVE.map((a, i) =>
    el('li', { class: 'lib-album' }, cover(a, i), el('span', { class: 'lib-name', text: a.title }), el('span', { class: 'lib-artist', text: a.artist }))));
  const EQ = '<span class="lib-eq" aria-hidden="true"><i></i><i></i><i></i></span>';
  const PLAY_SM = '<svg class="lib-play-sm" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4.5v15l12.5-7.5z"/></svg>';
  const isReal = (t) => !!(t.deezer || t.preview || (t.title && t.title[0] !== '['));
  /* Songs I Love: one list (My Classics) with its own player; PL is whichever list is open */
  const PLAYLISTS = { repeat: MY_CLASSICS };
  let PL = MY_CLASSICS, songRows = [];
  const buildRows = (list) => list.map((t, i) => {
    const n = i + 1;
    const real = isReal(t);
    const row = el(real ? 'button' : 'div', real ? { type: 'button', class: 'lib-song-btn', 'aria-label': 'Play ' + t.title + ' by ' + t.artist } : { class: 'lib-song-btn' },
      el('span', { class: 'lib-num mono', html: '<span class="lib-n">' + n + '</span>' + (real ? PLAY_SM + EQ : '') }), cover(t, i + 3),
      el('span', { class: 'lib-meta' }, el('span', { class: 'lib-name', text: t.title }), el('span', { class: 'lib-artist', text: t.artist })));
    if (real) row.addEventListener('click', () => playSong(i));
    return el('li', { class: 'lib-song' + (real ? '' : ' is-empty') }, row);
  });

  /* --- 30-second previews: Deezer track id first, then a search on Apple (iTunes) and Deezer --- */
  const audio = new Audio();
  audio.preload = 'none';
  /* every preview plays quieter overall: the slider still runs 0–100, but full slider = MASTER_VOL of real volume */
  const MASTER_VOL = 0.4;
  let level = 0.15;                           // slider position, 0–1
  audio.volume = level * MASTER_VOL;
  let cur = -1, wantPlay = false, retried = false, lastVol = 0.15;
  const previews = new Map();                 // song -> preview URL (null if none found)
  const npPlay = $('npPlay'), seek = $('npSeek'), vol = $('npVol'), muteBtn = $('npMute');
  const fmt = (t) => { t = Math.max(0, Math.floor(t || 0)); return Math.floor(t / 60) + ':' + String(t % 60).padStart(2, '0'); };
  const fill = (r) => r.style.setProperty('--p', (r.max > r.min ? (r.value - r.min) / (r.max - r.min) * 100 : 0) + '%');
  const norm = (x) => String(x).toLowerCase().replace(/\$/g, 's').replace(/[^a-z0-9]/g, '');
  function jsonp(url, ms) {
    return new Promise((resolve, reject) => {
      const cb = 'jpCb' + Date.now() + Math.floor(Math.random() * 1e4);
      const tag = document.createElement('script');
      const done = () => { delete window[cb]; tag.remove(); clearTimeout(timer); };
      const timer = setTimeout(() => { done(); reject(new Error('timeout')); }, ms);
      window[cb] = (data) => { done(); resolve(data); };
      tag.onerror = () => { done(); reject(new Error('network')); };
      tag.src = url + '&callback=' + cb;
      document.head.append(tag);
    });
  }
  const lead = (t) => t.artist.split(',')[0].trim();      // main artist, for searching + matching (features vary by store)
  /* Finding the right 30-sec clip. Results from Apple and Deezer are pooled, then ranked:
       1. the exact title beats "title (feat. …)"
       2. the explicit (uncensored) version beats a clean edit, whichever service has it
       3. Apple's clip beats Deezer's, unless the song says source: 'deezer'
     Instrumental / karaoke / sped-up / remix versions are skipped unless the song title asks for one. */
  const ALT = /instrumental|karaoke|sped ?up|slowed|reverb|8d|acapella|a cappella|remix|tribute|cover/i;
  function bestClip(t, cands) {
    const ok = cands.filter((c) => c.url && norm(c.title).includes(norm(t.title)) && norm(c.artist).includes(norm(lead(t))) && (ALT.test(t.title) || !ALT.test(c.title)));
    const rank = (c) => (norm(c.title) === norm(t.title) ? 0 : 4) + (c.clean ? 2 : 0) + (c.from === (t.source === 'deezer' ? 'deezer' : 'apple') ? 0 : 1);
    return ok.sort((x, y) => rank(x) - rank(y))[0] || null;
  }
  async function lookupPreview(t) {
    if (t.preview) return t.preview;
    let fallback = null;
    if (t.deezer) {
      try {
        const d = await jsonp('https://api.deezer.com/track/' + t.deezer + '?output=jsonp', 7000);
        if (d && d.preview) { if (d.explicit_lyrics !== false) return d.preview; fallback = d.preview; }   // a clean edit: look for the explicit one first
      } catch (e) { /* search instead */ }
    }
    const term = encodeURIComponent(lead(t) + ' ' + t.title);
    const [it, dz] = await Promise.allSettled([
      jsonp('https://itunes.apple.com/search?media=music&entity=song&explicit=Yes&limit=25&term=' + term, 7000),
      jsonp('https://api.deezer.com/search?output=jsonp&limit=25&q=' + term, 7000)
    ]);
    const cands = [
      ...(it.status === 'fulfilled' && it.value && it.value.results || []).map((r) => ({ from: 'apple', title: r.trackName || '', artist: r.artistName || '', clean: r.trackExplicitness === 'cleaned', url: r.previewUrl })),
      ...(dz.status === 'fulfilled' && dz.value && dz.value.data || []).map((r) => ({ from: 'deezer', title: r.title || '', artist: (r.artist && r.artist.name) || '', clean: r.explicit_lyrics === false, url: r.preview }))
    ];
    const hit = bestClip(t, cands);
    return (hit && hit.url) || fallback;
  }
  async function previewFor(k) {
    const t = PL[k];
    if (previews.has(t)) return previews.get(t);
    const url = await lookupPreview(t); previews.set(t, url); return url;
  }
  function syncRows() {
    songRows.forEach((li, k) => {
      li.classList.toggle('is-current', k === cur);
      li.classList.toggle('is-playing', k === cur && !audio.paused);
      const b = li.querySelector('button');
      if (b) { const t = PL[k]; b.setAttribute('aria-label', (k === cur && !audio.paused ? 'Pause ' : 'Play ') + t.title + ' by ' + t.artist); }
    });
    npPlay.classList.toggle('playing', cur >= 0 && !audio.paused);
    npPlay.setAttribute('aria-label', !audio.paused ? 'Pause preview' : 'Play preview');
  }
  function showNowPlaying(k) {
    const t = PL[k];
    $('npCover').replaceChildren(...cover(t, k + 3).childNodes);
    $('npCover').className = 'lib-cover lib-np-cover' + (t.src ? '' : ' is-empty');
    $('npTitle').textContent = t.title; $('npArtist').textContent = t.artist;
    seek.max = 30; seek.value = 0; fill(seek); $('npCur').textContent = '0:00'; $('npDur').textContent = '0:30';
    npPlay.disabled = false; $('npPrev').disabled = false; $('npNext').disabled = false;
  }
  async function playSong(k) {
    if (k === cur) { if (audio.paused) { wantPlay = true; startAudio(); } else { wantPlay = false; audio.pause(); } return; }
    audio.pause(); cur = k; wantPlay = true; showNowPlaying(k); syncRows();
    npPlay.classList.add('loading');
    let url = null;
    try { url = await previewFor(k); } catch (e) { url = null; }
    if (cur !== k) return;                                   // they picked another song meanwhile
    npPlay.classList.remove('loading');
    if (!url) { $('npArtist').textContent = PL[k].artist + ' · preview unavailable'; wantPlay = false; syncRows(); return; }
    audio.src = url; retried = false;
    startAudio();
  }
  function startAudio() { const pr = audio.play(); if (pr && pr.catch) pr.catch(() => { wantPlay = false; syncRows(); }); }
  audio.addEventListener('play', syncRows);
  audio.addEventListener('pause', syncRows);
  function skip(dir) {                                     // next / previous playable song (placeholders are skipped)
    const n = PL.length;
    for (let j = 1; j <= n; j++) { const k = ((cur + dir * j) % n + n) % n; if (isReal(PL[k])) { if (k !== cur) playSong(k); else { audio.currentTime = 0; syncRows(); } return; } }
  }
  audio.addEventListener('ended', () => skip(1));            // roll on to the next song
  $('npNext').addEventListener('click', () => { if (cur >= 0) skip(1); });
  $('npPrev').addEventListener('click', () => {               // like a music app: restart first, then go back
    if (cur < 0) return;
    if (audio.currentTime > 3) { audio.currentTime = 0; if (audio.paused) { wantPlay = true; startAudio(); } } else skip(-1);
  });
  audio.addEventListener('error', () => {                    // Deezer links expire: fetch a fresh one once
    if (!audio.getAttribute('src') || retried || cur < 0) return;
    retried = true; previews.delete(PL[cur]); const k = cur; cur = -1; playSong(k);
  });
  audio.addEventListener('loadedmetadata', () => { if (isFinite(audio.duration)) { seek.max = audio.duration; $('npDur').textContent = fmt(audio.duration); } });
  audio.addEventListener('timeupdate', () => { if (!seek.matches(':active')) { seek.value = audio.currentTime; fill(seek); } $('npCur').textContent = fmt(audio.currentTime); });
  seek.addEventListener('input', () => { fill(seek); if (audio.src) audio.currentTime = +seek.value; });
  npPlay.addEventListener('click', () => { if (cur >= 0) playSong(cur); });

  /* volume */
  function syncVol() {
    const v = audio.muted ? 0 : level;
    vol.style.setProperty('--vf', v); vol.setAttribute('aria-valuenow', Math.round(v * 100)); vol.setAttribute('aria-valuetext', Math.round(v * 100) + ' percent');
    muteBtn.classList.toggle('muted', v === 0); muteBtn.setAttribute('aria-label', v === 0 ? 'Unmute' : 'Mute');
  }
  function setVol(pct) { const v = Math.min(100, Math.max(0, pct)) / 100; level = v; audio.volume = v * MASTER_VOL; audio.muted = v === 0; if (v > 0) lastVol = v; syncVol(); }
  const volFromX = (x) => { const r = vol.getBoundingClientRect(); return (x - r.left - 6) / (r.width - 12) * 100; };
  vol.addEventListener('pointerdown', (e) => { vol.setPointerCapture(e.pointerId); vol.classList.add('dragging'); setVol(volFromX(e.clientX)); e.preventDefault(); });
  vol.addEventListener('pointermove', (e) => { if (vol.hasPointerCapture(e.pointerId)) setVol(volFromX(e.clientX)); });
  const endDrag = (e) => { if (vol.hasPointerCapture(e.pointerId)) vol.releasePointerCapture(e.pointerId); vol.classList.remove('dragging'); };
  vol.addEventListener('pointerup', endDrag); vol.addEventListener('pointercancel', endDrag);
  vol.addEventListener('wheel', (e) => { e.preventDefault(); setVol((audio.muted ? 0 : level * 100) + (e.deltaY < 0 ? 5 : -5)); }, { passive: false });
  vol.addEventListener('keydown', (e) => {
    const step = { ArrowUp: 5, ArrowRight: 5, ArrowDown: -5, ArrowLeft: -5, PageUp: 10, PageDown: -10 }[e.key];
    if (step) { setVol((audio.muted ? 0 : level * 100) + step); e.preventDefault(); }
    else if (e.key === 'Home') { setVol(0); e.preventDefault(); } else if (e.key === 'End') { setVol(100); e.preventDefault(); }
  });
  muteBtn.addEventListener('click', () => { if (audio.muted || level === 0) { audio.muted = false; level = lastVol || 0.15; audio.volume = level * MASTER_VOL; } else audio.muted = true; syncVol(); });
  syncVol(); fill(seek);
  $('libArtistList').replaceChildren(...ARTISTS_I_LOVE.map((a, i) =>
    el('li', { class: 'lib-album lib-artist-card' }, cover(a, i + 5), el('span', { class: 'lib-name', text: a.name }), el('span', { class: 'lib-artist', text: 'Artist' }))));
  const plural = (n, w) => n + ' ' + w + (n === 1 ? '' : 's');
  $('libAlbumCount').textContent = ALBUMS_I_LOVE.length;
  $('libSongCount').textContent = MY_CLASSICS.length;
  $('libAlbums').querySelector('.lib-count').textContent = plural(ALBUMS_I_LOVE.length, 'album');

  /* Songs I Love: the tile (and the header icon inside the list) cycle through every cover,
     one every 2.2s, the new one fading in on top of the old. Both stay in step. */
  /* rotating-cover thumbs: each set cycles its own covers, all tiles in a set stay in sync */
  const uniq = (list) => [...new Set(list.map((t) => t.src).filter(Boolean))];
  const ROT_SETS = { songs: { covers: uniq(PLAYLISTS.repeat), k: 0, tiles: [] }, albums: { covers: uniq(ALBUMS_I_LOVE), k: 0, tiles: [] }, artists: { covers: uniq(ARTISTS_I_LOVE), k: 0, tiles: [] } };
  function addRotTile(tile, set = 'songs') {
    const S = ROT_SETS[set];
    if (!S.covers.length) return;
    const front = el('img', { src: S.covers[S.k], alt: '', class: 'on' }), back = el('img', { alt: '' });
    tile.classList.add('lib-rot'); tile.replaceChildren(front, back);
    S.tiles.push({ front, back });
  }
  addRotTile(lib.querySelector('[data-list="repeat"] .lib-thumb'), 'songs');
  addRotTile(lib.querySelector('[data-open="libAlbums"] .lib-thumb'), 'albums');
  addRotTile($('libAlbums').querySelector('.lib-subhead .lib-thumb'), 'albums');
  addRotTile(lib.querySelector('[data-open="libArtists"] .lib-thumb'), 'artists');
  addRotTile($('libArtists').querySelector('.lib-subhead .lib-thumb'), 'artists');
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    setInterval(() => {
      if (document.hidden || lib.classList.contains('anim-off')) return;
      Object.values(ROT_SETS).forEach((S) => {
        if (S.covers.length < 2) return;
        S.k = (S.k + 1) % S.covers.length;
        S.tiles.forEach((r) => {
          r.back.src = S.covers[S.k];
          r.back.style.zIndex = 2; r.front.style.zIndex = 1;
          r.back.classList.add('on');
          const old = r.front; setTimeout(() => old.classList.remove('on'), 750);
          [r.front, r.back] = [r.back, r.front];
        });
        new Image().src = S.covers[(S.k + 1) % S.covers.length];   // warm up the next cover
      });
    }, 2200);
  }

  /* open a playlist in the shared song view: swap the list, the header and (if it changed) reset the player */
  const NP_TITLE = $('npTitle').textContent, NP_ARTIST = $('npArtist').textContent;
  let plKey = null;
  function setPlaylist(key, rowBtn) {
    const head = $('libSongs').querySelector('.lib-subhead');
    head.querySelector('.lib-title').textContent = rowBtn.querySelector('.lib-name').textContent;
    head.querySelector('.lib-count').textContent = plural(PLAYLISTS[key].length, 'song');
    const thumb = rowBtn.querySelector('.lib-thumb'), sm = head.querySelector('.lib-thumb');
    if (thumb.classList.contains('lib-rot')) {                 // rotating covers: join the same rotation (once)
      if (!sm.classList.contains('lib-rot')) { sm.className = thumb.className + ' lib-thumb-sm'; addRotTile(sm); }
    } else { sm.className = thumb.className + ' lib-thumb-sm'; sm.innerHTML = thumb.innerHTML; }
    sm.querySelectorAll('svg').forEach((g) => { g.setAttribute('width', '16'); g.setAttribute('height', '16'); });
    if (key === plKey) return;
    plKey = key; PL = PLAYLISTS[key];
    audio.pause(); audio.removeAttribute('src'); cur = -1; wantPlay = false;
    $('npCover').replaceChildren(); $('npCover').className = 'lib-cover lib-np-cover';
    $('npTitle').textContent = NP_TITLE; $('npArtist').textContent = NP_ARTIST;
    seek.value = 0; fill(seek); $('npCur').textContent = '0:00'; $('npDur').textContent = '0:30';
    npPlay.disabled = true; $('npPrev').disabled = true; $('npNext').disabled = true; npPlay.classList.remove('loading');
    songRows = buildRows(PL);
    const nodes = [...songRows];
    const divider = (label, n) => el('li', { class: 'lib-divider', role: 'presentation' }, el('span', { class: 'lib-divider-label', text: label }), el('span', { class: 'lib-divider-count mono', text: plural(n, 'song') }));
    if (key === 'repeat') {
      nodes.unshift(divider('My Classics', MY_CLASSICS.length));
    }
    $('libSongList').replaceChildren(...nodes); $('libSongList').scrollTop = 0;
    syncRows();
  }
  $('libArtistCount').textContent = ARTISTS_I_LOVE.length;
  $('libArtists').querySelector('.lib-count').textContent = plural(ARTISTS_I_LOVE.length, 'artist');

  /* side-scrolling lists: one small dot per "page", the current one stretches into a pill */
  const scrollers = [...lib.querySelectorAll('.lib-dots')].map((dots) => {
    const list = $(dots.dataset.for);
    const y = dots.dataset.axis === 'y';                       // songs scroll down, albums + artists scroll sideways
    const update = () => {
      const w = y ? list.clientHeight : list.clientWidth; if (!w) return;
      const full = y ? list.scrollHeight : list.scrollWidth, pos = y ? list.scrollTop : list.scrollLeft;
      const pages = Math.max(1, y ? Math.ceil(full / w - 0.05) : Math.round(full / w));
      const at = pos >= full - w - 2 ? pages - 1 : Math.min(pages - 1, Math.round(pos / w));
      if (dots.children.length !== pages) {
        dots.replaceChildren(...Array.from({ length: pages }, (_, k) => el('button', { type: 'button', tabindex: '-1', onclick: () => list.scrollTo({ [y ? 'top' : 'left']: k * w, behavior: 'smooth' }) })));
      }
      dots.hidden = pages < 2;
      [...dots.children].forEach((d, k) => d.classList.toggle('on', k === at));
    };
    let q = false;
    const onFrame = () => { if (q) return; q = true; requestAnimationFrame(() => { q = false; update(); }); };
    list.addEventListener('scroll', onFrame, { passive: true });
    window.addEventListener('resize', onFrame, { passive: true });
    return update;
  });
  const refreshDots = () => requestAnimationFrame(() => scrollers.forEach((u) => u()));

  const views = [...lib.querySelectorAll('.lib-view')];
  let opener = null;
  function showView(id, dir) {
    views.forEach((v) => { const on = v.id === id; v.hidden = !on; v.classList.toggle('is-on', on); v.classList.remove('from-right', 'from-left'); });
    const v = $(id); void v.offsetWidth; v.classList.add(dir === 'back' ? 'from-left' : 'from-right');
    refreshDots();
  }
  lib.querySelectorAll('[data-open]').forEach((b) => b.addEventListener('click', () => {
    opener = b; if (b.dataset.list) setPlaylist(b.dataset.list, b); showView(b.dataset.open, 'in'); $(b.dataset.open).querySelector('.lib-back').focus({ preventScroll: true });
  }));
  lib.querySelectorAll('[data-back]').forEach((b) => b.addEventListener('click', () => {
    audio.pause();
    showView('libHome', 'back'); if (opener) opener.focus({ preventScroll: true });
  }));
  lib.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !$('libHome').classList.contains('is-on')) { audio.pause(); showView('libHome', 'back'); if (opener) opener.focus({ preventScroll: true }); } });
  }

  /* ---------- hero film frame: leans toward the pointer, with a soft glare ---------- */
  const calmMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const filmHero = $('filmHero'), filmTilt = $('filmTilt');
  if (filmHero && filmTilt && !calmMotion && window.matchMedia('(hover: hover)').matches) {
    let tiltQ = null;
    filmHero.addEventListener('pointermove', (e) => {
      if (tiltQ) { tiltQ = e; return; }
      tiltQ = e;
      requestAnimationFrame(() => { const ev = tiltQ; tiltQ = null; tiltTo(ev); });
    });
    const tiltTo = (e) => {
      const r = filmTilt.getBoundingClientRect();
      const x = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
      const y = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
      filmTilt.style.setProperty('--ry', ((x - 0.5) * 12).toFixed(2) + 'deg');
      filmTilt.style.setProperty('--rx', ((0.5 - y) * 10).toFixed(2) + 'deg');
      filmTilt.style.setProperty('--gx', (x * 100).toFixed(1) + '%');
      filmTilt.style.setProperty('--gy', (y * 100).toFixed(1) + '%');
    };
    filmHero.addEventListener('pointerleave', () => {
      filmTilt.style.removeProperty('--rx');
      filmTilt.style.removeProperty('--ry');
    });
  }

  /* ---------- fun facts + skill cards rise in, one after another, as they scroll into view ---------- */
  const revealEls = [...document.querySelectorAll('.reveal')];
  if (revealEls.length && 'IntersectionObserver' in window && !calmMotion) {
    document.documentElement.classList.add('js-reveal');
    // cards that come into view together rise one after another; a lone card rises right away
    const io = new IntersectionObserver((entries) => entries.filter((en) => en.isIntersecting).forEach((en, i) => {
      en.target.style.setProperty('--d', (i * 70) + 'ms');
      en.target.classList.add('in');
      io.unobserve(en.target);
    }), { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    revealEls.forEach((r) => io.observe(r));
  }

  renderPhoto();
  }


  /* song titles + artist names that don't fit: glide left-right (Spotify-style) instead of cutting off with "…" */
  const MQ_OFF = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const mqFit = (n) => {
    let inn = n.firstElementChild;
    if (!inn || !inn.classList.contains('mq-in') || n.childNodes.length !== 1) {    // text was (re)set → re-wrap it
      inn = el('span', { class: 'mq-in', text: n.textContent }); n.replaceChildren(inn);
    }
    if (!n.clientWidth) return;                                  // hidden view: measured again once it shows
    const over = inn.scrollWidth - n.clientWidth;
    n.classList.remove('mq-on');
    if (over > 1 && !MQ_OFF) {
      n.style.setProperty('--mq-d', -(over + 2) + 'px');
      n.style.setProperty('--mq-t', Math.max(3, over / 22 + 2).toFixed(2) + 's');
      void n.offsetWidth; n.classList.add('mq-on');                // restart from the start
    }
  };
  const mqRO = new ResizeObserver((es) => es.forEach((e) => mqFit(e.target)));
  const mqSeen = new WeakSet();
  const mqScan = (root) => root.querySelectorAll('.lib-artist, .lib-name').forEach((n) => {
    if (mqSeen.has(n)) return; mqSeen.add(n); mqFit(n); mqRO.observe(n);
    new MutationObserver(() => mqFit(n)).observe(n, { childList: true, characterData: true, subtree: true });
  });
  const mqRoot = $('libHome') && $('libHome').parentElement;     // music card is on the About page only
  if (mqRoot) {
    mqScan(mqRoot);
    new MutationObserver(() => mqScan(mqRoot)).observe(mqRoot, { childList: true, subtree: true });
  }


  /* ---------- snowboard card: a rider carves an S down the slope toward you, hits the kicker, spins a 360 with a grab, lands ----------
     Drawn on a canvas over the SVG scenery. The run happens on the ground plane and is projected with simple perspective,
     so the board foreshortens as it points down the hill, the rider leans into each turn and shows front (heelside) or
     back (toeside), snow sprays off the tail on hard edges, and a track is left in the snow. */
  const snowCanvas = document.querySelector('.sn-canvas');
  if (snowCanvas) (function snowboard() {
    const ctx = snowCanvas.getContext('2d');
    const stage = snowCanvas.parentElement;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const PURPLE = '#7E6E91', PURPLE_HI = '#A996C2', JACKET = '#1C1C20', PANTS = '#0E0E10', HELMET = '#111114', GOGGLE = '#D6D6DB', SKIN = '#F6D2BF';
    const LOOP = 5.6, CARVE = 3.2, APPROACH = 3.55, LAND = 4.55;   // seconds
    const R = 40, A = 52, Q = 0.34;                                  // depth units → lateral units, turn width, ground squash
    const ease = (x) => x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
    const lerp = (a, b, t) => a + (b - a) * t;
    const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
    let W = 0, H = 0, k = 1, ox = 0, oy = 0, dpr = 1;
    function size() {
      const r = stage.getBoundingClientRect(); dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      W = r.width; H = r.height; snowCanvas.width = Math.round(W * dpr); snowCanvas.height = Math.round(H * dpr);
      k = Math.max(W / 200, H / 136); ox = (W - 200 * k) / 2; oy = (H - 136 * k) / 2;   // same "slice" fit as the SVG
    }
    const proj = (u, z) => ({ x: 100 + (u * 1.1) / z, y: 20 + 92 / z, s: 1.15 / z });

    // where the rider is on the ground at time t: lateral u, depth z, height h, extra spin
    function state(t) {
      if (t < CARVE) {                                   // three linked turns: right, left, right
        const p = t / CARVE;
        const z = lerp(4.2, 1.45, Math.pow(p, 1.25));      // picks up speed as it comes down
        return { u: A * Math.sin(Math.PI * 3 * p) * Math.min(1, p * 5), z, h: 0, spin: 0 };
      }
      if (t < APPROACH) {                                // line up straight at the kicker
        const p = (t - CARVE) / (APPROACH - CARVE);
        return { u: -(A * 3 * Math.PI / CARVE) * (APPROACH - CARVE) / Math.PI * Math.sin(Math.PI * p), z: lerp(1.45, 1.2, p), h: 0, spin: 0 };   // last little check turn, then straight
      }
      if (t < LAND) {                                    // air: 360 spin with a grab
        const p = (t - APPROACH) / (LAND - APPROACH);
        return { u: lerp(0, 6, p), z: lerp(1.2, 1.02, p), h: 34 * 4 * p * (1 - p) + 3 * (1 - p), spin: ease(p) * Math.PI * 2, air: p };
      }
      const p = (t - LAND) / (LOOP - LAND);              // ride out toward the bottom right
      return { u: lerp(6, 64, ease(p)), z: lerp(1.02, 0.7, p), h: 0, spin: 0 };
    }

    // background sparkle: twinkling stars and falling snow (drawn here instead of animating SVG nodes, which is much cheaper)
    const STARS = [[14, 10, .6], [44, 20, .5], [78, 6, .7], [128, 12, .5], [168, 8, .6], [190, 22, .45], [52, 16, .4], [110, 24, .45]];
    const FLAKES = Array.from({ length: 12 }, (_, i) => ({ x: (i * 37) % 210, y: (i * 53) % 140, r: .6 + (i % 4) * .18, v: 26 + (i % 5) * 6 }));
    let track = [], parts = [], last = null, prevPhi = 0, jolt = 0, landed = false, t0 = performance.now(), raf = 0, running = false;
    function heading(t) {                               // direction of travel on the ground (0 = straight down the hill toward you)
      const a = state(Math.max(0, t - 0.02)), b = state(t + 0.02);
      return Math.atan2(b.u - a.u, -(b.z - a.z) * R);
    }

    function drawRider(x, y, s, phi, lean, air, grab) {
      ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.rotate(lean);
      const bx = Math.sin(phi), by = Math.cos(phi) * Q;   // board axis on screen: long when crossing, short when pointing at you
      const L = 21;
      const front = Math.sin(phi) >= 0;                  // regular stance: heading right = chest to camera (heelside)
      const crouch = 2 + grab * 4;
      const hip = { x: 0, y: -9 + crouch }, sh = { x: 0, y: -17 + crouch * 0.8 }, head = { x: 0, y: -21.2 + crouch * 0.8 };
      const f1 = { x: -bx * L * 0.22, y: -by * L * 0.22 - 1 }, f2 = { x: bx * L * 0.22, y: by * L * 0.22 - 1 };
      // board (draw base edge first for thickness)
      ctx.lineCap = 'round';
      ctx.strokeStyle = '#1F1B2B'; ctx.lineWidth = 4.2;
      ctx.beginPath(); ctx.moveTo(-bx * L / 2, -by * L / 2); ctx.lineTo(bx * L / 2, by * L / 2); ctx.stroke();
      ctx.strokeStyle = PURPLE; ctx.lineWidth = 3.2;
      ctx.beginPath(); ctx.moveTo(-bx * L / 2, -by * L / 2); ctx.lineTo(bx * L / 2, by * L / 2); ctx.stroke();
      ctx.strokeStyle = PURPLE_HI; ctx.lineWidth = 0.9;
      ctx.beginPath(); ctx.moveTo(-bx * L * 0.36, -by * L * 0.36 - 0.6); ctx.lineTo(bx * L * 0.3, by * L * 0.3 - 0.6); ctx.stroke();
      // legs, knees pushed out
      ctx.strokeStyle = PANTS; ctx.lineWidth = 3.4; ctx.lineJoin = 'round';
      [[f1, -1], [f2, 1]].forEach(([f, sgn]) => {
        const kx = (f.x + hip.x) / 2 + sgn * (2.2 + grab * 2) * (Math.abs(bx) > 0.3 ? Math.sign(bx) || 1 : 1), ky = (f.y + hip.y) / 2 - 0.5;
        ctx.beginPath(); ctx.moveTo(f.x, f.y); ctx.lineTo(kx, ky); ctx.lineTo(hip.x + sgn * 1.2, hip.y); ctx.stroke();
      });
      // torso
      ctx.strokeStyle = JACKET; ctx.lineWidth = 6.4;
      ctx.beginPath(); ctx.moveTo(hip.x, hip.y - 1); ctx.lineTo(sh.x, sh.y); ctx.stroke();
      // arms out along the board; on a grab one hand reaches down to the edge
      ctx.lineWidth = 2.6;
      const ax = bx * 8 || 8, ay = by * 8;
      ctx.beginPath(); ctx.moveTo(sh.x, sh.y + 1);
      if (grab > 0.3) ctx.lineTo(f2.x * 0.6, f2.y - 2); else ctx.lineTo(sh.x + ax, sh.y + 3 + ay * 0.3);
      ctx.moveTo(sh.x, sh.y + 1); ctx.lineTo(sh.x - ax, sh.y + 2.4 - ay * 0.3); ctx.stroke();
      // scarf trailing behind
      ctx.strokeStyle = PURPLE; ctx.lineWidth = 1.8;
      const wave = Math.sin(performance.now() / 90) * 1.2;
      ctx.beginPath(); ctx.moveTo(sh.x, sh.y - 1); ctx.quadraticCurveTo(sh.x - bx * 5, sh.y - 2 + wave, sh.x - bx * 9 - 1, sh.y - 1 - wave); ctx.stroke();
      // head: helmet + goggles (from behind you only see the strap)
      ctx.fillStyle = front ? SKIN : HELMET;
      ctx.beginPath(); ctx.arc(head.x, head.y, 3.3, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = HELMET;
      ctx.beginPath(); ctx.arc(head.x, head.y - 0.2, 3.4, Math.PI, 0); ctx.fill();
      if (front) { ctx.fillStyle = GOGGLE; ctx.beginPath(); ctx.roundRect ? ctx.roundRect(head.x - 3, head.y - 0.9, 6, 2.1, 1) : ctx.rect(head.x - 3, head.y - 0.9, 6, 2.1); ctx.fill(); }
      else { ctx.strokeStyle = GOGGLE; ctx.lineWidth = 0.8; ctx.beginPath(); ctx.moveTo(head.x - 3.3, head.y); ctx.lineTo(head.x + 3.3, head.y); ctx.stroke(); }
      ctx.restore();
    }

    function frame(now) {
      raf = 0;
      let t = ((now - t0) / 1000) % LOOP;
      if (last !== null && t < last) { track = []; parts = []; landed = false; }   // new run
      const dt = last === null ? 0 : Math.max(0, t - last); last = t;
      const st = state(t), phiTravel = heading(t);
      const ground = proj(st.u, st.z);
      // lean into the turn: how fast the heading is changing
      const dphi = dt > 0 ? (phiTravel - prevPhi) / dt : 0; prevPhi = phiTravel;
      const lean = st.h > 0 ? Math.sin((st.air || 0) * Math.PI) * -0.25 : clamp(dphi * 0.22, -0.6, 0.6);
      const phi = phiTravel + st.spin;
      if (st.h === 0) {
        track.push({ u: st.u, z: st.z, a: 1 });
      } else if (track.length && track[track.length - 1]) track.push(null);   // gap in the track while airborne
      if (st.h === 0) {
        // spray off the tail on a hard edge
        const hard = Math.abs(dphi);
        if (dt > 0 && hard > 0.9) {
          const n = Math.min(6, Math.round(hard * 2));
          for (let i = 0; i < n; i++) {
            const out = -Math.sign(dphi);
            parts.push({ x: ground.x - Math.sin(phiTravel) * 8 * ground.s, y: ground.y, vx: (out * (18 + Math.random() * 22) - Math.sin(phiTravel) * 10) * ground.s, vy: -(14 + Math.random() * 20) * ground.s, r: (0.35 + Math.random() * 0.8) * ground.s * 1.4, life: 0, max: 0.45 + Math.random() * 0.3 });
          }
        }
      }
      if (!landed && t >= LAND) {                        // landing burst + a little camera jolt
        landed = true; jolt = 1;
        for (let i = 0; i < 40; i++) { const ang = Math.PI + Math.random() * Math.PI; const sp = 20 + Math.random() * 45; parts.push({ x: ground.x, y: ground.y, vx: Math.cos(ang) * sp * ground.s, vy: Math.sin(ang) * sp * 0.7 * ground.s, r: (0.4 + Math.random() * 1.1) * ground.s * 1.3, life: 0, max: 0.5 + Math.random() * 0.4 }); }
      }
      jolt = Math.max(0, jolt - dt * 5);
      stage.style.setProperty('--jolt', (Math.sin(jolt * 14) * jolt * 2.2).toFixed(2) + 'px');

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H);
      ctx.setTransform(dpr * k, 0, 0, dpr * k, dpr * ox, dpr * oy);
      const sec = now / 1000;
      STARS.forEach(([x, y, r], i) => { ctx.fillStyle = 'rgba(255,255,255,' + (0.55 + 0.4 * Math.sin(sec * 2.4 + i * 1.7)).toFixed(3) + ')'; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill(); });
      // track in the snow (wider as it gets closer); fades out near the end of the loop
      const fade = t > LOOP - 0.6 ? (LOOP - t) / 0.6 : 1;
      ctx.lineCap = 'round'; ctx.strokeStyle = 'rgba(150,170,210,' + (0.75 * fade).toFixed(3) + ')';
      for (let i = 1; i < track.length; i++) {
        if (!track[i] || !track[i - 1]) continue;
        const a = proj(track[i - 1].u, track[i - 1].z), b = proj(track[i].u, track[i].z);
        ctx.lineWidth = 2.6 * b.s; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      }
      // shadow under the rider while in the air
      if (st.h > 0) {
        ctx.fillStyle = 'rgba(120,138,180,' + (0.45 - st.h / 120).toFixed(3) + ')';
        ctx.beginPath(); ctx.ellipse(ground.x, ground.y, 11 * ground.s, 2.6 * ground.s, 0, 0, Math.PI * 2); ctx.fill();
      }
      // particles
      parts = parts.filter((p) => (p.life += dt) < p.max);
      parts.forEach((p) => { p.vy += 70 * dt * 0.6; p.x += p.vx * dt; p.y += p.vy * dt; });
      const drawParts = () => parts.forEach((p) => { const f = 1 - p.life / p.max; ctx.fillStyle = 'rgba(176,194,228,' + (0.85 * f).toFixed(3) + ')'; ctx.beginPath(); ctx.arc(p.x, p.y, p.r * (0.6 + 0.4 * f), 0, Math.PI * 2); ctx.fill(); });
      drawParts();
      const grab = st.air ? clamp(Math.sin(st.air * Math.PI) * 1.6, 0, 1) : 0;
      drawRider(ground.x, ground.y - st.h * ground.s, ground.s, phi, lean, st.air || 0, grab);
      ctx.fillStyle = 'rgba(255,255,255,.85)';
      FLAKES.forEach((f) => { const y = (f.y + sec * f.v) % 150 - 8, x = (f.x - sec * f.v * 0.09 + 220) % 220 - 10; ctx.beginPath(); ctx.arc(x, y, f.r, 0, Math.PI * 2); ctx.fill(); });
      if (running) raf = requestAnimationFrame(frame);
    }
    function start() { if (running) return; running = true; last = null; raf = requestAnimationFrame(frame); }
    function stop() { running = false; cancelAnimationFrame(raf); }
    size();
    if ('ResizeObserver' in window) new ResizeObserver(() => { size(); if (!running) { last = null; frame(t0 + 3.95 * 1000); } }).observe(stage);
    if (reduced) { last = null; frame(t0 + 3.95 * 1000); return; }   // still frame: mid-spin over the kicker
    if ('IntersectionObserver' in window) new IntersectionObserver((es) => es.forEach((e) => (e.isIntersecting ? start() : stop())), { rootMargin: '120px 0px' }).observe(stage);
    else start();
  })();

  /* smoothness: looping animations pause while they're scrolled out of view (they look the same when visible) */
  if ('IntersectionObserver' in window) {
    const offIO = new IntersectionObserver((es) => es.forEach((e) => e.target.classList.toggle('anim-off', !e.isIntersecting)), { rootMargin: '120px 0px' });
    document.querySelectorAll('section, .site-footer, .ff-card, .proj-soon, .exp-list, .pola-nav, .lib-card, .film-hero').forEach((n) => offIO.observe(n));
  }
  /* ---------- music suggestions: + button blooms into a panel inside the music card ---------- */
  const sgToggle = document.getElementById('sgToggle');
  const sgPanel = document.getElementById('sgPanel');
  if (sgToggle && sgPanel) {
    const sgCard = sgPanel.closest('.lib-card');
    const sgCopy = document.getElementById('sgCopy');
    const sgSend = document.getElementById('sgSend');
    const EMAIL = 'parkjustin2006@gmail.com';
    let sgTimer = 0;
    const isOpen = () => sgToggle.getAttribute('aria-expanded') === 'true';
    const setOpen = (open) => {
      clearTimeout(sgTimer);
      sgToggle.setAttribute('aria-expanded', String(open));
      sgToggle.setAttribute('aria-label', open ? 'Close music suggestions' : 'Have any music suggestions?');
      if (open) {
        sgPanel.hidden = false;
        void sgPanel.offsetWidth;                       // let the closed state paint first so the bloom animates
        sgPanel.classList.add('is-open');
        sgCard.querySelectorAll('.lib-view').forEach((v) => v.setAttribute('inert', ''));
        sgTimer = setTimeout(() => sgSend.focus({ preventScroll: true }), 450);
      } else {
        sgPanel.classList.remove('is-open');
        sgCard.querySelectorAll('.lib-view').forEach((v) => v.removeAttribute('inert'));
        const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
        sgTimer = setTimeout(() => { if (!isOpen()) sgPanel.hidden = true; }, reduced ? 0 : 620);
      }
    };
    sgToggle.addEventListener('click', () => setOpen(!isOpen()));
    // first time the card comes into view: the + pulses twice to say "tap me", then stays still for good
    if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const pingIO = new IntersectionObserver((es) => {
        if (es.some((e) => e.isIntersecting)) { pingIO.disconnect(); sgToggle.classList.add('sg-ping'); }
      }, { threshold: 0.6 });
      pingIO.observe(sgCard);
      const stopPing = () => sgToggle.classList.remove('sg-ping');   // once it's done (or they've found the button), it never replays
      sgToggle.addEventListener('animationend', (e) => { if (e.animationName === 'sgPing') stopPing(); });
      sgToggle.addEventListener('pointerenter', stopPing);
      sgToggle.addEventListener('click', stopPing);
    }
    sgCard.addEventListener('keydown', (e) => { if (e.key === 'Escape' && isOpen()) { setOpen(false); sgToggle.focus(); } });
    document.addEventListener('pointerdown', (e) => { if (isOpen() && !sgCard.contains(e.target)) setOpen(false); });

    let copyTimer = 0;
    sgCopy.addEventListener('click', async () => {
      let ok = false;
      try { await navigator.clipboard.writeText(EMAIL); ok = true; } catch (err) {
        try {                                           // older browsers / file:// pages
          const r = document.createRange(); r.selectNodeContents(sgPanel.querySelector('.sg-addr'));
          const sel = getSelection(); sel.removeAllRanges(); sel.addRange(r); ok = document.execCommand('copy'); sel.removeAllRanges();
        } catch (e2) { /* nothing else to try */ }
      }
      const tip = sgCopy.querySelector('.sg-copied');
      tip.textContent = ok ? 'Copied!' : 'Press ⌘C to copy';
      sgCopy.classList.add('is-copied');
      clearTimeout(copyTimer);
      copyTimer = setTimeout(() => { sgCopy.classList.remove('is-copied'); setTimeout(() => { tip.textContent = ''; }, 250); }, 1600);
    });
  }

})();

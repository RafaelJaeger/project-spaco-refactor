import { useEffect, useRef, useState } from "react";

/* ═══════════════════════════════════════════════════════════════
   DESIGN TOKENS
═══════════════════════════════════════════════════════════════ */
// eslint-disable-next-line react-refresh/only-export-components
export const C = {
  dark:   "#1C2B1A",
  forest: "#3D5C39",
  sage:   "#7A9E74",
  gold:   "#C8A97E",
  cream:  "#F6F0E8",
  white:  "#FFFFFF",
};

// eslint-disable-next-line react-refresh/only-export-components
export const F = {
  display: "'Cormorant Garamond', Georgia, serif",
  body:    "'Jost', system-ui, sans-serif",
};

/* ═══════════════════════════════════════════════════════════════
   HOOKS
═══════════════════════════════════════════════════════════════ */
// eslint-disable-next-line react-refresh/only-export-components
export function useFadeIn(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ═══════════════════════════════════════════════════════════════
   GLOBAL STYLES
═══════════════════════════════════════════════════════════════ */
export const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap');

    *, *::before, *::after { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body { margin: 0; padding: 0; background: #fff; }
    a { text-decoration: none; }
    button { font-family: inherit; }

    /* ── FADE IN ── */
    .fi {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1);
    }
    .fi.v  { opacity: 1; transform: translateY(0); }
    .d1 { transition-delay: .10s; }
    .d2 { transition-delay: .18s; }
    .d3 { transition-delay: .26s; }
    .d4 { transition-delay: .34s; }
    .d5 { transition-delay: .42s; }
    .d6 { transition-delay: .50s; }

    /* ── NAV ── */
    .nav-link {
      font-family: 'Jost', sans-serif;
      font-size: 11.5px; font-weight: 400;
      letter-spacing: .10em; text-transform: uppercase;
      color: rgba(255,255,255,.8);
      cursor: pointer; background: none; border: none; padding: 0;
      transition: color .2s;
    }
    .nav-link:hover { color: #C8A97E; }

    /* ── BUTTONS ── */
    .btn-gold {
      background: #C8A97E; color: #1C2B1A;
      font-family: 'Jost', sans-serif;
      font-size: 12px; font-weight: 600;
      letter-spacing: .09em; text-transform: uppercase;
      padding: 13px 26px; border: none; border-radius: 2px;
      cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
      transition: all .25s ease;
    }
    .btn-gold:hover { background: #b8956a; transform: translateY(-1px); box-shadow: 0 8px 24px rgba(200,169,126,.35); }

    .btn-ghost {
      background: transparent; color: #fff;
      font-family: 'Jost', sans-serif;
      font-size: 12px; font-weight: 400;
      letter-spacing: .09em; text-transform: uppercase;
      padding: 12px 26px; border: 1px solid rgba(255,255,255,.35); border-radius: 2px;
      cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
      transition: all .25s ease;
    }
    .btn-ghost:hover { border-color: #C8A97E; color: #C8A97E; }

    .btn-dark {
      background: #1C2B1A; color: #F6F0E8;
      font-family: 'Jost', sans-serif;
      font-size: 12px; font-weight: 600;
      letter-spacing: .09em; text-transform: uppercase;
      padding: 13px 26px; border: none; border-radius: 2px;
      cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
      transition: all .25s ease;
    }
    .btn-dark:hover { background: #3D5C39; }

    .btn-outline-dark {
      background: transparent; color: #1C2B1A;
      font-family: 'Jost', sans-serif;
      font-size: 12px; font-weight: 500;
      letter-spacing: .09em; text-transform: uppercase;
      padding: 12px 26px; border: 1px solid #1C2B1A; border-radius: 2px;
      cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
      transition: all .25s ease;
    }
    .btn-outline-dark:hover { background: #1C2B1A; color: #F6F0E8; }

    /* ── CARDS ── */
    .card-lift { transition: transform .3s ease, box-shadow .3s ease; }
    .card-lift:hover { transform: translateY(-5px); box-shadow: 0 20px 48px rgba(28,43,26,.14) !important; }

    /* ── GALLERY ── */
    .gimg { overflow: hidden; position: relative; }
    .gimg img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .65s cubic-bezier(.16,1,.3,1); }
    .gimg:hover img { transform: scale(1.06); }
    .gcap {
      position: absolute; inset: 0;
      background: linear-gradient(to top, rgba(28,43,26,.8) 0%, transparent 55%);
      display: flex; align-items: flex-end; padding: 20px;
      opacity: 0; transition: opacity .35s ease;
    }
    .gimg:hover .gcap { opacity: 1; }

    .lightbox {
      position: fixed; inset: 0; z-index: 1000;
      display: flex; align-items: center; justify-content: center;
      background: rgba(0,0,0,.75);
      padding: 24px;
    }
    .lightbox-inner {
      position: relative;
      max-width: 1000px; width: 100%; max-height: 100%;
      background: #1c2b1a;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 32px 80px rgba(0,0,0,.5);
      display: flex; flex-direction: column; align-items: center;
    }
    .lightbox img {
      width: 100%; max-height: 75vh; object-fit: contain;
      border-radius: 8px;
      margin-bottom: 18px;
      background: #111;
    }
    .lightbox-caption {
      color: #f6f0e8;
      font-family: 'Jost', sans-serif;
      font-size: 14px; line-height: 1.6;
      text-align: center;
      margin-bottom: 18px;
      max-width: 92%;
    }
    .lightbox-controls {
      display: flex; gap: 12px;
    }
    .lightbox-btn,
    .lightbox-close {
      border: none; cursor: pointer;
      background: rgba(255,255,255,.1); color: #fff;
      width: 48px; height: 48px; border-radius: 999px;
      display: inline-flex; align-items: center; justify-content: center;
      font-size: 24px; transition: transform .2s ease, background .2s ease;
    }
    .lightbox-btn:hover,
    .lightbox-close:hover { background: rgba(255,255,255,.2); transform: translateY(-1px); }
    .lightbox-close {
      position: absolute; top: 18px; right: 18px;
      width: 36px; height: 36px; font-size: 22px;
      background: rgba(255,255,255,.12);
    }

    /* ── TABS ── */
    .tab-btn {
      font-family: 'Jost', sans-serif;
      font-size: 12px; font-weight: 500;
      letter-spacing: .08em; text-transform: uppercase;
      padding: 12px 24px; background: transparent;
      border: none; border-bottom: 2px solid transparent;
      cursor: pointer; color: #7A9E74; transition: all .2s;
    }
    .tab-btn.active { border-bottom-color: #C8A97E; color: #1C2B1A; font-weight: 600; }

    /* ── TESTIMONIAL DOTS ── */
    .t-dot {
      width: 8px; height: 8px; border-radius: 4px;
      border: none; cursor: pointer;
      background: rgba(28,43,26,.2); padding: 0;
      transition: all .3s ease;
    }
    .t-dot.active { background: #C8A97E; width: 22px; }

    /* ── EYEBROW ── */
    .eyebrow {
      font-family: 'Jost', sans-serif;
      font-size: 11px; font-weight: 500;
      letter-spacing: .14em; text-transform: uppercase; color: #7A9E74;
      display: flex; align-items: center; gap: 10px;
    }
    .eyebrow::before {
      content: ''; display: inline-block;
      width: 28px; height: 1px; background: currentColor;
    }

    /* ── SECTION TITLE ── */
    .sec-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(32px, 4.5vw, 52px);
      font-weight: 300; color: #1C2B1A;
      line-height: 1.1; letter-spacing: -.01em;
    }
    .sec-title em { font-style: italic; color: #3D5C39; }

    /* ── PILL ── */
    .pill {
      font-family: 'Jost', sans-serif;
      font-size: 10.5px; letter-spacing: .06em;
      color: rgba(255,255,255,.6);
      border: 0.5px solid rgba(255,255,255,.25);
      border-radius: 99px; padding: 4px 12px; display: inline-block;
    }

    /* ── WHATSAPP FLOAT ── */
    .wa-float {
      position: fixed; bottom: 24px; right: 24px; z-index: 100;
      background: #25D366; color: #fff;
      padding: 13px 22px; border-radius: 50px;
      display: flex; align-items: center; gap: 9px;
      font-family: 'Jost', sans-serif;
      font-size: 13px; font-weight: 500;
      cursor: pointer; border: none;
      box-shadow: 0 8px 24px rgba(37,211,102,.32);
      transition: all .3s ease;
    }
    .wa-float:hover { transform: translateY(-3px); box-shadow: 0 14px 32px rgba(37,211,102,.45); }

    /* ── RESPONSIVE HELPERS ── */
    @media (max-width: 768px) {
      .hide-mob { display: none !important; }
      .show-mob { display: flex !important; }
      .grid-2col { grid-template-columns: 1fr !important; gap: 40px !important; }
      .grid-3col { grid-template-columns: 1fr !important; }
      .sec-pad   { padding-left: 20px !important; padding-right: 20px !important; }
      .hero-text { padding-left: 20px !important; }
    }
    @media (min-width: 769px) {
      .show-mob { display: none !important; }
    }
  `}</style>
);
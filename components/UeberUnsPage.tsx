"use client";

/**
 * PERSPEKTIVE AUSLAND — ÜBER UNS PAGE
 * Full rewrite per brief: "Wir beraten zu Wegen, die wir selbst gegangen sind."
 * Voice: "ich" in biographical sections (02-05), "wir" in corporate sections (01, 06-09)
 * No em-dashes, no en-dashes. No "Diebstahl", "Gefängniswärter", "Schuldkultur".
 * Design: Marineblau #0B1C2D | Elfenbein #FAF7F2 | Mattgold #C9A84C
 */

import { useEffect, useRef, useState } from "react";

const IMAGES = {
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663489425504/SEVjg9oq8Re7WUYduAWprk/hero_world_map_dark-59qpgCDFCoYYWebeA8gpNW.webp",
  freiburg: "https://d2xsxph8kpxj0f.cloudfront.net/310519663489425504/SEVjg9oq8Re7WUYduAWprk/freiburg_black_forest-TfcrE6gWe9jE8txXS3wVVv.webp",
  london: "https://d2xsxph8kpxj0f.cloudfront.net/310519663489425504/SEVjg9oq8Re7WUYduAWprk/london_city_dusk-T7gtmCUFjrgCTkzN4QWCGb.webp",
  texas: "https://d2xsxph8kpxj0f.cloudfront.net/310519663489425504/SEVjg9oq8Re7WUYduAWprk/texas_ranch_sunrise-HQVq2TYPfGwUyWudb7Z7H8.webp",
  dubai: "https://d2xsxph8kpxj0f.cloudfront.net/310519663489425504/SEVjg9oq8Re7WUYduAWprk/dubai_singapore_skyline-VAaxKDsd9J2Tiji5gCxNFA.webp",
  portrait: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663489425504/pVYvRgqKPwqXpnRP.webp",
};

const RESPONSIVE_CSS = `
  :root { --gold: #C9A84C; --navy: #0B1C2D; --ivory: #FAF7F2; }
  *, *::before, *::after { box-sizing: border-box; }
  html { overflow-x: hidden; max-width: 100%; }
  body { margin: 0; padding: 0; background: var(--ivory); overflow-x: hidden; max-width: 100%; -webkit-font-smoothing: antialiased; }

  /* HEADER */
  .pa-header { background: var(--navy); padding: 0 1.5rem; height: 64px; display: flex; align-items: center; border-bottom: 1px solid rgba(201,168,76,0.25); width: 100%; }
  .pa-header-inner { max-width: 1280px; margin: 0 auto; width: 100%; display: flex; align-items: center; }
  .pa-header-logo { display: flex; align-items: center; text-decoration: none; flex-shrink: 0; }
  .pa-header-logo img { height: 34px; width: auto; display: block; filter: brightness(0) invert(1); }
  .pa-header-divider { width: 1px; height: 26px; background: rgba(201,168,76,0.5); margin: 0 1.25rem; flex-shrink: 0; }
  .pa-header-label { font-family: 'Montserrat', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); white-space: nowrap; }

  /* HERO */
  .pa-hero { position: relative; height: 100vh; min-height: 560px; overflow: hidden; display: flex; align-items: center; width: 100%; }
  .pa-hero-bg { position: absolute; inset: 0; background-size: cover; background-position: center; will-change: transform; }
  .pa-hero-overlay { position: absolute; inset: 0; background: linear-gradient(to right, rgba(11,28,45,0.92) 50%, rgba(11,28,45,0.35) 100%); }
  .pa-hero-content { position: relative; z-index: 2; width: 100%; max-width: 1280px; margin: 0 auto; padding: 2rem 1.5rem; }
  .pa-hero-eyebrow { font-family: 'Montserrat', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold); margin-bottom: 1.25rem; }
  .pa-hero-h1 { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem, 5vw, 4rem); font-weight: 700; color: var(--ivory); line-height: 1.1; margin: 0 0 1.25rem; max-width: 640px; }
  .pa-hero-subline { font-family: 'Crimson Pro', serif; font-size: clamp(1.05rem, 2vw, 1.25rem); color: rgba(250,247,242,0.85); line-height: 1.7; margin: 0 0 1rem; max-width: 560px; font-style: italic; }
  .pa-hero-brand { font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.15em; color: rgba(250,247,242,0.5); text-transform: uppercase; margin-bottom: 2rem; }
  .pa-hero-btns { display: flex; gap: 0.75rem; flex-wrap: wrap; }
  .pa-btn-primary { font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--navy); background: var(--gold); padding: 13px 24px; text-decoration: none; display: inline-block; transition: background 0.2s; }
  .pa-btn-primary:hover { background: #b8943d; }
  .pa-btn-outline { font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ivory); border: 1px solid rgba(250,247,242,0.35); padding: 13px 24px; text-decoration: none; display: inline-block; transition: border-color 0.2s; }
  .pa-btn-outline:hover { border-color: var(--gold); }
  .pa-scroll-hint { position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 6px; transition: opacity 0.3s; pointer-events: none; }
  .pa-scroll-hint span { font-family: 'Montserrat', sans-serif; font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(250,247,242,0.4); }
  .pa-scroll-line { width: 1px; height: 36px; background: linear-gradient(to bottom, rgba(201,168,76,0.7), transparent); }

  /* STATS */
  .pa-stats { background: var(--navy); border-top: 1px solid rgba(201,168,76,0.2); width: 100%; overflow-x: hidden; }
  .pa-stats-grid { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(110px, 1fr)); width: 100%; }
  .pa-stat { text-align: center; padding: 1.5rem 0.75rem; border-right: 1px solid rgba(201,168,76,0.1); }
  .pa-stat-num { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem, 4vw, 3.5rem); font-weight: 700; color: var(--gold); line-height: 1; margin-bottom: 0.4rem; }
  .pa-stat-label { font-family: 'Montserrat', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ivory); margin-bottom: 0.2rem; }
  .pa-stat-sub { font-family: 'Crimson Pro', serif; font-size: 12px; color: rgba(250,247,242,0.5); font-style: italic; }

  /* CHAPTER LABEL */
  .pa-chapter-label { display: flex; align-items: center; gap: 10px; margin-bottom: 1.5rem; flex-wrap: wrap; }
  .pa-chapter-num { font-family: 'Montserrat', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.2em; color: var(--gold); text-transform: uppercase; }
  .pa-chapter-line { height: 1px; width: 32px; background: var(--gold); opacity: 0.6; flex-shrink: 0; }
  .pa-chapter-title { font-family: 'Montserrat', sans-serif; font-size: 10px; font-weight: 600; letter-spacing: 0.15em; color: var(--gold); text-transform: uppercase; opacity: 0.8; }

  /* SECTIONS */
  .pa-section { padding: 5rem 1.5rem; width: 100%; }
  .pa-section-dark { background: var(--navy); }
  .pa-section-light { background: var(--ivory); }
  .pa-inner { max-width: 1280px; margin: 0 auto; }

  /* GRIDS */
  .pa-grid-2 { display: grid; grid-template-columns: 1fr; gap: 2.5rem; width: 100%; }
  @media (min-width: 768px) { .pa-grid-2 { grid-template-columns: 1fr 1fr; gap: 4rem; } }
  .pa-grid-2-wide { display: grid; grid-template-columns: 1fr; gap: 2.5rem; width: 100%; }
  @media (min-width: 768px) { .pa-grid-2-wide { grid-template-columns: 1fr 1.5fr; gap: 4rem; } }
  .pa-grid-2-wide-r { display: grid; grid-template-columns: 1fr; gap: 2.5rem; width: 100%; }
  @media (min-width: 768px) { .pa-grid-2-wide-r { grid-template-columns: 1.5fr 1fr; gap: 4rem; } }
  .pa-grid-portrait { display: grid; grid-template-columns: 1fr; gap: 2.5rem; align-items: center; width: 100%; }
  @media (min-width: 768px) { .pa-grid-portrait { grid-template-columns: 1fr 1.2fr; gap: 4rem; } }

  /* TYPOGRAPHY */
  .pa-h2-light { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.8rem, 4vw, 3rem); font-weight: 700; color: var(--ivory); line-height: 1.15; margin: 0 0 1.5rem; }
  .pa-h2-dark { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.8rem, 4vw, 3rem); font-weight: 700; color: var(--navy); line-height: 1.15; margin: 0 0 1.5rem; }
  .pa-h2-center { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.8rem, 4vw, 3.2rem); font-weight: 700; color: var(--ivory); line-height: 1.15; margin: 0 0 1rem; text-align: center; }
  .pa-body-light { font-family: 'Crimson Pro', serif; font-size: 1.15rem; line-height: 1.85; color: rgba(250,247,242,0.82); margin: 0 0 1.25rem; }
  .pa-body-dark { font-family: 'Crimson Pro', serif; font-size: 1.15rem; line-height: 1.85; color: #2C2C2C; margin: 0 0 1.25rem; }
  .pa-gold { color: var(--gold); }
  .pa-link-dark { color: var(--navy); font-weight: 700; text-decoration: underline; text-decoration-color: var(--gold); text-underline-offset: 3px; }
  .pa-link-gold { color: var(--gold); text-decoration: none; border-bottom: 1px solid rgba(201,168,76,0.4); padding-bottom: 1px; transition: border-color 0.2s; }
  .pa-link-gold:hover { border-color: var(--gold); }
  .pa-link-inline { font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold); text-decoration: none; border-bottom: 1px solid rgba(201,168,76,0.3); padding-bottom: 1px; }
  .pa-divider { width: 40px; height: 2px; background: var(--gold); margin-bottom: 1.5rem; }
  .pa-year-label { font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold); }

  /* COORDINATE DIVIDER */
  .pa-coord-divider { font-family: 'Montserrat', sans-serif; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(201,168,76,0.65); margin-bottom: 0.75rem; }

  /* LANDSCAPE IMAGES */
  .pa-landscape { position: relative; overflow: hidden; width: 100%; }
  .pa-landscape-bg { height: 360px; background-size: cover; background-position: center; background-attachment: scroll; position: relative; width: 100%; }
  @media (min-width: 768px) { .pa-landscape-bg { height: 500px; background-attachment: fixed; } }
  .pa-landscape-overlay-b { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(11,28,45,0.3) 0%, rgba(11,28,45,0.75) 100%); }
  .pa-landscape-overlay-r { position: absolute; inset: 0; background: linear-gradient(to right, rgba(11,28,45,0.85) 40%, rgba(11,28,45,0.3) 100%); }
  .pa-landscape-overlay-l { position: absolute; inset: 0; background: linear-gradient(to left, rgba(11,28,45,0.85) 40%, rgba(11,28,45,0.3) 100%); }
  .pa-landscape-caption { position: absolute; bottom: 2rem; left: 1.5rem; right: 1.5rem; }
  .pa-landscape-caption-c { position: absolute; inset: 0; display: flex; align-items: center; padding: 0 1.5rem; }
  .pa-landscape-caption-r { position: absolute; inset: 0; display: flex; align-items: center; justify-content: flex-end; padding: 0 1.5rem; }
  .pa-landscape-h { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.5rem, 4vw, 2.8rem); font-weight: 700; color: var(--ivory); line-height: 1.1; max-width: 560px; margin: 0; }

  /* PORTRAIT */
  .pa-portrait-wrap { position: relative; width: 100%; overflow: hidden; }
  .pa-portrait-wrap img { width: 100%; max-width: 100%; height: auto; display: block; filter: brightness(0.95) contrast(1.05); }
  .pa-portrait-fade { position: absolute; bottom: -1px; left: 0; right: 0; height: 100px; background: linear-gradient(to top, var(--navy), transparent); }
  .pa-portrait-credit { position: absolute; bottom: 1.25rem; left: 1.25rem; font-family: 'Crimson Pro', serif; font-size: 13px; color: rgba(250,247,242,0.6); font-style: italic; }

  /* TIMELINE */
  .pa-timeline { background: rgba(201,168,76,0.07); border: 1px solid rgba(201,168,76,0.2); padding: 2rem; }
  @media (min-width: 768px) { .pa-timeline { margin-top: 3rem; } }
  .pa-timeline-title { font-family: 'Montserrat', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 1.25rem; }
  .pa-timeline-row { display: flex; gap: 1rem; padding-bottom: 0.875rem; margin-bottom: 0.875rem; border-bottom: 1px solid rgba(201,168,76,0.1); }
  .pa-timeline-row:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
  .pa-timeline-year { font-family: 'Montserrat', sans-serif; font-size: 10px; font-weight: 700; color: var(--gold); min-width: 44px; padding-top: 2px; }
  .pa-timeline-city { font-family: 'Crimson Pro', serif; font-size: 1rem; font-weight: 700; color: var(--ivory); }
  .pa-timeline-desc { font-family: 'Crimson Pro', serif; font-size: 0.9rem; color: rgba(250,247,242,0.55); font-style: italic; }

  /* EXPERTISE CARDS */
  .pa-cards { display: grid; grid-template-columns: 1fr; gap: 1.25rem; width: 100%; }
  @media (min-width: 640px) { .pa-cards { grid-template-columns: 1fr 1fr; } }
  @media (min-width: 1024px) { .pa-cards { grid-template-columns: repeat(3, 1fr); } }
  .pa-card { background: #fff; border: 1px solid rgba(11,28,45,0.08); padding: 1.75rem; transition: box-shadow 0.3s, transform 0.3s; display: flex; flex-direction: column; height: 100%; }
  .pa-card:hover { box-shadow: 0 8px 32px rgba(11,28,45,0.1); transform: translateY(-3px); }
  .pa-card-num { font-family: 'Montserrat', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.15em; color: var(--gold); margin-bottom: 0.75rem; }
  .pa-card-title { font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; font-weight: 700; color: var(--navy); margin: 0 0 0.625rem; line-height: 1.3; }
  .pa-card-desc { font-family: 'Crimson Pro', serif; font-size: 1.05rem; line-height: 1.7; color: #444; margin: 0 0 1.1rem; flex: 1; }
  .pa-card-link { font-family: 'Montserrat', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold); text-decoration: none; border-bottom: 1px solid rgba(201,168,76,0.3); padding-bottom: 1px; }

  /* PLAN B STEPS */
  .pa-steps { display: flex; flex-direction: column; gap: 0; }
  .pa-step { display: flex; gap: 1.25rem; padding-bottom: 1.25rem; margin-bottom: 1.25rem; border-bottom: 1px solid rgba(11,28,45,0.08); }
  .pa-step:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
  .pa-step-num { font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-weight: 700; color: var(--gold); opacity: 0.6; min-width: 44px; line-height: 1; padding-top: 4px; }
  .pa-step-title { font-family: 'Cormorant Garamond', serif; font-size: 1.15rem; font-weight: 700; color: var(--navy); margin: 0 0 0.2rem; }
  .pa-step-desc { font-family: 'Crimson Pro', serif; font-size: 1rem; line-height: 1.6; color: #555; margin: 0; }

  /* CTA */
  .pa-cta { background: var(--navy); padding: 5rem 1.5rem; border-top: 1px solid rgba(201,168,76,0.2); text-align: center; width: 100%; }
  .pa-cta-inner { max-width: 680px; margin: 0 auto; }
  .pa-cta-eyebrow { font-family: 'Montserrat', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 1.25rem; }
  .pa-cta h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.8rem, 5vw, 3.2rem); font-weight: 700; color: var(--ivory); line-height: 1.1; margin: 0 0 1.25rem; }
  .pa-cta p { font-family: 'Crimson Pro', serif; font-size: 1.15rem; line-height: 1.8; color: rgba(250,247,242,0.75); margin: 0 0 2.5rem; }
  .pa-cta-btns { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; margin-bottom: 1.5rem; }
  .pa-cta-secondary { display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap; }
  .pa-cta-secondary a { font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.1em; color: rgba(250,247,242,0.55); text-decoration: none; text-transform: uppercase; transition: color 0.2s; }
  .pa-cta-secondary a:hover { color: var(--gold); }

  /* FOOTER */
  .pa-footer { background: #060E17; padding: 3.5rem 1.5rem 2rem; border-top: 1px solid rgba(201,168,76,0.15); width: 100%; overflow-x: hidden; }
  .pa-footer-grid { max-width: 1280px; margin: 0 auto 2.5rem; display: grid; grid-template-columns: 1fr; gap: 2rem; width: 100%; }
  @media (min-width: 640px) { .pa-footer-grid { grid-template-columns: 1fr 1fr; } }
  @media (min-width: 1024px) { .pa-footer-grid { grid-template-columns: 2fr 1fr 1fr 1fr; } }
  .pa-footer-brand { font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 700; color: var(--ivory); margin-bottom: 0.875rem; }
  .pa-footer-desc { font-family: 'Crimson Pro', serif; font-size: 0.95rem; line-height: 1.65; color: rgba(250,247,242,0.5); max-width: 280px; margin: 0; }
  .pa-footer-col-title { font-family: 'Montserrat', sans-serif; font-size: 9px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 1rem; }
  .pa-footer-links { display: flex; flex-direction: column; gap: 0.5rem; }
  .pa-footer-link { font-family: 'Crimson Pro', serif; font-size: 0.95rem; color: rgba(250,247,242,0.55); text-decoration: none; transition: color 0.2s; }
  .pa-footer-link:hover { color: var(--ivory); }
  .pa-footer-bottom { max-width: 1280px; margin: 0 auto; border-top: 1px solid rgba(201,168,76,0.1); padding-top: 1.25rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; }
  .pa-footer-copy { font-family: 'Montserrat', sans-serif; font-size: 10px; color: rgba(250,247,242,0.3); letter-spacing: 0.05em; }
  .pa-footer-legal { display: flex; gap: 1.25rem; }
  .pa-footer-legal a { font-family: 'Montserrat', sans-serif; font-size: 10px; color: rgba(250,247,242,0.3); text-decoration: none; transition: color 0.2s; }
  .pa-footer-legal a:hover { color: var(--gold); }

  /* FADE ANIMATION */
  .pa-fade { opacity: 0; transform: translateY(22px); transition: opacity 0.7s ease-out, transform 0.7s ease-out; }
  .pa-fade.visible { opacity: 1; transform: translateY(0); }
  .pa-fade-d1 { transition-delay: 100ms; }
  .pa-fade-d2 { transition-delay: 200ms; }
`;

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function Fade({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`pa-fade${inView ? " visible" : ""}${delay === 1 ? " pa-fade-d1" : delay === 2 ? " pa-fade-d2" : ""} ${className}`}>
      {children}
    </div>
  );
}

export default function UeberUnsPage() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const heroParallax = scrollY * 0.3;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: RESPONSIVE_CSS }} />
      <div style={{ background: "#FAF7F2", fontFamily: "'Crimson Pro', serif", overflowX: "hidden" }}>

        {/* HEADER */}
        <header className="pa-header">
          <div className="pa-header-inner">
            <a href="https://www.perspektiveausland.com" className="pa-header-logo">
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663489425504/yXZrDfTMyVGljsjL.png" alt="Perspektive Ausland" />
            </a>
            <div className="pa-header-divider" />
            <span className="pa-header-label">Über uns</span>
          </div>
        </header>

        {/* HERO */}
        <section className="pa-hero">
          <div className="pa-hero-bg" style={{ backgroundImage: `url(${IMAGES.hero})`, transform: `translateY(${heroParallax}px)` }} />
          <div className="pa-hero-overlay" />
          <div className="pa-hero-content">
            <div style={{ maxWidth: "640px" }}>
              <nav aria-label="Breadcrumb" style={{ marginBottom: "1rem" }}>
                <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <li><a href="https://www.perspektiveausland.com" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", color: "rgba(250,247,242,0.5)", textDecoration: "none", textTransform: "uppercase" }}>Home</a></li>
                  <li style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", color: "rgba(250,247,242,0.35)" }} aria-hidden="true">›</li>
                  <li style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", color: "rgba(201,168,76,0.8)", textTransform: "uppercase" }} aria-current="page">Über uns</li>
                </ol>
              </nav>
              <h1 className="pa-hero-h1">Über Perspektive Ausland: die Plattform für Auswanderer</h1>
              <p className="pa-hero-subline">
                Wir beraten zu Wegen, die wir selbst gegangen sind. Seit 2000 lebe ich im Ausland: Schweiz, England, USA, Malta, Irland. Seitdem begleiten wir andere durch die gleiche Entscheidung.
              </p>
              <div className="pa-hero-brand">Mehr Geld. Mehr Freiheit. Weniger Staat.</div>
              <div className="pa-hero-btns">
                <a href="https://mandatierung.perspektiveausland.com/" className="pa-btn-primary">Erstgespräch buchen</a>
                <a href="https://www.youtube.com/c/PerspektiveAuslandPodcast" className="pa-btn-outline">YouTube-Kanal</a>
              </div>
            </div>
          </div>
          <div className="pa-scroll-hint" style={{ opacity: scrollY > 50 ? 0 : 1 }}>
            <span>Scroll</span>
            <div className="pa-scroll-line" />
          </div>
        </section>

        {/* STATS */}
        <section className="pa-stats">
          <div className="pa-stats-grid">
            {[
              { n: "25", l: "Jahre im Ausland", s: "seit 2000" },
              { n: "5", l: "Länder selbst gelebt", s: "Schweiz, England, USA, Malta, Irland" },
              { n: "40+", l: "Jurisdiktionen analysiert", s: "für Mandanten in der Praxis umgesetzt" },
              { n: "200k+", l: "Reichweite", s: "YouTube, Newsletter, TikTok, Instagram" },
              { n: "Mandanten", l: "aus allen Branchen", s: "Unternehmer, Freiberufler, Investoren" },
            ].map((s, i) => (
              <div key={i} className="pa-stat">
                <div className="pa-stat-num">{s.n}</div>
                <div className="pa-stat-label">{s.l}</div>
                <div className="pa-stat-sub">{s.s}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 01 — DIE PLATTFORM */}
        <section className="pa-section pa-section-light">
          <div className="pa-inner">
            <div className="pa-grid-portrait">
              <Fade>
                <div className="pa-portrait-wrap">
                  <img src={IMAGES.portrait} alt="Sebastian Sauerborn, Gründer von Perspektive Ausland" />
                  <div className="pa-portrait-fade" />
                  <div className="pa-portrait-credit">Sebastian Sauerborn, London und Austin, Texas. Gründer von Perspektive Ausland.</div>
                </div>
              </Fade>
              <Fade delay={1}>
                <div className="pa-chapter-label"><span className="pa-chapter-num">01</span><div className="pa-chapter-line" /><span className="pa-chapter-title">Die Plattform</span></div>
                <h2 className="pa-h2-dark">Andere reden. <em className="pa-gold">Wir setzen es um.</em></h2>
                <p className="pa-body-dark">Perspektive Ausland ist die deutschsprachige Plattform für alle, die ihren Wohnsitz, ihre Strukturen oder ihre Optionen ins Ausland verlagern wollen. Auf <a href="https://www.youtube.com/c/PerspektiveAuslandPodcast" className="pa-link-dark">YouTube</a>, in der <a href="https://nhc.perspektiveausland.com/club" className="pa-link-dark">Community</a> und in der konkreten Mandatierung.</p>
                <p className="pa-body-dark">Das Spektrum reicht von der ersten Idee bis zur vollständigen Umsetzung. Länderauswahl. Steuerstrukturen. Aufenthaltstitel. Bankkonten. Zweitpässe. Vermögenssicherung. Alles davon ist unser Alltag, kein Theorie-Kapitel aus einem Buch.</p>
                <p className="pa-body-dark" style={{ marginBottom: "1.75rem" }}>Wer auswandern oder einen Plan B aufbauen will, hat Fragen, die im Heimatland nie eine Rolle gespielt haben. Die Plattform beantwortet sie. Die Mandatierung setzt sie um.</p>
              </Fade>
            </div>
          </div>
        </section>

        {/* COORD DIVIDER: Seit 2000 */}
        <div className="pa-landscape">
          <div className="pa-landscape-bg" style={{ backgroundImage: `url(${IMAGES.freiburg})`, backgroundPosition: "center 40%" }}>
            <div className="pa-landscape-overlay-b" />
            <div className="pa-landscape-caption">
              <div className="pa-coord-divider">Seit 2000 selbst im Ausland.</div>
              <h3 className="pa-landscape-h">Vom Hotzenwald in die Welt.</h3>
            </div>
          </div>
        </div>

        {/* 02 — WARUM ICH */}
        <section className="pa-section pa-section-dark">
          <div className="pa-inner">
            <div className="pa-grid-2">
              <Fade>
                <div className="pa-chapter-label"><span className="pa-chapter-num">02</span><div className="pa-chapter-line" /><span className="pa-chapter-title">Warum ich</span></div>
                <h2 className="pa-h2-light">Ich habe nicht beraten. <em className="pa-gold">Ich bin es gegangen.</em></h2>
                <div className="pa-divider" />
              </Fade>
              <Fade delay={1}>
                <p className="pa-body-light">Ich bin Sebastian Sauerborn. Im Jahr 2000 habe ich Deutschland verlassen, mit Anfang zwanzig, neugierig und mit dem Gefühl, dass die Welt größer sein muss als der Schwarzwald. Ich war kein Flüchtling und kein Steuerflüchtling. Ich war jemand, der wissen wollte, wie man woanders lebt.</p>
                <p className="pa-body-light">Seitdem habe ich in fünf Ländern gewohnt: in der Schweiz, in England, in den USA, auf Malta und in Irland. Aus der Schweiz kam die professionelle Grundausbildung bei PwC. Aus London der Schritt zur eigenen Beratungs-Sozietät in der City. Aus Florida und Texas der Aufbau der US-Praxis. Malta und Irland kamen als zusätzliche operative Standorte dazu. Jedes Land war eine eigene Entscheidung mit eigenen Konsequenzen. Jedes hat mir etwas beigebracht, das auf der nächsten Station nützlich wurde.</p>
                <p className="pa-body-light">Was meine Mandanten heute fragen, habe ich selbst durchgemacht. Welche Bank dich als Zugezogenen nimmt. Welches Finanzamt mit welcher Antwort zufrieden ist. Welche Aufenthaltsbewilligung in der Praxis funktioniert und welche nur auf dem Papier. Welche Steuerstruktur einen Auditor übersteht und welche kollabiert, sobald jemand genauer hinschaut.</p>
                <p className="pa-body-light" style={{ marginBottom: "1.75rem" }}>Das ist der Unterschied zwischen Beratern, die einen Steuerrechts-Lehrgang gemacht haben, und Beratern, die selbst Auswanderer sind.</p>
                <a href="https://www.sebsauerborn.com/about" className="pa-link-gold">Vollständige Biografie auf sebsauerborn.com →</a>
              </Fade>
            </div>
          </div>
        </section>

        {/* 03 — HERKUNFT UND WEG */}
        <section className="pa-section pa-section-light">
          <div className="pa-inner">
            <div className="pa-grid-2-wide">
              <Fade>
                <div className="pa-coord-divider" style={{ color: "rgba(201,168,76,0.75)" }}>47°59&apos;N 7°51&apos;E · Freiburg im Breisgau</div>
                <div className="pa-chapter-label"><span className="pa-chapter-num">03</span><div className="pa-chapter-line" /><span className="pa-chapter-title">Herkunft und Weg</span></div>
                <h2 className="pa-h2-dark">Vom Hotzenwald in die Welt</h2>
                <div className="pa-divider" />
              </Fade>
              <Fade delay={1}>
                <p className="pa-body-dark">Geboren 1977 in Freiburg im Breisgau, aufgewachsen im Hotzenwald nahe der Schweizer Grenze. Mit Anfang zwanzig zog ich nach Zürich und fing bei PwC an. Viereinhalb Jahre. In der Schweiz lernte ich Präzision, Diskretion und eine andere Verwaltungskultur kennen.</p>
                <p className="pa-body-dark">2003 ging ich nach London zu Allianz Insurance. Vier Jahre Konzern, parallel dazu der schrittweise Aufbau der eigenen Praxis. 2006 gründete ich mit ehemaligen PwC-Kollegen eine Beratungs-Sozietät in der City of London. Der Fokus war strategisch: deutschsprachige Unternehmer und vermögende Privatpersonen, die das damals außergewöhnlich attraktive britische Non-Dom-Regime nutzen wollten. Der Wegzug nach London war zu dieser Zeit für viele DACH-HNWIs die wirtschaftlich sinnvollste Entscheidung, und wir haben sie strukturiert.</p>
                <p className="pa-body-dark">Aus der UK-Praxis wuchs die Erweiterung auf die USA. 2008 zog ich selbst nach Miami und baute von dort das US-Geschäft auf, von der LLC-Strukturierung über E-2-Investorenvisa bis zum US-Banking für Nicht-Residenten. Ich lebte von 2008 bis 2017 vollständig in den Vereinigten Staaten, mit Phasen in Irland (2015) und Malta (2016), die im selben Zeitraum eigene Standorte in der Beratungsstruktur wurden. Malta und Irland erweiterten das Spektrum um zwei weitere Non-Dom- und niedrigsteuerorientierte EU-Jurisdiktionen.</p>
                <p className="pa-body-dark">2011 erwarb ich die Vaquera Ranch in Bastrop County, Texas. Eine private Entscheidung, die meine Verankerung im Land vertiefte: weg von der Großstadt, näher am Boden, eine eigene Adresse in Texas. 2017 verlagerte sich der Lebensmittelpunkt zurück nach London, mit Texas als zweitem Standbein.</p>
                <p className="pa-body-dark" style={{ marginBottom: 0 }}>Heute teile ich meine Zeit zwischen Großbritannien und Texas. Familie, Mandanten und Veranstaltungen verteilen sich über beide Seiten des Atlantiks.</p>
              </Fade>
            </div>
          </div>
        </section>

        {/* LONDON IMAGE */}
        <div className="pa-landscape">
          <div className="pa-landscape-bg" style={{ backgroundImage: `url(${IMAGES.london})` }}>
            <div className="pa-landscape-overlay-r" />
            <div className="pa-landscape-caption-c">
              <div style={{ maxWidth: "1280px", width: "100%", margin: "0 auto" }}>
                <div className="pa-coord-divider">51°30&apos;N 0°7&apos;W · City of London, England</div>
                <h3 className="pa-landscape-h">Die Stadt, die aus mir einen Unternehmer machte.</h3>
              </div>
            </div>
          </div>
        </div>

        {/* 04 — STATIONEN (TIMELINE) */}
        <section className="pa-section pa-section-dark">
          <div className="pa-inner">
            <div className="pa-grid-2-wide-r">
              <Fade>
                <div className="pa-chapter-label"><span className="pa-chapter-num">04</span><div className="pa-chapter-line" /><span className="pa-chapter-title">Stationen</span></div>
                <h2 className="pa-h2-light">25 Jahre. <em className="pa-gold">Fünf Länder. Eine Praxis.</em></h2>
                <p className="pa-body-light">Jede Station war eine eigene Entscheidung mit eigenen Konsequenzen. Was auf dem Papier wie eine Biografie aussieht, ist in der Praxis ein Archiv aus Erfahrungen, die direkt in die Mandatierung einfließen.</p>
                <blockquote style={{ borderLeft: "3px solid rgba(201,168,76,0.5)", paddingLeft: "1.5rem", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontStyle: "italic", color: "rgba(250,247,242,0.8)", lineHeight: 1.55, margin: "0" }}>
                  "Jedes Land war eine eigene Entscheidung mit eigenen Konsequenzen. Jedes hat mir etwas beigebracht, das auf der nächsten Station nützlich wurde."
                </blockquote>
              </Fade>
              <Fade delay={1}>
                <div className="pa-timeline">
                  <div className="pa-timeline-title">Stationen</div>
                  {[
                    ["2000","Zürich","PwC"],
                    ["2003","London","Allianz Insurance"],
                    ["2006","London","Beratungs-Sozietät mit ex-PwC-Partnern, UK Non-Dom für DACH-Mandanten"],
                    ["2007","London","Vollzeit-Wechsel in die eigene Praxis"],
                    ["2008","Miami","Aufbau der US-Praxis"],
                    ["2011","Bastrop County, Texas","Vaquera Ranch"],
                    ["2015","Dublin","Irland-Standort"],
                    ["2016","Valletta","Malta-Standort"],
                    ["2017","London","Verlagerung des Lebensmittelpunkts zurück nach UK"],
                    ["heute","UK und Texas","Perspektive Ausland"],
                  ].map(([y,c,d]) => (
                    <div key={y} className="pa-timeline-row">
                      <span className="pa-timeline-year">{y}</span>
                      <div><div className="pa-timeline-city">{c}</div><div className="pa-timeline-desc">{d}</div></div>
                    </div>
                  ))}
                </div>
              </Fade>
            </div>
          </div>
        </section>

        {/* TEXAS IMAGE */}
        <div className="pa-landscape">
          <div className="pa-landscape-bg" style={{ backgroundImage: `url(${IMAGES.texas})`, backgroundPosition: "center 30%" }}>
            <div className="pa-landscape-overlay-b" />
            <div className="pa-landscape-caption">
              <div className="pa-coord-divider">30°5&apos;N 97°3&apos;W · Bastrop County, Texas</div>
              <h3 className="pa-landscape-h">Eine Ranch in Bastrop County.</h3>
            </div>
          </div>
        </div>

        {/* 05 — TEXAS */}
        <section className="pa-section pa-section-light">
          <div className="pa-inner">
            <div className="pa-grid-2-wide">
              <Fade>
                <div className="pa-chapter-label"><span className="pa-chapter-num">05</span><div className="pa-chapter-line" /><span className="pa-chapter-title">Texas und die Ranch</span></div>
                <h2 className="pa-h2-dark">Eine Ranch in Bastrop County</h2>
                <div className="pa-divider" />
                <div className="pa-year-label">2011</div>
              </Fade>
              <Fade delay={1}>
                <p className="pa-body-dark">Die Vaquera Ranch in Bastrop County, etwa 30 Meilen östlich von Austin, erwarb ich 2011. Bastrop County ist heute der Standort, an dem SpaceX seine Starbase-Produktion ausbaut. Ein altes Farmhaus, eine rote Scheune, ein großer Teich, ein Mix aus Weideland und Wald. Zu diesem Zeitpunkt arbeitete ich bereits seit 2008 von Miami aus mit US-Mandanten. Die Ranch war eine persönliche Entscheidung, die meine Verankerung im Land vertiefte: weg von der Großstadt, näher am Boden, eine eigene Adresse in Texas.</p>
                <p className="pa-body-dark">Texas war und ist das Land der unkomplizierten Unternehmensgründung. Niedrige Hürden, ein Rechts- und Steuersystem, das auf Eigenverantwortung baut, und eine kulturelle Erwartung, dass man Dinge selbst aufbaut. Aus dem täglichen Leben dort kamen viele der praktischen Erkenntnisse, die heute Standardbausteine unserer US-Beratung sind: LLC-Strukturen, US-Banking für Nicht-Residenten, E-2-Investorenvisa, ITIN-basierter Kreditaufbau. Vieles davon haben wir in der eigenen Praxis vor der Mandantenarbeit getestet.</p>
                <p className="pa-body-dark" style={{ marginBottom: 0 }}>Eine zweite Ranch ist in Planung. Wer Land kennt, weiß, dass es selten beim ersten Stück bleibt.</p>
              </Fade>
            </div>
          </div>
        </section>

        {/* 06 — DIE PLATTFORM ENTSTEHT */}
        <section className="pa-section pa-section-dark">
          <div className="pa-inner">
            <Fade>
              <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                <div className="pa-chapter-label" style={{ justifyContent: "center" }}><span className="pa-chapter-num">06</span><div className="pa-chapter-line" /><span className="pa-chapter-title">Die Plattform entsteht</span></div>
                <h2 className="pa-h2-center">Vom Beratungsalltag zum Podcast</h2>
              </div>
            </Fade>
            <div className="pa-grid-2">
              <Fade delay={1}>
                <p className="pa-body-light">In der täglichen Arbeit fiel mir immer das Gleiche auf. Die Mandanten kamen nicht mit den Fragen, die sie hätten stellen sollen. Sie kamen mit den Fragen, von denen sie wussten, dass es sie gibt. Was sie nicht wussten, fehlte komplett.</p>
                <p className="pa-body-light" style={{ marginBottom: 0 }}>Daraus entstand der Wunsch, das verfügbare Wissen auch außerhalb der direkten Beratungsbeziehung zugänglich zu machen. Der Perspektive-Ausland-Podcast startete als gemeinsames Projekt mit Daniel Taborek, mit dem ich seitdem zusammen das gesamte Spektrum dieser Themen behandle, von der ersten Frage bis zur konkreten Umsetzung. Dazu kamen YouTube-Kanal, Community und regelmäßige Live-Veranstaltungen.</p>
              </Fade>
              <Fade delay={2}>
                <p className="pa-body-light">Heute hat Perspektive Ausland eine Reichweite von über 200.000 Followern und Abonnenten im deutschsprachigen Raum, verteilt über YouTube, Newsletter, TikTok und Instagram. Aus dieser Reichweite haben sich zwei strukturierte Ebenen entwickelt: der <strong>New Horizons Club</strong> als kostenpflichtige Jahresmitgliedschaft mit monatlichem Newsletter, Live-Webinaren, Call-In Days, einem privaten Mitglieder-Forum und einem jährlichen Mitglieder-Event in London. Daneben unser <strong>Members Club</strong> als interne, geschlossene Community ausschließlich für aktive Mandanten, in der die operative Begleitung über die laufende Beratung hinaus stattfindet.</p>
                <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
                  <a href="https://www.youtube.com/c/PerspektiveAuslandPodcast" className="pa-link-gold">YouTube-Kanal</a>
                  <a href="https://verteiler.perspektiveausland.com/" className="pa-link-gold">Newsletter</a>
                  <a href="https://nhc.perspektiveausland.com/club" className="pa-link-gold">New Horizons Club</a>
                </div>
              </Fade>
            </div>
          </div>
        </section>

        {/* 07 — DAS TEAM */}
        <section className="pa-section pa-section-light">
          <div className="pa-inner">
            <div style={{ marginBottom: "1.5rem" }}>
              <div className="pa-coord-divider" style={{ color: "rgba(201,168,76,0.75)" }}>Sechs Köpfe. Eine Praxis.</div>
            </div>
            <div className="pa-grid-portrait">
              <Fade>
                <div className="pa-chapter-label"><span className="pa-chapter-num">07</span><div className="pa-chapter-line" /><span className="pa-chapter-title">Das Team</span></div>
                <h2 className="pa-h2-dark">Niemand baut so etwas allein</h2>
                <p className="pa-body-dark">Perspektive Ausland ist heute eine Praxis aus sechs Beraterinnen und Beratern, mit eigenen Schwerpunkten, eigenen Jurisdiktionen und in Teilen mit über fünfzehn Jahren gemeinsamer Geschichte.</p>
                <p className="pa-body-dark"><strong>Daniel Taborek</strong> ist seit 2009 selbst Auswanderer und mein engster Mitstreiter und Wegbegleiter bei Perspektive Ausland. Im Podcast die Stimme, mit der unsere Mandanten ebenso rechnen wie mit meiner. Seine Spezialgebiete sind zweite Staatsbürgerschaften, Golden-Visa-Programme und dauerhafte Aufenthaltsrechte. Wohnsitz und Banking in Serbien und Georgien gehören zu seinem operativen Tagesgeschäft. Mehrmals jährlich begleitet er Mandanten persönlich nach Sansibar zu Fumba Town.</p>
                <p className="pa-body-dark">Neben Daniel arbeiten <strong>Friedrich A. Hennegriff</strong> als unabhängiger Vermögensschutz-Stratege (25 Jahre Kapitalmärkte, seit 2012 ausschließlich im Mandanteninteresse), <strong>Harley Bieder</strong> als Lateinamerika-Spezialist (zwölf Länder von Argentinien bis Uruguay, aus gelebter Erfahrung statt aus dem Lehrbuch), <strong>Sabrina Sauerborn</strong> mit Wohnsitz und Unternehmensstruktur in Malta und Dubai aus erster Hand, und <strong>Timothy Te</strong> als Operations Manager in Davao mit direkter Verantwortung für die Philippinen-Mandate sowie für Bankkonto-Eröffnungen in Singapur und Hongkong.</p>
                <p className="pa-body-dark" style={{ marginBottom: "1.75rem" }}>Mehrere von uns leben selbst seit Jahren oder Jahrzehnten im Ausland. Wir empfehlen unseren Mandanten nichts, was wir nicht selbst getestet, durchgemacht oder umgesetzt haben.</p>
                <a href="https://mandatierung.perspektiveausland.com/" className="pa-link-inline">Das gesamte Team kennenlernen →</a>
              </Fade>
              <Fade delay={1}>
                <div className="pa-portrait-wrap" style={{ background: "var(--navy)" }}>
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663489425504/CDxvB3jQvgbrdKhn9JfRho/daniel_taborek_portrait-P5yHBj2kwSz93fk2eZ3HkG.webp"
                    alt="Daniel Taborek, Berater bei Perspektive Ausland"
                  />
                  <div className="pa-portrait-credit" style={{ color: "rgba(250,247,242,0.6)", fontStyle: "italic" }}>Daniel Taborek. Seit 2009 selbst Auswanderer. Berater bei Perspektive Ausland.</div>
                </div>
              </Fade>
            </div>
          </div>
        </section>

        {/* DUBAI IMAGE */}
        <div className="pa-landscape">
          <div className="pa-landscape-bg" style={{ backgroundImage: `url(${IMAGES.dubai})` }}>
            <div className="pa-landscape-overlay-l" />
            <div className="pa-landscape-caption-r">
              <div style={{ maxWidth: "520px", textAlign: "right" }}>
                <div className="pa-coord-divider">40+ Jurisdiktionen. Eine Praxis.</div>
                <h3 className="pa-landscape-h" style={{ textAlign: "right" }}>Sechs Bereiche, in denen wir konkret beraten.</h3>
              </div>
            </div>
          </div>
        </div>

        {/* 08 — WORAN WIR ARBEITEN */}
        <section className="pa-section pa-section-light">
          <div className="pa-inner">
            <Fade>
              <div style={{ marginBottom: "3rem" }}>
                <div className="pa-chapter-label"><span className="pa-chapter-num">08</span><div className="pa-chapter-line" /><span className="pa-chapter-title">Woran wir arbeiten</span></div>
                <h2 className="pa-h2-dark">Sechs Bereiche, in denen wir konkret beraten</h2>
              </div>
            </Fade>
            <div className="pa-cards">
              {[
                { n: "01", title: "Internationale Steuerplanung", desc: "Territoriale und weltweite Besteuerung. Wegzugsthematik aus DACH. Non-Dom-Regime in Malta, Irland, UK. Aufenthaltsregime mit reduzierter oder territorialer Besteuerung. Wir kennen die Praxis dieser Strukturen in mehr als 40 Jurisdiktionen, nicht nur ihre Marketing-Versprechen.", link: "https://themen.perspektiveausland.com/themen/auswandern", lt: "Mehr zu Auswandern" },
                { n: "02", title: "Wohnsitzverlagerung und Aufenthalt", desc: "USA, Schweiz, Malta, Spanien, Georgien, Paraguay, Panama, Philippinen, Sansibar. Wir begleiten die Wohnsitzverlagerung von der ersten Standort-Frage über die Aufenthaltsbewilligung bis zur operativen Einrichtung im Zielland.", link: "https://themen.perspektiveausland.com/themen/plan-b-residence", lt: "Plan B Residence" },
                { n: "03", title: "Firmenstrukturen im Ausland", desc: "US-LLC für DACH-Mandanten unter nullsteuer.llc. UK Limited. Singapur-Gesellschaften. Maltesische Holdingstrukturen. Wir bauen Strukturen, die rechtlich sauber, steuerlich effizient und über mehrere Jurisdiktionen tragfähig sind.", link: "https://themen.perspektiveausland.com/themen/perpetual-traveling", lt: "Mehr zu Perpetual Traveling" },
                { n: "04", title: "Zweitpass und Staatsbürgerschaft", desc: "Irische Einbürgerung über Foreign Births Register. Serbische Einbürgerung. Schweizer Bürgerrecht. CBI Sierra Leone. Panama Travel Document. Honorarkonsul-Konstellationen, wo realistisch.", link: "https://themen.perspektiveausland.com/themen/zweitpass", lt: "Zweitpass-Optionen" },
                { n: "05", title: "Banking außerhalb der EU", desc: "US-Banking, Singapur, Philippinen. Onboarding-Begleitung mit vorbereiteter Source-of-Wealth-Dokumentation. Übergang von EU-Brokern zu außereuropäischen Strukturen.", link: "https://themen.perspektiveausland.com/themen/vermoegenssicherung", lt: "Vermögenssicherung" },
                { n: "06", title: "Krypto-Strukturen", desc: "DAC8, MiCA, CARF. Self-Custody-Architektur. Auscash-Strategie unter §23 EStG. Wohnsitze für Krypto-Investoren.", link: "https://themen.perspektiveausland.com/themen/krypto", lt: "Krypto" },
              ].map((c, i) => (
                <Fade key={i}>
                  <div className="pa-card">
                    <div className="pa-card-num">{c.n}</div>
                    <h3 className="pa-card-title">{c.title}</h3>
                    <p className="pa-card-desc">{c.desc}</p>
                    <a href={c.link} className="pa-card-link">{c.lt} →</a>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </section>

        {/* 09 — DER SCOUT-GEDANKE */}
        <section className="pa-section pa-section-dark">
          <div className="pa-inner">
            <div className="pa-grid-2">
              <Fade>
                <div className="pa-coord-divider">Be prepared. Have options. Build before you need them.</div>
                <div className="pa-chapter-label"><span className="pa-chapter-num">09</span><div className="pa-chapter-line" /><span className="pa-chapter-title">Haltung</span></div>
                <h2 className="pa-h2-light">Auswandern als nächstes Kapitel</h2>
              </Fade>
              <Fade delay={1}>
                <p className="pa-body-light">Auswandern ist für unsere Mandanten in der Regel keine Flucht. Es ist eine Entscheidung für etwas, nicht gegen etwas. Eine neue berufliche Bühne. Ein anderes Lebensgefühl. Eine Familienentscheidung. Der nächste Standort für ein Unternehmen, das größer denken will als die heimische Region.</p>
                <p className="pa-body-light">Plan B funktioniert genauso. Es ist das Pfadfinder-Prinzip für Erwachsene: bereit sein. Optionen schaffen. Infrastruktur aufbauen, bevor du sie brauchst. Niemand bricht in Panik auf, wenn die Schritte schon gegangen sind. Und niemand bereut die Vorbereitung, wenn man sie zum Glück nie aktivieren muss.</p>
                <p className="pa-body-light">Was wir nicht sind: ein Anti-Heimat-Projekt. Wir sind nicht gegen Deutschland, Österreich oder die Schweiz. Im Gegenteil. Unsere Mandanten sind in der Regel diejenigen, die ihre Heimatländer aus sicherer internationaler Distanz am liebsten haben. Mobilität schafft Perspektive. Distanz schafft Wertschätzung.</p>
                <p className="pa-body-light" style={{ marginBottom: 0 }}>Was wir machen: Wir helfen Menschen, ihre Optionen in der Welt zu nutzen. Legal, sauber dokumentiert, gegenüber den Finanzbehörden transparent. Internationale Mobilität ist ein Grundrecht in der EU, und mit den richtigen Strukturen ein nutzbares Werkzeug für alle, die sie als Werkzeug verstehen.</p>
              </Fade>
            </div>
          </div>
        </section>

        {/* 10 — DAS PLAN-B-KONZEPT */}
        <section className="pa-section pa-section-light">
          <div className="pa-inner">
            <div className="pa-grid-2">
              <Fade>
                <div className="pa-chapter-label"><span className="pa-chapter-num">10</span><div className="pa-chapter-line" /><span className="pa-chapter-title">Das Plan-B-Konzept</span></div>
                <h2 className="pa-h2-dark">Fünf Bausteine, die ineinandergreifen</h2>
                <p className="pa-body-dark">Ein vollständiger Plan B ist nicht eine Maßnahme, sondern ein Zusammenspiel aus fünf Komponenten, die als Set ihre volle Wirkung entfalten.</p>
                <p className="pa-body-dark" style={{ marginBottom: "1.75rem" }}>Welche Komponente für dich Priorität hat, hängt von deiner Ausgangslage ab. In der Mandatierung priorisieren wir gemeinsam, was zuerst kommt und was als Folgeprojekt sinnvoller geplant wird.</p>
                <a href="https://themen.perspektiveausland.com/themen/plan-b-residence" className="pa-link-inline">Plan B Residence im Detail →</a>
              </Fade>
              <Fade delay={1}>
                <div className="pa-steps">
                  {[
                    ["01","Steuerwohnsitz","in einer territorial besteuerten oder Non-Dom-Jurisdiktion"],
                    ["02","Zweitpass oder zweite Aufenthaltsbewilligung","als Reisefreiheits-Reserve"],
                    ["03","Vermögensdiversifikation","über mehrere geografische Jurisdiktionen"],
                    ["04","Banking außerhalb der EU","als operative Versicherung"],
                    ["05","Dokumentierte physische Präsenz","im jeweiligen Wohnsitzland"],
                  ].map(([n,t,d]) => (
                    <div key={n} className="pa-step">
                      <div className="pa-step-num">{n}</div>
                      <div><h4 className="pa-step-title">{t}</h4><p className="pa-step-desc">{d}</p></div>
                    </div>
                  ))}
                </div>
              </Fade>
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <div className="pa-cta">
          <div className="pa-cta-inner">
            <Fade>
              <div className="pa-cta-eyebrow">Bereit zu starten</div>
              <h2>Das nächste Kapitel beginnt mit einem Gespräch</h2>
              <p>Im Erstgespräch klären wir, welches Land, welche Struktur und welche Reihenfolge zu deiner konkreten Situation passt. Eine Stunde, ohne weitere Verpflichtungen.</p>
              <div className="pa-cta-btns">
                <a href="https://mandatierung.perspektiveausland.com/" className="pa-btn-primary">Erstgespräch buchen</a>
              </div>
              <div className="pa-cta-secondary">
                <a href="https://www.youtube.com/c/PerspektiveAuslandPodcast">YouTube-Kanal</a>
                <a href="https://nhc.perspektiveausland.com/club">Der Club</a>
                <a href="https://verteiler.perspektiveausland.com/">Newsletter</a>
              </div>
            </Fade>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="pa-footer">
          <div className="pa-footer-grid">
            <div>
              <div className="pa-footer-brand">Perspektive <span style={{ color: "#C9A84C" }}>Ausland</span></div>
              <p className="pa-footer-desc">Die deutschsprachige Plattform für internationale Wohnsitzverlagerung, Plan B und Strukturen außerhalb der EU.</p>
            </div>
            {[
              { t: "Themen", links: [
                ["Auswandern","https://themen.perspektiveausland.com/themen/auswandern"],
                ["Plan B Residence","https://themen.perspektiveausland.com/themen/plan-b-residence"],
                ["Zweitpass","https://themen.perspektiveausland.com/themen/zweitpass"],
                ["Vermögenssicherung","https://themen.perspektiveausland.com/themen/vermoegenssicherung"],
                ["Perpetual Traveling","https://themen.perspektiveausland.com/themen/perpetual-traveling"],
                ["Krypto","https://themen.perspektiveausland.com/themen/krypto"],
                ["Überwachungsstaat EU","https://themen.perspektiveausland.com/themen/ueberwachungsstaat-eu"],
                ["Schutz vor Krieg","https://themen.perspektiveausland.com/themen/schutz-vor-krieg-und-wehrpflicht"],
              ]},
              { t: "Plattform", links: [
                ["YouTube","https://www.youtube.com/c/PerspektiveAuslandPodcast"],
                ["Der Club","https://nhc.perspektiveausland.com/club"],
                ["Veranstaltungen","https://events.perspektiveausland.com/"],
                ["Newsletter","https://verteiler.perspektiveausland.com/"],
              ]},
              { t: "Kontakt", links: [
                ["Erstgespräch buchen","https://mandatierung.perspektiveausland.com/"],
                ["Kontakt","https://www.perspektiveausland.com/kontakt"],
                ["Sebastian Sauerborn","https://www.sebsauerborn.com"],
              ]},
            ].map((col, i) => (
              <div key={i}>
                <div className="pa-footer-col-title">{col.t}</div>
                <div className="pa-footer-links">
                  {col.links.map(([l,h]) => <a key={l} href={h} className="pa-footer-link">{l}</a>)}
                </div>
              </div>
            ))}
          </div>
          <div className="pa-footer-bottom">
            <span className="pa-footer-copy">© {new Date().getFullYear()} Perspektive Ausland · Andere reden. Wir setzen es um.</span>
            <div className="pa-footer-legal">
              <a href="https://www.perspektiveausland.com/datenschutz">Datenschutz</a>
              <a href="https://www.perspektiveausland.com/impressum">Impressum</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

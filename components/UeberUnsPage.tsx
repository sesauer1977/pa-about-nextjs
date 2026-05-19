"use client";

/**
 * PERSPEKTIVE AUSLAND — ÜBER UNS PAGE
 * Design: Klassischer Reisejournalismus trifft Private Banking
 * Farben: Marineblau #0B1C2D | Elfenbein #FAF7F2 | Mattgold #C9A84C
 * Fonts: Cormorant Garamond (Headlines) | Crimson Pro (Body) | Montserrat (Labels)
 * Responsive: Mobile-first, single column < 768px, two columns >= 768px
 */

import { useEffect, useRef, useState } from "react";

const IMAGES = {
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663489425504/SEVjg9oq8Re7WUYduAWprk/hero_world_map_dark-59qpgCDFCoYYWebeA8gpNW.webp",
  freiburg: "https://d2xsxph8kpxj0f.cloudfront.net/310519663489425504/SEVjg9oq8Re7WUYduAWprk/freiburg_black_forest-TfcrE6gWe9jE8txXS3wVVv.webp",
  london: "https://d2xsxph8kpxj0f.cloudfront.net/310519663489425504/SEVjg9oq8Re7WUYduAWprk/london_city_dusk-T7gtmCUFjrgCTkzN4QWCGb.webp",
  texas: "https://d2xsxph8kpxj0f.cloudfront.net/310519663489425504/SEVjg9oq8Re7WUYduAWprk/texas_ranch_sunrise-HQVq2TYPfGwUyWudb7Z7H8.webp",
  dubai: "https://d2xsxph8kpxj0f.cloudfront.net/310519663489425504/SEVjg9oq8Re7WUYduAWprk/dubai_singapore_skyline-VAaxKDsd9J2Tiji5gCxNFA.webp",
  portrait: "https://d2xsxph8kpxj0f.cloudfront.net/310519663489425504/P3TXF7amc3KgBxPe5qp4Jr/sebastian_portrait_16x9_v2_31e9de34.webp",
};

const RESPONSIVE_CSS = `
  :root { --gold: #C9A84C; --navy: #0B1C2D; --ivory: #FAF7F2; }
  *, *::before, *::after { box-sizing: border-box; }
  html { overflow-x: hidden; max-width: 100%; }
  body { margin: 0; padding: 0; background: var(--ivory); overflow-x: hidden; max-width: 100%; }



  /* HERO */
  .pa-hero { position: relative; height: 100vh; min-height: 560px; overflow: hidden; display: flex; align-items: center; width: 100%; }
  .pa-hero-bg { position: absolute; inset: 0; background-size: cover; background-position: center; will-change: transform; }
  .pa-hero-overlay { position: absolute; inset: 0; background: linear-gradient(to right, rgba(11,28,45,0.9) 50%, rgba(11,28,45,0.35) 100%); }
  .pa-hero-content { position: relative; z-index: 2; width: 100%; max-width: 1280px; margin: 0 auto; padding: 2rem 1.5rem; }
  .pa-hero-headline { font-family: 'Cormorant Garamond', serif; font-size: clamp(2.4rem, 8vw, 5.5rem); font-weight: 700; color: var(--ivory); line-height: 1.05; margin: 0 0 1.25rem; display: block; width: 100%; }
  .pa-hero p { font-family: 'Crimson Pro', serif; font-size: clamp(1rem, 2.5vw, 1.3rem); color: rgba(250,247,242,0.85); line-height: 1.7; margin: 0 0 2rem; max-width: 520px; }
  .pa-hero-btns { display: flex; gap: 0.75rem; flex-wrap: wrap; }
  .pa-btn-primary { font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--navy); background: var(--gold); padding: 13px 24px; text-decoration: none; display: inline-block; }
  .pa-btn-primary:hover { background: #b8943d; }
  .pa-btn-outline { font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ivory); border: 1px solid rgba(250,247,242,0.4); padding: 13px 24px; text-decoration: none; display: inline-block; }
  .pa-btn-outline:hover { border-color: var(--gold); }
  .pa-scroll-hint { position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 6px; transition: opacity 0.3s; }
  .pa-scroll-hint span { font-family: 'Montserrat', sans-serif; font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(250,247,242,0.45); }
  .pa-scroll-line { width: 1px; height: 36px; background: linear-gradient(to bottom, rgba(201,168,76,0.8), transparent); }

  /* STATS */
  .pa-stats { background: var(--navy); border-top: 1px solid rgba(201,168,76,0.2); width: 100%; overflow-x: hidden; }
  .pa-stats-grid { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(110px, 1fr)); width: 100%; }
  .pa-stat { text-align: center; padding: 1.5rem 0.75rem; border-right: 1px solid rgba(201,168,76,0.1); }
  .pa-stat-num { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem, 4vw, 3.5rem); font-weight: 700; color: var(--gold); line-height: 1; margin-bottom: 0.4rem; }
  .pa-stat-label { font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ivory); }
  .pa-stat-sub { font-family: 'Crimson Pro', serif; font-size: 13px; color: rgba(250,247,242,0.5); font-style: italic; }

  /* CHAPTER LABEL */
  .pa-chapter-label { display: flex; align-items: center; gap: 10px; margin-bottom: 1.5rem; }
  .pa-chapter-num { font-family: 'Montserrat', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.2em; color: var(--gold); text-transform: uppercase; }
  .pa-chapter-line { height: 1px; width: 36px; background: var(--gold); opacity: 0.6; }
  .pa-chapter-title { font-family: 'Montserrat', sans-serif; font-size: 10px; font-weight: 600; letter-spacing: 0.15em; color: var(--gold); text-transform: uppercase; opacity: 0.8; }

  /* SECTION PADDING */
  .pa-section { padding: 5rem 1.5rem; width: 100%; }
  .pa-section-dark { background: var(--navy); }
  .pa-section-light { background: var(--ivory); }
  .pa-inner { max-width: 1280px; margin: 0 auto; }

  /* TWO-COL GRID — stacks on mobile */
  .pa-grid-2 { display: grid; grid-template-columns: 1fr; gap: 2.5rem; width: 100%; }
  @media (min-width: 768px) {
    .pa-grid-2 { grid-template-columns: 1fr 1fr; gap: 4rem; }
  }
  .pa-grid-2-wide { display: grid; grid-template-columns: 1fr; gap: 2.5rem; width: 100%; }
  @media (min-width: 768px) {
    .pa-grid-2-wide { grid-template-columns: 1fr 1.5fr; gap: 4rem; }
  }
  .pa-grid-2-wide-r { display: grid; grid-template-columns: 1fr; gap: 2.5rem; width: 100%; }
  @media (min-width: 768px) {
    .pa-grid-2-wide-r { grid-template-columns: 1.5fr 1fr; gap: 4rem; }
  }
  .pa-grid-portrait { display: grid; grid-template-columns: 1fr; gap: 2.5rem; align-items: center; width: 100%; }
  @media (min-width: 768px) {
    .pa-grid-portrait { grid-template-columns: 1fr 1.2fr; gap: 4rem; }
  }

  /* TYPOGRAPHY */
  .pa-h2-light { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.8rem, 4vw, 3.2rem); font-weight: 700; color: var(--ivory); line-height: 1.15; margin: 0 0 1.5rem; }
  .pa-h2-dark { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.8rem, 4vw, 3.2rem); font-weight: 700; color: var(--navy); line-height: 1.15; margin: 0 0 1.5rem; }
  .pa-h2-center { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.8rem, 4vw, 3.5rem); font-weight: 700; color: var(--ivory); line-height: 1.15; margin: 0 0 1rem; text-align: center; }
  .pa-body-light { font-family: 'Crimson Pro', serif; font-size: 1.15rem; line-height: 1.85; color: rgba(250,247,242,0.82); margin: 0 0 1.25rem; }
  .pa-body-dark { font-family: 'Crimson Pro', serif; font-size: 1.15rem; line-height: 1.85; color: #2C2C2C; margin: 0 0 1.25rem; }
  .pa-gold { color: var(--gold); }
  .pa-italic { font-style: italic; }
  .pa-link-dark { color: var(--navy); font-weight: 700; text-decoration: underline; text-decoration-color: var(--gold); text-underline-offset: 3px; }
  .pa-link-gold { color: var(--gold); text-decoration: none; border-bottom: 1px solid rgba(201,168,76,0.4); padding-bottom: 1px; }
  .pa-link-gold:hover { border-color: var(--gold); }
  .pa-blockquote { border-left: 3px solid var(--gold); padding-left: 1.25rem; font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; font-style: italic; color: var(--navy); line-height: 1.55; margin: 0; }
  .pa-blockquote-light { border-left: 3px solid var(--gold); padding-left: 1.25rem; font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; font-style: italic; color: var(--ivory); line-height: 1.55; margin: 0; }
  .pa-divider { width: 40px; height: 2px; background: var(--gold); margin-bottom: 1.5rem; }
  .pa-year-label { font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold); }

  /* LANDSCAPE IMAGES */
  .pa-landscape { position: relative; overflow: hidden; width: 100%; }
  .pa-landscape-bg { height: 380px; background-size: cover; background-position: center; background-attachment: scroll; position: relative; width: 100%; }
  @media (min-width: 768px) { .pa-landscape-bg { height: 520px; background-attachment: fixed; } }
  .pa-landscape-overlay-b { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(11,28,45,0.3) 0%, rgba(11,28,45,0.75) 100%); }
  .pa-landscape-overlay-r { position: absolute; inset: 0; background: linear-gradient(to right, rgba(11,28,45,0.85) 40%, rgba(11,28,45,0.3) 100%); }
  .pa-landscape-overlay-l { position: absolute; inset: 0; background: linear-gradient(to left, rgba(11,28,45,0.85) 40%, rgba(11,28,45,0.3) 100%); }
  .pa-landscape-caption { position: absolute; bottom: 2rem; left: 1.5rem; right: 1.5rem; }
  .pa-landscape-caption-r { position: absolute; inset: 0; display: flex; align-items: center; justify-content: flex-end; padding: 0 1.5rem; }
  .pa-landscape-caption-c { position: absolute; inset: 0; display: flex; align-items: center; padding: 0 1.5rem; }
  .pa-coords { font-family: 'Montserrat', sans-serif; font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(201,168,76,0.7); margin-bottom: 0.5rem; }
  .pa-landscape-h { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.5rem, 4vw, 3rem); font-weight: 700; color: var(--ivory); line-height: 1.1; max-width: 560px; margin: 0; }

  /* PORTRAIT */
  .pa-portrait-wrap { position: relative; width: 100%; overflow: hidden; }
  .pa-portrait-wrap img { width: 100%; max-width: 100%; height: auto; display: block; filter: brightness(0.95) contrast(1.05); }
  .pa-portrait-fade { position: absolute; bottom: -1px; left: 0; right: 0; height: 100px; background: linear-gradient(to top, var(--navy), transparent); }
  .pa-portrait-credit { position: absolute; bottom: 1.25rem; left: 1.25rem; font-family: 'Montserrat', sans-serif; font-size: 9px; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(201,168,76,0.7); }

  /* TIMELINE BOX */
  .pa-timeline { background: rgba(201,168,76,0.08); border: 1px solid rgba(201,168,76,0.2); padding: 2rem; margin-top: 0; }
  @media (min-width: 768px) { .pa-timeline { margin-top: 3rem; } }
  .pa-timeline-title { font-family: 'Montserrat', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 1.25rem; }
  .pa-timeline-row { display: flex; gap: 1rem; padding-bottom: 0.875rem; margin-bottom: 0.875rem; border-bottom: 1px solid rgba(201,168,76,0.1); }
  .pa-timeline-row:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
  .pa-timeline-year { font-family: 'Montserrat', sans-serif; font-size: 10px; font-weight: 700; color: var(--gold); min-width: 44px; }
  .pa-timeline-city { font-family: 'Crimson Pro', serif; font-size: 1rem; font-weight: 700; color: var(--ivory); }
  .pa-timeline-desc { font-family: 'Crimson Pro', serif; font-size: 0.9rem; color: rgba(250,247,242,0.55); font-style: italic; }

  /* EXPERTISE CARDS */
  .pa-cards { display: grid; grid-template-columns: 1fr; gap: 1.25rem; width: 100%; }
  @media (min-width: 640px) { .pa-cards { grid-template-columns: 1fr 1fr; } }
  @media (min-width: 1024px) { .pa-cards { grid-template-columns: repeat(3, 1fr); } }
  .pa-card { background: #fff; border: 1px solid rgba(11,28,45,0.08); padding: 1.75rem; transition: box-shadow 0.3s, transform 0.3s; }
  .pa-card:hover { box-shadow: 0 8px 32px rgba(11,28,45,0.12); transform: translateY(-4px); }
  .pa-card-icon { font-size: 1.6rem; margin-bottom: 0.875rem; }
  .pa-card-title { font-family: 'Cormorant Garamond', serif; font-size: 1.35rem; font-weight: 700; color: var(--navy); margin: 0 0 0.625rem; line-height: 1.3; }
  .pa-card-desc { font-family: 'Crimson Pro', serif; font-size: 1.05rem; line-height: 1.7; color: #444; margin: 0 0 1.1rem; }
  .pa-card-link { font-family: 'Montserrat', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold); text-decoration: none; border-bottom: 1px solid rgba(201,168,76,0.3); padding-bottom: 1px; }

  /* BELIEFS GRID */
  .pa-beliefs { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
  @media (min-width: 640px) { .pa-beliefs { grid-template-columns: 1fr 1fr; } }
  .pa-belief { border-top: 1px solid rgba(201,168,76,0.2); padding-top: 1.25rem; }
  .pa-belief-title { font-family: 'Montserrat', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold); margin-bottom: 0.625rem; }
  .pa-belief-text { font-family: 'Crimson Pro', serif; font-size: 1.05rem; line-height: 1.75; color: rgba(250,247,242,0.75); margin: 0; }

  /* PLAN B STEPS */
  .pa-steps { display: flex; flex-direction: column; gap: 0; }
  .pa-step { display: flex; gap: 1.25rem; padding-bottom: 1.25rem; margin-bottom: 1.25rem; border-bottom: 1px solid rgba(11,28,45,0.08); }
  .pa-step:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
  .pa-step-num { font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-weight: 700; color: var(--gold); opacity: 0.6; min-width: 44px; line-height: 1; padding-top: 4px; }
  .pa-step-title { font-family: 'Cormorant Garamond', serif; font-size: 1.15rem; font-weight: 700; color: var(--navy); margin: 0 0 0.2rem; }
  .pa-step-desc { font-family: 'Crimson Pro', serif; font-size: 1rem; line-height: 1.6; color: #555; margin: 0; }

  /* CTA */
  .pa-cta { background: var(--navy); padding: 5rem 1.5rem; border-top: 1px solid rgba(201,168,76,0.2); text-align: center; }
  .pa-cta-inner { max-width: 720px; margin: 0 auto; }
  .pa-cta-label { font-family: 'Montserrat', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 1.25rem; }
  .pa-cta h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.8rem, 5vw, 3.5rem); font-weight: 700; color: var(--ivory); line-height: 1.1; margin: 0 0 1.25rem; }
  .pa-cta p { font-family: 'Crimson Pro', serif; font-size: 1.15rem; line-height: 1.8; color: rgba(250,247,242,0.75); margin: 0 0 2.5rem; }
  .pa-cta-btns { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; }

  /* FOOTER */
  .pa-footer { background: #060E17; padding: 3.5rem 1.5rem 2rem; border-top: 1px solid rgba(201,168,76,0.15); width: 100%; overflow-x: hidden; display: none; }
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

  /* FADE IN ANIMATION */
  .pa-fade { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease-out, transform 0.7s ease-out; }
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

  const navBg = scrollY > 60 ? "rgba(11,28,45,0.97)" : "transparent";
  const navBorder = scrollY > 60 ? "1px solid rgba(201,168,76,0.2)" : "none";
  const heroParallax = scrollY * 0.3;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: RESPONSIVE_CSS }} />
      <div style={{ background: "#FAF7F2", fontFamily: "'Crimson Pro', serif", overflowX: "hidden" }}>



        {/* HERO */}
        <section className="pa-hero">
          <div className="pa-hero-bg" style={{ backgroundImage: `url(${IMAGES.hero})`, transform: `translateY(${heroParallax}px)` }} />
          <div className="pa-hero-overlay" />
          <div className="pa-hero-content">
            <div style={{ maxWidth: "600px" }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1.25rem" }}>Über uns</div>
              <h1 className="pa-hero-headline">
                Mehr Geld.<br />Mehr Freiheit.<br /><em style={{ color: "#C9A84C" }}>Weniger Staat.</em>
              </h1>
              <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: "clamp(1rem, 2.5vw, 1.3rem)", color: "rgba(250,247,242,0.85)", lineHeight: 1.7, margin: "0 0 2rem", maxWidth: "520px" }}>
                Wer aus dem deutschsprachigen Raum auswandern will, steht vor Fragen, die im Heimatland nie eine Rolle gespielt haben. Wir beantworten sie. Seit über zwei Jahrzehnten.
              </p>
              <div className="pa-hero-btns">
                <a href="https://www.perspektiveausland.com/loesungen" className="pa-btn-primary">Wie wir helfen</a>
                <a href="https://www.perspektiveausland.com/podcast" className="pa-btn-outline">Zum Podcast</a>
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
              { n: "25+", l: "Jahre Erfahrung", s: "seit 2000 im Ausland" },
              { n: "40+", l: "Jurisdiktionen", s: "analysiert & beraten" },
              { n: "1.000+", l: "Mandanten", s: "erfolgreich umgezogen" },
              { n: "144k+", l: "Abonnenten", s: "YouTube & Podcast" },
              { n: "6", l: "Länder", s: "selbst gelebt" },
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
            <div className="pa-grid-2">
              <Fade>
                <div className="pa-chapter-label"><span className="pa-chapter-num">01</span><div className="pa-chapter-line" /><span className="pa-chapter-title">Die Plattform</span></div>
                <h2 className="pa-h2-dark">Andere reden.<br /><em className="pa-gold">Wir setzen es um.</em></h2>
              </Fade>
              <Fade delay={1}>
                <p className="pa-body-dark">Wer aus dem deutschsprachigen Raum auswandern will, sieht sich plötzlich mit Fragen konfrontiert, die im Heimatland nie eine Rolle gespielt haben. Wer bleiben will, aber Optionen für den Ernstfall aufbauen möchte, steht vor genau denselben Fragen.</p>
                <p className="pa-body-dark"><a href="https://www.perspektiveausland.com" className="pa-link-dark">Perspektive Ausland</a> ist die Plattform, auf der diese Fragen beantwortet werden. Im <a href="https://www.perspektiveausland.com/podcast" className="pa-link-dark">Podcast</a> und auf <a href="https://www.youtube.com/c/PerspektiveAuslandPodcast" className="pa-link-dark">YouTube</a>. In der <a href="https://www.perspektiveausland.com/der-club" className="pa-link-dark">Community</a>. Und für unsere Mandanten in der konkreten Umsetzung — Strukturen, Anmeldungen, Konten, Pässe.</p>
                <p className="pa-body-dark">Hinter Perspektive Ausland steht ein Beraterteam mit über zwei Jahrzehnten Erfahrung in <a href="https://www.perspektiveausland.com/themen/steuerplanung" className="pa-link-dark">internationaler Steuerplanung</a>, <a href="https://www.perspektiveausland.com/themen/wohnsitzverlagerung" className="pa-link-dark">Wohnsitzverlagerung</a> und <a href="https://www.perspektiveausland.com/themen/vermoegenssicherung" className="pa-link-dark">Vermögenssicherung</a>.</p>
                <blockquote className="pa-blockquote">"Länderauswahl, internationales Steuerrecht, Wegzugsbesteuerung, Firmenstrukturen im Ausland, Aufenthaltstitel, Banking außerhalb der EU, Vermögenssicherung — das sind keine abstrakten Konzepte. Das ist unser Alltag."</blockquote>
              </Fade>
            </div>
          </div>
        </section>

        {/* 02 — DER GRÜNDER */}
        <section className="pa-section pa-section-dark">
          <div className="pa-inner">
            <div className="pa-grid-portrait">
              <Fade>
                <div className="pa-portrait-wrap">
                  <img src={IMAGES.portrait} alt="Sebastian Sauerborn — Gründer von Perspektive Ausland" />
                  <div className="pa-portrait-fade" />
                  <div className="pa-portrait-credit">Sebastian Sauerborn — London & Austin, TX</div>
                </div>
              </Fade>
              <Fade delay={1}>
                <div className="pa-chapter-label"><span className="pa-chapter-num">02</span><div className="pa-chapter-line" /><span className="pa-chapter-title">Der Gründer</span></div>
                <h2 className="pa-h2-light">Ich habe nicht beraten,<br /><em className="pa-gold">ich habe es gelebt.</em></h2>
                <p className="pa-body-light">Ich bin Sebastian Sauerborn. Geboren 1977 in Freiburg im Breisgau, aufgewachsen im Hotzenwald nahe der Schweizer Grenze. Im Jahr 2000 habe ich Deutschland verlassen — nicht als Experiment, sondern als Entscheidung. Eine, die ich nie bereut habe.</p>
                <p className="pa-body-light">Seitdem habe ich in sechs Ländern gelebt: der Schweiz, England, den USA, Malta, Irland und Schottland. Ich habe eine Ranch in Texas besessen, ein Beratungsunternehmen in der City of London aufgebaut, und ich habe mehr Steuerrechtsordnungen von innen gesehen als die meisten Berater von außen kennen.</p>
                <p className="pa-body-light" style={{ marginBottom: "1.75rem" }}>Was ich meinen Mandanten rate, habe ich selbst durchlebt. Das ist kein Marketing. Das ist der Unterschied.</p>
                <a href="https://www.sebsauerborn.com/about" className="pa-link-gold">Vollständige Biografie lesen →</a>
              </Fade>
            </div>
          </div>
        </section>

        {/* FREIBURG IMAGE */}
        <div className="pa-landscape">
          <div className="pa-landscape-bg" style={{ backgroundImage: `url(${IMAGES.freiburg})`, backgroundPosition: "center 40%" }}>
            <div className="pa-landscape-overlay-b" />
            <div className="pa-landscape-caption">
              <div className="pa-coords">47°59&apos;N 7°51&apos;E — Schwarzwald, Deutschland</div>
              <h3 className="pa-landscape-h">Wo alles begann.</h3>
            </div>
          </div>
        </div>

        {/* 03 — HERKUNFT */}
        <section className="pa-section pa-section-light">
          <div className="pa-inner">
            <div className="pa-grid-2-wide">
              <Fade>
                <div className="pa-chapter-label"><span className="pa-chapter-num">03</span><div className="pa-chapter-line" /><span className="pa-chapter-title">Herkunft</span></div>
                <h2 className="pa-h2-dark">Freiburg, der Hotzenwald,<br />und drei Lehrmeister</h2>
                <div className="pa-divider" />
                <div className="pa-year-label">1977 — 2000</div>
              </Fade>
              <Fade delay={1}>
                <p className="pa-body-dark">Ich bin das älteste von acht Kindern. Mein Vater Martin war Sozialarbeiter, Unternehmer und veröffentlichter Romanautor — ein katholischer Bohemien, der alles selbst in die Hand nehmen wollte. Als ich etwa vier Jahre alt war, zog die Familie in ein altes Pfarrhaus im Hotzenwald, wo mein Vater einen fast einen Hektar großen Gemüsegarten bewirtschaftete. Ich kaufte täglich frische Milch und Eier beim Nachbauern. Diese frühe Verbindung zur Erde, zum Handwerk, zum Selbstgemachten — sie hat mich nie losgelassen.</p>
                <p className="pa-body-dark">Meine prägendsten intellektuellen Einflüsse der Kindheit? Karl May, Ronald Reagan und die Amerika-Träume meines Vaters. Ich nenne sie Karl, Lex und Ronnie. Sie haben mir beigebracht, groß zu denken.</p>
                <p className="pa-body-dark">Mit fünfzehn Jahren, auf einem Pfadfinderlager, wurde sichtbar, was mich für den Rest meines Lebens antreiben würde: der Wille, nicht zu warten, sondern Ereignisse zu gestalten. Mit siebzehn begann ich in der Firma meines Vaters zu arbeiten — zunächst als Softwareentwickler nach einem zehntägigen Intensivkurs in Berlin.</p>
                <p className="pa-body-dark" style={{ marginBottom: 0 }}>Deutschland war mein Ausgangspunkt. Es war nie mein Ziel.</p>
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
                <div className="pa-coords">51°30&apos;N 0°7&apos;W — City of London, England</div>
                <h3 className="pa-landscape-h">Die Stadt, die aus mir einen Unternehmer machte.</h3>
              </div>
            </div>
          </div>
        </div>

        {/* 04 — ZÜRICH & LONDON */}
        <section className="pa-section pa-section-dark">
          <div className="pa-inner">
            <div className="pa-grid-2-wide-r">
              <Fade>
                <div className="pa-chapter-label"><span className="pa-chapter-num">04</span><div className="pa-chapter-line" /><span className="pa-chapter-title">Zürich & London</span></div>
                <h2 className="pa-h2-light">PwC Zürich. Allianz London.<br /><em className="pa-gold">Und dann: Unabhängigkeit.</em></h2>
                <p className="pa-body-light">In meinen frühen Zwanzigern zog ich nach Zürich und trat bei PwC als IT-Berater ein — ein viereinhalbjähriger Einsatz, der meinen internationalen Horizont formte und meine technische Disziplin schärfte. Die Schweiz lehrte mich Präzision, Diskretion und den Wert einer Jurisdiktion, die ihre Bürger nicht als Melkkühe betrachtet.</p>
                <p className="pa-body-light">Dann kam London. Ein Angebot von Allianz Insurance. Ich verabschiedete mich von meiner Familie in der Schweiz und flog an einem Montagmorgen nach London. Diese Entscheidung legte das Fundament meiner Karriere. In der City of London wurde ich schnell befördert und baute mein professionelles Netzwerk mit Absicht auf.</p>
                <p className="pa-body-light">Nach einem Jahrzehnt in der Konzernwelt wechselte ich in die vollständige Unabhängigkeit. Ich gründete mein eigenes Beratungsunternehmen in der City of London: zunächst eine Buchhaltungsfirma, die zu einer breiten Gruppe heranwuchs, die Steuerberatung, Unternehmensberatung, Filmproduktion und Podcasting umfasst.</p>
                <p className="pa-body-light" style={{ marginBottom: 0 }}>Im September 2008 eröffnete ich ein Büro in Miami. Während die Finanzkrise die Welt erschütterte, sah ich Chancen, wo andere Trümmer sahen.</p>
              </Fade>
              <Fade delay={1}>
                <div className="pa-timeline">
                  <div className="pa-timeline-title">Stationen</div>
                  {[
                    ["2000","Zürich","PwC — IT-Consulting"],
                    ["2003","London","Allianz Insurance"],
                    ["2006","London","Eigene Kanzlei gegründet"],
                    ["2008","Miami","US-Expansion"],
                    ["2011","Austin, TX","Vaquera Ranch"],
                    ["2014","London","Rückkehr & Aufbau"],
                    ["2018","Malta & Irland","Europäische Expansion"],
                    ["heute","London & Austin","Perspektive Ausland"],
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
          <div className="pa-landscape-bg" style={{ backgroundImage: `url(${IMAGES.texas})`, backgroundPosition: "center 30%", height: "420px" }}>
            <div className="pa-landscape-overlay-b" />
            <div className="pa-landscape-caption">
              <div className="pa-coords">30°5&apos;N 97°3&apos;W — Bastrop County, Texas</div>
              <h3 className="pa-landscape-h">Texas hat mich gebrochen.<br /><em style={{ color: "#C9A84C" }}>Und gehärtet.</em></h3>
            </div>
          </div>
        </div>

        {/* 05 — TEXAS */}
        <section className="pa-section pa-section-light">
          <div className="pa-inner">
            <div className="pa-grid-2-wide">
              <Fade>
                <div className="pa-chapter-label"><span className="pa-chapter-num">05</span><div className="pa-chapter-line" /><span className="pa-chapter-title">Texas</span></div>
                <h2 className="pa-h2-dark">Die Vaquera Ranch —<br />das schönste Kapitel</h2>
                <div className="pa-divider" />
                <div className="pa-year-label">2011 — 2013</div>
              </Fade>
              <Fade delay={1}>
                <p className="pa-body-dark">Im Sommer 2010, auf einer Reise in der Nähe von Austin, Texas — die Landschaft, das Licht, die Weite davon — ließ es mich nicht mehr los. Im Frühjahr 2011 kauften wir die Vaquera Ranch in Bastrop County, etwa 70 Kilometer südöstlich von Austin: ein Farmhaus, eine rote Scheune, ein Cottage, ein großer Teich, eine Mischung aus Weide und Wald.</p>
                <p className="pa-body-dark">Es war die schönste Zeit meines Lebens. Ich arbeitete ab fünf Uhr morgens in einer Hütte auf dem Grundstück, während die Kinder auf der Ranch lebten und nach dem One Day Academy-Modell unterrichtet wurden.</p>
                <p className="pa-body-dark">Im Juli 2012 rief meine Tante aus Deutschland an. Mein Vater Martin war gestorben — 59 Jahre alt, Aortenaneurysma. Ich flog nach Freiburg zur Beerdigung. Meine Brüder und ich trugen den Sarg.</p>
                <p className="pa-body-dark">Zurück in Texas zerbrach die Ehe. Ich stand allein mit sieben Kindern da. Texas hatte mich gebrochen. Aber es hatte mich auch gehärtet. Ich kehrte nach London zurück und baute alles neu auf — diesmal mit mehr Klarheit darüber, was zählt und was nicht.</p>
                <blockquote className="pa-blockquote">"Das Land, die Tiere, die Idee eines selbstversorgenden Lebens — sie haben mich nie losgelassen. In absehbarer Zeit werde ich eine neue Ranch erwerben."</blockquote>
              </Fade>
            </div>
          </div>
        </section>

        {/* 06 — PERSPEKTIVE AUSLAND ENTSTEHT */}
        <section className="pa-section pa-section-dark">
          <div className="pa-inner">
            <Fade>
              <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                <div className="pa-chapter-label" style={{ justifyContent: "center" }}><span className="pa-chapter-num">06</span><div className="pa-chapter-line" /><span className="pa-chapter-title">Die Plattform entsteht</span></div>
                <h2 className="pa-h2-center">Wie aus einer Idee<br /><em className="pa-gold">die wichtigste deutschsprachige Plattform</em><br />zum Thema Auswandern wurde</h2>
              </div>
            </Fade>
            <div className="pa-grid-2">
              <Fade delay={1}>
                <p className="pa-body-light">Nach meiner Rückkehr nach London baute ich die STM Corporate Group zu einer der führenden deutschsprachigen Kanzleien für internationale Steueroptimierung, Firmengründung im Ausland und Auswanderungsberatung auf. Die Nachfrage war enorm — und ich merkte, dass die meisten Menschen nicht einmal die richtigen Fragen stellten, weil sie nicht wussten, was möglich ist.</p>
                <p className="pa-body-light" style={{ marginBottom: 0 }}>So entstand <a href="https://www.perspektiveausland.com" className="pa-link-gold">Perspektive Ausland</a> — zunächst als Podcast, dann als YouTube-Kanal, dann als vollständige Plattform mit Community, Veranstaltungen und konkreter Beratung. Heute ist es die meistgehörte deutschsprachige Ressource für Auswanderer und Plan-B-Denker: über 144.000 Abonnenten, regelmäßig viral.</p>
              </Fade>
              <Fade delay={2}>
                <p className="pa-body-light">Co-moderiert wird der <a href="https://www.perspektiveausland.com/podcast" className="pa-link-gold">Podcast</a> mit Daniel Taborek — einem der schärfsten Köpfe im deutschsprachigen Raum zu Fragen der internationalen Steuerplanung und Wohnsitzverlagerung. Gemeinsam decken wir das gesamte Spektrum ab: von der ersten Überlegung bis zur vollständigen Umsetzung.</p>
                <p className="pa-body-light" style={{ marginBottom: 0 }}>Perspektive Ausland ist keine Theorie. Es ist die Destillation von über 25 Jahren gelebter Erfahrung in mehr als 40 Jurisdiktionen — aufbereitet für <a href="https://www.perspektiveausland.com/themen/unternehmer" className="pa-link-gold">Unternehmer</a>, <a href="https://www.perspektiveausland.com/themen/investoren" className="pa-link-gold">Investoren</a> und <a href="https://www.perspektiveausland.com/themen/freiberufler" className="pa-link-gold">Freiberufler</a> aus dem deutschsprachigen Raum.</p>
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
                <div className="pa-coords">25°12&apos;N 55°16&apos;E — Dubai, Vereinigte Arabische Emirate</div>
                <h3 className="pa-landscape-h" style={{ textAlign: "right" }}>40+ Jurisdiktionen.<br /><em style={{ color: "#C9A84C" }}>Eine Überzeugung.</em></h3>
              </div>
            </div>
          </div>
        </div>

        {/* 07 — EXPERTISE */}
        <section className="pa-section pa-section-light">
          <div className="pa-inner">
            <Fade>
              <div style={{ marginBottom: "3rem" }}>
                <div className="pa-chapter-label"><span className="pa-chapter-num">07</span><div className="pa-chapter-line" /><span className="pa-chapter-title">Expertise</span></div>
                <h2 className="pa-h2-dark">Was wir wirklich können —<br /><em className="pa-gold">und was nicht</em></h2>
              </div>
            </Fade>
            <div className="pa-cards">
              {[
                { icon: "⚖️", title: "Internationale Steuerplanung", desc: "Territoriale vs. weltweite Besteuerung, Wegzugsbesteuerung, Exit-Strategien, Non-Dom-Status, CRS/FATCA-konforme Strukturen. Wir kennen die Unterschiede zwischen dem, was Berater versprechen, und dem, was tatsächlich funktioniert.", link: "https://www.perspektiveausland.com/themen/steuerplanung", lt: "Mehr zur Steuerplanung" },
                { icon: "🏠", title: "Wohnsitzverlagerung", desc: "Dubai, Malta, Singapur, Schweiz, Paraguay, Panama, Georgien, Mauritius, Thailand, Portugal, Irland, Philippinen — wir kennen die Realität dieser Jurisdiktionen, nicht nur die Broschüren.", link: "https://www.perspektiveausland.com/themen/wohnsitz", lt: "Länder im Überblick" },
                { icon: "🏢", title: "Firmenstrukturen im Ausland", desc: "US-LLCs für Nicht-Residenten, Singapur-Gesellschaften, Offshore-Strukturen, Malta-Holdingstrukturen. Wir bauen Strukturen, die rechtlich sauber, steuerlich effizient und langfristig tragfähig sind.", link: "https://www.perspektiveausland.com/themen/firmenstrukturen", lt: "Firmenstrukturen erkunden" },
                { icon: "🛂", title: "Zweitpass & Staatsbürgerschaft", desc: "Karibische Pässe, Malta, Portugal, Schweizer Einbürgerung, Philippinen SRRV — wir erklären den Unterschied zwischen Marketing und Realität.", link: "https://www.perspektiveausland.com/themen/zweitpass", lt: "Zweitpass-Optionen" },
                { icon: "🏦", title: "Banking außerhalb der EU", desc: "Internationale Bankkonten, Kreditkarten außerhalb des EU-Systems, Zugang zu US-Finanzinfrastruktur als Nicht-Resident. Wir navigieren durch das, was nach CRS und FATCA noch möglich ist.", link: "https://www.perspektiveausland.com/themen/banking", lt: "Banking-Lösungen" },
                { icon: "🛡️", title: "Vermögenssicherung", desc: "Diversifikation über Jurisdiktionen, Asset Protection, Strukturen, die Vermögen vor staatlichem Zugriff schützen. Nicht als Rebellion — sondern als vernünftige Planung.", link: "https://www.perspektiveausland.com/themen/vermoegenssicherung", lt: "Vermögen schützen" },
              ].map((c, i) => (
                <Fade key={i}>
                  <div className="pa-card">
                    <div className="pa-card-icon">{c.icon}</div>
                    <h3 className="pa-card-title">{c.title}</h3>
                    <p className="pa-card-desc">{c.desc}</p>
                    <a href={c.link} className="pa-card-link">{c.lt} →</a>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </section>

        {/* 08 — HALTUNG */}
        <section className="pa-section pa-section-dark">
          <div className="pa-inner">
            <div className="pa-grid-2-wide">
              <Fade>
                <div className="pa-chapter-label"><span className="pa-chapter-num">08</span><div className="pa-chapter-line" /><span className="pa-chapter-title">Haltung</span></div>
                <h2 className="pa-h2-light">Was wir glauben —<br /><em className="pa-gold">und warum</em></h2>
              </Fade>
              <Fade delay={1}>
                <div className="pa-beliefs">
                  {[
                    { t: "Über den Staat", b: "Der Staat ist nicht dein Partner — er ist dein größter Gläubiger, dein aufdringlichster Nachbar und potenziell dein Gefängniswärter. Die Antwort ist nicht Rebellion, sondern Ausgang: legal, strukturiert, dauerhaft." },
                    { t: "Über Steuern", b: "Besteuerung über das hinaus, was zur Finanzierung grundlegender öffentlicher Güter notwendig ist, ist Diebstahl. Mehr Steuern zu zahlen als das Gesetz verlangt, ist keine Tugend — es ist Naivität." },
                    { t: "Über Freiheit", b: "Freiheit wird nicht geschenkt — sie wird aufgebaut, erhalten und verteidigt. Sie erfordert Geld, Planung und die Bereitschaft zu handeln, bevor das Fenster sich schließt." },
                    { t: "Über Deutschland", b: "Ich liebe Deutschland, aber ich bin nicht blind für seine Pathologien: Obrigkeitshörigkeit, eine Schuldkultur, die ehrliche Debatten verhindert. Ich bin gegangen — und ich schreibe über diese Entscheidung mit Klarheit und ohne Entschuldigung." },
                  ].map((b, i) => (
                    <div key={i} className="pa-belief">
                      <div className="pa-belief-title">{b.t}</div>
                      <p className="pa-belief-text">{b.b}</p>
                    </div>
                  ))}
                </div>
              </Fade>
            </div>
          </div>
        </section>

        {/* 09 — PLAN B */}
        <section className="pa-section pa-section-light">
          <div className="pa-inner">
            <div className="pa-grid-2">
              <Fade>
                <div className="pa-chapter-label"><span className="pa-chapter-num">09</span><div className="pa-chapter-line" /><span className="pa-chapter-title">Das Framework</span></div>
                <h2 className="pa-h2-dark">Der Plan B —<br /><em className="pa-gold">Sebastians wichtigster intellektueller Beitrag</em></h2>
                <p className="pa-body-dark">Das Plan-B-Konzept ist ein strukturierter, multi-jurisdiktionaler Ansatz für persönliche Souveränität. Es geht nicht darum, Deutschland zu hassen. Es geht darum, Optionen zu haben — bevor du sie brauchst.</p>
                <p className="pa-body-dark">Ein vollständiger Plan B umfasst: einen primären Steuerwohnsitz in einer Niedrigsteuer- oder Territorialbesteuerungsjurisdiktion; einen zweiten Wohnsitz oder eine zweite Staatsbürgerschaft als Backup; Vermögensdiversifikation über Jurisdiktionen; Zugang zu internationalem Banking; und eine physische Präsenzstrategie.</p>
                <a href="https://www.perspektiveausland.com/plan-b" className="pa-btn-primary" style={{ marginTop: "0.5rem" }}>Plan B aufbauen →</a>
              </Fade>
              <Fade delay={1}>
                <div className="pa-steps">
                  {[
                    ["01","Primärer Steuerwohnsitz","Niedrigsteuer- oder Territorialbesteuerungsjurisdiktion — UAE, Malta, Singapur, Schweiz, Paraguay, Panama"],
                    ["02","Zweiter Wohnsitz / Zweitpass","Backup-Jurisdiktion, Reisefreiheit, Sicherheitsnetz für den Ernstfall"],
                    ["03","Vermögensdiversifikation","Assets über mehrere Jurisdiktionen verteilt — kein Single Point of Failure"],
                    ["04","Internationales Banking","Konten außerhalb des EU-Systems, Zugang zu US-Finanzinfrastruktur"],
                    ["05","Physische Präsenzstrategie","183-Tage-Regeln, Tie-Breaker-Tests, dokumentierte Aufenthalte"],
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

        {/* CTA */}
        <div className="pa-cta">
          <div className="pa-cta-inner">
            <Fade>
              <div className="pa-cta-label">Bereit zu handeln</div>
              <h2>Das Fenster ist offen.<br /><em className="pa-gold">Aber nicht für immer.</em></h2>
              <p>Die regulatorischen Fenster für legale Steueroptimierung und Wohnsitzverlagerung schließen sich langsam. Wer jetzt handelt, hat Optionen. Wer wartet, zahlt den Preis.</p>
              <div className="pa-cta-btns">
                <a href="https://www.perspektiveausland.com/termin" className="pa-btn-primary">Erstgespräch buchen</a>
                <a href="https://www.perspektiveausland.com/podcast" className="pa-btn-outline">Podcast hören</a>
                <a href="https://www.perspektiveausland.com/der-club" className="pa-btn-outline">Der Club</a>
              </div>
            </Fade>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="pa-footer">
          <div className="pa-footer-grid">
            <div>
              <div className="pa-footer-brand">Perspektive <span style={{ color: "#C9A84C" }}>Ausland</span></div>
              <p className="pa-footer-desc">Die Plattform für deutschsprachige Unternehmer, Freiberufler und Investoren. Auswandern, Plan B und Strukturen außerhalb der EU.</p>
            </div>
            {[
              { t: "Themen", links: [["Steuerplanung","https://www.perspektiveausland.com/themen/steuerplanung"],["Wohnsitz","https://www.perspektiveausland.com/themen/wohnsitz"],["Zweitpass","https://www.perspektiveausland.com/themen/zweitpass"],["Banking","https://www.perspektiveausland.com/themen/banking"],["Vermögen","https://www.perspektiveausland.com/themen/vermoegenssicherung"]] },
              { t: "Plattform", links: [["Podcast","https://www.perspektiveausland.com/podcast"],["YouTube","https://www.youtube.com/c/PerspektiveAuslandPodcast"],["Der Club","https://www.perspektiveausland.com/der-club"],["Veranstaltungen","https://www.perspektiveausland.com/events"],["Newsletter","https://verteiler.perspektiveausland.com/"]] },
              { t: "Kontakt", links: [["Termin buchen","https://www.perspektiveausland.com/termin"],["Strategie anfragen","https://www.perspektiveausland.com/loesungen"],["kontakt@perspektiveausland.com","mailto:kontakt@perspektiveausland.com"],["sebsauerborn.com","https://www.sebsauerborn.com"]] },
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
            <span className="pa-footer-copy">© {new Date().getFullYear()} Perspektive Ausland. Alle Rechte vorbehalten.</span>
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

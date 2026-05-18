"use client";

/**
 * PERSPEKTIVE AUSLAND — ÜBER UNS PAGE
 * Design: Klassischer Reisejournalismus trifft Private Banking
 * Farben: Marineblau #0B1C2D | Elfenbein #FAF7F2 | Mattgold #C9A84C
 * Fonts: Cormorant Garamond (Headlines) | Crimson Pro (Body) | Montserrat (Labels)
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

function useInView(threshold = 0.15) {
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

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function ChapterLabel({ number, title }: { number: string; title: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "2rem" }}>
      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", color: "#C9A84C", textTransform: "uppercase" as const }}>{number}</span>
      <div style={{ height: "1px", width: "40px", background: "#C9A84C", opacity: 0.6 }} />
      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.15em", color: "#C9A84C", textTransform: "uppercase" as const, opacity: 0.8 }}>{title}</span>
    </div>
  );
}

function StatBlock({ number, label, sublabel }: { number: string; label: string; sublabel?: string }) {
  return (
    <div style={{ textAlign: "center", padding: "1.5rem 1rem" }}>
      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700, color: "#C9A84C", lineHeight: 1, marginBottom: "0.5rem" }}>{number}</div>
      <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#FAF7F2", marginBottom: sublabel ? "0.25rem" : 0 }}>{label}</div>
      {sublabel && <div style={{ fontFamily: "'Crimson Pro', serif", fontSize: "14px", color: "rgba(250,247,242,0.55)", fontStyle: "italic" }}>{sublabel}</div>}
    </div>
  );
}

const linkStyle = (dark = false) => ({
  color: dark ? "#C9A84C" : "#0B1C2D",
  fontWeight: 700,
  textDecoration: "underline",
  textDecorationColor: "#C9A84C",
  textUnderlineOffset: "3px",
});

export default function UeberUnsPage() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const heroParallax = scrollY * 0.35;

  return (
    <div style={{ background: "#FAF7F2", fontFamily: "'Crimson Pro', serif", overflowX: "hidden" }}>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrollY > 60 ? "rgba(11,28,45,0.97)" : "transparent",
        backdropFilter: scrollY > 60 ? "blur(12px)" : "none",
        transition: "background 0.4s ease",
        borderBottom: scrollY > 60 ? "1px solid rgba(201,168,76,0.2)" : "none",
        padding: "0 2rem", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <a href="https://www.perspektiveausland.com" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", fontWeight: 700, color: "#FAF7F2", letterSpacing: "0.02em" }}>
            Perspektive <span style={{ color: "#C9A84C" }}>Ausland</span>
          </span>
        </a>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {[
            { label: "Podcast", href: "https://www.perspektiveausland.com/podcast" },
            { label: "Themen", href: "https://www.perspektiveausland.com/themen" },
            { label: "Der Club", href: "https://www.perspektiveausland.com/der-club" },
            { label: "Lösungen", href: "https://www.perspektiveausland.com/loesungen" },
          ].map(link => (
            <a key={link.label} href={link.href} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "rgba(250,247,242,0.8)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#C9A84C")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(250,247,242,0.8)")}
            >{link.label}</a>
          ))}
          <a href="https://www.perspektiveausland.com/termin" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#0B1C2D", background: "#C9A84C", padding: "8px 18px", textDecoration: "none", transition: "background 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#b8943d")}
            onMouseLeave={e => (e.currentTarget.style.background = "#C9A84C")}
          >Termin buchen</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: "relative", height: "100vh", minHeight: "600px", overflow: "hidden", display: "flex", alignItems: "center" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${IMAGES.hero})`, backgroundSize: "cover", backgroundPosition: "center", transform: `translateY(${heroParallax}px)`, willChange: "transform" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(11,28,45,0.88) 45%, rgba(11,28,45,0.3) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "1280px", margin: "0 auto", padding: "0 2rem", width: "100%" }}>
          <div style={{ maxWidth: "620px" }}>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "#C9A84C", marginBottom: "1.5rem" }}>Über uns</div>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.8rem, 6vw, 5.5rem)", fontWeight: 700, color: "#FAF7F2", lineHeight: 1.05, marginBottom: "1.5rem", letterSpacing: "-0.01em" }}>
              Mehr Geld.<br />Mehr Freiheit.<br /><em style={{ color: "#C9A84C", fontStyle: "italic" }}>Weniger Staat.</em>
            </h1>
            <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: "clamp(1.1rem, 2vw, 1.35rem)", color: "rgba(250,247,242,0.85)", lineHeight: 1.7, marginBottom: "2.5rem", maxWidth: "520px" }}>
              Wer aus dem deutschsprachigen Raum auswandern will, steht vor Fragen, die im Heimatland nie eine Rolle gespielt haben. Wir beantworten sie. Seit über zwei Jahrzehnten.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="https://www.perspektiveausland.com/loesungen" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#0B1C2D", background: "#C9A84C", padding: "14px 28px", textDecoration: "none", display: "inline-block", transition: "background 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#b8943d")}
                onMouseLeave={e => (e.currentTarget.style.background = "#C9A84C")}
              >Wie wir helfen</a>
              <a href="https://www.perspektiveausland.com/podcast" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#FAF7F2", border: "1px solid rgba(250,247,242,0.4)", padding: "14px 28px", textDecoration: "none", display: "inline-block", transition: "border-color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "#C9A84C")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(250,247,242,0.4)")}
              >Zum Podcast</a>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", opacity: scrollY > 50 ? 0 : 1, transition: "opacity 0.3s" }}>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "rgba(250,247,242,0.5)" }}>Scroll</span>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, rgba(201,168,76,0.8), transparent)" }} />
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: "#0B1C2D", borderTop: "1px solid rgba(201,168,76,0.2)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", borderLeft: "1px solid rgba(201,168,76,0.1)" }}>
          {[
            { number: "25+", label: "Jahre Erfahrung", sublabel: "seit 2000 im Ausland" },
            { number: "40+", label: "Jurisdiktionen", sublabel: "analysiert & beraten" },
            { number: "1.000+", label: "Mandanten", sublabel: "erfolgreich umgezogen" },
            { number: "144k+", label: "Abonnenten", sublabel: "YouTube & Podcast" },
            { number: "6", label: "Länder", sublabel: "selbst gelebt" },
          ].map((stat, i) => (
            <div key={i} style={{ borderRight: "1px solid rgba(201,168,76,0.1)" }}>
              <StatBlock {...stat} />
            </div>
          ))}
        </div>
      </section>

      {/* INTRO / MISSION */}
      <section style={{ background: "#FAF7F2", padding: "7rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
            <AnimatedSection>
              <ChapterLabel number="01" title="Die Plattform" />
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, color: "#0B1C2D", lineHeight: 1.15, marginBottom: "2rem", letterSpacing: "-0.01em" }}>
                Andere reden.<br /><em style={{ color: "#C9A84C" }}>Wir setzen es um.</em>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.85, color: "#2C2C2C", marginBottom: "1.5rem" }}>
                Wer aus dem deutschsprachigen Raum auswandern will, sieht sich plötzlich mit Fragen konfrontiert, die im Heimatland nie eine Rolle gespielt haben. Wer bleiben will, aber Optionen für den Ernstfall aufbauen möchte, steht vor genau denselben Fragen.
              </p>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.85, color: "#2C2C2C", marginBottom: "1.5rem" }}>
                <a href="https://www.perspektiveausland.com" style={linkStyle()}>Perspektive Ausland</a> ist die Plattform, auf der diese Fragen beantwortet werden. Im <a href="https://www.perspektiveausland.com/podcast" style={linkStyle()}>Podcast</a> und auf <a href="https://www.youtube.com/c/PerspektiveAuslandPodcast" style={linkStyle()}>YouTube</a>. In der <a href="https://www.perspektiveausland.com/der-club" style={linkStyle()}>Community</a>. Und für unsere Mandanten in der konkreten Umsetzung — Strukturen, Anmeldungen, Konten, Pässe.
              </p>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.85, color: "#2C2C2C", marginBottom: "2rem" }}>
                Hinter Perspektive Ausland steht ein Beraterteam mit über zwei Jahrzehnten Erfahrung in <a href="https://www.perspektiveausland.com/themen/steuerplanung" style={linkStyle()}>internationaler Steuerplanung</a>, <a href="https://www.perspektiveausland.com/themen/wohnsitzverlagerung" style={linkStyle()}>Wohnsitzverlagerung</a> und <a href="https://www.perspektiveausland.com/themen/vermoegenssicherung" style={linkStyle()}>Vermögenssicherung</a>.
              </p>
              <blockquote style={{ borderLeft: "3px solid #C9A84C", paddingLeft: "1.5rem", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontStyle: "italic", color: "#0B1C2D", lineHeight: 1.5, margin: 0 }}>
                "Länderauswahl, internationales Steuerrecht, Wegzugsbesteuerung, Firmenstrukturen im Ausland, Aufenthaltstitel, Banking außerhalb der EU, Vermögenssicherung — das sind keine abstrakten Konzepte. Das ist unser Alltag."
              </blockquote>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* PORTRAIT + BIO INTRO */}
      <section style={{ background: "#0B1C2D", padding: "7rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "5rem", alignItems: "center" }}>
            <AnimatedSection>
              <div style={{ position: "relative" }}>
                <img src={IMAGES.portrait} alt="Sebastian Sauerborn — Gründer von Perspektive Ausland" style={{ width: "100%", display: "block", filter: "brightness(0.95) contrast(1.05)" }} />
                <div style={{ position: "absolute", bottom: "-1px", left: 0, right: 0, height: "120px", background: "linear-gradient(to top, #0B1C2D, transparent)" }} />
                <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", fontFamily: "'Montserrat', sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "rgba(201,168,76,0.7)" }}>
                  Sebastian Sauerborn — London & Austin, TX
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <ChapterLabel number="02" title="Der Gründer" />
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 700, color: "#FAF7F2", lineHeight: 1.15, marginBottom: "1.5rem" }}>
                Ich habe nicht beraten,<br /><em style={{ color: "#C9A84C" }}>ich habe es gelebt.</em>
              </h2>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.85, color: "rgba(250,247,242,0.82)", marginBottom: "1.5rem" }}>
                Ich bin Sebastian Sauerborn. Geboren 1977 in Freiburg im Breisgau, aufgewachsen im Hotzenwald nahe der Schweizer Grenze. Im Jahr 2000 habe ich Deutschland verlassen — nicht als Experiment, sondern als Entscheidung. Eine, die ich nie bereut habe.
              </p>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.85, color: "rgba(250,247,242,0.82)", marginBottom: "1.5rem" }}>
                Seitdem habe ich in sechs Ländern gelebt: der Schweiz, England, den USA, Malta, Irland und Schottland. Ich habe eine Ranch in Texas besessen, ein Beratungsunternehmen in der City of London aufgebaut, und ich habe mehr Steuerrechtsordnungen von innen gesehen als die meisten Berater von außen kennen.
              </p>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.85, color: "rgba(250,247,242,0.82)", marginBottom: "2rem" }}>
                Was ich meinen Mandanten rate, habe ich selbst durchlebt. Das ist kein Marketing. Das ist der Unterschied.
              </p>
              <a href="https://www.sebsauerborn.com/about" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#C9A84C", textDecoration: "none", borderBottom: "1px solid rgba(201,168,76,0.4)", paddingBottom: "2px" }}>
                Vollständige Biografie lesen →
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FREIBURG IMAGE */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "relative", height: "520px", backgroundImage: `url(${IMAGES.freiburg})`, backgroundSize: "cover", backgroundPosition: "center 40%", backgroundAttachment: "fixed" }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(11,28,45,0.5) 0%, rgba(11,28,45,0.75) 100%)" }} />
          <div style={{ position: "absolute", bottom: "3rem", left: "2rem", right: "2rem", maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "rgba(201,168,76,0.7)", marginBottom: "0.75rem" }}>47°59&apos;N 7°51&apos;E — Schwarzwald, Deutschland</div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 4vw, 3.5rem)", fontWeight: 700, color: "#FAF7F2", lineHeight: 1.1, maxWidth: "600px", margin: 0 }}>Wo alles begann.</h3>
          </div>
        </div>
      </section>

      {/* HERKUNFT TEXT */}
      <section style={{ background: "#FAF7F2", padding: "7rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "5rem", alignItems: "start" }}>
            <AnimatedSection>
              <ChapterLabel number="03" title="Herkunft" />
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#0B1C2D", lineHeight: 1.2, marginBottom: "1rem" }}>
                Freiburg, der Hotzenwald,<br />und drei Lehrmeister
              </h2>
              <div style={{ width: "40px", height: "2px", background: "#C9A84C", marginBottom: "2rem" }} />
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#C9A84C" }}>1977 — 2000</div>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.9, color: "#2C2C2C", marginBottom: "1.5rem" }}>
                Ich bin das älteste von acht Kindern. Mein Vater Martin war Sozialarbeiter, Unternehmer und veröffentlichter Romanautor — ein katholischer Bohemien, der alles selbst in die Hand nehmen wollte. Als ich etwa vier Jahre alt war, zog die Familie in ein altes Pfarrhaus im Hotzenwald, wo mein Vater einen fast einen Hektar großen Gemüsegarten bewirtschaftete. Ich kaufte täglich frische Milch und Eier beim Nachbauern. Diese frühe Verbindung zur Erde, zum Handwerk, zum Selbstgemachten — sie hat mich nie losgelassen.
              </p>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.9, color: "#2C2C2C", marginBottom: "1.5rem" }}>
                Meine prägendsten intellektuellen Einflüsse der Kindheit? Karl May, Ronald Reagan und die Amerika-Träume meines Vaters. Ich nenne sie Karl, Lex und Ronnie. Sie haben mir beigebracht, groß zu denken.
              </p>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.9, color: "#2C2C2C", marginBottom: "1.5rem" }}>
                Mit fünfzehn Jahren, auf einem Pfadfinderlager, wurde sichtbar, was mich für den Rest meines Lebens antreiben würde: der Wille, nicht zu warten, sondern Ereignisse zu gestalten. Mit siebzehn begann ich in der Firma meines Vaters zu arbeiten — zunächst als Softwareentwickler nach einem zehntägigen Intensivkurs in Berlin.
              </p>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.9, color: "#2C2C2C" }}>
                Deutschland war mein Ausgangspunkt. Es war nie mein Ziel.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* LONDON IMAGE */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "relative", height: "520px", backgroundImage: `url(${IMAGES.london})`, backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(11,28,45,0.8) 40%, rgba(11,28,45,0.3) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 2rem" }}>
            <div style={{ maxWidth: "1280px", margin: "0 auto", width: "100%" }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "rgba(201,168,76,0.7)", marginBottom: "0.75rem" }}>51°30&apos;N 0°7&apos;W — City of London, England</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 4vw, 3.5rem)", fontWeight: 700, color: "#FAF7F2", lineHeight: 1.1, maxWidth: "560px", margin: 0 }}>Die Stadt, die aus mir einen Unternehmer machte.</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ZÜRICH + LONDON TEXT */}
      <section style={{ background: "#0B1C2D", padding: "7rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "5rem", alignItems: "start" }}>
            <AnimatedSection>
              <ChapterLabel number="04" title="Zürich & London" />
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#FAF7F2", lineHeight: 1.2, marginBottom: "2rem" }}>
                PwC Zürich. Allianz London.<br /><em style={{ color: "#C9A84C" }}>Und dann: Unabhängigkeit.</em>
              </h2>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.9, color: "rgba(250,247,242,0.82)", marginBottom: "1.5rem" }}>
                In meinen frühen Zwanzigern zog ich nach Zürich und trat bei PwC als IT-Berater ein — ein viereinhalbjähriger Einsatz, der meinen internationalen Horizont formte und meine technische Disziplin schärfte. Die Schweiz lehrte mich Präzision, Diskretion und den Wert einer Jurisdiktion, die ihre Bürger nicht als Melkkühe betrachtet.
              </p>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.9, color: "rgba(250,247,242,0.82)", marginBottom: "1.5rem" }}>
                Dann kam London. Ein Angebot von Allianz Insurance. Ich verabschiedete mich von meiner Familie in der Schweiz und flog an einem Montagmorgen nach London. Diese Entscheidung legte das Fundament meiner Karriere. In der City of London wurde ich schnell befördert und baute mein professionelles Netzwerk mit Absicht auf.
              </p>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.9, color: "rgba(250,247,242,0.82)", marginBottom: "1.5rem" }}>
                Nach einem Jahrzehnt in der Konzernwelt wechselte ich in die vollständige Unabhängigkeit. Ich gründete mein eigenes Beratungsunternehmen in der City of London: zunächst eine Buchhaltungsfirma, die zu einer breiten Gruppe heranwuchs, die Steuerberatung, Unternehmensberatung, Filmproduktion und Podcasting umfasst.
              </p>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.9, color: "rgba(250,247,242,0.82)" }}>
                Im September 2008 eröffnete ich ein Büro in Miami. Während die Finanzkrise die Welt erschütterte, sah ich Chancen, wo andere Trümmer sahen.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <div style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)", padding: "2.5rem", marginTop: "4rem" }}>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C", marginBottom: "1.5rem" }}>Stationen</div>
                {[
                  { year: "2000", city: "Zürich", desc: "PwC — IT-Consulting" },
                  { year: "2003", city: "London", desc: "Allianz Insurance" },
                  { year: "2006", city: "London", desc: "Eigene Kanzlei gegründet" },
                  { year: "2008", city: "Miami", desc: "US-Expansion" },
                  { year: "2011", city: "Austin, TX", desc: "Vaquera Ranch" },
                  { year: "2014", city: "London", desc: "Rückkehr & Aufbau" },
                  { year: "2018", city: "Malta & Irland", desc: "Europäische Expansion" },
                  { year: "heute", city: "London & Austin", desc: "Perspektive Ausland" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem", paddingBottom: "1rem", marginBottom: "1rem", borderBottom: i < 7 ? "1px solid rgba(201,168,76,0.1)" : "none" }}>
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 700, color: "#C9A84C", minWidth: "48px" }}>{item.year}</span>
                    <div>
                      <div style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.05rem", fontWeight: 700, color: "#FAF7F2" }}>{item.city}</div>
                      <div style={{ fontFamily: "'Crimson Pro', serif", fontSize: "0.95rem", color: "rgba(250,247,242,0.55)", fontStyle: "italic" }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* TEXAS IMAGE */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "relative", height: "580px", backgroundImage: `url(${IMAGES.texas})`, backgroundSize: "cover", backgroundPosition: "center 30%", backgroundAttachment: "fixed" }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(11,28,45,0.2) 0%, rgba(11,28,45,0.7) 100%)" }} />
          <div style={{ position: "absolute", bottom: "3rem", left: "2rem", right: "2rem", maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "rgba(201,168,76,0.7)", marginBottom: "0.75rem" }}>30°5&apos;N 97°3&apos;W — Bastrop County, Texas</div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 4vw, 3.5rem)", fontWeight: 700, color: "#FAF7F2", lineHeight: 1.1, maxWidth: "600px", margin: 0 }}>
              Texas hat mich gebrochen.<br /><em style={{ color: "#C9A84C" }}>Und gehärtet.</em>
            </h3>
          </div>
        </div>
      </section>

      {/* TEXAS TEXT */}
      <section style={{ background: "#FAF7F2", padding: "7rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "5rem", alignItems: "start" }}>
            <AnimatedSection>
              <ChapterLabel number="05" title="Texas" />
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#0B1C2D", lineHeight: 1.2, marginBottom: "1rem" }}>
                Die Vaquera Ranch —<br />das schönste Kapitel
              </h2>
              <div style={{ width: "40px", height: "2px", background: "#C9A84C", marginBottom: "2rem" }} />
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#C9A84C" }}>2011 — 2013</div>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.9, color: "#2C2C2C", marginBottom: "1.5rem" }}>
                Im Sommer 2010, auf einer Reise in der Nähe von Austin, Texas — die Landschaft, das Licht, die Weite davon — ließ es mich nicht mehr los. Im Frühjahr 2011 kauften wir die Vaquera Ranch in Bastrop County, etwa 70 Kilometer südöstlich von Austin: ein Farmhaus, eine rote Scheune, ein Cottage, ein großer Teich, eine Mischung aus Weide und Wald.
              </p>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.9, color: "#2C2C2C", marginBottom: "1.5rem" }}>
                Es war die schönste Zeit meines Lebens. Ich arbeitete ab fünf Uhr morgens in einer Hütte auf dem Grundstück, während die Kinder auf der Ranch lebten und nach dem One Day Academy-Modell unterrichtet wurden.
              </p>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.9, color: "#2C2C2C", marginBottom: "1.5rem" }}>
                Im Juli 2012 rief meine Tante aus Deutschland an. Mein Vater Martin war gestorben — 59 Jahre alt, Aortenaneurysma. Ich flog nach Freiburg zur Beerdigung. Meine Brüder und ich trugen den Sarg. Die Messe wurde von Priestern des Opus Dei und des Augustinerordens gefeiert.
              </p>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.9, color: "#2C2C2C", marginBottom: "2rem" }}>
                Zurück in Texas zerbrach die Ehe. Ich stand allein mit sieben Kindern da. Texas hatte mich gebrochen. Aber es hatte mich auch gehärtet. Ich kehrte nach London zurück und baute alles neu auf — diesmal mit mehr Klarheit darüber, was zählt und was nicht.
              </p>
              <blockquote style={{ borderLeft: "3px solid #C9A84C", paddingLeft: "1.5rem", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.35rem", fontStyle: "italic", color: "#0B1C2D", lineHeight: 1.6, margin: 0 }}>
                "Das Land, die Tiere, die Idee eines selbstversorgenden Lebens — sie haben mich nie losgelassen. In absehbarer Zeit werde ich eine neue Ranch erwerben."
              </blockquote>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* PERSPEKTIVE AUSLAND ENTSTEHUNG */}
      <section style={{ background: "#0B1C2D", padding: "7rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <ChapterLabel number="06" title="Die Plattform entsteht" />
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700, color: "#FAF7F2", lineHeight: 1.15, marginBottom: "1rem" }}>
                Wie aus einer Idee<br /><em style={{ color: "#C9A84C" }}>die wichtigste deutschsprachige Plattform</em><br />zum Thema Auswandern wurde
              </h2>
            </div>
          </AnimatedSection>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>
            <AnimatedSection delay={100}>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.9, color: "rgba(250,247,242,0.82)", marginBottom: "1.5rem" }}>
                Nach meiner Rückkehr nach London baute ich die STM Corporate Group zu einer der führenden deutschsprachigen Kanzleien für internationale Steueroptimierung, Firmengründung im Ausland und Auswanderungsberatung auf. Die Nachfrage war enorm — und ich merkte, dass die meisten Menschen nicht einmal die richtigen Fragen stellten, weil sie nicht wussten, was möglich ist.
              </p>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.9, color: "rgba(250,247,242,0.82)" }}>
                So entstand <a href="https://www.perspektiveausland.com" style={linkStyle(true)}>Perspektive Ausland</a> — zunächst als Podcast, dann als YouTube-Kanal, dann als vollständige Plattform mit Community, Veranstaltungen und konkreter Beratung. Heute ist es die meistgehörte deutschsprachige Ressource für Auswanderer und Plan-B-Denker: über 144.000 Abonnenten, regelmäßig viral.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.9, color: "rgba(250,247,242,0.82)", marginBottom: "1.5rem" }}>
                Co-moderiert wird der <a href="https://www.perspektiveausland.com/podcast" style={linkStyle(true)}>Podcast</a> mit Daniel Taborek — einem der schärfsten Köpfe im deutschsprachigen Raum zu Fragen der internationalen Steuerplanung und Wohnsitzverlagerung. Gemeinsam decken wir das gesamte Spektrum ab: von der ersten Überlegung bis zur vollständigen Umsetzung.
              </p>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.9, color: "rgba(250,247,242,0.82)" }}>
                Perspektive Ausland ist keine Theorie. Es ist die Destillation von über 25 Jahren gelebter Erfahrung in mehr als 40 Jurisdiktionen — aufbereitet für <a href="https://www.perspektiveausland.com/themen/unternehmer" style={linkStyle(true)}>Unternehmer</a>, <a href="https://www.perspektiveausland.com/themen/investoren" style={linkStyle(true)}>Investoren</a> und <a href="https://www.perspektiveausland.com/themen/freiberufler" style={linkStyle(true)}>Freiberufler</a> aus dem deutschsprachigen Raum, die verstanden haben, dass der Staat nicht ihr Partner ist.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* DUBAI IMAGE */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "relative", height: "520px", backgroundImage: `url(${IMAGES.dubai})`, backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to left, rgba(11,28,45,0.85) 40%, rgba(11,28,45,0.3) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "flex-end", padding: "0 2rem" }}>
            <div style={{ maxWidth: "1280px", margin: "0 auto", width: "100%", display: "flex", justifyContent: "flex-end" }}>
              <div style={{ maxWidth: "520px", textAlign: "right" }}>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "rgba(201,168,76,0.7)", marginBottom: "0.75rem" }}>25°12&apos;N 55°16&apos;E — Dubai, Vereinigte Arabische Emirate</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 4vw, 3.5rem)", fontWeight: 700, color: "#FAF7F2", lineHeight: 1.1, margin: 0 }}>
                  40+ Jurisdiktionen.<br /><em style={{ color: "#C9A84C" }}>Eine Überzeugung.</em>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section style={{ background: "#FAF7F2", padding: "7rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ marginBottom: "4rem" }}>
              <ChapterLabel number="07" title="Expertise" />
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, color: "#0B1C2D", lineHeight: 1.15, maxWidth: "700px" }}>
                Was wir wirklich können —<br /><em style={{ color: "#C9A84C" }}>und was nicht</em>
              </h2>
            </div>
          </AnimatedSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {[
              { icon: "⚖️", title: "Internationale Steuerplanung", desc: "Territoriale vs. weltweite Besteuerung, Wegzugsbesteuerung, Exit-Strategien, Non-Dom-Status, CRS/FATCA-konforme Strukturen. Wir kennen die Unterschiede zwischen dem, was Berater versprechen, und dem, was tatsächlich funktioniert.", link: "https://www.perspektiveausland.com/themen/steuerplanung", linkText: "Mehr zur Steuerplanung" },
              { icon: "🏠", title: "Wohnsitzverlagerung", desc: "Dubai, Malta, Singapur, Schweiz, Paraguay, Panama, Georgien, Mauritius, Thailand, Portugal, Irland, Philippinen — wir kennen die Realität dieser Jurisdiktionen, nicht nur die Broschüren.", link: "https://www.perspektiveausland.com/themen/wohnsitz", linkText: "Länder im Überblick" },
              { icon: "🏢", title: "Firmenstrukturen im Ausland", desc: "US-LLCs für Nicht-Residenten, Singapur-Gesellschaften, Offshore-Strukturen, Malta-Holdingstrukturen. Wir bauen Strukturen, die rechtlich sauber, steuerlich effizient und langfristig tragfähig sind.", link: "https://www.perspektiveausland.com/themen/firmenstrukturen", linkText: "Firmenstrukturen erkunden" },
              { icon: "🛂", title: "Zweitpass & Staatsbürgerschaft", desc: "Karibische Pässe, Malta, Portugal, Schweizer Einbürgerung, Philippinen SRRV — wir erklären den Unterschied zwischen Marketing und Realität, und welche Optionen für deine Situation tatsächlich Sinn ergeben.", link: "https://www.perspektiveausland.com/themen/zweitpass", linkText: "Zweitpass-Optionen" },
              { icon: "🏦", title: "Banking außerhalb der EU", desc: "Internationale Bankkonten, Kreditkarten außerhalb des EU-Systems, Zugang zu US-Finanzinfrastruktur als Nicht-Resident. Wir navigieren durch das, was nach CRS und FATCA noch möglich ist.", link: "https://www.perspektiveausland.com/themen/banking", linkText: "Banking-Lösungen" },
              { icon: "🛡️", title: "Vermögenssicherung", desc: "Diversifikation über Jurisdiktionen, Asset Protection, Strukturen, die Vermögen vor staatlichem Zugriff schützen. Nicht als Rebellion — sondern als vernünftige Planung.", link: "https://www.perspektiveausland.com/themen/vermoegenssicherung", linkText: "Vermögen schützen" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div style={{ background: "#fff", border: "1px solid rgba(11,28,45,0.08)", padding: "2rem", height: "100%", transition: "box-shadow 0.3s, transform 0.3s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(11,28,45,0.12)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}
                >
                  <div style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>{item.icon}</div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 700, color: "#0B1C2D", marginBottom: "0.75rem", lineHeight: 1.3 }}>{item.title}</h3>
                  <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.05rem", lineHeight: 1.75, color: "#444", marginBottom: "1.25rem" }}>{item.desc}</p>
                  <a href={item.link} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#C9A84C", textDecoration: "none", borderBottom: "1px solid rgba(201,168,76,0.3)", paddingBottom: "1px" }}>{item.linkText} →</a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* HALTUNG */}
      <section style={{ background: "#0B1C2D", padding: "7rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "5rem", alignItems: "start" }}>
            <AnimatedSection>
              <ChapterLabel number="08" title="Haltung" />
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#FAF7F2", lineHeight: 1.2 }}>
                Was wir glauben —<br /><em style={{ color: "#C9A84C" }}>und warum</em>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                {[
                  { title: "Über den Staat", text: "Der Staat ist nicht dein Partner — er ist dein größter Gläubiger, dein aufdringlichster Nachbar und potenziell dein Gefängniswärter. Die Antwort ist nicht Rebellion, sondern Ausgang: legal, strukturiert, dauerhaft." },
                  { title: "Über Steuern", text: "Besteuerung über das hinaus, was zur Finanzierung grundlegender öffentlicher Güter notwendig ist, ist Diebstahl. Mehr Steuern zu zahlen als das Gesetz verlangt, ist keine Tugend — es ist Naivität." },
                  { title: "Über Freiheit", text: "Freiheit wird nicht geschenkt — sie wird aufgebaut, erhalten und verteidigt. Sie erfordert Geld, Planung und die Bereitschaft zu handeln, bevor das Fenster sich schließt." },
                  { title: "Über Deutschland", text: "Ich liebe Deutschland, aber ich bin nicht blind für seine Pathologien: Obrigkeitshörigkeit, eine Schuldkultur, die ehrliche Debatten verhindert. Ich bin gegangen — und ich schreibe über diese Entscheidung mit Klarheit und ohne Entschuldigung." },
                ].map((item, i) => (
                  <div key={i} style={{ borderTop: "1px solid rgba(201,168,76,0.2)", paddingTop: "1.5rem" }}>
                    <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#C9A84C", marginBottom: "0.75rem" }}>{item.title}</h4>
                    <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.1rem", lineHeight: 1.8, color: "rgba(250,247,242,0.75)", margin: 0 }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* PLAN B FRAMEWORK */}
      <section style={{ background: "#FAF7F2", padding: "7rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
              <div>
                <ChapterLabel number="09" title="Das Framework" />
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, color: "#0B1C2D", lineHeight: 1.15, marginBottom: "2rem" }}>
                  Der Plan B —<br /><em style={{ color: "#C9A84C" }}>Sebastians wichtigster intellektueller Beitrag</em>
                </h2>
                <p style={{ fontSize: "1.2rem", lineHeight: 1.9, color: "#2C2C2C", marginBottom: "1.5rem" }}>
                  Das Plan-B-Konzept ist ein strukturierter, multi-jurisdiktionaler Ansatz für persönliche Souveränität. Es geht nicht darum, Deutschland zu hassen. Es geht darum, Optionen zu haben — bevor du sie brauchst.
                </p>
                <p style={{ fontSize: "1.2rem", lineHeight: 1.9, color: "#2C2C2C", marginBottom: "2rem" }}>
                  Ein vollständiger Plan B umfasst: einen primären Steuerwohnsitz in einer Niedrigsteuer- oder Territorialbesteuerungsjurisdiktion; einen zweiten Wohnsitz oder eine zweite Staatsbürgerschaft als Backup; Vermögensdiversifikation über Jurisdiktionen; Zugang zu internationalem Banking; und eine physische Präsenzstrategie, die die gewählten Wohnsitzanforderungen erfüllt.
                </p>
                <a href="https://www.perspektiveausland.com/plan-b" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#0B1C2D", background: "#C9A84C", padding: "14px 28px", textDecoration: "none", display: "inline-block", transition: "background 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#b8943d")}
                  onMouseLeave={e => (e.currentTarget.style.background = "#C9A84C")}
                >Plan B aufbauen →</a>
              </div>
              <div>
                {[
                  { step: "01", title: "Primärer Steuerwohnsitz", desc: "Niedrigsteuer- oder Territorialbesteuerungsjurisdiktion — UAE, Malta, Singapur, Schweiz, Paraguay, Panama" },
                  { step: "02", title: "Zweiter Wohnsitz / Zweitpass", desc: "Backup-Jurisdiktion, Reisefreiheit, Sicherheitsnetz für den Ernstfall" },
                  { step: "03", title: "Vermögensdiversifikation", desc: "Assets über mehrere Jurisdiktionen verteilt — kein Single Point of Failure" },
                  { step: "04", title: "Internationales Banking", desc: "Konten außerhalb des EU-Systems, Zugang zu US-Finanzinfrastruktur" },
                  { step: "05", title: "Physische Präsenzstrategie", desc: "183-Tage-Regeln, Tie-Breaker-Tests, dokumentierte Aufenthalte" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "1.5rem", marginBottom: "1.5rem", paddingBottom: "1.5rem", borderBottom: i < 4 ? "1px solid rgba(11,28,45,0.08)" : "none" }}>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 700, color: "#C9A84C", opacity: 0.6, minWidth: "48px", lineHeight: 1, paddingTop: "4px" }}>{item.step}</div>
                    <div>
                      <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 700, color: "#0B1C2D", marginBottom: "0.25rem", marginTop: 0 }}>{item.title}</h4>
                      <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.05rem", lineHeight: 1.65, color: "#555", margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0B1C2D", padding: "7rem 2rem", borderTop: "1px solid rgba(201,168,76,0.2)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <AnimatedSection>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C", marginBottom: "1.5rem" }}>Bereit zu handeln</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4.5vw, 3.8rem)", fontWeight: 700, color: "#FAF7F2", lineHeight: 1.1, marginBottom: "1.5rem" }}>
              Das Fenster ist offen.<br /><em style={{ color: "#C9A84C" }}>Aber nicht für immer.</em>
            </h2>
            <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.25rem", lineHeight: 1.8, color: "rgba(250,247,242,0.75)", marginBottom: "3rem", maxWidth: "600px", margin: "0 auto 3rem" }}>
              Die regulatorischen Fenster für legale Steueroptimierung und Wohnsitzverlagerung schließen sich langsam. Wer jetzt handelt, hat Optionen. Wer wartet, zahlt den Preis.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              {[
                { label: "Erstgespräch buchen", href: "https://www.perspektiveausland.com/termin", primary: true },
                { label: "Podcast hören", href: "https://www.perspektiveausland.com/podcast", primary: false },
                { label: "Der Club", href: "https://www.perspektiveausland.com/der-club", primary: false },
              ].map(btn => (
                <a key={btn.label} href={btn.href} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: btn.primary ? "#0B1C2D" : "#FAF7F2", background: btn.primary ? "#C9A84C" : "transparent", border: btn.primary ? "none" : "1px solid rgba(250,247,242,0.3)", padding: "16px 32px", textDecoration: "none", display: "inline-block", transition: "background 0.2s, border-color 0.2s" }}
                  onMouseEnter={e => { if (btn.primary) (e.currentTarget as HTMLAnchorElement).style.background = "#b8943d"; else (e.currentTarget as HTMLAnchorElement).style.borderColor = "#C9A84C"; }}
                  onMouseLeave={e => { if (btn.primary) (e.currentTarget as HTMLAnchorElement).style.background = "#C9A84C"; else (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(250,247,242,0.3)"; }}
                >{btn.label}</a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#060E17", padding: "4rem 2rem 2rem", borderTop: "1px solid rgba(201,168,76,0.15)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "3rem", marginBottom: "3rem" }}>
            <div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 700, color: "#FAF7F2", marginBottom: "1rem" }}>
                Perspektive <span style={{ color: "#C9A84C" }}>Ausland</span>
              </div>
              <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1rem", lineHeight: 1.7, color: "rgba(250,247,242,0.5)", maxWidth: "280px", margin: 0 }}>
                Die Plattform für deutschsprachige Unternehmer, Freiberufler und Investoren. Auswandern, Plan B und Strukturen außerhalb der EU.
              </p>
            </div>
            {[
              { title: "Themen", links: [{ label: "Steuerplanung", href: "https://www.perspektiveausland.com/themen/steuerplanung" }, { label: "Wohnsitz", href: "https://www.perspektiveausland.com/themen/wohnsitz" }, { label: "Zweitpass", href: "https://www.perspektiveausland.com/themen/zweitpass" }, { label: "Banking", href: "https://www.perspektiveausland.com/themen/banking" }, { label: "Vermögen", href: "https://www.perspektiveausland.com/themen/vermoegenssicherung" }] },
              { title: "Plattform", links: [{ label: "Podcast", href: "https://www.perspektiveausland.com/podcast" }, { label: "YouTube", href: "https://www.youtube.com/c/PerspektiveAuslandPodcast" }, { label: "Der Club", href: "https://www.perspektiveausland.com/der-club" }, { label: "Veranstaltungen", href: "https://www.perspektiveausland.com/events" }, { label: "Newsletter", href: "https://verteiler.perspektiveausland.com/" }] },
              { title: "Kontakt", links: [{ label: "Termin buchen", href: "https://www.perspektiveausland.com/termin" }, { label: "Strategie anfragen", href: "https://www.perspektiveausland.com/loesungen" }, { label: "kontakt@perspektiveausland.com", href: "mailto:kontakt@perspektiveausland.com" }, { label: "sebsauerborn.com", href: "https://www.sebsauerborn.com" }] },
            ].map((col, i) => (
              <div key={i}>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C", marginBottom: "1.25rem" }}>{col.title}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {col.links.map((link, j) => (
                    <a key={j} href={link.href} style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1rem", color: "rgba(250,247,242,0.55)", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#FAF7F2")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(250,247,242,0.55)")}
                    >{link.label}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(201,168,76,0.1)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", color: "rgba(250,247,242,0.3)", letterSpacing: "0.05em" }}>
              © {new Date().getFullYear()} Perspektive Ausland. Alle Rechte vorbehalten.
            </span>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              {[{ label: "Datenschutz", href: "https://www.perspektiveausland.com/datenschutz" }, { label: "Impressum", href: "https://www.perspektiveausland.com/impressum" }].map((link, i) => (
                <a key={i} href={link.href} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", color: "rgba(250,247,242,0.3)", textDecoration: "none", letterSpacing: "0.05em", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#C9A84C")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(250,247,242,0.3)")}
                >{link.label}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

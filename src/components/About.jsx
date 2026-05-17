import { useReveal } from "../hooks/useReveal";
import { ABOUT, HERO } from "../data";

const INTRO_VIDEO =
  "https://www.youtube.com/embed/8HoyQQMCdwA" +
  "?autoplay=1&mute=1&loop=1&playlist=8HoyQQMCdwA" +
  "&controls=1&rel=0&modestbranding=1&iv_load_policy=3";

const TECH = [
  { name: "Flutter",   color: "#54C5F8", bg: "rgba(84,197,248,.12)",   symbol: "◆" },
  { name: "iOS",       color: "#FA7343", bg: "rgba(250,115,67,.12)",    symbol: "⊕" },
  { name: "Node.js",   color: "#68A063", bg: "rgba(104,160,99,.12)",    symbol: "⬡" },
  { name: "Firebase",  color: "#FFCA28", bg: "rgba(255,202,40,.12)",    symbol: "△" },
  { name: "AWS",       color: "#FF9900", bg: "rgba(255,153,0,.12)",     symbol: "☁" },
  { name: "BLoC",      color: "#a855f7", bg: "rgba(168,85,247,.12)",    symbol: "⚡" },
  { name: "Dart",      color: "#0175C2", bg: "rgba(1,117,194,.12)",     symbol: "◉" },
  { name: "MySQL",     color: "#4479A1", bg: "rgba(68,121,161,.12)",    symbol: "⊞" },
  { name: "Swift",     color: "#F05138", bg: "rgba(240,81,56,.12)",     symbol: "◈" },
  { name: "GCP",       color: "#4285F4", bg: "rgba(66,133,244,.12)",    symbol: "⊛" },
];

const revealStyle = (vis, dir = "up", delay = 0) => ({
  opacity: vis ? 1 : 0,
  transform: vis
    ? "none"
    : dir === "left"
    ? "translateX(-32px)"
    : dir === "right"
    ? "translateX(32px)"
    : "translateY(38px)",
  transition: `opacity .8s cubic-bezier(.16,1,.3,1) ${delay}s, transform .8s cubic-bezier(.16,1,.3,1) ${delay}s`,
});

export default function About() {
  const [leftRef,  leftVis]  = useReveal();
  const [rightRef, rightVis] = useReveal();

  return (
    <section id="about" style={{ padding: "54px 0 100px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 40px" }}>
        <div
          className="about-grid"
          style={{ display: "grid", gridTemplateColumns: ".95fr 1.05fr", gap: 64, alignItems: "start" }}
        >

          {/* ── LEFT: text + tech badges ── */}
          <div ref={leftRef} style={revealStyle(leftVis, "left")}>

            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "5px 14px", borderRadius: 20,
              background: "rgba(232,96,74,.09)", border: "1px solid rgba(232,96,74,.22)",
              fontSize: 11, color: "#f07b66", fontWeight: 700,
              letterSpacing: ".14em", textTransform: "uppercase",
              fontFamily: "'JetBrains Mono', monospace", marginBottom: 20,
            }}>
              About Me
            </div>

            {/* Heading */}
            <h2 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(32px, 4vw, 56px)",
              fontWeight: 900, lineHeight: 1.0,
              textTransform: "uppercase", color: "#eef2f7", marginBottom: 22,
            }}>
              Full-stack mobile<br />ownership.
            </h2>

            {/* Paragraphs */}
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i} style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "rgba(238,242,247,.62)", lineHeight: 1.82, fontSize: 15.5, marginBottom: 14,
              }}>
                {p}
              </p>
            ))}

            {/* ── Tech stack icon badges ── */}
            <div style={{ marginTop: 28, marginBottom: 30 }}>
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 9, fontWeight: 700, color: "rgba(106,139,168,.6)",
                letterSpacing: ".18em", textTransform: "uppercase", marginBottom: 14,
              }}>
                Core Stack
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {TECH.map((t) => (
                  <div key={t.name} style={{
                    display: "inline-flex", alignItems: "center", gap: 7,
                    padding: "6px 13px", borderRadius: 10,
                    background: t.bg,
                    border: `1px solid ${t.color}28`,
                    transition: "all .2s",
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = t.bg.replace(".12)", ".22)");
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = `0 6px 20px ${t.color}22`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = t.bg;
                      e.currentTarget.style.transform = "";
                      e.currentTarget.style.boxShadow = "";
                    }}
                  >
                    {/* Icon circle */}
                    <span style={{
                      width: 20, height: 20, borderRadius: 6,
                      background: `${t.color}22`,
                      border: `1px solid ${t.color}40`,
                      display: "inline-flex", alignItems: "center", justifyContent: "center",
                      fontSize: 10, color: t.color, fontWeight: 700, flexShrink: 0,
                    }}>
                      {t.symbol}
                    </span>
                    <span style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 12, fontWeight: 600, color: t.color,
                    }}>
                      {t.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {[
                { label: "LinkedIn ↗", href: HERO.links.linkedin, external: true  },
                { label: "GitHub ↗",   href: HERO.links.github,   external: true  },
                { label: "Email",       href: HERO.links.email,    external: false },
              ].map(({ label, href, external }) => (
                <a key={label} href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="btn-outline" style={{ fontSize: 13, padding: "10px 18px" }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT: autoplay video + feature cards below ── */}
          <div ref={rightRef} style={revealStyle(rightVis, "right", 0.12)}>

            {/* ── Video player ── */}
            <div style={{
              borderRadius: 18, overflow: "hidden",
              border: "1px solid rgba(232,96,74,.22)",
              boxShadow: [
                "0 28px 80px rgba(0,0,0,.55)",
                "0 0 0 1px rgba(238,242,247,.04)",
                "0 0 60px rgba(232,96,74,.08)",
              ].join(","),
              background: "#080f18",
              marginBottom: 16,
            }}>
              {/* Top chrome bar */}
              <div style={{
                height: 38, background: "rgba(21,35,53,.95)",
                borderBottom: "1px solid rgba(238,242,247,.07)",
                display: "flex", alignItems: "center",
                padding: "0 14px", gap: 8,
              }}>
                {/* Traffic lights */}
                <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#ff5f57" }} />
                <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#febc2e" }} />
                <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#28c840" }} />
                <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", gap: 7 }}>
                  <span style={{
                    width: 6, height: 6, borderRadius: "50%",
                    background: "#e8604a", display: "inline-block",
                    animation: "pulse 2.2s infinite",
                    boxShadow: "0 0 8px #e8604a",
                  }} />
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 9, fontWeight: 700, color: "#f07b66",
                    letterSpacing: ".14em", textTransform: "uppercase",
                  }}>
                    Intro — Syed Muhammad Shah
                  </span>
                </div>
              </div>

              {/* 16:9 iframe */}
              <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                <iframe
                  src={INTRO_VIDEO}
                  title="Syed Muhammad Shah — Portfolio Intro"
                  allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute", top: 0, left: 0,
                    width: "100%", height: "100%",
                    border: 0, display: "block",
                  }}
                />
              </div>
            </div>

            {/* ── Feature cards 2×2 ── */}
            <div className="about-card-grid" style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
            }}>
              {ABOUT.cards.map((c, i) => (
                <div key={i} className="acard" style={{
                  padding: "18px 18px", borderRadius: 16,
                  background: "rgba(13,27,42,.8)",
                  border: "1px solid rgba(238,242,247,.07)",
                  transition: "all .3s",
                  display: "flex", alignItems: "flex-start", gap: 12,
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                    background: "rgba(232,96,74,.09)",
                    border: "1px solid rgba(232,96,74,.18)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 18,
                  }}>{c.icon}</div>
                  <div>
                    <div style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 14, fontWeight: 700,
                      color: "#eef2f7", textTransform: "uppercase", letterSpacing: .3,
                      marginBottom: 4,
                    }}>{c.title}</div>
                    <div style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 11.5, color: "rgba(106,139,168,.8)", lineHeight: 1.6,
                    }}>{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

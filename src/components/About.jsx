import { useReveal } from "../hooks/useReveal";
import { ABOUT, HERO } from "../data";

const revealStyle = (vis, dir = "up", delay = 0) => ({
  opacity: vis ? 1 : 0,
  transform: vis ? "none" : dir === "left" ? "translateX(-32px)" : dir === "right" ? "translateX(32px)" : "translateY(38px)",
  transition: `opacity .8s cubic-bezier(.16,1,.3,1) ${delay}s, transform .8s cubic-bezier(.16,1,.3,1) ${delay}s`,
});

export default function About() {
  const [leftRef, leftVis]   = useReveal();
  const [rightRef, rightVis] = useReveal();

  return (
    <section id="about" style={{ padding: "54px 0 100px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 40px" }}>
        <div className="about-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80, alignItems: "center",
        }}>
          {/* Left */}
          <div ref={leftRef} style={revealStyle(leftVis, "left")}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "5px 14px", borderRadius: 20,
              background: "rgba(232,96,74,.09)",
              border: "1px solid rgba(232,96,74,.22)",
              fontSize: 11, color: "#f07b66", fontWeight: 700,
              letterSpacing: ".14em", textTransform: "uppercase",
              fontFamily: "'Space Mono', monospace",
              marginBottom: 20,
            }}>
              About Me
            </div>

            <h2 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(32px, 4vw, 56px)",
              fontWeight: 900, letterSpacing: 0,
              lineHeight: 1.0, marginBottom: 22,
              textTransform: "uppercase",
              color: "#eef2f7",
            }}>
              Full-stack mobile<br />ownership.
            </h2>

            {ABOUT.paragraphs.map((p, i) => (
              <p key={i} style={{
                fontFamily: "'Barlow', sans-serif",
                color: "rgba(238,242,247,.62)",
                lineHeight: 1.82, fontSize: 15.5, marginBottom: 14,
              }}>
                {p}
              </p>
            ))}

            <div style={{ display: "flex", gap: 10, marginTop: 30, flexWrap: "wrap" }}>
              {[
                { label: "LinkedIn ↗", href: HERO.links.linkedin, external: true },
                { label: "GitHub ↗",   href: HERO.links.github,   external: true },
                { label: "Email",       href: HERO.links.email,    external: false },
              ].map(({ label, href, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="btn-outline"
                  style={{ fontSize: 13, padding: "10px 18px" }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — cards */}
          <div
            ref={rightRef}
            style={{
              ...revealStyle(rightVis, "right", 0.1),
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 14,
            }}
          >
            {ABOUT.cards.map((c, i) => (
              <div
                key={i}
                className="acard"
                style={{
                  padding: "26px 22px", borderRadius: 18,
                  background: "rgba(13,27,42,.8)",
                  border: "1px solid rgba(238,242,247,.07)",
                  transition: "all .3s",
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 12 }}>{c.icon}</div>
                <div style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 16, fontWeight: 700,
                  color: "#eef2f7", marginBottom: 7,
                  textTransform: "uppercase", letterSpacing: .3,
                }}>{c.title}</div>
                <div style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: 13, color: "rgba(106,139,168,.8)", lineHeight: 1.7,
                }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

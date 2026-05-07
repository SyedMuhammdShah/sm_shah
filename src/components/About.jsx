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
    <section id="about" style={{ padding: "90px 0", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 40px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80, alignItems: "center",
        }}>
          {/* Left */}
          <div ref={leftRef} style={revealStyle(leftVis, "left")}>
            <div style={{
              display: "inline-block", padding: "5px 14px",
              borderRadius: 20, background: "rgba(0,229,160,.07)",
              border: "1px solid rgba(0,229,160,.15)",
              fontSize: 11, color: "#00e5a0", fontWeight: 700,
              letterSpacing: ".1em", textTransform: "uppercase",
              marginBottom: 20,
            }}>
              About Me
            </div>

            <h2 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(28px,4vw,52px)",
              fontWeight: 800, letterSpacing: -1.5,
              lineHeight: 1.05, marginBottom: 20,
            }}>
              Full-stack mobile<br />ownership.
            </h2>

            {ABOUT.paragraphs.map((p, i) => (
              <p key={i} style={{
                color: "rgba(255,255,255,.6)",
                lineHeight: 1.88, fontSize: 15, marginBottom: 14,
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
                  padding: "24px 20px", borderRadius: 18,
                  background: "rgba(255,255,255,.025)",
                  border: "1px solid rgba(255,255,255,.07)",
                  transition: "all .3s",
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 12 }}>{c.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 7 }}>{c.title}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,.38)", lineHeight: 1.7 }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

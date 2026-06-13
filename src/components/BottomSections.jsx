import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { EDUCATION, HERO } from "../data";


export function Education() {
  const [ref, vis] = useReveal();

  return (
    <section id="edu" style={{ padding: "80px 0", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 40px" }}>
        <div
          ref={ref}
          style={{
            opacity: vis ? 1 : 0,
            transform: vis ? "none" : "translateY(38px)",
            transition: "opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1)",
          }}
        >
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11, fontWeight: 700, letterSpacing: ".18em",
            textTransform: "uppercase", color: "#d4a847", marginBottom: 10,
          }}>
            Education
          </p>
          <h2 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "clamp(28px,4vw,52px)",
            fontWeight: 900, letterSpacing: 0, lineHeight: 1.0,
            textTransform: "uppercase", color: "#eef2f7", marginBottom: 44,
          }}>
            Academic Background
          </h2>
          <div className="edu-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
            {EDUCATION.map((e, i) => (
              <EduCard key={i} data={e} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EduCard({ data }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "26px 24px", borderRadius: 18,
        background: hovered ? "rgba(21,35,53,.95)" : "rgba(13,27,42,.8)",
        border: `1px solid ${hovered ? "rgba(212,168,71,.3)" : "rgba(238,242,247,.07)"}`,
        transition: "all .3s",
        transform: hovered ? "translateY(-4px)" : "none",
        borderTop: `2px solid ${hovered ? "#d4a847" : "rgba(212,168,71,.25)"}`,
      }}
    >
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10, color: "#d4a847", fontWeight: 700, marginBottom: 8,
      }}>{data.year}</div>
      <div style={{
        fontFamily: "'Montserrat', sans-serif",
        fontSize: 17, fontWeight: 700, color: "#eef2f7", marginBottom: 5,
        textTransform: "uppercase",
      }}>{data.deg}</div>
      <div style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: 12, color: "rgba(106,139,168,.7)",
      }}>{data.inst}</div>
    </div>
  );
}

export function Contact() {
  const [ref, vis] = useReveal();

  return (
    <section id="contact" style={{ padding: "90px 0 70px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 40px" }}>
        <div
          ref={ref}
          className="contact-box"
          style={{
            background: "linear-gradient(135deg,rgba(232,96,74,.07),rgba(212,168,71,.05))",
            border: "1px solid rgba(232,96,74,.18)",
            borderRadius: 30, padding: "80px 64px",
            textAlign: "center", maxWidth: 820, margin: "0 auto",
            position: "relative", overflow: "hidden",
            opacity: vis ? 1 : 0,
            transform: vis ? "none" : "translateY(38px)",
            transition: "opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1)",
          }}
        >


          {/* Inner glow */}
          <div style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%,-50%)",
            width: 600, height: 300,
            background: "radial-gradient(ellipse,rgba(232,96,74,.06),transparent 60%)",
            pointerEvents: "none",
          }} />

          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11, fontWeight: 700, letterSpacing: ".18em",
            textTransform: "uppercase", color: "#e8604a", marginBottom: 12,
          }}>
            Get In Touch
          </p>
          <h2 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "clamp(32px,4vw,58px)",
            fontWeight: 900, letterSpacing: 0, lineHeight: 1.0,
            textTransform: "uppercase", marginBottom: 18, color: "#eef2f7",
          }}>
            Let's build something<br />great together.
          </h2>
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: "rgba(238,242,247,.55)", fontSize: 16, lineHeight: 1.82,
            marginBottom: 50, maxWidth: 520, marginLeft: "auto", marginRight: "auto",
          }}>
            Available for senior mobile engineering roles, freelance projects &amp; technical consulting.
            I work with teams that need end-to-end mobile ownership.
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 52 }}>
            <a href={HERO.links.email} className="btn-green">📧 Send Email</a>
            <a href={HERO.links.linkedin} target="_blank" rel="noreferrer" className="btn-blue">LinkedIn ↗</a>
            <a href={HERO.links.github}   target="_blank" rel="noreferrer" className="btn-dim">GitHub ↗</a>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 30, flexWrap: "wrap" }}>
            {[
              "📞 +92 318 239 3468",
              "📍 Karachi, Pakistan",
              "📧 syedmuhammadshah235@gmail.com",
            ].map((item) => (
              <div key={item} style={{
                fontFamily: "'JetBrains Mono', monospace",
                display: "flex", alignItems: "center", gap: 7,
                color: "rgba(106,139,168,.6)", fontSize: 11,
              }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer style={{
      padding: "28px 48px",
      borderTop: "1px solid rgba(238,242,247,.05)",
      textAlign: "center",
      position: "relative", zIndex: 1,
    }}>
      <p style={{
        fontFamily: "'JetBrains Mono', monospace",
        color: "rgba(106,139,168,.35)", fontSize: 11,
        letterSpacing: ".06em",
      }}>
        © 2025 Syed Muhammad Shah &nbsp;·&nbsp; Senior Mobile Engineer &nbsp;·&nbsp; Karachi, Pakistan
      </p>
    </footer>
  );
}

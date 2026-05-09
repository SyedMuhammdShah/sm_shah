import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { EXPERIENCE } from "../data";

export default function Experience() {
  const [hdrRef, hdrVis] = useReveal();

  return (
    <section
      id="experience"
      style={{
        padding: "100px 0",
        background: "rgba(13,27,42,.5)",
        position: "relative", zIndex: 1,
        borderTop: "1px solid rgba(238,242,247,.05)",
        borderBottom: "1px solid rgba(238,242,247,.05)",
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 40px" }}>
        <div
          ref={hdrRef}
          style={{
            marginBottom: 56,
            opacity: hdrVis ? 1 : 0,
            transform: hdrVis ? "none" : "translateY(38px)",
            transition: "opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1)",
          }}
        >
          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 11, fontWeight: 700, letterSpacing: ".18em",
            textTransform: "uppercase", color: "#e8604a", marginBottom: 10,
          }}>
            Work History
          </p>
          <h2 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(32px,4vw,56px)",
            fontWeight: 900, letterSpacing: 0, lineHeight: 1.0,
            textTransform: "uppercase", color: "#eef2f7",
          }}>
            Professional Experience
          </h2>
        </div>

        <div className="exp-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {EXPERIENCE.map((e, i) => (
            <ExpCard key={i} data={e} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpCard({ data, delay }) {
  const [ref, vis]            = useReveal();
  const [hovered, setHovered] = useState(false);
  const { company, role, period, color, desc } = data;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "28px 30px", borderRadius: 20,
        background: hovered ? "rgba(21,35,53,.95)" : "rgba(13,27,42,.8)",
        border: "1px solid rgba(238,242,247,.07)",
        borderLeft: `3px solid ${color}`,
        transition: "all .3s",
        transform: vis
          ? hovered ? "translateX(6px)" : "none"
          : "translateY(38px)",
        opacity: vis ? 1 : 0,
        transitionDelay: delay + "s",
      }}
    >
      <div style={{
        display: "flex", justifyContent: "space-between",
        alignItems: "flex-start", marginBottom: 12, flexWrap: "wrap", gap: 8,
      }}>
        <div>
          <div style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 19, fontWeight: 700,
            color: "#eef2f7", textTransform: "uppercase", letterSpacing: .3,
          }}>
            {company}
          </div>
          <div style={{
            fontFamily: "'Barlow', sans-serif",
            fontSize: 12, fontWeight: 700, color, marginTop: 3,
          }}>{role}</div>
        </div>
        <span style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 10, color: "rgba(106,139,168,.7)",
          padding: "4px 11px", borderRadius: 20,
          background: "rgba(238,242,247,.04)", whiteSpace: "nowrap",
        }}>
          {period}
        </span>
      </div>
      <p style={{
        fontFamily: "'Barlow', sans-serif",
        fontSize: 13, color: "rgba(106,139,168,.75)", lineHeight: 1.77,
      }}>{desc}</p>
    </div>
  );
}

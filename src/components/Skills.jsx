import React, { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { SKILLS } from "../data";

export default function Skills() {
  const [hdrRef, hdrVis] = useReveal();

  return (
    <section
      id="skills"
      style={{
        padding: "100px 0",
        background: "rgba(13,27,42,.5)",
        position: "relative", zIndex: 1,
        borderTop: "1px solid rgba(238,242,247,.05)",
        borderBottom: "1px solid rgba(238,242,247,.05)",
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 40px" }}>
        {/* Header */}
        <div
          ref={hdrRef}
          style={{
            display: "flex", justifyContent: "space-between",
            alignItems: "flex-end", marginBottom: 56,
            flexWrap: "wrap", gap: 20,
            opacity: hdrVis ? 1 : 0,
            transform: hdrVis ? "none" : "translateY(38px)",
            transition: "opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1)",
          }}
        >
          <div>
            <p style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 11, fontWeight: 700, letterSpacing: ".18em",
              textTransform: "uppercase", color: "#e8604a", marginBottom: 10,
            }}>
              Tech Stack
            </p>
            <h2 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(32px, 4vw, 56px)",
              fontWeight: 900, letterSpacing: 0, lineHeight: 1.0,
              textTransform: "uppercase", color: "#eef2f7",
            }}>
              What I build with
            </h2>
          </div>
          <p style={{
            fontFamily: "'Barlow', sans-serif",
            color: "rgba(106,139,168,.7)", fontSize: 14,
            maxWidth: 280, textAlign: "right", lineHeight: 1.7,
          }}>
            From pixel-perfect mobile UI to backend infrastructure — full delivery stack.
          </p>
        </div>

        {/* Grid */}
        <div className="skills-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
          gap: 16,
        }}>
          {SKILLS.map((s, i) => (
            <SkillCard key={i} data={s} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ data, delay }) {
  const [ref, vis]        = useReveal();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "26px 20px", borderRadius: 18,
        background: hovered ? "rgba(21,35,53,.95)" : "rgba(13,27,42,.8)",
        border: `1px solid ${hovered ? "rgba(232,96,74,.3)" : "rgba(238,242,247,.07)"}`,
        transition: "all .35s",
        transform: hovered ? "translateY(-5px)" : vis ? "none" : "translateY(38px)",
        opacity: vis ? 1 : 0,
        transitionDelay: delay + "s",
        position: "relative", overflow: "hidden",
      }}
    >
      {/* Bottom accent bar */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
        background: "linear-gradient(90deg,#e8604a,#d4a847)",
        transform: hovered ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left",
        transition: "transform .45s cubic-bezier(.16,1,.3,1)",
      }} />

      <div style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: 9, fontWeight: 700, color: "#e8604a",
        letterSpacing: ".16em", textTransform: "uppercase", marginBottom: 18,
      }}>
        {data.cat}
      </div>
      {data.items.map((item, j) => (
        <div key={j} style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 10 }}>
          <div style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(232,96,74,.5)", flexShrink: 0 }} />
          <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, color: "rgba(238,242,247,.65)" }}>{item}</span>
        </div>
      ))}
    </div>
  );
}

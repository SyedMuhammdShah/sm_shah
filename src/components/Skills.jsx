import { useReveal } from "../hooks/useReveal";
import { SKILLS } from "../data";

export default function Skills() {
  const [hdrRef, hdrVis] = useReveal();

  return (
    <section
      id="skills"
      style={{
        padding: "90px 0",
        background: "rgba(255,255,255,.007)",
        position: "relative", zIndex: 1,
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
            <p style={{ fontSize:11,fontWeight:700,letterSpacing:".18em",textTransform:"uppercase",color:"#00e5a0",marginBottom:10 }}>
              Tech Stack
            </p>
            <h2 style={{ fontFamily:"'Syne',sans-serif",fontSize:"clamp(28px,4vw,52px)",fontWeight:800,letterSpacing:-1.5,lineHeight:1.05 }}>
              What I build with
            </h2>
          </div>
          <p style={{ color:"rgba(255,255,255,.3)",fontSize:14,maxWidth:280,textAlign:"right",lineHeight:1.7 }}>
            From pixel-perfect mobile UI to backend infrastructure — full delivery stack.
          </p>
        </div>

        {/* Grid */}
        <div style={{
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
  const [ref, vis] = useReveal();
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "26px 20px", borderRadius: 18,
        background: "rgba(255,255,255,.025)",
        border: `1px solid ${hovered ? "rgba(0,229,160,.28)" : "rgba(255,255,255,.07)"}`,
        transition: "all .35s",
        transform: hovered ? "translateY(-5px)" : vis ? "none" : "translateY(38px)",
        opacity: vis ? 1 : 0,
        transitionDelay: delay + "s",
        position: "relative", overflow: "hidden",
      }}
    >
      {/* Animated bottom bar */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
        background: "linear-gradient(90deg,#00e5a0,#7c6fff)",
        transform: hovered ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left",
        transition: "transform .45s cubic-bezier(.16,1,.3,1)",
      }} />

      <div style={{ fontSize:10,fontWeight:700,color:"#00e5a0",letterSpacing:".16em",textTransform:"uppercase",marginBottom:18 }}>
        {data.cat}
      </div>
      {data.items.map((item, j) => (
        <div key={j} style={{ display:"flex",alignItems:"center",gap:9,marginBottom:10 }}>
          <div style={{ width:5,height:5,borderRadius:"50%",background:"rgba(0,229,160,.38)",flexShrink:0 }} />
          <span style={{ fontSize:13,color:"rgba(255,255,255,.65)" }}>{item}</span>
        </div>
      ))}
    </div>
  );
}

import React from "react";

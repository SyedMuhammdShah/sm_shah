import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { EXPERIENCE } from "../data";

export default function Experience() {
  const [hdrRef, hdrVis] = useReveal();

  return (
    <section
      id="experience"
      style={{
        padding: "90px 0",
        background: "rgba(255,255,255,.007)",
        position: "relative", zIndex: 1,
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
          <p style={{ fontSize:11,fontWeight:700,letterSpacing:".18em",textTransform:"uppercase",color:"#00e5a0",marginBottom:10 }}>
            Work History
          </p>
          <h2 style={{ fontFamily:"'Syne',sans-serif",fontSize:"clamp(28px,4vw,52px)",fontWeight:800,letterSpacing:-1.5,lineHeight:1.05 }}>
            Professional Experience
          </h2>
        </div>

        <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:16 }}>
          {EXPERIENCE.map((e, i) => (
            <ExpCard key={i} data={e} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpCard({ data, delay }) {
  const [ref, vis]       = useReveal();
  const [hovered, setHovered] = useState(false);
  const { company, role, period, color, desc } = data;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "28px 30px", borderRadius: 20,
        background: hovered ? "rgba(255,255,255,.04)" : "rgba(255,255,255,.025)",
        border: "1px solid rgba(255,255,255,.07)",
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
        display:"flex",justifyContent:"space-between",
        alignItems:"flex-start",marginBottom:12,flexWrap:"wrap",gap:8,
      }}>
        <div>
          <div style={{ fontFamily:"'Syne',sans-serif",fontSize:17,fontWeight:700,color:"#fff" }}>
            {company}
          </div>
          <div style={{ fontSize:12,fontWeight:700,color,marginTop:3 }}>{role}</div>
        </div>
        <span style={{
          fontSize:10,color:"rgba(255,255,255,.32)",
          padding:"4px 11px",borderRadius:20,
          background:"rgba(255,255,255,.04)",whiteSpace:"nowrap",
        }}>
          {period}
        </span>
      </div>
      <p style={{ fontSize:13,color:"rgba(255,255,255,.45)",lineHeight:1.77 }}>{desc}</p>
    </div>
  );
}

import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { EDUCATION, HERO } from "../data";

export function Education() {
  const [ref, vis] = useReveal();

  return (
    <section id="edu" style={{ padding: "70px 0", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 40px" }}>
        <div
          ref={ref}
          style={{
            opacity: vis ? 1 : 0,
            transform: vis ? "none" : "translateY(38px)",
            transition: "opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1)",
          }}
        >
          <p style={{ fontSize:11,fontWeight:700,letterSpacing:".18em",textTransform:"uppercase",color:"#7c6fff",marginBottom:10 }}>
            Education
          </p>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16,marginTop:44 }}>
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
        padding:"26px 24px",borderRadius:18,
        background:"rgba(255,255,255,.025)",
        border:`1px solid ${hovered ? "rgba(124,111,255,.3)" : "rgba(255,255,255,.07)"}`,
        transition:"all .3s",
        transform: hovered ? "translateY(-4px)" : "none",
      }}
    >
      <div style={{ fontSize:11,color:"#7c6fff",fontWeight:700,marginBottom:8 }}>{data.year}</div>
      <div style={{ fontSize:15,fontWeight:700,color:"#fff",marginBottom:5 }}>{data.deg}</div>
      <div style={{ fontSize:12,color:"rgba(255,255,255,.38)" }}>{data.inst}</div>
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
          style={{
            background:"linear-gradient(135deg,rgba(0,229,160,.04),rgba(124,111,255,.05))",
            border:"1px solid rgba(255,255,255,.09)",
            borderRadius:30,padding:"80px 64px",
            textAlign:"center",maxWidth:820,margin:"0 auto",
            position:"relative",overflow:"hidden",
            opacity: vis ? 1 : 0,
            transform: vis ? "none" : "translateY(38px)",
            transition:"opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1)",
          }}
        >
          {/* Inner glow */}
          <div style={{
            position:"absolute",top:"50%",left:"50%",
            transform:"translate(-50%,-50%)",
            width:600,height:300,
            background:"radial-gradient(ellipse,rgba(0,229,160,.05),transparent 60%)",
            pointerEvents:"none",
          }} />

          <p style={{ fontSize:11,fontWeight:700,letterSpacing:".18em",textTransform:"uppercase",color:"#00e5a0",marginBottom:12 }}>
            Get In Touch
          </p>
          <h2 style={{
            fontFamily:"'Syne',sans-serif",
            fontSize:"clamp(28px,4vw,52px)",
            fontWeight:800,letterSpacing:-1.5,lineHeight:1.05,
            marginBottom:18,
          }}>
            Let's build something<br />great together.
          </h2>
          <p style={{
            color:"rgba(255,255,255,.57)",fontSize:16,lineHeight:1.85,
            marginBottom:50,maxWidth:520,marginLeft:"auto",marginRight:"auto",
          }}>
            Available for senior mobile engineering roles, freelance projects &amp; technical consulting.
            I work with teams that need end-to-end mobile ownership.
          </p>

          <div style={{ display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap",marginBottom:52 }}>
            <a href={HERO.links.email} className="btn-green">📧 Send Email</a>
            <a href={HERO.links.linkedin} target="_blank" rel="noreferrer" className="btn-blue">LinkedIn ↗</a>
            <a href={HERO.links.github}   target="_blank" rel="noreferrer" className="btn-dim">GitHub ↗</a>
          </div>

          <div style={{ display:"flex",justifyContent:"center",gap:30,flexWrap:"wrap" }}>
            {[
              "📞 +92 318 239 3468",
              "📍 Karachi, Pakistan",
              "📧 syedmuhammadshah235@gmail.com",
            ].map((item) => (
              <div key={item} style={{
                display:"flex",alignItems:"center",gap:7,
                color:"rgba(255,255,255,.35)",fontSize:12,
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
      padding: "30px 48px",
      borderTop: "1px solid rgba(255,255,255,.05)",
      textAlign: "center",
      position: "relative", zIndex: 1,
    }}>
      <p style={{ color:"rgba(255,255,255,.18)",fontSize:12 }}>
        © 2025 Syed Muhammad Shah &nbsp;·&nbsp; Senior Mobile Engineer &nbsp;·&nbsp; Karachi, Pakistan
      </p>
    </footer>
  );
}

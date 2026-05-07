import { useState, useEffect } from "react";

export default function ProjectModal({ project, onClose }) {
  const [activeThumb, setActiveThumb] = useState(0);

  useEffect(() => {
    setActiveThumb(0);
    if (project) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!project) return null;
  const { icon, title, sub, color, tags, desc, tech, screens, links, video } = project;
  const hasScreens = screens && screens.length > 0;
  const hasLinks   = links && Object.keys(links).length > 0;

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: "fixed", inset: 0,
        background: "rgba(0,0,0,.92)",
        zIndex: 5000, display: "flex",
        alignItems: "center", justifyContent: "center",
        padding: 20, backdropFilter: "blur(24px)",
      }}
    >
      <div style={{
        background: "#0a0f1d",
        borderRadius: 28, maxWidth: 900, width: "100%",
        maxHeight: "92vh", overflowY: "auto",
        border: "1px solid rgba(255,255,255,.1)",
        scrollbarWidth: "thin", position: "relative",
      }}>
        <button
          onClick={onClose}
          style={{
            position: "sticky", top: 0, right: 0,
            float: "right", margin: "18px 18px 0 0",
            background: "rgba(255,255,255,.08)", border: "none",
            color: "#fff", width: 38, height: 38,
            borderRadius: "50%", cursor: "pointer",
            fontSize: 15, zIndex: 10, transition: "background .2s",
          }}
        >
          ✕
        </button>

        <div style={{ padding: "36px 40px 44px" }}>
          {/* Header */}
          <div style={{ display:"flex",alignItems:"center",gap:18,marginBottom:20 }}>
            <div style={{ fontSize: 56 }}>{icon}</div>
            <div>
              <div style={{ fontFamily:"'Syne',sans-serif",fontSize:32,fontWeight:800,letterSpacing:-.5,marginBottom:5 }}>
                {title}
              </div>
              <div style={{ fontSize:14,fontWeight:700,color }}>{sub}</div>
            </div>
          </div>

          {/* Tags */}
          <div style={{ display:"flex",gap:7,flexWrap:"wrap",marginBottom:28 }}>
            {tags.map((t) => (
              <span key={t} style={{
                fontSize:11,padding:"4px 12px",borderRadius:20,
                background:`${color}1e`,color,fontWeight:700,
              }}>{t}</span>
            ))}
          </div>

          {/* Description */}
          <div style={{
            color:"rgba(255,255,255,.65)",lineHeight:1.9,
            fontSize:15,marginBottom:32,whiteSpace:"pre-line",
          }}>
            {desc}
          </div>

          {/* Video preview */}
          {video && (
            <div style={{ marginBottom: 28 }}>
              <SectionLabel>App Preview</SectionLabel>
              <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255,107,107,.2)", boxShadow: "0 12px 40px rgba(0,0,0,.5)" }}>
                <video
                  src={video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  style={{ width: "100%", display: "block", maxHeight: 420, background: "#000" }}
                />
              </div>
            </div>
          )}

          {/* Screenshots */}
          {hasScreens && (
            <div style={{ marginBottom: 28 }}>
              <SectionLabel>App Screenshots</SectionLabel>
              <div style={{
                display:"grid",
                gridTemplateColumns:`repeat(${Math.min(screens.length, 3)},1fr)`,
                gap:9,marginBottom:14,
              }}>
                {screens.map((s, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveThumb(i)}
                    style={{
                      borderRadius:12,overflow:"hidden",cursor:"pointer",
                      border:`2px solid ${i === activeThumb ? color : "transparent"}`,
                      transition:"all .25s",
                      transform: i === activeThumb ? "scale(1.04)" : "none",
                    }}
                  >
                    <img
                      src={s.img}
                      alt={s.label}
                      style={{ width:"100%",height:135,objectFit:"cover",display:"block" }}
                    />
                  </div>
                ))}
              </div>
              <div style={{ borderRadius:20,overflow:"hidden",background:"rgba(255,255,255,.03)",marginBottom:8,textAlign:"center" }}>
                <img
                  src={screens[activeThumb].img}
                  alt={screens[activeThumb].label}
                  style={{ maxHeight:480,maxWidth:"100%",display:"block",margin:"0 auto" }}
                />
              </div>
              <div style={{ fontSize:12,fontWeight:700,textAlign:"center",padding:10,color }}>
                {screens[activeThumb].label}
              </div>
            </div>
          )}

          {/* Tech stack */}
          <div style={{ marginBottom: 28 }}>
            <SectionLabel>Tech Stack</SectionLabel>
            <div style={{ display:"flex",flexWrap:"wrap",gap:8 }}>
              {tech.map((t) => (
                <span key={t} style={{
                  fontSize:13,padding:"7px 15px",borderRadius:9,
                  background:"rgba(255,255,255,.05)",
                  color:"rgba(255,255,255,.65)",
                  border:"1px solid rgba(255,255,255,.08)",
                }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Links */}
          {hasLinks ? (
            <div>
              <SectionLabel>Live Links</SectionLabel>
              <div style={{ display:"flex",gap:10,flexWrap:"wrap" }}>
                {links.ios && (
                  <ModalLink href={links.ios} bg={color} color="#000">🍎 App Store</ModalLink>
                )}
                {links.driver && (
                  <ModalLink href={links.driver} bg="rgba(255,255,255,.07)" color="#fff" bordered>
                    🚗 Driver App
                  </ModalLink>
                )}
                {links.android && (
                  <ModalLink href={links.android} bg={color} color="#000">🤖 Play Store</ModalLink>
                )}
              </div>
            </div>
          ) : (
            <div style={{
              padding:"14px 20px",borderRadius:12,
              background:"rgba(255,255,255,.03)",
              color:"rgba(255,255,255,.3)",fontSize:13,
            }}>
              🔧 In active development — store links coming soon.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div style={{
      fontSize:10,color:"rgba(255,255,255,.28)",fontWeight:700,
      letterSpacing:".16em",textTransform:"uppercase",
      marginBottom:14,display:"flex",alignItems:"center",gap:10,
    }}>
      {children}
      <span style={{ flex:1,height:1,background:"rgba(255,255,255,.07)",display:"block" }} />
    </div>
  );
}

function ModalLink({ href, bg, color, children, bordered }) {
  return (
    <a
      href={href} target="_blank" rel="noreferrer"
      style={{
        padding:"13px 26px",borderRadius:11,fontWeight:700,
        fontSize:14,display:"inline-flex",alignItems:"center",
        gap:7,transition:"all .25s",textDecoration:"none",
        background: bg, color,
        border: bordered ? "1px solid rgba(255,255,255,.1)" : "none",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = ""; }}
    >
      {children}
    </a>
  );
}

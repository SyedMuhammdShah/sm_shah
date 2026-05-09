import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { PROJECTS } from "../data";
import ProjectModal from "./ProjectModal";
import { StoreIcon } from "./StoreIcons";

export default function Projects() {
  const [hdrRef, hdrVis] = useReveal();
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" style={{ padding: "90px 0", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 40px" }}>
        {/* Header */}
        <div
          ref={hdrRef}
          style={{
            display:"flex",justifyContent:"space-between",
            alignItems:"flex-end",marginBottom:56,flexWrap:"wrap",gap:20,
            opacity: hdrVis ? 1 : 0,
            transform: hdrVis ? "none" : "translateY(38px)",
            transition: "opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1)",
          }}
        >
          <div>
            <p style={{ fontFamily:"'Space Mono',monospace",fontSize:11,fontWeight:700,letterSpacing:".18em",textTransform:"uppercase",color:"#e8604a",marginBottom:10 }}>
              Portfolio
            </p>
            <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif",fontSize:"clamp(32px,4vw,56px)",fontWeight:900,letterSpacing:0,lineHeight:1.0,textTransform:"uppercase",color:"#eef2f7" }}>
              Featured Projects
            </h2>
          </div>
          <p style={{ fontFamily:"'Barlow',sans-serif",fontSize:14,color:"rgba(106,139,168,.65)",textAlign:"right",maxWidth:220,lineHeight:1.6 }}>
            Click any card to explore screenshots &amp; live links
          </p>
        </div>

        {/* Grid */}
        <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:22 }}>
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i * 0.06} onClick={() => setSelected(p)} />
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

function ProjectCard({ project, delay, onClick }) {
  const [ref, vis]     = useReveal();
  const [hovered, setHovered] = useState(false);
  const { icon, title, sub, color, tags, desc, tech, screens, links } = project;

  // Phone preview
  const sc = screens || [];
  let phonesContent = null;
  if (sc.length >= 3) {
    phonesContent = (
      <div style={{ display:"flex",alignItems:"flex-end",justifyContent:"center",width:"100%",height:"100%" }}>
        <PhoneMock img={sc[0].img} alt={sc[0].label} side="left"  hovered={hovered} />
        <PhoneMock img={sc[1].img} alt={sc[1].label} main        hovered={hovered} />
        <PhoneMock img={sc[2].img} alt={sc[2].label} side="right" hovered={hovered} />
      </div>
    );
  } else if (sc.length >= 1) {
    phonesContent = (
      <div style={{ display:"flex",alignItems:"flex-end",justifyContent:"center",width:"100%",height:"100%" }}>
        <PhoneMock img={sc[0].img} alt={sc[0].label} main hovered={hovered} />
      </div>
    );
  } else {
    phonesContent = (
      <div style={{
        position:"absolute",inset:0,display:"flex",
        alignItems:"center",justifyContent:"center",
        fontSize:80,opacity:.1,zIndex:1,
      }}>
        {icon}
      </div>
    );
  }

  const linksHTML = [];
  if (links?.ios)     linksHTML.push({ href: links.ios,     label: "App Store",  type: "apple"  });
  if (links?.driver)  linksHTML.push({ href: links.driver,  label: "Driver App", type: "driver" });
  if (links?.android) linksHTML.push({ href: links.android, label: "Play Store", type: "play"   });

  return (
    <div
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 22, overflow: "hidden",
        background: hovered ? "rgba(21,35,53,.95)" : "rgba(13,27,42,.8)",
        border: `1px solid ${hovered ? color + "55" : "rgba(238,242,247,.07)"}`,
        cursor: "pointer",
        transition: "all .4s cubic-bezier(.16,1,.3,1)",
        display: "flex", flexDirection: "column",
        opacity: vis ? 1 : 0,
        transform: vis
          ? hovered ? "translateY(-12px)" : "none"
          : "translateY(38px)",
        boxShadow: hovered ? "0 48px 100px rgba(0,0,0,.6)" : "none",
        transitionDelay: delay + "s",
      }}
    >
      {/* Preview */}
      <div style={{
        height: 250, position: "relative", overflow: "hidden",
        display: "flex", alignItems: "flex-end",
        justifyContent: "center", padding: "28px 14px 0",
        background: `linear-gradient(160deg,${color}14,${color}04)`,
      }}>
        {/* Top color bar */}
        <div style={{
          position:"absolute",top:0,left:0,right:0,height:3,
          background:`linear-gradient(90deg,${color},${color}00)`,
        }} />
        {/* Badge */}
        <div style={{
          position:"absolute",top:14,left:14,zIndex:11,
          width:42,height:42,borderRadius:12,
          background:"rgba(0,0,0,.55)",backdropFilter:"blur(10px)",
          border:"1px solid rgba(255,255,255,.1)",
          display:"flex",alignItems:"center",justifyContent:"center",
          fontSize:19,
        }}>
          {icon}
        </div>
        {phonesContent}
        {/* Gradient overlay */}
        <div style={{
          position:"absolute",bottom:0,left:0,right:0,height:90,
          background:"linear-gradient(to top,#080f18,transparent)",
          pointerEvents:"none",zIndex:10,
        }} />
      </div>

      {/* Body */}
      <div style={{ padding:"22px 24px 26px",flex:1,display:"flex",flexDirection:"column" }}>
        <div style={{ display:"flex",gap:5,flexWrap:"wrap",marginBottom:12 }}>
          {tags.map((t) => (
            <span key={t} style={{
              fontSize:10,padding:"3px 9px",borderRadius:20,
              background:`${color}1a`,color,fontWeight:700,
            }}>{t}</span>
          ))}
        </div>
        <div style={{ fontFamily:"'Barlow Condensed',sans-serif",fontSize:22,fontWeight:900,color:"#eef2f7",marginBottom:3,textTransform:"uppercase",letterSpacing:.3 }}>
          {title}
        </div>
        <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:12,fontWeight:700,color,marginBottom:12 }}>{sub}</div>
        <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:13,color:"rgba(106,139,168,.7)",lineHeight:1.72,flex:1,marginBottom:16 }}>
          {desc.split("\n")[0].slice(0, 120)}...
        </div>
        <div style={{ display:"flex",flexWrap:"wrap",gap:5,marginBottom:14 }}>
          {tech.slice(0,4).map((t) => (
            <span key={t} style={{
              fontFamily:"'Space Mono',monospace",
              fontSize:9,padding:"3px 8px",borderRadius:5,
              background:"rgba(238,242,247,.05)",color:"rgba(106,139,168,.6)",
            }}>{t}</span>
          ))}
        </div>
        <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between" }}>
          <div style={{ display:"flex",gap:6 }}>
            {linksHTML.map(({ href, label, type }) => (
              <a
                key={label} href={href} target="_blank" rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  fontSize:11,padding:"5px 11px",borderRadius:7,fontWeight:700,
                  textDecoration:"none",display:"inline-flex",alignItems:"center",gap:4,
                  background:`${color}22`,color,transition:"all .2s",
                }}
              >
                <StoreIcon type={type} />
                {label}
              </a>
            ))}
          </div>
          <div style={{
            fontSize:11,fontWeight:700,color,
            opacity: hovered ? 1 : 0,
            transition: "opacity .3s",
          }}>
            Details →
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneMock({ img, alt, main, side, hovered }) {
  const isLeft  = side === "left";
  const isRight = side === "right";

  const baseTransform = isLeft
    ? `rotate(-7deg) translateX(14px)`
    : isRight
    ? `rotate(7deg) translateX(-14px)`
    : "none";

  const hoverTransform = isLeft
    ? `rotate(-10deg) translateX(18px)`
    : isRight
    ? `rotate(10deg) translateX(-18px)`
    : "translateY(-8px)";

  return (
    <div style={{
      borderRadius: "16px 16px 0 0", overflow: "hidden",
      flexShrink: 0,
      boxShadow: "0 16px 48px rgba(0,0,0,.7)",
      transition: "transform .45s cubic-bezier(.16,1,.3,1)",
      transform: hovered ? hoverTransform : baseTransform,
      transformOrigin: !main ? "bottom center" : undefined,
      width:  main ? 108 : 82,
      height: main ? 218 : 170,
      zIndex: main ? 3 : 2,
      border: main
        ? "2px solid rgba(255,255,255,.2)"
        : "1.5px solid rgba(255,255,255,.09)",
      opacity: main ? 1 : 0.6,
    }}>
      <img src={img} alt={alt} style={{ width:"100%",height:"100%",objectFit:"cover",objectPosition:"top",display:"block" }} />
    </div>
  );
}

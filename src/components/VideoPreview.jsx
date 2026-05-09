import { useReveal } from "../hooks/useReveal";
import rightAwayVideo from "../images/rideAway/rightAwayideo.mp4";
import rideAway1 from "../images/rideAway/0x0ss.png";
import rideAway2 from "../images/rideAway/0x0ss (1).png";

const TECH = ["Flutter", "Firebase", "BLoC", "Real-time GPS", "REST APIs", "Multi-Role Auth"];

const HIGHLIGHTS = [
  { icon: "👥", label: "3 User Roles",   sub: "Supplier · Driver · Admin" },
  { icon: "📍", label: "Live Tracking",  sub: "Real-time GPS" },
  { icon: "🔔", label: "Push Alerts",    sub: "FCM Notifications" },
];

export default function VideoPreview() {
  const [ref, vis] = useReveal();

  return (
    <section style={{
      padding: "20px 0 46px", position: "relative", zIndex: 1, overflow: "hidden",
      borderTop: "1px solid rgba(238,242,247,.05)",
    }}>
      {/* Background glow */}
      <div style={{
        position:"absolute", top:"50%", right:"-8%", transform:"translateY(-50%)",
        width:700, height:700, borderRadius:"50%",
        background:"radial-gradient(circle,rgba(232,96,74,.06),transparent 65%)",
        filter:"blur(80px)", pointerEvents:"none",
      }} />
      <div style={{
        position:"absolute", top:"50%", left:"15%", transform:"translateY(-50%)",
        width:400, height:400, borderRadius:"50%",
        background:"radial-gradient(circle,rgba(212,168,71,.04),transparent 65%)",
        filter:"blur(60px)", pointerEvents:"none",
      }} />

      <div
        ref={ref}
        style={{
          maxWidth: 1180, margin: "0 auto", padding: "0 40px",
          opacity:   vis ? 1 : 0,
          transform: vis ? "none" : "translateY(40px)",
          transition: "opacity .9s cubic-bezier(.16,1,.3,1), transform .9s cubic-bezier(.16,1,.3,1)",
        }}
      >
        {/* Section label */}
        <div style={{ marginBottom: 40, display:"flex", alignItems:"center", gap:12 }}>
          <div style={{ width:32, height:1, background:"linear-gradient(90deg,transparent,rgba(232,96,74,.5))" }} />
          <span style={{
            fontFamily:"'Space Mono',monospace",
            fontSize:10, fontWeight:700, color:"rgba(232,96,74,.6)",
            letterSpacing:".18em", textTransform:"uppercase",
          }}>Featured Build</span>
          <div style={{ width:32, height:1, background:"linear-gradient(90deg,rgba(232,96,74,.5),transparent)" }} />
        </div>

        {/* Two-column grid */}
        <div className="video-grid" style={{
          display:"grid",
          gridTemplateColumns:"1fr 1.15fr",
          gap:60,
          alignItems:"center",
        }}>

          {/* ── LEFT: project details ── */}
          <div>
            {/* Status badge */}
            <div style={{
              display:"inline-flex", alignItems:"center", gap:8,
              padding:"6px 14px", borderRadius:20,
              background:"rgba(232,96,74,.08)",
              border:"1px solid rgba(232,96,74,.2)",
              fontFamily:"'Space Mono',monospace",
              fontSize:10, fontWeight:700, color:"#f07b66",
              letterSpacing:".12em", textTransform:"uppercase",
              marginBottom:20,
            }}>
              <span style={{ width:6,height:6,borderRadius:"50%",background:"#e8604a",display:"inline-block",animation:"pulse 2s infinite" }} />
              In Development
            </div>

            {/* Title */}
            <h2 style={{
              fontFamily:"'Barlow Condensed',sans-serif",
              fontSize:"clamp(36px,3.8vw,60px)",
              fontWeight:900, lineHeight:0.94,
              textTransform:"uppercase", color:"#eef2f7",
              marginBottom:10,
            }}>
              Right Away
            </h2>
            <p style={{
              fontFamily:"'Barlow',sans-serif",
              fontSize:"clamp(13px,1.1vw,15px)",
              color:"rgba(232,96,74,.7)", fontWeight:600,
              marginBottom:20, letterSpacing:.2,
            }}>
              Construction Delivery Platform
            </p>

            {/* Description */}
            <p style={{
              fontFamily:"'Barlow',sans-serif",
              fontSize:"clamp(13px,1vw,14.5px)",
              color:"rgba(106,139,168,.75)", lineHeight:1.85,
              marginBottom:28, maxWidth:400,
            }}>
              A multi-role logistics app connecting construction material suppliers with contractors.
              Real-time order tracking, role-based dashboards, and instant push notifications — built entirely in Flutter with a Node.js backend.
            </p>

            {/* Highlight cards */}
            <div style={{ display:"flex", flexDirection:"column", gap:10, marginBottom:28 }}>
              {HIGHLIGHTS.map(h => (
                <div key={h.label} style={{
                  display:"flex", alignItems:"center", gap:14,
                  padding:"10px 16px", borderRadius:12,
                  background:"rgba(232,96,74,.05)",
                  border:"1px solid rgba(232,96,74,.12)",
                }}>
                  <span style={{ fontSize:18 }}>{h.icon}</span>
                  <div>
                    <div style={{ fontFamily:"'Barlow Condensed',sans-serif",fontSize:14,fontWeight:700,color:"rgba(238,242,247,.9)",textTransform:"uppercase",letterSpacing:.2 }}>{h.label}</div>
                    <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:11,color:"rgba(106,139,168,.65)",marginTop:1 }}>{h.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech tags */}
            <div style={{ display:"flex", gap:7, flexWrap:"wrap" }}>
              {TECH.map(t => (
                <span key={t} style={{
                  fontFamily:"'Space Mono',monospace",
                  fontSize:9, padding:"4px 11px", borderRadius:20,
                  background:"rgba(232,96,74,.07)",
                  color:"rgba(240,123,102,.8)",
                  border:"1px solid rgba(232,96,74,.14)",
                  fontWeight:600,
                }}>{t}</span>
              ))}
            </div>
          </div>

          {/* ── RIGHT: browser + floating phones ── */}
          <div style={{ position:"relative" }}>
            {/* macOS browser mockup */}
            <div style={{
              borderRadius:14, overflow:"hidden",
              border:"1px solid rgba(238,242,247,.07)",
              boxShadow:[
                "0 32px 90px rgba(0,0,0,.78)",
                "0 0 0 1px rgba(238,242,247,.04)",
                "0 0 70px rgba(232,96,74,.08)",
              ].join(","),
              background:"#0d1b2a",
            }}>
              {/* Title bar */}
              <div style={{
                height:36, background:"#152335",
                borderBottom:"1px solid rgba(238,242,247,.06)",
                display:"flex", alignItems:"center", padding:"0 16px", gap:7,
              }}>
                <div style={{ width:10,height:10,borderRadius:"50%",background:"#ff5f57",flexShrink:0 }} />
                <div style={{ width:10,height:10,borderRadius:"50%",background:"#febc2e",flexShrink:0 }} />
                <div style={{ width:10,height:10,borderRadius:"50%",background:"#28c840",flexShrink:0 }} />
                <div style={{
                  flex:1, margin:"0 12px",
                  background:"rgba(238,242,247,.04)",
                  border:"1px solid rgba(238,242,247,.07)",
                  borderRadius:6, height:20,
                  display:"flex", alignItems:"center", justifyContent:"center",
                }}>
                  <span style={{ fontFamily:"'Space Mono',monospace",fontSize:9,color:"rgba(238,242,247,.2)",letterSpacing:".06em" }}>
                    🔒 &nbsp; rightaway.app &nbsp;·&nbsp; Construction Materials Delivery
                  </span>
                </div>
                <div style={{ display:"flex",alignItems:"center",gap:5,fontFamily:"'Space Mono',monospace",fontSize:9,fontWeight:700,color:"#f07b66",letterSpacing:".07em" }}>
                  <span style={{ width:6,height:6,borderRadius:"50%",background:"#e8604a",display:"inline-block",animation:"pulse 2s infinite" }} />
                  IN DEV
                </div>
              </div>

              {/* Video */}
              <video
                src={rightAwayVideo}
                autoPlay muted loop playsInline
                style={{ width:"100%", display:"block", maxHeight:360, objectFit:"cover" }}
              />
            </div>

            {/* Floating phone previews — bottom-right */}
            <div style={{
              position:"absolute", bottom:-24, right:-20,
              display:"flex", gap:10, zIndex:4,
              animation:"slideUp .8s cubic-bezier(.16,1,.3,1) .6s both",
            }}>
              <div style={{
                width:68, height:140, borderRadius:14, overflow:"hidden",
                border:"1.5px solid rgba(232,96,74,.28)",
                boxShadow:"0 12px 40px rgba(0,0,0,.7)",
                background:"#080f18", transform:"rotate(-3deg)",
              }}>
                <div style={{ height:6,background:"#080f18",display:"flex",justifyContent:"center",alignItems:"center" }}>
                  <div style={{ width:18,height:3,borderRadius:10,background:"#1c3050" }} />
                </div>
                <img src={rideAway1} alt="" style={{ width:"100%",height:"calc(100% - 6px)",objectFit:"cover",objectPosition:"top",display:"block" }} />
              </div>
              <div style={{
                width:68, height:140, borderRadius:14, overflow:"hidden",
                border:"1.5px solid rgba(232,96,74,.18)",
                boxShadow:"0 12px 40px rgba(0,0,0,.7)",
                background:"#080f18", transform:"rotate(2deg) translateY(-10px)",
              }}>
                <div style={{ height:6,background:"#080f18",display:"flex",justifyContent:"center",alignItems:"center" }}>
                  <div style={{ width:18,height:3,borderRadius:10,background:"#1c3050" }} />
                </div>
                <img src={rideAway2} alt="" style={{ width:"100%",height:"calc(100% - 6px)",objectFit:"cover",objectPosition:"top",display:"block" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

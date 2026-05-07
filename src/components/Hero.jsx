import { useTyping } from "../hooks/useTyping";
import { HERO } from "../data";
import rightAwayVideo from "../images/rideAway/rightAwayideo.mp4";
import collage1 from "../images/epicRides/pic1.png";
import collage2 from "../images/epicRides/pic2.png";
import collage3 from "../images/epicRides/pic3.png";
import collage4 from "../images/hadafi/Phone SS 1.jpg";
import collage5 from "../images/hadafi/Phone SS 2.jpg";
import collage6 from "../images/hadafi/Phone SS 3.jpg";

const COLLAGE = [collage1, collage2, collage3, collage4, collage5, collage6];

export default function Hero() {
  const typed = useTyping(HERO.roles);
  const goto = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh", display: "flex",
        alignItems: "center", position: "relative", overflow: "hidden",
      }}
    >
      {/* Glow orbs */}
      <div style={{ position:"absolute",width:800,height:800,borderRadius:"50%",top:"-20%",left:"35%",transform:"translateX(-50%)",background:"radial-gradient(circle,rgba(0,229,160,.055),transparent 62%)",pointerEvents:"none",filter:"blur(80px)" }} />
      <div style={{ position:"absolute",width:500,height:500,borderRadius:"50%",top:"15%",right:"-5%",background:"radial-gradient(circle,rgba(124,111,255,.1),transparent 65%)",pointerEvents:"none",filter:"blur(80px)" }} />
      <div style={{ position:"absolute",width:300,height:300,borderRadius:"50%",bottom:"10%",left:"2%",background:"radial-gradient(circle,rgba(0,100,255,.07),transparent 65%)",pointerEvents:"none",filter:"blur(80px)" }} />

      {/* Two-column content */}
      <div
        className="hero-grid"
        style={{
          position: "relative", zIndex: 2, width: "100%",
          maxWidth: 1160, margin: "0 auto",
          padding: "80px 40px 60px",
          display: "grid",
          gridTemplateColumns: "1fr 400px",
          gap: 56,
          alignItems: "center",
        }}
      >
        {/* ── Left: text content ── */}
        <div>
          {/* Available badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 9,
            padding: "7px 16px", borderRadius: 24,
            background: "rgba(0,229,160,.07)",
            border: "1px solid rgba(0,229,160,.16)",
            marginBottom: 26,
          }}>
            <span style={{
              width: 8, height: 8, borderRadius: "50%",
              background: "#00e5a0", boxShadow: "0 0 10px #00e5a0",
              display: "inline-block",
              animation: "pulse 2.2s infinite",
            }} />
            <span style={{ fontSize: 12, color: "#00e5a0", fontWeight: 500 }}>
              {HERO.availability}
            </span>
          </div>

          {/* Name */}
          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(38px,5.5vw,76px)",
            fontWeight: 800, lineHeight: 0.92,
            letterSpacing: -3, marginBottom: 18, color: "#fff",
          }}>
            {HERO.name.split("\n").map((line, i) => (
              <span key={i} style={i === 1 ? {
                display: "block",
                background: "linear-gradient(120deg,#00e5a0 0%,#7c6fff 55%,#ff8c42 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              } : { display: "block" }}>
                {line}
              </span>
            ))}
          </h1>

          {/* Typed text */}
          <div style={{
            fontSize: "clamp(14px,1.8vw,20px)",
            fontWeight: 500, color: "rgba(255,255,255,.6)",
            marginBottom: 18, minHeight: "1.5em",
          }}>
            <span style={{
              background: "linear-gradient(135deg,#00e5a0,#7c6fff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 700,
            }}>
              {typed}
            </span>
            <span style={{ color: "#00e5a0", animation: "blink 1s step-end infinite", fontWeight: 300 }}>
              |
            </span>
          </div>

          {/* Description */}
          <p style={{
            fontSize: "clamp(13px,1.1vw,15px)",
            color: "rgba(255,255,255,.57)",
            maxWidth: 500, lineHeight: 1.9, marginBottom: 34,
          }}>
            {HERO.description}
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48 }}>
            <button onClick={() => goto("projects")} className="btn-green" style={{ padding: "13px 26px", fontSize: 14 }}>
              View Projects →
            </button>
            <a href={HERO.links.email}    className="btn-outline" style={{ padding: "13px 26px", fontSize: 14 }}>Get In Touch</a>
            <a href={HERO.links.linkedin} target="_blank" rel="noreferrer" className="btn-blue" style={{ padding: "13px 26px", fontSize: 14 }}>LinkedIn ↗</a>
            <a href={HERO.links.github}   target="_blank" rel="noreferrer" className="btn-dim"  style={{ padding: "13px 26px", fontSize: 14 }}>GitHub ↗</a>
          </div>

          {/* Stats */}
          <div style={{
            display: "flex", flexWrap: "wrap",
            borderTop: "1px solid rgba(255,255,255,.07)",
            paddingTop: 30,
          }}>
            {HERO.stats.map((s, i) => (
              <div key={i} style={{
                paddingRight: i < HERO.stats.length - 1 ? 32 : 0,
                marginRight:  i < HERO.stats.length - 1 ? 32 : 0,
                borderRight:  i < HERO.stats.length - 1 ? "1px solid rgba(255,255,255,.07)" : "none",
              }}>
                <div style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(22px,2.5vw,34px)",
                  fontWeight: 800,
                  background: "linear-gradient(135deg,#00e5a0,#7c6fff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>{s.number}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,.35)", marginTop: 3, fontWeight: 500 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: video + app collage ── */}
        <div className="hero-visual" style={{ display: "flex", flexDirection: "column", gap: 9 }}>
          {/* Right Away video card */}
          <div style={{
            borderRadius: 18, overflow: "hidden",
            border: "1px solid rgba(255,107,107,.22)",
            boxShadow: "0 16px 50px rgba(0,0,0,.55)",
            background: "rgba(255,107,107,.03)",
          }}>
            <video
              src={rightAwayVideo}
              autoPlay
              muted
              loop
              playsInline
              style={{ width: "100%", display: "block", maxHeight: 230, objectFit: "cover" }}
            />
            <div style={{
              padding: "7px 14px",
              borderTop: "1px solid rgba(255,107,107,.1)",
              display: "flex", alignItems: "center", gap: 7,
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: "50%",
                background: "#ff6b6b", animation: "pulse 2s infinite",
                display: "inline-block", flexShrink: 0,
              }} />
              <span style={{ fontSize: 10, fontWeight: 700, color: "#ff6b6b", letterSpacing: ".08em" }}>
                RIGHT AWAY &nbsp;·&nbsp; CONSTRUCTION DELIVERY &nbsp;·&nbsp; IN DEV
              </span>
            </div>
          </div>

          {/* App screenshot collage — 3 × 2 grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 7 }}>
            {COLLAGE.map((img, i) => (
              <div
                key={i}
                style={{
                  borderRadius: 11, overflow: "hidden",
                  aspectRatio: "9/16",
                  border: "1px solid rgba(255,255,255,.07)",
                  boxShadow: "0 4px 14px rgba(0,0,0,.45)",
                }}
              >
                <img
                  src={img}
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                />
              </div>
            ))}
          </div>

          {/* Caption */}
          <div style={{ textAlign: "center", fontSize: 10, color: "rgba(255,255,255,.2)", letterSpacing: ".1em", marginTop: 2 }}>
            Epic Rides &nbsp;·&nbsp; Hadafi &nbsp;·&nbsp; 7+ Live Apps
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: 32, left: "50%",
        transform: "translateX(-50%)",
        display: "flex", flexDirection: "column",
        alignItems: "center", gap: 6, opacity: 0.3, zIndex: 2,
      }}>
        <div style={{
          width: 24, height: 38,
          border: "1.5px solid rgba(255,255,255,.35)",
          borderRadius: 13, display: "flex",
          justifyContent: "center", paddingTop: 6,
        }}>
          <div style={{
            width: 3, height: 8,
            background: "#00e5a0", borderRadius: 2,
            animation: "scrollanim 1.8s ease-in-out infinite",
          }} />
        </div>
        <span style={{ fontSize: 9, letterSpacing: ".22em", textTransform: "uppercase" }}>Scroll</span>
      </div>
    </section>
  );
}

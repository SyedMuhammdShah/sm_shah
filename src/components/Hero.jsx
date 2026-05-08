import { useTyping } from "../hooks/useTyping";
import { HERO } from "../data";
import epic1   from "../images/epicRides/pic1.png";
import epic2   from "../images/epicRides/pic2.png";
import hadafi1 from "../images/hadafi/Phone SS 1.jpg";
import hadafi2 from "../images/hadafi/Phone SS 3.jpg";

export default function Hero() {
  const typed = useTyping(HERO.roles);
  const goto  = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh", display: "flex",
        alignItems: "center", position: "relative", overflow: "hidden",
      }}
    >
      {/* Ambient glow orbs */}
      <div style={{ position:"absolute",width:900,height:900,borderRadius:"50%",top:"-25%",left:"38%",transform:"translateX(-50%)",background:"radial-gradient(circle,rgba(0,229,160,.05),transparent 60%)",pointerEvents:"none",filter:"blur(90px)" }} />
      <div style={{ position:"absolute",width:520,height:520,borderRadius:"50%",top:"10%",right:"-4%",background:"radial-gradient(circle,rgba(124,111,255,.09),transparent 65%)",pointerEvents:"none",filter:"blur(80px)" }} />
      <div style={{ position:"absolute",width:340,height:340,borderRadius:"50%",bottom:"8%",left:"2%",background:"radial-gradient(circle,rgba(0,100,255,.06),transparent 65%)",pointerEvents:"none",filter:"blur(70px)" }} />

      {/* Two-column layout */}
      <div
        className="hero-grid"
        style={{
          position: "relative", zIndex: 2, width: "100%",
          maxWidth: 1160, margin: "0 auto",
          padding: "88px 40px 64px",
          display: "grid",
          gridTemplateColumns: "1fr 420px",
          gap: 60,
          alignItems: "center",
        }}
      >
        {/* ── LEFT: text with staggered entrance ── */}
        <div>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: 9,
              padding: "7px 16px", borderRadius: 24,
              background: "rgba(0,229,160,.07)",
              border: "1px solid rgba(0,229,160,.16)",
              marginBottom: 26,
              animation: "slideUp .7s cubic-bezier(.16,1,.3,1) .1s both",
            }}
          >
            <span style={{
              width: 8, height: 8, borderRadius: "50%",
              background: "#00e5a0", boxShadow: "0 0 10px #00e5a0",
              display: "inline-block", animation: "pulse 2.2s infinite",
            }} />
            <span style={{ fontSize: 12, color: "#00e5a0", fontWeight: 500 }}>{HERO.availability}</span>
          </div>

          {/* Name */}
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(38px,5.5vw,76px)",
              fontWeight: 800, lineHeight: 0.92,
              letterSpacing: -3, marginBottom: 18, color: "#fff",
              animation: "slideUp .75s cubic-bezier(.16,1,.3,1) .22s both",
            }}
          >
            {HERO.name.split("\n").map((line, i) => (
              <span key={i} style={i === 1 ? {
                display: "block",
                background: "linear-gradient(120deg,#00e5a0 0%,#7c6fff 55%,#ff8c42 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              } : { display: "block" }}>
                {line}
              </span>
            ))}
          </h1>

          {/* Typed */}
          <div
            style={{
              fontSize: "clamp(14px,1.8vw,20px)", fontWeight: 500,
              color: "rgba(255,255,255,.6)", marginBottom: 18, minHeight: "1.5em",
              animation: "slideUp .7s cubic-bezier(.16,1,.3,1) .38s both",
            }}
          >
            <span style={{
              background: "linear-gradient(135deg,#00e5a0,#7c6fff)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: 700,
            }}>{typed}</span>
            <span style={{ color: "#00e5a0", animation: "blink 1s step-end infinite", fontWeight: 300 }}>|</span>
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: "clamp(13px,1.1vw,15px)", color: "rgba(255,255,255,.57)",
              maxWidth: 500, lineHeight: 1.9, marginBottom: 34,
              animation: "slideUp .7s cubic-bezier(.16,1,.3,1) .5s both",
            }}
          >
            {HERO.description}
          </p>

          {/* Buttons */}
          <div
            style={{
              display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48,
              animation: "slideUp .7s cubic-bezier(.16,1,.3,1) .62s both",
            }}
          >
            <button onClick={() => goto("projects")} className="btn-green" style={{ padding: "13px 26px", fontSize: 14 }}>
              View Projects →
            </button>
            <a href={HERO.links.email}    className="btn-outline" style={{ padding: "13px 26px", fontSize: 14 }}>Get In Touch</a>
            <a href={HERO.links.linkedin} target="_blank" rel="noreferrer" className="btn-blue" style={{ padding: "13px 26px", fontSize: 14 }}>LinkedIn ↗</a>
            <a href={HERO.links.github}   target="_blank" rel="noreferrer" className="btn-dim"  style={{ padding: "13px 26px", fontSize: 14 }}>GitHub ↗</a>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex", flexWrap: "wrap",
              borderTop: "1px solid rgba(255,255,255,.07)", paddingTop: 30,
              animation: "slideUp .7s cubic-bezier(.16,1,.3,1) .76s both",
            }}
          >
            {HERO.stats.map((s, i) => (
              <div key={i} style={{
                paddingRight: i < HERO.stats.length - 1 ? 32 : 0,
                marginRight:  i < HERO.stats.length - 1 ? 32 : 0,
                borderRight:  i < HERO.stats.length - 1 ? "1px solid rgba(255,255,255,.07)" : "none",
              }}>
                <div style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(22px,2.5vw,34px)", fontWeight: 800,
                  background: "linear-gradient(135deg,#00e5a0,#7c6fff)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>{s.number}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,.35)", marginTop: 3, fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: floating phone collage ── */}
        <div className="hero-visual">
          <PhoneCollage />
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
        opacity: 0.28, zIndex: 2,
        animation: "slideUp .6s ease 1.1s both",
      }}>
        <div style={{
          width: 24, height: 38, border: "1.5px solid rgba(255,255,255,.35)",
          borderRadius: 13, display: "flex", justifyContent: "center", paddingTop: 6,
        }}>
          <div style={{ width: 3, height: 8, background: "#00e5a0", borderRadius: 2, animation: "scrollanim 1.8s ease-in-out infinite" }} />
        </div>
        <span style={{ fontSize: 9, letterSpacing: ".22em", textTransform: "uppercase" }}>Scroll</span>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   4-phone staggered collage with floating animations
   Layout:
     [epic1 –14°]  [stats card]  [hadafi1 +14°]
     [epic2  –5°]               [hadafi2  +5°]
───────────────────────────────────────────────────────── */
function PhoneCollage() {
  return (
    <div style={{
      position: "relative", width: "100%", height: 400,
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>

      {/* Radial glow background */}
      <div style={{
        position: "absolute", width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle,rgba(124,111,255,.12),transparent 65%)",
        filter: "blur(48px)", pointerEvents: "none",
      }} />

      {/* ── Epic Rides — back left ──
          Wrapper: entrance (slideUp, opacity only)
          Inner:   float-bl (rotation + translateY loop) */}
      <div style={{
        position: "absolute", left: 0, top: 12, zIndex: 2,
        animation: "slideUp .85s cubic-bezier(.16,1,.3,1) .35s both",
      }}>
        <div style={{ opacity: 0.6, animation: "float-bl 4.4s ease-in-out 1.3s infinite" }}>
          <PhoneShot img={epic1} width={80} height={162} />
        </div>
      </div>

      {/* ── Epic Rides — front left ── */}
      <div style={{
        position: "absolute", left: 36, bottom: 10, zIndex: 3,
        animation: "slideUp .85s cubic-bezier(.16,1,.3,1) .5s both",
      }}>
        <div style={{ opacity: 0.88, animation: "float-fl 3.8s ease-in-out 1.5s infinite" }}>
          <PhoneShot img={epic2} width={90} height={182} />
        </div>
      </div>

      {/* ── Center glass card (stats + label) ── */}
      <div style={{
        position: "relative", zIndex: 5, flexShrink: 0,
        animation: "slideUp .8s cubic-bezier(.16,1,.3,1) .45s both",
      }}>
        <div style={{ animation: "float-c 5s ease-in-out 1.6s infinite" }}>
          <div style={{
            background: "rgba(8,8,20,.80)",
            backdropFilter: "blur(22px)",
            WebkitBackdropFilter: "blur(22px)",
            border: "1px solid rgba(255,255,255,.10)",
            borderRadius: 20,
            padding: "20px 24px",
            textAlign: "center",
            boxShadow: "0 18px 60px rgba(0,0,0,.65), 0 0 0 1px rgba(255,255,255,.04)",
            animation: "glowPulse 4s ease-in-out infinite",
            minWidth: 110,
          }}>
            <div style={{
              fontFamily: "'Syne',sans-serif", fontSize: 30, fontWeight: 800,
              background: "linear-gradient(135deg,#00e5a0,#7c6fff)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              lineHeight: 1,
            }}>100K+</div>
            <div style={{ fontSize: 9, color: "rgba(255,255,255,.32)", marginTop: 4, letterSpacing: ".1em", textTransform: "uppercase" }}>Downloads</div>
            <div style={{ width: 28, height: 1, background: "linear-gradient(90deg,transparent,rgba(255,255,255,.12),transparent)", margin: "12px auto" }} />
            <div style={{
              fontFamily: "'Syne',sans-serif", fontSize: 24, fontWeight: 800,
              background: "linear-gradient(135deg,#7c6fff,#ff8c42)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              lineHeight: 1,
            }}>7+</div>
            <div style={{ fontSize: 9, color: "rgba(255,255,255,.32)", marginTop: 4, letterSpacing: ".1em", textTransform: "uppercase" }}>Apps Shipped</div>
          </div>
        </div>
      </div>

      {/* ── Hadafi — back right ── */}
      <div style={{
        position: "absolute", right: 0, top: 12, zIndex: 2,
        animation: "slideUp .85s cubic-bezier(.16,1,.3,1) .35s both",
      }}>
        <div style={{ opacity: 0.6, animation: "float-br 4.2s ease-in-out 1.35s infinite" }}>
          <PhoneShot img={hadafi1} width={80} height={162} />
        </div>
      </div>

      {/* ── Hadafi — front right ── */}
      <div style={{
        position: "absolute", right: 36, bottom: 10, zIndex: 3,
        animation: "slideUp .85s cubic-bezier(.16,1,.3,1) .5s both",
      }}>
        <div style={{ opacity: 0.88, animation: "float-fr 3.6s ease-in-out 1.55s infinite" }}>
          <PhoneShot img={hadafi2} width={90} height={182} />
        </div>
      </div>

      {/* ── Floating app badges ── */}
      <div style={{
        position: "absolute", left: 4, bottom: 52, zIndex: 6,
        background: "rgba(124,111,255,.10)",
        backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
        border: "1px solid rgba(124,111,255,.26)",
        borderRadius: 10, padding: "5px 10px",
        fontSize: 9, fontWeight: 700, color: "#a899ff",
        letterSpacing: ".08em",
        animation: "slideUp .7s cubic-bezier(.16,1,.3,1) .8s both",
      }}>
        🚗 EPIC RIDES &nbsp;·&nbsp; US
      </div>

      <div style={{
        position: "absolute", right: 4, bottom: 52, zIndex: 6,
        background: "rgba(255,140,66,.10)",
        backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
        border: "1px solid rgba(255,140,66,.26)",
        borderRadius: 10, padding: "5px 10px",
        fontSize: 9, fontWeight: 700, color: "#ffaa66",
        letterSpacing: ".08em",
        animation: "slideUp .7s cubic-bezier(.16,1,.3,1) .8s both",
      }}>
        ⚽ HADAFI &nbsp;·&nbsp; UAE
      </div>

    </div>
  );
}

/* Minimal phone frame */
function PhoneShot({ img, width, height }) {
  return (
    <div style={{
      width, height,
      borderRadius: 18,
      overflow: "hidden",
      border: "1.5px solid rgba(255,255,255,.12)",
      boxShadow: "0 18px 52px rgba(0,0,0,.72)",
      background: "#060606",
    }}>
      {/* Notch */}
      <div style={{
        height: 7, background: "#060606",
        display: "flex", justifyContent: "center", alignItems: "center",
      }}>
        <div style={{ width: 26, height: 4, borderRadius: 10, background: "#1c1c1e" }} />
      </div>
      <img
        src={img} alt=""
        style={{ width: "100%", height: `calc(100% - 7px)`, objectFit: "cover", objectPosition: "top", display: "block" }}
      />
    </div>
  );
}

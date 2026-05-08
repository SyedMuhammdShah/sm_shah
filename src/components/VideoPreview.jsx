import { useReveal } from "../hooks/useReveal";
import rightAwayVideo from "../images/rideAway/rightAwayideo.mp4";

export default function VideoPreview() {
  const [ref, vis] = useReveal();

  return (
    <section style={{ padding: "0 0 90px", position: "relative", zIndex: 1, overflow: "hidden" }}>

      {/* Soft glow behind */}
      <div style={{
        position: "absolute", top: "40%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: 800, height: 300,
        background: "radial-gradient(ellipse,rgba(255,107,107,.07),transparent 65%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />

      <div
        ref={ref}
        style={{
          maxWidth: 860, margin: "0 auto", padding: "0 40px",
          opacity:   vis ? 1 : 0,
          transform: vis ? "none" : "translateY(36px)",
          transition: "opacity .9s cubic-bezier(.16,1,.3,1), transform .9s cubic-bezier(.16,1,.3,1)",
        }}
      >
        {/* Label row */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
          <div style={{
            padding: "5px 14px", borderRadius: 20,
            background: "rgba(255,107,107,.07)",
            border: "1px solid rgba(255,107,107,.18)",
            fontSize: 10, fontWeight: 700, color: "#ff8a75",
            letterSpacing: ".12em", textTransform: "uppercase",
            display: "flex", alignItems: "center", gap: 7,
          }}>
            <span style={{
              width: 5, height: 5, borderRadius: "50%",
              background: "#ff6b6b", display: "inline-block",
              animation: "pulse 2s infinite",
            }} />
            In Development
          </div>
          <div style={{
            fontFamily: "'Syne',sans-serif", fontSize: "clamp(16px,2vw,22px)",
            fontWeight: 800, color: "#fff",
          }}>
            Right Away &nbsp;<span style={{ color: "rgba(255,255,255,.25)", fontWeight: 400, fontSize: "0.75em" }}>— Construction Delivery Platform</span>
          </div>
        </div>

        {/* macOS screen mockup */}
        <div style={{
          borderRadius: 14,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,.08)",
          boxShadow: [
            "0 32px 90px rgba(0,0,0,.75)",
            "0 0 0 1px rgba(255,255,255,.04)",
            "0 0 60px rgba(255,107,107,.08)",
          ].join(","),
          background: "#0e0e18",
        }}>

          {/* Title bar */}
          <div style={{
            height: 36, background: "#18181f",
            borderBottom: "1px solid rgba(255,255,255,.055)",
            display: "flex", alignItems: "center",
            padding: "0 16px", gap: 7,
          }}>
            {/* Traffic lights */}
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57", flexShrink: 0 }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e", flexShrink: 0 }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840", flexShrink: 0 }} />

            {/* Address bar */}
            <div style={{
              flex: 1, margin: "0 12px",
              background: "rgba(255,255,255,.05)",
              border: "1px solid rgba(255,255,255,.07)",
              borderRadius: 6, height: 20,
              display: "flex", alignItems: "center",
              justifyContent: "center", gap: 6,
            }}>
              <span style={{ fontSize: 9, color: "rgba(255,255,255,.22)", letterSpacing: ".06em" }}>
                🔒 &nbsp; rightaway.app &nbsp;·&nbsp; Construction Materials Delivery
              </span>
            </div>

            {/* Live badge */}
            <div style={{
              display: "flex", alignItems: "center", gap: 5,
              fontSize: 9, fontWeight: 700, color: "#ff8a75",
              letterSpacing: ".07em",
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: "50%",
                background: "#ff6b6b", display: "inline-block",
                animation: "pulse 2s infinite",
              }} />
              IN DEV
            </div>
          </div>

          {/* Video */}
          <video
            src={rightAwayVideo}
            autoPlay
            muted
            loop
            playsInline
            style={{ width: "100%", display: "block" }}
          />
        </div>

        {/* Tech tags below */}
        <div style={{
          display: "flex", gap: 8, flexWrap: "wrap",
          marginTop: 18, justifyContent: "center",
        }}>
          {["Flutter", "Firebase", "BLoC", "Real-time Tracking", "REST APIs", "Multi-Role Auth"].map((t) => (
            <span key={t} style={{
              fontSize: 10, padding: "4px 11px", borderRadius: 20,
              background: "rgba(255,107,107,.08)",
              color: "rgba(255,150,130,.7)",
              border: "1px solid rgba(255,107,107,.14)",
              fontWeight: 600,
            }}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useTyping } from "../hooks/useTyping";
import { HERO } from "../data";
import epic1 from "../images/epicRides/pic1.png";
import hadafi1 from "../images/hadafi/Phone SS 2.jpg";
import rightAway1 from "../images/rideAway/0x0ss.png";

const C = {
  coral: "#e8604a",
  coral2: "#f07b66",
  coral3: "#c94a36",
  navy: "#080f18",
  navy2: "#0d1b2a",
  navy3: "#152335",
  navy4: "#1c3050",
  gold: "#d4a847",
  muted: "#6a8ba8",
  white: "#eef2f7",
};

export default function Hero() {
  const typed = useTyping(HERO.roles);
  const goto = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      style={{
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: `
          radial-gradient(circle at 12% 16%, rgba(232,96,74,.16), transparent 28%),
          radial-gradient(circle at 78% 18%, rgba(212,168,71,.1), transparent 26%),
          linear-gradient(180deg, ${C.navy} 0%, ${C.navy2} 56%, ${C.navy} 100%)
        `,
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(238,242,247,.035) 1px, transparent 1px), linear-gradient(rgba(238,242,247,.03) 1px, transparent 1px)",
          backgroundSize: "76px 76px",
          maskImage:
            "linear-gradient(180deg, transparent 0%, #000 16%, #000 76%, transparent 100%)",
        }}
      />

      <div
        className="hero-grid"
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: 1280,
          margin: "0 auto",
          padding: "92px 48px 38px",
          display: "grid",
          gridTemplateColumns: "minmax(420px, .9fr) minmax(480px, 1.1fr)",
          gap: 42,
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: 620 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 16px",
              borderRadius: 999,
              background: "rgba(232,96,74,.1)",
              border: "1px solid rgba(232,96,74,.25)",
              color: C.coral2,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              fontWeight: 700,
              marginBottom: 24,
              animation: "slideUp .7s cubic-bezier(.16,1,.3,1) .1s both",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: C.coral,
                boxShadow: `0 0 12px ${C.coral}`,
                display: "inline-block",
                animation: "pulse 2.2s infinite",
              }}
            />
            {HERO.availability}
          </div>

          <h1
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(54px, 6.2vw, 70px)",
              fontWeight: 900,
              lineHeight: 0.9,
              color: C.white,
              textTransform: "uppercase",
              marginBottom: 18,
              animation: "slideUp .75s cubic-bezier(.16,1,.3,1) .22s both",
            }}
          >
            {HERO.name.split("\n").map((line, i) => (
              <span
                key={line}
                style={{
                  display: "block",
                  color: i === 0 ? C.white : C.coral2,
                  textShadow:
                    i === 0 ? "none" : "0 10px 30px rgba(232,96,74,.22)",
                }}
              >
                {line}
              </span>
            ))}
          </h1>

          <div
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(17px, 1.5vw, 21px)",
              fontWeight: 700,
              color: C.gold,
              minHeight: "1.45em",
              marginBottom: 18,
              animation: "slideUp .7s cubic-bezier(.16,1,.3,1) .38s both",
            }}
          >
            {typed}
            <span
              style={{
                color: C.coral,
                animation: "blink 1s step-end infinite",
                fontWeight: 400,
              }}
            >
              |
            </span>
          </div>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(15px, 1.12vw, 17px)",
              color: "rgba(238,242,247,.65)",
              maxWidth: 560,
              lineHeight: 1.68,
              marginBottom: 28,
              animation: "slideUp .7s cubic-bezier(.16,1,.3,1) .5s both",
            }}
          >
            {HERO.description}
          </p>

          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              marginBottom: 28,
              animation: "slideUp .7s cubic-bezier(.16,1,.3,1) .62s both",
            }}
          >
            <button
              onClick={() => goto("projects")}
              className="btn-green"
              style={{ padding: "13px 26px", fontSize: 15 }}
            >
              View Projects
            </button>
            <a
              href={HERO.links.email}
              className="btn-outline"
              style={{ padding: "13px 26px", fontSize: 15 }}
            >
              Get In Touch
            </a>
            <a
              href={HERO.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-blue"
              style={{ padding: "13px 24px", fontSize: 15 }}
            >
              LinkedIn
            </a>
            <a
              href={HERO.links.github}
              target="_blank"
              rel="noreferrer"
              className="btn-dim"
              style={{ padding: "13px 24px", fontSize: 15 }}
            >
              GitHub
            </a>
          </div>

          <div
            className="hero-stats"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: 10,
              animation: "slideUp .7s cubic-bezier(.16,1,.3,1) .76s both",
            }}
          >
            {HERO.stats.map((s) => (
              <div
                key={s.label}
                style={{
                  minHeight: 72,
                  padding: "13px 14px",
                  borderRadius: 14,
                  background: "rgba(13,27,42,.68)",
                  border: "1px solid rgba(238,242,247,.08)",
                  boxShadow: "0 14px 38px rgba(0,0,0,.18)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 31,
                    fontWeight: 900,
                    color: C.coral2,
                    lineHeight: 0.9,
                  }}
                >
                  {s.number}
                </div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 9,
                    color: C.muted,
                    lineHeight: 1.25,
                    marginTop: 8,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <ProjectSpotlight />
        </div>
      </div>
    </section>
  );
}

function ProjectSpotlight() {
  return (
    <div
      className="phone-collage"
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 640,
        margin: "0 auto",
        height: 510,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: "34px 14px 30px",
          borderRadius: 34,
          background:
            "linear-gradient(145deg, rgba(21,35,53,.86), rgba(8,15,24,.84))",
          border: "1px solid rgba(238,242,247,.09)",
          boxShadow: "0 34px 100px rgba(0,0,0,.36)",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 66% 28%, rgba(232,96,74,.22), transparent 34%), radial-gradient(circle at 28% 74%, rgba(212,168,71,.12), transparent 34%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 26,
            left: 28,
            right: 28,
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                color: C.coral2,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                marginBottom: 5,
              }}
            >
              Featured Build
            </div>
            <div
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 34,
                fontWeight: 900,
                color: C.white,
                lineHeight: 0.92,
                textTransform: "uppercase",
              }}
            >
              Apps
            </div>
          </div>
          <div
            style={{
              borderRadius: 999,
              padding: "8px 12px",
              background: "rgba(232,96,74,.12)",
              border: "1px solid rgba(232,96,74,.28)",
              color: C.coral2,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              fontWeight: 700,
            }}
          >
            Logistics
          </div>
        </div>
      </div>

      <MiniPreview
        img={hadafi1}
        style={{
          left: 0,
          top: 140,
          transform: "rotate(-5deg)",
        }}
      />

      <MiniPreview
        img={epic1}
        style={{
          right: 0,
          top: 166,
          transform: "rotate(5deg)",
        }}
      />

      <div
        className="hero-main-preview"
        style={{
          position: "absolute",
          left: "50%",
          top: 74,
          transform: "translateX(-50%)",
          zIndex: 5,
          width: 250,
        }}
      >
        <div
          style={{
            padding: 3,
            borderRadius: 30,
            background: `linear-gradient(150deg, ${C.coral}, ${C.gold}, ${C.navy4})`,
            boxShadow:
              "0 32px 86px rgba(0,0,0,.54), 0 0 70px rgba(232,96,74,.18)",
          }}
        >
          <div
            className="hero-main-shot"
            style={{
              height: 392,
              borderRadius: 27,
              overflow: "hidden",
              background: C.navy,
              border: "1px solid rgba(238,242,247,.1)",
            }}
          >
            <img
              src={rightAway1}
              alt="Right Away app preview"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>

      <div
        className="hero-project-strip"
        style={{
          position: "absolute",
          left: 54,
          right: 54,
          bottom: 20,
          zIndex: 7,
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 10,
        }}
      >
        {[
          ["Hadafi", "Sports-tech · UAE"],
          ["Right Away", "Construction delivery"],
          ["Epic Rides", "Ride-sharing · US"],
        ].map(([title, label]) => (
          <div
            key={title}
            style={{
              borderRadius: 14,
              padding: "11px 12px",
              background: "rgba(8,15,24,.9)",
              border: "1px solid rgba(238,242,247,.1)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: "0 16px 34px rgba(0,0,0,.28)",
            }}
          >
            <div
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 18,
                fontWeight: 800,
                color: C.coral2,
                lineHeight: 1,
                textTransform: "uppercase",
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 11,
                color: C.muted,
                lineHeight: 1.25,
                marginTop: 5,
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniPreview({ img, title, subtitle, style }) {
  return (
    <div
      className="hero-mini-preview"
      style={{
        position: "absolute",
        zIndex: 3,
        width: 154,
        ...style,
      }}
    >
      <div
        style={{
          height: 364,
          borderRadius: 23,
          overflow: "hidden",
          border: "1px solid rgba(238,242,247,.12)",
          background: C.navy3,
          boxShadow: "0 24px 58px rgba(0,0,0,.42)",
          opacity: 0.82,
        }}
      >
        <img
          src={img}
          alt={`${title} app preview`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top",
            display: "block",
          }}
        />
      </div>
      
      
      
    </div>
  );
}

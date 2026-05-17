import { useReveal } from "../hooks/useReveal";
import rideAway1 from "../images/rideAway/0x0ss.png";
import rideAway2 from "../images/rideAway/0x0ss (1).png";

const YT_EMBED =
  "https://www.youtube.com/embed/uGig3_ZxRmY" +
  "?autoplay=1&mute=1&loop=1&playlist=uGig3_ZxRmY" +
  "&controls=0&rel=0&modestbranding=1&iv_load_policy=3" +
  "&vq=hd1080&hd=1";

const TECH = [
  { icon: "flutter", label: "Flutter" },
  { icon: "firebase", label: "Firebase" },
  { icon: "bloc", label: "BLoC" },
  { icon: "node", label: "Node.js" },
  { icon: "location", label: "Live GPS" },
  { icon: "api", label: "REST APIs" },
  { icon: "notification", label: "FCM Alerts" },
  { icon: "users", label: "Multi-Role Auth" },
];

const CALLOUTS = [
  {
    className: "video-callout-left",
    icon: "users",
    label: "3 User Roles",
    sub: "Supplier, Driver and Admin dashboards",
  },
  {
    className: "video-callout-right",
    icon: "location",
    label: "Live Tracking",
    sub: "Real-time GPS order visibility",
  },
  {
    className: "video-callout-bottom",
    icon: "notification",
    label: "Push Alerts",
    sub: "Instant FCM notifications",
  },
];

function CalloutIcon({ type }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  if (type === "users") {
    return (
      <svg {...common}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }

  if (type === "location") {
    return (
      <svg {...common}>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 7h18s-3 0-3-7" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

function TechIcon({ type }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  if (type === "flutter") {
    return (
      <svg {...common}>
        <path d="m14 3-8 8 3 3 11-11h-6Z" />
        <path d="m9 14 4 4h7l-7-7-4 3Z" />
        <path d="m13 18-3 3h7l3-3h-7Z" />
      </svg>
    );
  }

  if (type === "firebase") {
    return (
      <svg {...common}>
        <path d="m5 21 2-15 4 5 2-8 6 18H5Z" />
        <path d="m7 16 5-5 7 10" />
      </svg>
    );
  }

  if (type === "bloc") {
    return (
      <svg {...common}>
        <rect x="3" y="4" width="7" height="7" rx="1.5" />
        <rect x="14" y="4" width="7" height="7" rx="1.5" />
        <rect x="8.5" y="15" width="7" height="7" rx="1.5" />
      </svg>
    );
  }

  if (type === "node") {
    return (
      <svg {...common}>
        <path d="M12 3 4.5 7.2v9.6L12 21l7.5-4.2V7.2L12 3Z" />
        <path d="M9 14.5V9.7l6 4.8V9.5" />
      </svg>
    );
  }

  if (type === "api") {
    return (
      <svg {...common}>
        <path d="m8 9-4 3 4 3" />
        <path d="m16 9 4 3-4 3" />
        <path d="m14 5-4 14" />
      </svg>
    );
  }

  return <CalloutIcon type={type} />;
}

export default function VideoPreview() {
  const [ref, vis] = useReveal();

  return (
    <section
      className="video-preview-section"
      style={{
        padding: "82px 0 108px",
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
        borderTop: "1px solid rgba(238,242,247,.05)",
        background:
          "linear-gradient(180deg, rgba(8,15,24,.2), rgba(13,27,42,.34) 48%, rgba(8,15,24,.18))",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "10% -12% auto auto",
          width: 720,
          height: 720,
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(232,96,74,.09),transparent 66%)",
          filter: "blur(86px)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "auto auto -20% -8%",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(212,168,71,.07),transparent 68%)",
          filter: "blur(78px)",
          pointerEvents: "none",
        }}
      />

      <div
        ref={ref}
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 48px",
          opacity: vis ? 1 : 0,
          transform: vis ? "none" : "translateY(40px)",
          transition:
            "opacity .9s cubic-bezier(.16,1,.3,1), transform .9s cubic-bezier(.16,1,.3,1)",
        }}
      >
        <div className="video-section-head">
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 14,
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "7px 14px",
                  borderRadius: 999,
                  background: "rgba(232,96,74,.1)",
                  border: "1px solid rgba(232,96,74,.24)",
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: 10,
                  fontWeight: 700,
                  color: "#f07b66",
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#e8604a",
                    display: "inline-block",
                    animation: "pulse 2s infinite",
                  }}
                />
                Autoplay Preview
              </span>
              <span
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: 10,
                  fontWeight: 700,
                  color: "rgba(212,168,71,.8)",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                }}
              >
                Featured Build
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Montserrat',sans-serif",
                fontSize: "clamp(46px,5.4vw,78px)",
                fontWeight: 900,
                lineHeight: 0.9,
                textTransform: "uppercase",
                color: "#eef2f7",
                marginBottom: 12,
                textShadow: "0 18px 46px rgba(0,0,0,.24)",
              }}
            >
              Right Away
            </h2>

            <p
              style={{
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontSize: "clamp(15px,1.12vw,17px)",
                color: "rgba(238,242,247,.72)",
                lineHeight: 1.7,
                maxWidth: 620,
              }}
            >
              Construction delivery platform for suppliers, contractors, and
              drivers, built with real-time order tracking, role-based flows,
              and instant notifications.
            </p>
          </div>
        </div>

        <div className="video-stage">
          <div className="video-browser-frame">
            <div className="video-browser-bar">
              <span className="video-dot red" />
              <span className="video-dot yellow" />
              <span className="video-dot green" />
              <div className="video-address-bar">
                <span>rightaway.app - Construction Materials Delivery</span>
              </div>
              <span className="video-live-label">IN DEV</span>
            </div>

            <div className="video-embed-wrap">
              <iframe
                src={YT_EMBED}
                title="Right Away - Construction Delivery Platform"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
              />
            </div>
          </div>

          {CALLOUTS.map((callout) => (
            <div key={callout.label} className={`video-orbit-card ${callout.className}`}>
              <span>
                <CalloutIcon type={callout.icon} />
              </span>
              <div>
                <strong>{callout.label}</strong>
                <p>{callout.sub}</p>
              </div>
            </div>
          ))}

          <div className="video-phone-stack">
            {[rideAway1, rideAway2].map((image, index) => (
              <div className="video-phone" data-phone={index + 1} key={image}>
                <div className="video-phone-notch" />
                <img src={image} alt="" />
              </div>
            ))}
          </div>
        </div>

        <div className="tech-badge-row" aria-label="Technology stack">
          {TECH.map((tech) => (
            <span className="tech-badge" key={tech.label}>
              <span className="tech-badge-icon">
                <TechIcon type={tech.icon} />
              </span>
              <span>{tech.label}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

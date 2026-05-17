import { useState, useRef, useEffect } from "react";
import { useReveal } from "../hooks/useReveal";
import { EXPERIENCE } from "../data";

function useSpineProgress(ref) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const wh = window.innerHeight;
      const p = Math.max(0, Math.min(100,
        ((wh * 0.85 - rect.top) / rect.height) * 100
      ));
      setProgress(p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [ref]);
  return progress;
}

export default function Experience() {
  const [hdrRef, hdrVis] = useReveal();
  const timelineRef = useRef(null);
  const spineProgress = useSpineProgress(timelineRef);

  return (
    <section
      id="experience"
      style={{
        padding: "100px 0",
        background: "rgba(13,27,42,.5)",
        position: "relative",
        zIndex: 1,
        borderTop: "1px solid rgba(238,242,247,.05)",
        borderBottom: "1px solid rgba(238,242,247,.05)",
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 40px" }}>
        <div
          ref={hdrRef}
          style={{
            marginBottom: 72,
            opacity: hdrVis ? 1 : 0,
            transform: hdrVis ? "none" : "translateY(38px)",
            transition:
              "opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1)",
          }}
        >
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: "#e8604a",
              marginBottom: 10,
            }}
          >
            Work History
          </p>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(32px,4vw,56px)",
              fontWeight: 900,
              lineHeight: 1,
              textTransform: "uppercase",
              color: "#eef2f7",
            }}
          >
            Professional Experience
          </h2>
        </div>

        <div className="exp-zigzag" ref={timelineRef}>
          <div className="exp-spine" aria-hidden="true">
            <div className="exp-spine-fill" style={{ height: `${spineProgress}%` }} />
          </div>

          {EXPERIENCE.map((e, i) => (
            <ZigzagItem key={i} data={e} index={i} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ZigzagItem({ data, index, delay }) {
  const [ref, vis] = useReveal();
  const [hovered, setHovered] = useState(false);
  const isA = index % 2 === 0;
  const { company, role, period, color, desc, logo } = data;

  return (
    <div
      ref={ref}
      className={`exp-zz-item ${isA ? "exp-zz-a" : "exp-zz-b"}`}
      style={{
        "--exp-accent": color,
        opacity: vis ? 1 : 0,
        transform: vis ? "none" : `translateX(${isA ? -36 : 36}px)`,
        transitionDelay: `${delay}s`,
        transition:
          "opacity .75s cubic-bezier(.16,1,.3,1), transform .75s cubic-bezier(.16,1,.3,1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Card */}
      <div className="exp-zz-card-col">
        <div
          className="exp-zz-card"
          style={{ transform: hovered ? "translateY(-5px)" : "none" }}
        >
          <div className="exp-zz-logo-row">
            <CompanyLogo logo={logo} company={company} />
            <div className="exp-zz-meta">
              <h3 className="exp-company-name">{company}</h3>
              <p className="exp-role">{role}</p>
            </div>
          </div>
          <div className="exp-zz-divider" />
          <p className="exp-desc">{desc}</p>
        </div>
      </div>

      {/* Central dot */}
      <div className="exp-zz-axis" aria-hidden="true">
        <span className="exp-zz-dot" />
      </div>

      {/* Duration */}
      <div className="exp-zz-period-col">
        <span className="exp-period-badge">{period}</span>
      </div>
    </div>
  );
}

function CompanyLogo({ logo, company }) {
  const [broken, setBroken] = useState(false);
  const initials = company
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <span className="exp-logo-shell" aria-hidden="true">
      {logo && !broken ? (
        <img
          src={logo}
          alt={`${company} logo`}
          className="exp-logo-img"
          onError={() => setBroken(true)}
          loading="lazy"
        />
      ) : (
        <span className="exp-logo-fallback">{initials}</span>
      )}
    </span>
  );
}

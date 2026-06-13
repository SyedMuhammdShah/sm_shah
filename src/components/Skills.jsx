import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { SKILLS } from "../data";


const META = {
  Mobile: {
    icon: "mobile",
    accent: "#f07b66",
    note: "Cross-platform apps",
  },
  "State Mgmt": {
    icon: "state",
    accent: "#d4a847",
    note: "Predictable flows",
  },
  Backend: {
    icon: "backend",
    accent: "#7ec8ff",
    note: "APIs and auth",
  },
  "Cloud / DB": {
    icon: "cloud",
    accent: "#80e6bd",
    note: "Data and delivery",
  },
  Architecture: {
    icon: "architecture",
    accent: "#b9a7ff",
    note: "Production systems",
  },
};

function SkillIcon({ type }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  if (type === "mobile") {
    return (
      <svg {...common}>
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18h2" />
      </svg>
    );
  }

  if (type === "state") {
    return (
      <svg {...common}>
        <path d="M4 7h8" />
        <path d="M12 7a4 4 0 1 1 4 4" />
        <path d="M20 17h-8" />
        <path d="M12 17a4 4 0 1 1-4-4" />
      </svg>
    );
  }

  if (type === "backend") {
    return (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="6" rx="2" />
        <rect x="3" y="14" width="18" height="6" rx="2" />
        <path d="M7 7h.01" />
        <path d="M7 17h.01" />
      </svg>
    );
  }

  if (type === "cloud") {
    return (
      <svg {...common}>
        <path d="M17.5 19H8a5 5 0 1 1 1-9.9A6 6 0 0 1 20 12.5 3.5 3.5 0 0 1 17.5 19Z" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M12 3 4 7v6c0 5 3.4 7.6 8 8 4.6-.4 8-3 8-8V7l-8-4Z" />
      <path d="m9 12 2 2 4-5" />
    </svg>
  );
}

export default function Skills() {
  const [hdrRef, hdrVis] = useReveal();

  return (
    <section id="skills" className="skills-section">
      <div className="skills-glow skills-glow-one" aria-hidden="true" />
      <div className="skills-glow skills-glow-two" aria-hidden="true" />

      <div className="skills-wrap">
        <div
          ref={hdrRef}
          className="skills-header"
          style={{
            opacity: hdrVis ? 1 : 0,
            transform: hdrVis ? "none" : "translateY(38px)",
            transition:
              "opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1)",
            alignItems: "center",
          }}
        >
          {/* Left: title + panel */}
          <div style={{ flex: 1 }}>
            <div>
              <p className="skills-kicker">Tech Stack</p>
              <h2>Delivery Stack</h2>
            </div>

            <div className="skills-header-panel" style={{ marginTop: 20 }}>
              <p>
                From pixel-perfect mobile UI to backend infrastructure, I work
                across the full product delivery stack.
              </p>
              <div>
                <span>Mobile</span>
                <span>Backend</span>
                <span>Cloud</span>
              </div>
            </div>
          </div>


        </div>

        <div className="skills-grid">
          {SKILLS.map((skill, index) => (
            <SkillCard key={skill.cat} data={skill} delay={index * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ data, delay }) {
  const [ref, vis] = useReveal();
  const [hovered, setHovered] = useState(false);
  const meta = META[data.cat] || META.Architecture;

  return (
    <div
      ref={ref}
      className="skill-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        "--skill-accent": meta.accent,
        transform: hovered ? "translateY(-6px)" : vis ? "none" : "translateY(38px)",
        opacity: vis ? 1 : 0,
        transitionDelay: delay + "s",
      }}
    >
      <div className="skill-card-top">
        <span className="skill-card-icon">
          <SkillIcon type={meta.icon} />
        </span>
        <span className="skill-card-count">{data.items.length} tools</span>
      </div>

      <div className="skill-card-title">
        <p>{data.cat}</p>
        <span>{meta.note}</span>
      </div>

      <div className="skill-chip-list">
        {data.items.map((item) => (
          <span key={item} className="skill-chip">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

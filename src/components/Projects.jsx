import { useState, useEffect } from "react";
import { useReveal } from "../hooks/useReveal";
import { PROJECTS } from "../data";
import ProjectModal from "./ProjectModal";
import { StoreIcon } from "./StoreIcons";

export default function Projects() {
  const [hdrRef, hdrVis] = useReveal();
  const [selected, setSelected] = useState(null);
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState(null);

  const featuredProjects = PROJECTS.filter((project) => (project.screens ?? []).length >= 3);
  const screenshotItems = featuredProjects
    .flatMap((project) => (project.screens ?? []).slice(0, 3))
    .filter(Boolean);

  const handleScreenshotClick = (item) => {
    const originalIndex = screenshotItems.findIndex((si) => si.img === item.img);
    if (originalIndex !== -1) {
      setActiveScreenshotIndex(originalIndex);
    }
  };

  const showPrevScreenshot = () => {
    setActiveScreenshotIndex((current) =>
      current === 0 ? screenshotItems.length - 1 : current - 1
    );
  };

  const showNextScreenshot = () => {
    setActiveScreenshotIndex((current) =>
      current === screenshotItems.length - 1 ? 0 : current + 1
    );
  };

  useEffect(() => {
    if (activeScreenshotIndex === null) return;
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        setActiveScreenshotIndex((current) =>
          current === 0 ? screenshotItems.length - 1 : current - 1
        );
      } else if (event.key === "ArrowRight") {
        setActiveScreenshotIndex((current) =>
          current === screenshotItems.length - 1 ? 0 : current + 1
        );
      } else if (event.key === "Escape") {
        setActiveScreenshotIndex(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeScreenshotIndex, screenshotItems.length]);

  return (
    <section id="projects" style={{ padding: "90px 0", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 40px" }}>
        <div
          ref={hdrRef}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 56,
            flexWrap: "wrap",
            gap: 20,
            opacity: hdrVis ? 1 : 0,
            transform: hdrVis ? "none" : "translateY(38px)",
            transition: "opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1)",
          }}
        >
          <div>
            <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#e8604a", marginBottom: 10 }}>
              Portfolio
            </p>
            <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "clamp(32px,4vw,56px)", fontWeight: 900, letterSpacing: 0, lineHeight: 1.0, textTransform: "uppercase", color: "#eef2f7" }}>
              Featured Projects
            </h2>
          </div>
          <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 14, color: "rgba(106,139,168,.65)", textAlign: "right", maxWidth: 260, lineHeight: 1.6 }}>
            Three real builds, three screenshots each. Click a card for full details.
          </p>
        </div>

        <ScreenshotsMarquee items={screenshotItems} onScreenshotClick={handleScreenshotClick} />

        <div className="proj-grid featured-project-grid">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={index * 0.06}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />

      {activeScreenshotIndex !== null && screenshotItems[activeScreenshotIndex] && (
        <div className="image-viewer-backdrop" onClick={() => setActiveScreenshotIndex(null)}>
          <div className="image-viewer-shell" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="image-viewer-close"
              onClick={() => setActiveScreenshotIndex(null)}
              aria-label="Close image viewer"
            >
              ×
            </button>

            <button
              type="button"
              className="project-screen-nav project-screen-nav-prev"
              onClick={showPrevScreenshot}
            >
              &lt;
            </button>

            <img src={screenshotItems[activeScreenshotIndex].img} alt={screenshotItems[activeScreenshotIndex].label} />

            <button
              type="button"
              className="project-screen-nav project-screen-nav-next"
              onClick={showNextScreenshot}
            >
              &gt;
            </button>

            <div className="image-viewer-caption">{screenshotItems[activeScreenshotIndex].label}</div>
          </div>
        </div>
      )}
    </section>
  );
}

function ScreenshotsMarquee({ items, onScreenshotClick }) {
  if (!items || !items.length) return null;

  // Duplicate items 4 times to ensure seamless infinite scrolling on wide screens
  const cards = [...items, ...items, ...items, ...items].map((item, index) => (
    <div
      key={`screenshot-${index}`}
      className="screenshot-marquee-card"
      onClick={() => onScreenshotClick(item)}
    >
      <img src={item.img} alt={item.label} loading="lazy" />
      <div className="screenshot-marquee-label">{item.label}</div>
    </div>
  ));

  return (
    <div className="screenshot-marquee-shell" aria-label="Project screenshots carousel">
      <div className="screenshot-marquee-strip">{cards}</div>
    </div>
  );
}

function ProjectCard({ project, delay, onClick }) {
  const [ref, vis] = useReveal();
  const [hovered, setHovered] = useState(false);
  const { icon, title, sub, color, tags, desc, tech, screens, links } = project;
  const previewScreens = (screens || []).slice(0, 3);

  const linksHTML = [];
  if (links?.ios) linksHTML.push({ href: links.ios, label: "App Store", type: "apple" });
  if (links?.driver) linksHTML.push({ href: links.driver, label: "Driver App", type: "driver" });
  if (links?.android) linksHTML.push({ href: links.android, label: "Play Store", type: "play" });

  return (
    <div
      ref={ref}
      className="project-card"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 22,
        overflow: "hidden",
        background: hovered ? "rgba(21,35,53,.95)" : "rgba(13,27,42,.8)",
        border: `1px solid ${hovered ? color + "55" : "rgba(238,242,247,.07)"}`,
        cursor: "pointer",
        transition: "all .4s cubic-bezier(.16,1,.3,1)",
        display: "flex",
        flexDirection: "column",
        opacity: vis ? 1 : 0,
        transform: vis ? (hovered ? "translateY(-12px)" : "none") : "translateY(38px)",
        boxShadow: hovered ? "0 48px 100px rgba(0,0,0,.6)" : "none",
        transitionDelay: delay + "s",
      }}
    >
      <div
        className="project-card-preview featured-project-preview"
        style={{ background: `linear-gradient(160deg,${color}18,${color}04)` }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: `linear-gradient(90deg,${color},${color}00)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 14,
            left: 14,
            zIndex: 11,
            width: 42,
            height: 42,
            borderRadius: 12,
            background: "rgba(0,0,0,.55)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 19,
          }}
        >
          {icon}
        </div>

        <div className="featured-project-gallery" style={{ "--project-accent": color }}>
          {previewScreens.map((screen, index) => (
            <button
              key={screen.label}
              type="button"
              className={`featured-project-shot featured-project-shot-${index + 1}`}
              onClick={(event) => {
                event.stopPropagation();
                onClick();
              }}
              aria-label={`Open ${screen.label}`}
            >
              <img src={screen.img} alt={screen.label} />
            </button>
          ))}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 90,
            background: "linear-gradient(to top,#080f18,transparent)",
            pointerEvents: "none",
            zIndex: 10,
          }}
        />
      </div>

      <div className="project-card-body" style={{ padding: "22px 24px 26px", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 12 }}>
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: 10,
                padding: "3px 9px",
                borderRadius: 20,
                background: `${color}1a`,
                color,
                fontWeight: 700,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 22, fontWeight: 900, color: "#eef2f7", marginBottom: 3, textTransform: "uppercase", letterSpacing: .3 }}>
          {title}
        </div>
        <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12, fontWeight: 700, color, marginBottom: 12 }}>{sub}</div>
        <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, color: "rgba(106,139,168,.7)", lineHeight: 1.72, flex: 1, marginBottom: 16 }}>
          {desc.split("\n")[0].slice(0, 120)}...
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 14 }}>
          {tech.slice(0, 4).map((item) => (
            <span
              key={item}
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: 9,
                padding: "3px 8px",
                borderRadius: 5,
                background: "rgba(238,242,247,.05)",
                color: "rgba(106,139,168,.6)",
              }}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="project-card-actions" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div className="project-card-store-links" style={{ display: "flex", gap: 6 }}>
            {linksHTML.map(({ href, label, type }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => event.stopPropagation()}
                style={{
                  fontSize: 11,
                  padding: "5px 11px",
                  borderRadius: 7,
                  fontWeight: 700,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  background: `${color}22`,
                  color,
                  transition: "all .2s",
                }}
              >
                <StoreIcon type={type} />
                {label}
              </a>
            ))}
          </div>
          <div
            className="project-card-details"
            style={{
              fontSize: 11,
              fontWeight: 700,
              color,
              opacity: hovered ? 1 : 0,
              transition: "opacity .3s",
            }}
          >
            Details -&gt;
          </div>
        </div>
      </div>
    </div>
  );
}

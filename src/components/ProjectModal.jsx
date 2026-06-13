import { useEffect, useMemo, useState } from "react";
import { StoreIcon } from "./StoreIcons";

export default function ProjectModal({ project, onClose }) {
  /* ── All hooks must be declared unconditionally ── */
  const [activeThumb, setActiveThumb] = useState(0);
  const [imageOpen, setImageOpen] = useState(false);
  const [viewMode, setViewMode] = useState("screens");

  /* project can be null — use optional chaining everywhere before the guard */
  const video = project?.video ?? null;
  const screens = project?.screens ?? [];
  const hasScreens = screens.length > 0;
  const activeScreen = hasScreens ? screens[activeThumb] : null;

  useEffect(() => {
    setActiveThumb(0);
    setImageOpen(false);
    /* Default tab: video if available, otherwise screenshots */
    setViewMode(video ? "video" : "screens");
    if (project) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [project, video]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") {
        if (imageOpen) setImageOpen(false);
        else onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, imageOpen]);

  const detail = useMemo(() => parseDescription(project?.desc || ""), [project]);

  /* Guard — render nothing when no project is selected */
  if (!project) return null;

  const { icon, title, sub, color, tags, tech, links = {} } = project;
  const hasLinks = Object.keys(links).length > 0;

  const showPrevScreen = () => {
    setActiveThumb((current) => (current === 0 ? screens.length - 1 : current - 1));
  };
  const showNextScreen = () => {
    setActiveThumb((current) => (current === screens.length - 1 ? 0 : current + 1));
  };

  return (
    <div
      className="project-modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="project-modal-shell" style={{ "--project-color": color }}>
        <button
          className="project-modal-close"
          type="button"
          onClick={onClose}
          aria-label="Close project details"
        >
          x
        </button>

        <div className="project-modal-body-redesign">
          {/* ── Left Column: Visual Showcase ── */}
          <div className="project-modal-left">
            {/* Show tab switcher only when BOTH video and screenshots exist */}
            {video && hasScreens && (
              <div className="project-view-tabs">
                <button
                  type="button"
                  className={viewMode === "video" ? "active" : ""}
                  onClick={() => setViewMode("video")}
                >
                  Demo Video
                </button>
                <button
                  type="button"
                  className={viewMode === "screens" ? "active" : ""}
                  onClick={() => setViewMode("screens")}
                >
                  Screenshots ({screens.length})
                </button>
              </div>
            )}

            <div className="project-modal-left-stage">
              {/* ── VIDEO MODE ── */}
              {viewMode === "video" && video ? (
                <div
                  className="project-phone-frame"
                  style={{ width: 220, margin: "16px auto 0" }}
                >
                  <span className="project-phone-speaker" />
                  <video
                    src={video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: 26,
                    }}
                  />
                </div>
              ) : hasScreens && activeScreen ? (
                /* ── SCREENSHOTS MODE ── */
                <>
                  <div
                    className="project-screen-stage"
                    style={{ padding: "12px 0 24px", minHeight: "auto", width: "100%" }}
                  >
                    <button
                      type="button"
                      className="project-screen-nav project-screen-nav-prev"
                      onClick={showPrevScreen}
                      style={{ left: -12, top: "50%" }}
                      aria-label="Previous screenshot"
                    >
                      &lt;
                    </button>

                    <button
                      type="button"
                      className="project-screen-main"
                      onClick={() => setImageOpen(true)}
                      style={{ width: 200 }}
                      aria-label={`Open ${activeScreen.label}`}
                    >
                      <span className="project-phone-frame">
                        <span className="project-phone-speaker" />
                        <img src={activeScreen.img} alt={activeScreen.label} />
                      </span>
                    </button>

                    <button
                      type="button"
                      className="project-screen-nav project-screen-nav-next"
                      onClick={showNextScreen}
                      style={{ right: -12, top: "50%" }}
                      aria-label="Next screenshot"
                    >
                      &gt;
                    </button>
                  </div>

                  <div className="project-modal-left-stage-controls">
                    <span>{activeScreen.label}</span>
                    <span>
                      {activeThumb + 1} / {screens.length}
                    </span>
                  </div>

                  <div className="project-modal-left-thumbnails">
                    {screens.map((screen, index) => (
                      <button
                        key={screen.label}
                        type="button"
                        className={index === activeThumb ? "active" : ""}
                        onClick={() => setActiveThumb(index)}
                        aria-label={`Show ${screen.label}`}
                      >
                        <img src={screen.img} alt={screen.label} />
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                /* ── FALLBACK: no media ── */
                <div
                  style={{
                    padding: "60px 24px",
                    textAlign: "center",
                    color: "rgba(238,242,247,0.35)",
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                  }}
                >
                  No preview available
                </div>
              )}
            </div>
          </div>

          {/* ── Right Column: Details Panel ── */}
          <div className="project-modal-right">
            <div className="project-modal-header">
              <div className="project-modal-header-top">
                <div className="project-modal-kicker" style={{ marginBottom: 0 }}>
                  <span>{icon}</span>
                  Featured Project
                </div>
                <div
                  className="project-modal-tags"
                  style={{ justifyContent: "flex-start" }}
                >
                  {tags.map((tag) => (
                    <span key={tag} style={{ padding: "5px 10px" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h2>{title}</h2>
              <div className="project-modal-header-tagline">{sub}</div>

              {hasLinks ? (
                <div className="project-actions-row">
                  {links.ios && (
                    <StoreLink
                      href={links.ios}
                      type="apple"
                      label="App Store"
                      sub="Download on the"
                    />
                  )}
                  {links.driver && (
                    <StoreLink
                      href={links.driver}
                      type="driver"
                      label="Driver App"
                      sub="Open live"
                    />
                  )}
                  {links.android && (
                    <StoreLink
                      href={links.android}
                      type="play"
                      label="Google Play"
                      sub="Get it on"
                    />
                  )}
                </div>
              ) : (
                <div
                  className="project-coming-soon"
                  style={{
                    marginTop: 16,
                    fontSize: 13,
                    color: "rgba(238,242,247,0.45)",
                  }}
                >
                  In active development. Store links coming soon.
                </div>
              )}
            </div>

            <ProjectSection title="Overview">
              <p className="project-desc-text">{detail.summary}</p>
            </ProjectSection>

            {detail.points.length > 0 && (
              <ProjectSection title="Key Features">
                <div className="project-features-list">
                  {detail.points.map((point) => (
                    <div key={point} className="project-feature-card">
                      <span />
                      <p>{point}</p>
                    </div>
                  ))}
                </div>
              </ProjectSection>
            )}

            <ProjectSection title="Core Technologies">
              <div className="project-tech-pills">
                {tech.map((item) => (
                  <span key={item} className="project-tech-pill">
                    {item}
                  </span>
                ))}
              </div>
            </ProjectSection>
          </div>
        </div>

        {/* ── Full-size image lightbox ── */}
        {imageOpen && activeScreen && (
          <div
            className="image-viewer-backdrop"
            onClick={() => setImageOpen(false)}
          >
            <div
              className="image-viewer-shell"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="image-viewer-close"
                onClick={() => setImageOpen(false)}
                aria-label="Close image viewer"
              >
                ×
              </button>
              <img src={activeScreen.img} alt={activeScreen.label} />
              <div className="image-viewer-caption">{activeScreen.label}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Helpers ─────────────────────────────────────────── */

function parseDescription(desc) {
  const lines = desc
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const summary = lines.find((line) => !line.startsWith("•")) || desc;
  const points = lines
    .filter((line) => line.startsWith("•"))
    .map((line) => line.replace(/^•\s*/, ""));

  return { summary, points };
}

function ProjectSection({ title, children }) {
  return (
    <section className="project-detail-section">
      <div className="project-detail-label">
        {title}
        <span />
      </div>
      {children}
    </section>
  );
}

function StoreLink({ href, type, label, sub }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="project-store-link">
      <span className="project-store-icon">
        <StoreIcon type={type} />
      </span>
      <span>
        <small>{sub}</small>
        <strong>{label}</strong>
      </span>
    </a>
  );
}

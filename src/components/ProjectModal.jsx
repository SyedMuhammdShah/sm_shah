import { useEffect, useMemo, useState } from "react";
import { StoreIcon } from "./StoreIcons";

export default function ProjectModal({ project, onClose }) {
  const [activeThumb, setActiveThumb] = useState(0);
  const [imageOpen, setImageOpen] = useState(false);

  useEffect(() => {
    setActiveThumb(0);
    setImageOpen(false);
    if (project) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const detail = useMemo(() => parseDescription(project?.desc || ""), [project]);

  if (!project) return null;

  const { icon, title, sub, color, tags, tech, screens = [], links = {}, video } = project;
  const hasScreens = screens.length > 0;
  const hasLinks = Object.keys(links).length > 0;
  const activeScreen = hasScreens ? screens[activeThumb] : null;
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
        <button className="project-modal-close" type="button" onClick={onClose} aria-label="Close project details">
          x
        </button>

        <div className="project-modal-hero">
          <div>
            <div className="project-modal-kicker">
              <span>{icon}</span>
              Featured Project
            </div>
            <h2>{title}</h2>
            <p>{sub}</p>
          </div>

          <div className="project-modal-tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="project-modal-body">
          <div className="project-modal-main">
            <ProjectSection title="Overview">
              <p className="project-modal-overview">{detail.summary}</p>
              {detail.points.length > 0 && (
                <div className="project-feature-grid">
                  {detail.points.map((point) => (
                    <div key={point}>
                      <span />
                      <p>{point}</p>
                    </div>
                  ))}
                </div>
              )}
            </ProjectSection>

            {video && (
              <ProjectSection title="App Preview">
                <div className="project-video-frame">
                  <video src={video} autoPlay muted loop playsInline controls />
                </div>
              </ProjectSection>
            )}

            {hasScreens && (
              <ProjectSection title="Screenshots">
                <div className="project-screen-gallery">
                  <div className="project-screen-toolbar">
                    <div>
                      <strong>{activeScreen.label}</strong>
                      <span>
                        {activeThumb + 1} / {screens.length}
                      </span>
                    </div>
                    <button type="button" onClick={() => setImageOpen(true)}>
                      View full size
                    </button>
                  </div>

                  <div className="project-screen-stage">
                    <button
                      type="button"
                      className="project-screen-nav project-screen-nav-prev"
                      onClick={showPrevScreen}
                      aria-label="Previous screenshot"
                    >
                      &lt;
                    </button>

                    <button
                      type="button"
                      className="project-screen-main"
                      onClick={() => setImageOpen(true)}
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
                      aria-label="Next screenshot"
                    >
                      &gt;
                    </button>
                  </div>

                  <div className="project-thumb-grid">
                    {screens.map((screen, index) => (
                      <button
                        key={screen.label}
                        type="button"
                        className={index === activeThumb ? "active" : ""}
                        onClick={() => setActiveThumb(index)}
                        aria-label={`Show ${screen.label}`}
                      >
                        <img src={screen.img} alt={screen.label} />
                        <span>{screen.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </ProjectSection>
            )}
          </div>

          <aside className="project-modal-side">
            <ProjectSection title="Tech Stack">
              <div className="project-tech-list">
                {tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </ProjectSection>

            <ProjectSection title="Live Links">
              {hasLinks ? (
                <div className="project-store-list">
                  {links.ios && (
                    <StoreLink href={links.ios} type="apple" label="App Store" sub="Download on the" />
                  )}
                  {links.driver && (
                    <StoreLink href={links.driver} type="driver" label="Driver App" sub="Open live" />
                  )}
                  {links.android && (
                    <StoreLink href={links.android} type="play" label="Google Play" sub="Get it on" />
                  )}
                </div>
              ) : (
                <div className="project-coming-soon">In active development. Store links coming soon.</div>
              )}
            </ProjectSection>
          </aside>
        </div>

        {imageOpen && activeScreen && (
          <div className="image-viewer-backdrop" onClick={() => setImageOpen(false)}>
            <div className="image-viewer-shell" onClick={(event) => event.stopPropagation()}>
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

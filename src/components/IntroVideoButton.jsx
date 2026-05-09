import { useEffect, useState } from "react";

const INTRO_VIDEO_ID = "8HoyQQMCdwA";

export default function IntroVideoButton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const embedUrl =
    `https://www.youtube.com/embed/${INTRO_VIDEO_ID}` +
    "?autoplay=1&rel=0&modestbranding=1&playsinline=1";

  return (
    <>
      <button
        type="button"
        className="intro-video-trigger"
        onClick={() => setOpen(true)}
        aria-label="Watch introduction video"
      >
        <span className="intro-video-ring" aria-hidden="true" />
        <span className="intro-video-play" aria-hidden="true" />
        <span className="intro-video-label">Intro</span>
      </button>

      {open && (
        <div
          className="intro-video-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Introduction video"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <div className="intro-video-panel">
            <div className="intro-video-topbar">
              <div>
                <p>Introduction</p>
                <h2>My Work & Services</h2>
              </div>
              <button
                type="button"
                className="intro-video-close"
                onClick={() => setOpen(false)}
                aria-label="Close introduction video"
              >
                x
              </button>
            </div>

            <div className="intro-video-frame">
              <iframe
                src={embedUrl}
                title="Syed Muhammad Shah introduction video"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

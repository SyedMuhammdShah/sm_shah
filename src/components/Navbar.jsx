import { useState, useEffect } from "react";
import { HERO } from "../data";

const NAV_LINKS = ["home", "about", "skills", "projects", "experience", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 64);
      let cur = "home";
      NAV_LINKS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 130) cur = id;
      });
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goto = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="site-nav"
      style={{
        position: "fixed", top: 0, left: 0, right: 0,
        zIndex: 999,
        transition: "all .35s",
        background: scrolled ? "rgba(8,15,24,.97)" : "transparent",
        backdropFilter: scrolled ? "blur(28px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(28px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(238,242,247,.06)" : "none",
      }}
    >
      <div className="nav-inner" style={{
        maxWidth: 1280, margin: "0 auto",
        padding: "0 48px", display: "flex",
        alignItems: "center", justifyContent: "space-between",
        height: 68,
      }}>
        {/* Logo */}
        <div
          onClick={() => goto("home")}
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 28, fontWeight: 900,
            letterSpacing: 1, cursor: "pointer",
            textTransform: "uppercase",
            color: "#e8604a",
            textShadow: "0 0 28px rgba(232,96,74,.4)",
          }}
        >
          SMS.
        </div>

        <button
          type="button"
          className={`nav-menu-toggle ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Links */}
        <div
          id="primary-navigation"
          className={`nb nav-links ${menuOpen ? "is-open" : ""}`}
          style={{ display: "flex", alignItems: "center", gap: 2 }}
        >
          {NAV_LINKS.map((id) => (
            <button
              key={id}
              className="nav-link"
              onClick={() => goto(id)}
              style={{
                background: "none", border: "none",
                color: active === id ? "#e8604a" : "rgba(238,242,247,.4)",
                fontSize: 12,
                fontWeight: active === id ? 700 : 500,
                cursor: "pointer",
                padding: "7px 14px", borderRadius: 8,
                transition: "all .2s",
                fontFamily: "'Barlow', sans-serif",
                position: "relative",
                textTransform: "uppercase",
                letterSpacing: ".08em",
              }}
            >
              {id}
              {active === id && (
                <span style={{
                  position: "absolute", bottom: 4,
                  left: "50%", transform: "translateX(-50%)",
                  width: 14, height: 2,
                  background: "#e8604a",
                  borderRadius: 2,
                  display: "block",
                  boxShadow: "0 0 8px rgba(232,96,74,.6)",
                }} />
              )}
            </button>
          ))}

          <a
            href={HERO.links.email}
            className="nav-cta"
            onClick={() => setMenuOpen(false)}
            style={{
              padding: "9px 22px", borderRadius: 9,
              background: "linear-gradient(135deg,#e8604a,#c94a36)",
              color: "#fff", fontWeight: 700, fontSize: 13,
              fontFamily: "'Barlow', sans-serif",
              marginLeft: 12, textDecoration: "none",
              transition: "all .25s", display: "inline-block",
              boxShadow: "0 4px 18px rgba(232,96,74,.3)",
              textTransform: "uppercase", letterSpacing: ".06em",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 8px 28px rgba(232,96,74,.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = "0 4px 18px rgba(232,96,74,.3)";
            }}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}

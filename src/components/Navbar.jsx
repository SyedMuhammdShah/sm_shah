import { useState, useEffect } from "react";
import { HERO } from "../data";

const NAV_LINKS = ["home", "about", "skills", "projects", "experience", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [active,   setActive]     = useState("home");

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

  const goto = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0,
        zIndex: 999,
        transition: "all .35s",
        background: scrolled ? "rgba(6,9,18,.97)" : "transparent",
        backdropFilter: scrolled ? "blur(28px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,.06)" : "none",
      }}
    >
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        padding: "0 48px", display: "flex",
        alignItems: "center", justifyContent: "space-between",
        height: 68,
      }}>
        {/* Logo */}
        <div
          onClick={() => goto("home")}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 26, fontWeight: 800,
            letterSpacing: -1, cursor: "pointer",
            background: "linear-gradient(135deg,#00e5a0,#7c6fff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          SMS.
        </div>

        {/* Links */}
        <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
          {NAV_LINKS.map((id) => (
            <button
              key={id}
              onClick={() => goto(id)}
              style={{
                background: "none", border: "none",
                color: active === id ? "#00e5a0" : "rgba(255,255,255,.45)",
                fontSize: 13,
                fontWeight: active === id ? 600 : 500,
                cursor: "pointer",
                padding: "7px 14px", borderRadius: 8,
                transition: "all .2s",
                fontFamily: "inherit",
                position: "relative",
                textTransform: "capitalize",
              }}
            >
              {id}
              {active === id && (
                <span style={{
                  position: "absolute", bottom: 5,
                  left: "50%", transform: "translateX(-50%)",
                  width: 14, height: 1.5,
                  background: "#00e5a0", borderRadius: 2,
                  display: "block",
                }} />
              )}
            </button>
          ))}

          <a
            href={HERO.links.email}
            style={{
              padding: "9px 22px", borderRadius: 9,
              background: "linear-gradient(135deg,#00e5a0,#00c87a)",
              color: "#000", fontWeight: 700, fontSize: 13,
              marginLeft: 12, textDecoration: "none",
              transition: "all .25s", display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,229,160,.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}

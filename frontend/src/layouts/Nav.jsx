import React, { useEffect, useState } from "react";
import Reveal from "../components/anims/Reveal";

const SECTIONS = ["hero", "projects", "about", "techs", "socials"];

export function Nav() {
  const [active, setActive] = useState("hero");

  const handleClick = (id) => {
    // setActive(id);

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  useEffect(() => {
    const els = SECTIONS
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!els.length) return;

    let ticking = false;

    const setActiveFromCenter = () => {
      const centerY = window.innerHeight / 2;

      // 1) If theres a section on the screen center, select it.
      let current = els.find((el) => {
        const r = el.getBoundingClientRect();
        return r.top <= centerY && r.bottom >= centerY;
      });

      // 2) Else: closest section
      if (!current) {
        current = els
          .map((el) => {
            const r = el.getBoundingClientRect();
            const elCenter = (r.top + r.bottom) / 2;
            return { el, dist: Math.abs(elCenter - centerY) };
          })
          .sort((a, b) => a.dist - b.dist)[0]?.el;
      }

      if (current?.id) setActive(current.id);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setActiveFromCenter();
        ticking = false;
      });
    };

    setActiveFromCenter();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <Reveal className="nav" as="nav" aria-label="Section navigation">
      <a
        href="#hero"
        aria-label="Hero section"
        className={`row gap10 tooltip ${active === "hero" ? "selected" : ""}`}
        data-tooltip="Home"
        onClick={(e) => {
          e.preventDefault();
          handleClick("hero");
        }}
      >
        <img src="icons/home.svg" alt="hero" aria-hidden="true" />
      </a>

      <a
        href="#projects"
        aria-label="Projects"
        className={`row gap10 tooltip ${active === "projects" ? "selected" : ""}`}
        data-tooltip="Projects"
        onClick={(e) => {
          e.preventDefault();
          handleClick("projects");
        }}
      >
        <img src="icons/architecture.svg" alt="projects" aria-hidden="true" />
      </a>

      <a
        href="#about"
        aria-label="About"
        className={`row gap10 tooltip ${active === "about" ? "selected" : ""}`}
        data-tooltip="About me"
        onClick={(e) => {
          e.preventDefault();
          handleClick("about");
        }}
      >
        <img src="icons/aboutme.svg" alt="about" aria-hidden="true" />
      </a>

      <a
        href="#techs"
        aria-label="Techs"
        className={`row gap10 tooltip ${active === "techs" ? "selected" : ""}`}
        data-tooltip="Technologies"
        onClick={(e) => {
          e.preventDefault();
          handleClick("techs");
        }}
      >
        <img src="icons/techs.svg" alt="techs" aria-hidden="true" />
      </a>

      <a
        href="#socials"
        aria-label="Socials"
        className={`row gap10 tooltip ${active === "socials" ? "selected" : ""}`}
        data-tooltip="Contact me"
        onClick={(e) => {
          e.preventDefault();
          handleClick("socials");
        }}
      >
        <img src="icons/socials.svg" alt="socials" aria-hidden="true" />
      </a>
    </Reveal>
  );
}

export default Nav;

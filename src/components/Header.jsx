import React, { useEffect, useState } from "react";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");

  const detectVisibleSection = () => {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPosition >= top && scrollPosition <= top + height) {
        setActiveLink(id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", detectVisibleSection);
    return () => window.removeEventListener("scroll", detectVisibleSection);
  }, []);

  return (
    <header>
      <nav id="myNavbar" className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="#"
            aria-label="lien de navigation mobile"
          ></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                className={`nav-link ${activeLink === "about" ? "active" : ""}`}
                href="#about"
                aria-label="lien vers la section à propos de moi"
              >
                A PROPOS
              </a>
              <a
                className={`nav-link ${activeLink === "skills" ? "active" : ""}`}
                href="#skills"
                aria-label="lien vers la section mes compétences"
              >
                COMPÉTENCE
              </a>
              <a
                className={`nav-link ${
                  activeLink === "experience" ? "active" : ""
                }`}
                href="#experience"
                aria-label="lien vers la section mes expériences"
              >
                EXPÉRIENCE
              </a>
              <a
                className={`nav-link ${
                  activeLink === "portfolio" ? "active" : ""
                }`}
                href="#portfolio"
                aria-label="lien vers la section mon portfolio"
              >
                PORTFOLIO
              </a>
              <a
                className={`nav-link ${activeLink === "contact" ? "active" : ""}`}
                href="#contact"
                aria-label="lien vers la section contact"
              >
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

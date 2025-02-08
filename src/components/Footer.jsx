import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a
          href="mailto:mohamedhanafi69100@gmail.com"
          aria-label="Envoyer un email"
          className="social-icon"
        >
          <i className="bi bi-envelope"></i>
        </a>
        <span>mohamedhanafi69100@gmail.com</span>

        <a
          href="tel:0783348196"
          aria-label="Appeler ce numéro"
          className="social-icon"
        >
          <i className="bi bi-phone"></i>
        </a>
        <span>0783348196</span>
      </div>
      <a
        href="#about"
        aria-label="Retour en haut de la page"
        className="footer-back-to-top"
      >
        <i className="bi bi-chevron-up"></i>
      </a>
      <h3 className="footer-title">
        © 2025 Hanafi Mohamed. All rights reserved.
      </h3>
    </footer>
  );
};

export default Footer;

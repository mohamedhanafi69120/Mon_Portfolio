import React from "react";

const SocialNetwork = () => {
  return (
    <div className="social-bar">
      <a
        href="https://github.com/mohamedhanafi69120"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Lien vers mes repositories GitHub"
        className="social-icon"
      >
        <i className="bi bi-github"></i>
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Lien vers mon profil LinkedIn"
        className="social-icon"
      >
        <i className="bi bi-linkedin"></i>
      </a>
    </div>
  );
};

export default SocialNetwork;

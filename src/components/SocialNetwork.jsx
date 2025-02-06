import React from "react";

const SocialNetwork = () => {
  return (
    <div className="social-bar">
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Lien vers ma page Facebook"
        className="social-icon"
      >
        <i className="bi bi-facebook"></i>
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Lien vers ma page Twitter"
        className="social-icon"
      >
        <i className="bi bi-twitter"></i>
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
      <a
        href="https://github.com/mohamedhanafi69120"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Lien vers mes repositories GitHub"
        className="social-icon"
      >
        <i className="bi bi-github"></i>
      </a>
    </div>
  );
};

export default SocialNetwork;

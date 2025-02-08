import React from "react";
import SocialNetwork from "./SocialNetwork";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <img
          src="images/moi4.webp"
          alt="Photo de Mohamed"
          className="about-container-image"
        />
      </div>
      <div className="heading second-color">
        <h1 className="title about-title">Bonjour, moi c'est Mohamed</h1>
        <p className="about-description">
          Récemment diplômé et passionné par le design web, je souhaite allier
          mes compétences en développement à ma créativité pour concevoir des
          expériences web intuitives et innovantes.
        </p>
        <h2 className="title about-subtitle">Intégrateur Web</h2>
        {/* <a
          href="doc/CV_Mohamed.pdf"
          type="application/pdf"
          aria-label="Télécharger mon CV au format PDF"
          download="CV_Mohamed.pdf" // Force le téléchargement
          target="_blank" // Ouvre dans un nouvel onglet
          rel="noopener noreferrer" // Sécurité pour les liens externes
          className="button1"
        >
          Télécharger CV
        </a> */}
        <SocialNetwork />
      </div>
    </section>
  );
};

export default About;

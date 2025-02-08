import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import portfolioProjectData from "../data/portfolioProjectData.json";

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  // Fonction pour ouvrir la modale avec le contenu du projet
  const showModal = (description, projectUrl) => {
    setModalContent({ description, projectUrl });
    document.body.style.overflow = "hidden"; // Désactive le défilement de la page
    setIsModalOpen(true);
  };

  // Fonction pour fermer la modale
  const closeModal = () => {
    document.body.style.overflow = ""; // Réactive le défilement de la page
    setIsModalOpen(false);
    setModalContent(null);
  };

  // Gestion du clavier : fermer la modale avec la touche "Escape"
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="white-divider"></div>
        <div className="heading">
          <h2 className="title second-color">Portfolio</h2>
        </div>
        <div className="row">
          {portfolioProjectData.items.map((item, index) => (
            <div
              key={index}
              className="col-md-4 portfolio-col"
              onClick={() => showModal(item.description, item.projectUrl)}
              role="button"
              tabIndex={0} // Rendre la div focusable pour le clavier
              onKeyPress={(e) =>
                e.key === "Enter" &&
                showModal(item.description, item.projectUrl)
              }
            >
              <img
                src={item.imagePath}
                className="img-thumbnail"
                alt={item.tooltipContent} // Texte alternatif pour l'accessibilité
                loading="lazy" // Permet de différer le chargement des images hors écran
                width="300" // Fixe la largeur pour éviter les décalages de mise en page
                height="200" // Fixe la hauteur pour éviter les décalages de mise en page
              />
            </div>
          ))}
        </div>

        {isModalOpen && modalContent && (
          <div
            className="modal"
            role="dialog"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            onClick={closeModal}
            aria-hidden={!isModalOpen}
          >
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()} // Empêche la fermeture de la modale lors du clic sur son contenu
              tabIndex={-1} // Empêche le focus initial de se placer sur la modale elle-même
            >
              <button onClick={closeModal} aria-label="Fermer la modale">
                X
              </button>
              <h2 id="modal-title">Détails du projet</h2>
              <p id="modal-description">{modalContent.description}</p>
              <a
                href={modalContent.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir sur Github
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

Portfolio.propTypes = {
  portfolioProjectData: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        imagePath: PropTypes.string.isRequired,
        projectUrl: PropTypes.string.isRequired,
        tooltipContent: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
};

export default Portfolio;

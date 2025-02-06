// Experience.jsx

import React from "react";
import TimelineItem from "./ExperiencesItem";
import experienceData from "../data/experienceData.json"; // Importez les données JSON

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="white-divider"></div>
        <div className="heading">
          <h2 className="title second-color">Expérience Professionnelle</h2>
        </div>
        <ul className="timeline">
          {experienceData.map((experience, index) => (
            <TimelineItem
              key={index}
              title={experience.title}
              subtitle={experience.subtitle}
              duration={experience.duration}
              description={experience.description}
              inverted={index % 2 === 1} // Alterner l'inversion des éléments de la timeline
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;

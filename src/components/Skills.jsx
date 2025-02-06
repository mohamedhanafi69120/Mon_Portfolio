import React from "react";
import skillsData from "../data/skillsData.json"; // Import JSON contenant les compétences

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="heading">
          Mes <span>Compétences</span>
        </h2>
        <div className="skills-container">
          {/* Catégorie Frontend */}
          <div className="skills-content">
            <h3 className="skills-title">Frontend Developer</h3>
            <div className="skills-icons">
              {skillsData.frontend.map((skill, index) => (
                <div key={index} className="skill">
                  <i className={skill.icon}></i>
                  <h4>{skill.label}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Catégorie Backend */}
          <div className="skills-content">
            <h3 className="skills-title">Backend Developer</h3>
            <div className="skills-icons">
              {skillsData.backend.map((skill, index) => (
                <div key={index} className="skill">
                  <i className={skill.icon}></i>
                  <h4>{skill.label}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

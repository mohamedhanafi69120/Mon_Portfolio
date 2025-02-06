//TimelineItem

import React from "react";

const ExperiencesItem = ({
  title,
  subtitle,
  duration,
  description,
  inverted,
}) => {
  return (
    <li>
      <div
        className={`timeline-badge ${inverted ? "timeline-badge-inverted" : ""}`}
      >
        <span className="bi bi-briefcase-fill"></span>
      </div>
      <div
        className={`timeline-panel-container ${inverted ? "timeline-panel-container-inverted" : ""}`}
      >
        <div className="timeline-panel">
          <div className="timeline-heading">
            <h3 className="title timeline-heading-title">{title}</h3>
            <h4 className="title timeline-heading-subtitle">{subtitle}</h4>
            <p className="text-muted">
              <span className="bi bi-clock-fill"></span> {duration}
            </p>
          </div>
          <div className="timeline-body">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ExperiencesItem;

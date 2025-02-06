//Portfolio

import { Tooltip } from "react-tooltip";
import portfolioProjectData from "../data/portfolioProjectData.json";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="white-divider"></div>
        <div className="heading">
          <h2 className="title second-color">Portfolio</h2>
        </div>
        <div className="row">
          {portfolioProjectData.items.map((item, index) => (
            <PortfolioItem
              key={index}
              imagePath={item.imagePath}
              projectUrl={item.projectUrl}
              tooltipContent={item.tooltipContent}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const PortfolioItem = ({ imagePath, projectUrl, tooltipContent, onClick }) => {
  return (
    <div className="col-md-4 portfolio-col">
      <a
        href={projectUrl}
        target="_blank"
        data-tooltip-id="my-tooltip"
        data-tooltip-content={tooltipContent}
      >
        <img src={imagePath} className="img-thumbnail" alt={tooltipContent} />
      </a>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default Portfolio;

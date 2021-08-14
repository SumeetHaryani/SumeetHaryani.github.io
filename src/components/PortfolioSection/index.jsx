import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./styles.scss";

export default function PortfolioSection({ projectItems }) {
  return (
    <div className="portfolios">
      {projectItems.map((item) => {
        return (
          <div className="portfolio" key={item.name}>
            <div className="image-data">
              <img
                src={
                  item.images[0]
                    ? item.images[0].resolutions.desktop.url
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD6aH-id93cZgiH6lg55KvE8Kow3VO1sVHIg&usqp=CAU"
                }
                alt="Not Found"
              />
              <ul className="hover-items">
                <li>
                  <a href={item.githubUrl} rel="noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faGithub} />
                    &nbsp; GitHub
                  </a>
                  <a href={item.website} rel="noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faLink} />
                    &nbsp; Website
                  </a>
                </li>
              </ul>
            </div>
            <h5>{item.displayName}</h5>
            <p>{item.summary}</p>
          </div>
        );
      })}
    </div>
  );
}

import React from "react";
import "./styles.scss";

export default function SkillsSection({ skill, progress }) {
  return (
    <div className="skills-container">
      <h5 className="skill-title">{skill}</h5>
      <div className="skill-bar">
        <p>{progress}%</p>
        <div className="skill-progress">
          <div className="progress">
            <div
              className="inner-progress"
              style={{
                width: `${progress}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

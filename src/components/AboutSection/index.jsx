import React, { useContext } from "react";
import { UserContext } from "../../context/User";
import Button from "../Button";
import SocialLinks from "../SocialLinks";
import "./styles.scss";

export default function AboutSection() {
  const {
    basics: { profiles, summary, image },
  } = useContext(UserContext);

  return (
    <div className="about-section">
      <div className="img">
        <img src={image} alt="" />
      </div>
      <div className="about-info">
        <p className="about-text">{summary}</p>
        <SocialLinks profiles={profiles} />
        <Button to="#">Get Resume</Button>
        <Button secondary to="#skills">
          My Skills
        </Button>
      </div>
    </div>
  );
}

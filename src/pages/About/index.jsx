import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import AboutSection from "../../components/AboutSection";
import SkillsSection from "../../components/Skills";
import Title from "../../components/Title";
import { UserContext } from "../../context/User";
import "./styles.scss";

export default function AboutPage() {
  const { skills } = useContext(UserContext);

  return (
    <div data-aos="fade-right" id="aboutPage" className="AboutPage">
      <Title title={"About Me"} />
      <AboutSection />
      <div id="skills">
        <Title title={"My Skills"} />
        <div className="skill-container">
          {skills.map(({ name, rating }, idx) => (
            <div data-aos="fade-up-right" key={idx}>
              <FontAwesomeIcon
                className="icon"
                icon={["fab", name.toLowerCase()]}
                size="2x"
              />
              <SkillsSection
                skill={name}
                progress={Math.round(rating * 28.3)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

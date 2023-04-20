import React, { useContext } from "react";
import ReactTypingEffect from "react-typing-effect";
import Button from "../../components/Button";
import SocialLinks from "../../components/SocialLinks";
import heroImg from "../../assets/hero.svg";
import { UserContext } from "../../context/User";
import "./styles.scss";

export default function HomePage() {
  const {
    basics: { name, headline, profiles },
  } = useContext(UserContext);

  return (
    <div id="homePage" className="home-page">
      <header className="hero" data-aos="fade-up">
        <h1 className="hero-text">
          Hi, I am&nbsp;
          <ReactTypingEffect
            text={name}
            eraseDelay={120000}
            typingDelay={800}
          />
        </h1>
        <p>{headline}</p>
        <SocialLinks profiles={profiles} />
        <Button to={"https://bit.ly/sumeeth"} target="_blank">Resume</Button>
        <Button secondary to={"#aboutPage"}>
          About me
        </Button>
      </header>
      <div className="hero-img" data-aos="fade-left">
        <object type="image/svg+xml" data={heroImg}>svg-animation</object>
      </div>
    </div>
  );
}

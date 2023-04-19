import React, { useContext } from "react";
import Button from "../../components/Button";
import ContactItem from "../../components/ContactItem";
import SocialLinks from "../../components/SocialLinks";
import Title from "../../components/Title";
import email from "../../assets/emailme.svg";
import phone from "../../assets/phone.svg";
import { UserContext } from "../../context/User";
import "./styles.scss";

export default function ContactPage() {
  const {
    basics: { profiles },
  } = useContext(UserContext);

  return (
    <>
      <div id="contactPage">
        <div className="title">
          <Title title={"Contact Me"} />
        </div>
        <div className="contact-page">
          <div className="map-section">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120589.99848705922!2d72.96112474021595!3d19.17608650941434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1628708931522!5m2!1sen!2sin"
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="contact page"
            ></iframe>
          </div>
          <div className="contact-detail">
            <ContactItem icon={phone} text={"+91 8169534216"} title={"Phone"} />
            <ContactItem
              icon={email}
              text={"sumeetharyani3@gmail.com"}
              title={"Email"}
            />
            <div className="social">
              <SocialLinks profiles={profiles} />
              <Button to="https://drive.google.com/file/d/1MLtV-8Ac0oFwVN-XWIZOJgYBRoBWVjnF" target="_blank">Resume</Button>
            </div>
          </div>
        </div>
        <footer>Made with ❤️ by Sumeet Haryani</footer>
      </div>
    </>
  );
}

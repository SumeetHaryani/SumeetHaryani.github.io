import React from "react";
import "./styles.scss";

export default function ContactItem({ icon, text, title }) {
  return (
    <div className="contact-item">
      <div className="contact">
        <img src={icon} alt="" />
        <div className="contact-details">
          <h6>{title}</h6>
          <p>
            {title === "Email" ? <a href={`mailto:${text}`}>{text}</a> : text}
          </p>
        </div>
      </div>
    </div>
  );
}

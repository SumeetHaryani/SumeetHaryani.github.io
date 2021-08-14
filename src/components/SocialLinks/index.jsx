import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./styles.scss";

export default function SocialLinks({ profiles }) {
  return (
    <div className="icons ">
      {profiles.map((profile, idx) => {
        return idx > 0 ? (
          <a
            href={profile.url}
            target="_blank"
            rel="noreferrer"
            className="icon-holder"
            key={idx}
          >
            <FontAwesomeIcon
              icon={["fab", profile.network.toLowerCase()]}
              className="icon"
            />
          </a>
        ) : null;
      })}
    </div>
  );
}

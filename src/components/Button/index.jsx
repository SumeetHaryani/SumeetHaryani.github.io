import React from "react";
import "./styles.scss";

export default function Button({ children, secondary, to, handleCLick }) {
  return (
    <a
      className={secondary ? "btn-secondary" : "btn"}
      href={to}
      onClick={handleCLick}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

import React from "react";
import "./styles.scss";

export default function Button({
  children,
  secondary,
  to,
  handleCLick,
  target,
}) {
  return (
    <a
      className={secondary ? "btn-secondary" : "btn"}
      href={to}
      onClick={handleCLick}
      target={target}
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

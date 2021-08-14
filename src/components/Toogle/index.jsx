import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./styles.scss";
export default function Toogle() {
  const [darkTheme, setDarkTheme] = useState(false);
  useEffect(() => {
    if (darkTheme) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [darkTheme]);
  return (
    <>
      <input
        type="checkbox"
        checked={darkTheme}
        onChange={() => setDarkTheme(!darkTheme)}
        className="checkbox"
        id="checkbox"
      />
      <label htmlFor="checkbox" className="label">
        <FontAwesomeIcon icon={faSun} size="xs" color="yellow" />
        <FontAwesomeIcon icon={faMoon} size="xs" color="white" />
        <div className="ball"></div>
      </label>
    </>
  );
}

import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Toogle from "../Toogle";
import logo from "../../assets/logo.svg";

import "./styles.scss";
export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <header>
      <nav className="nav">
        <a href="index.html" className="nav-logo">
        <img src={logo} alt="" />
        </a>
        <ul className={click ? "nav-list active" : "nav-list"}>
          <li className="nav-item">
            <a href="#homePage" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#portfoliosPage" className="nav-link">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a href="#aboutPage" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#contactPage" className="nav-link">
              Contact
            </a>
          </li>
          <li className="nav-item nav-link disable">
            <Toogle />
          </li>
        </ul>
      </nav>
      <div className="nav-menu-toggle" onClick={handleClick}>
        <FontAwesomeIcon icon={click ? faTimes : faBars} />
      </div>
    </header>
  );
}

import React from "react";
import "./styles.scss";

export default  function Title({ title }) {
  return (
    <div className="title-container">
      <h3>
        {title}
        <span>{title}</span>
      </h3>
    </div>
  );
}

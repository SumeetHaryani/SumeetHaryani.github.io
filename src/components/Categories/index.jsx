import React from "react";
import "./styles.scss";

export default function Categories({ filter, categories, currentCategory }) {
  return (
    <div className="buttons">
      {categories.map((category, idx) => {
        return (
          <button
            type="button"
            className={
              currentCategory === category ? "btn-port active" : "btn-port"
            }
            onClick={() => filter(category)}
            key={idx}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

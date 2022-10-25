import React from "react";
import "../sass/main.scss";

export default function Recipe() {
  return (
    <div className="recipe">
      <div className="message">
        <div>
          <svg>
            <use href="src/img/icons.svg#icon-smile"></use>
          </svg>
        </div>
        <p>Start by searching for a recipe or an ingredient. Have fun!</p>
      </div>
    </div>
  );
}

import React from "react";
import sprite from "../img/icons.svg";
import "../sass/main.scss";

export default function Ingredient(props) {
  return (
    <li className="recipe__ingredient">
      <svg className="recipe__icon">
        <use href={sprite + "#icon-check"}></use>
      </svg>
      <div className="recipe__quantity">{props.quantity}</div>
      <div className="recipe__description">
        <span className="recipe__unit">{props.unit}</span>
        {props.description}
      </div>
    </li>
  );
}

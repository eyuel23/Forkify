import React from "react";
import img from "../img/logo.png";

export default function Previews(props) {
  return (
    <li className="preview">
      <a className="preview__link preview__link--active" href="#23456">
        <figure className="preview__fig">
          <img src={img} alt="Test" />
        </figure>
        <div className="preview__data">
          <h4 className="preview__title">{props.title}</h4>
          <p className="preview__publisher">{props.publisher}</p>
          <div className="preview__user-generated">
            <svg>
              <use href="src/img/icons.svg#icon-user"></use>
            </svg>
          </div>
        </div>
      </a>
    </li>
  );
}

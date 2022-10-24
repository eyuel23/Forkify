import React from "react";

export default function Previews(props) {
  return (
    <li class="preview">
      <a class="preview__link preview__link--active" href="#23456">
        <figure class="preview__fig">
          <img src={require(props.image)} alt="Test" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">{props.title}</h4>
          <p class="preview__publisher">{props.publisher}</p>
          <div class="preview__user-generated">
            <svg>
              <use href="src/img/icons.svg#icon-user"></use>
            </svg>
          </div>
        </div>
      </a>
    </li>
  );
}

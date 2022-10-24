import React from "react";
import "../sass/main.scss";
import logo from "../img/logo.png";
import Search from "./Search";

export default function Navigation() {
  return (
    <>
      <img src={logo} alt="Logo" class="header__logo" />
      <Search />
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item">
            <button class="nav__btn nav__btn--add-recipe">
              <svg class="nav__icon">
                <use href="src/img/icons.svg#icon-edit"></use>
              </svg>
              <span>Add recipe</span>
            </button>
          </li>
          <li class="nav__item">
            <button class="nav__btn nav__btn--bookmarks">
              <svg class="nav__icon">
                <use href="src/img/icons.svg#icon-bookmark"></use>
              </svg>
              <span>Bookmarks</span>
            </button>
            <div class="bookmarks">
              <ul class="bookmarks__list">
                <div class="message">
                  <div>
                    <svg>
                      <use href="src/img/icons.svg#icon-smile"></use>
                    </svg>
                  </div>
                  <p>No bookmarks yet. Find a nice recipe and bookmark it :)</p>
                </div>

                {/* <li class="preview">
                <a class="preview__link" href="#23456">
                  <figure class="preview__fig">
                    <img src="src/img/test-1.jpg" alt="Test" />
                  </figure>
                  <div class="preview__data">
                    <h4 class="preview__name">
                      Pasta with Tomato Cream ...
                    </h4>
                    <p class="preview__publisher">The Pioneer Woman</p>
                  </div>
                </a>
              </li>  */}
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

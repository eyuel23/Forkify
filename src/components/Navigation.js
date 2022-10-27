import React from "react";
import "../sass/main.scss";
import logo from "../img/logo.png";
import Search from "./Search";
import sprite from "../img/icons.svg";

export default function Navigation() {
  return (
    <>
      <img src={logo} alt="Logo" className="header__logo" />
      <Search />
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <button className="nav__btn nav__btn--add-recipe">
              <svg className="nav__icon">
                <use href={sprite + "#icon-edit"}></use>
              </svg>
              <span>Add recipe</span>
            </button>
          </li>
          <li className="nav__item">
            <button className="nav__btn nav__btn--bookmarks">
              <svg className="nav__icon">
                <use href={sprite + "#icon-bookmark"}></use>
              </svg>
              <span>Bookmarks</span>
            </button>
            <div className="bookmarks">
              <ul className="bookmarks__list">
                <div className="message">
                  <div>
                    <svg>
                      <use href={sprite + "#icon-smile"}></use>
                    </svg>
                  </div>
                  <p>No bookmarks yet. Find a nice recipe and bookmark it :)</p>
                </div>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

import React from "react";
import { useSelector } from "react-redux";

import "../sass/main.scss";
import Ingredient from "./Ingredient";

export default function FullRecipe() {
  const fullInfo = useSelector((state) => state.search.fullInfo);

  return (
    <div className="recipe">
      <figure className="recipe__fig">
        <img src={fullInfo.image_url} alt="Tomato" className="recipe__img" />
        <h1 className="recipe__title">
          <span>{fullInfo.title}</span>
        </h1>
      </figure>

      <div className="recipe__details">
        <div className="recipe__info">
          <svg className="recipe__info-icon">
            <use href="../img/icons.svg#icon-clock"></use>
          </svg>
          <span className="recipe__info-data recipe__info-data--minutes">
            {fullInfo.cooking_time}
          </span>
          <span className="recipe__info-text">minutes</span>
        </div>
        <div className="recipe__info">
          <svg className="recipe__info-icon">
            <use href="../img/icons.svg#icon-users"></use>
          </svg>
          <span className="recipe__info-data recipe__info-data--people">
            {fullInfo.servings}
          </span>
          <span className="recipe__info-text">servings</span>

          <div className="recipe__info-buttons">
            <button className="btn--tiny btn--increase-servings">
              <svg>
                <use href="../img/icons.svg#icon-minus-circle"></use>
              </svg>
            </button>
            <button className="btn--tiny btn--increase-servings">
              <svg>
                <use href="../img/icons.svg#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div className="recipe__user-generated">
          <svg>
            <use href="../img/icons.svg#icon-user"></use>
          </svg>
        </div>
        <button className="btn--round">
          <svg className="">
            <use href="../img/icons.svg#icon-bookmark-fill"></use>
          </svg>
        </button>
      </div>

      <div className="recipe__ingredients">
        <h2 className="heading--2">Recipe ingredients</h2>
        <ul className="recipe__ingredient-list">
          {fullInfo.ingredients.map((recipe) => {
            return (
              <Ingredient
                key={recipe.description}
                description={recipe.description}
                unit={recipe.unit}
                quantity={recipe.quantity}
              />
            );
          })}
        </ul>
      </div>

      <div className="recipe__directions">
        <h2 className="heading--2">How to cook it</h2>
        <p className="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span className="recipe__publisher"> {fullInfo.publisher}</span>.
          Please check out directions at their website.
        </p>
        <a
          className="btn--small recipe__btn"
          href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/"
          target="_blank"
        >
          <span>Directions</span>
          <svg className="search__icon">
            <use href="../img/icons.svg#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    </div>
  );
}

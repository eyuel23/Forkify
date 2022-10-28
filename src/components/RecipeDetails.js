import React from "react";
import "../sass/main.scss";
import sprite from "../img/icons.svg";
import Ingredient from "./Ingredient";
export default function RecipeDetals(props) {
  return (
    <div className="recipe">
      <figure className="recipe__fig">
        <img
          src={props.fullInfo.image_url}
          alt="Tomato"
          className="recipe__img"
        />
        <h1 className="recipe__title">
          <span>{props.fullInfo.title}</span>
        </h1>
      </figure>

      <div className="recipe__details">
        <div className="recipe__info">
          <svg className="recipe__info-icon">
            <use href={sprite + "#icon-clock"}></use>
          </svg>
          <span className="recipe__info-data recipe__info-data--minutes">
            {props.fullInfo.cooking_time}
          </span>
          <span className="recipe__info-text">minutes</span>
        </div>
        <div className="recipe__info">
          <svg className="recipe__info-icon">
            <use href={sprite + "#icon-users"}></use>
          </svg>
          <span className="recipe__info-data recipe__info-data--people">
            {props.fullInfo.servings}
          </span>
          <span className="recipe__info-text">servings</span>

          <div className="recipe__info-buttons">
            <button className="btn--tiny btn--increase-servings">
              <svg>
                <use href={sprite + "#icon-minus-circle"}></use>
              </svg>
            </button>
            <button className="btn--tiny btn--increase-servings">
              <svg>
                <use href={sprite + "#icon-plus-circle"}></use>
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
            <use href={sprite + "#icon-bookmark-fill"}></use>
          </svg>
        </button>
      </div>

      <div className="recipe__ingredients">
        <h2 className="heading--2">Recipe ingredients</h2>
        <ul className="recipe__ingredient-list">
          {props.fullInfo.ingredients.map((recipe, index) => {
            return (
              <Ingredient
                key={index}
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
          <span className="recipe__publisher"> {props.fullInfo.publisher}</span>
          . Please check out directions at their website.
        </p>
        <a
          className="btn--small recipe__btn"
          href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/"
          rel="noreferrer"
        >
          <span>Directions</span>
          <svg className="search__icon">
            <use href={sprite + "#icon-arrow-right"}></use>
          </svg>
        </a>
      </div>
    </div>
  );
}

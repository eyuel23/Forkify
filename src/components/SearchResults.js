import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchactions } from "../store";
import "../sass/main.scss";
import Previews from "./Previews";

export default function SearchResults() {
  const searchInput = useSelector((state) => state.search.searchInput);
  const results = useSelector((state) => state.search.results);
  const dispatch = useDispatch();

  useEffect(() => {
    const showRecipe = async function () {
      try {
        const res = await fetch(
          "https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=<15a7ceee-3f1c-4fec-8521-15b7ea3ea5c1>"
        );
        const data = await res.json();
        console.log(data);
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        let { recipe } = data.data;
        recipe = {
          title: recipe.title,
          source_url: recipe.sourceUrl,
          image_url: recipe.image,
          publisher: recipe.publisher,
          cooking_time: recipe.cookingTime,
          servings: recipe.servings,
          ingredients: recipe.ingredients,
        };
        const pas = [recipe];
        dispatch(searchactions.changeResults(pas));
      } catch (err) {
        alert(err);
      }
    };
    return showRecipe;
  }, [searchInput, dispatch]);
  console.log(results);

  return (
    <div className="search-results">
      <ul className="results">
        {false && (
          <Previews
            image={results[1].image_url}
            title={results[1].title}
            publisher={results[1].publisher}
          />
        )}
        ;
      </ul>
    </div>
  );
}

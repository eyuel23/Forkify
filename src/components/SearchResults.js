import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchactions } from "../store";
import "../sass/main.scss";
import Previews from "./Previews";

export default function SearchResults() {
  const searchInput = useSelector((state) => state.search.searchInput);
  const best = useSelector((state) => state.search.best);
  const results = useSelector((state) => state.search.results);
  const dispatch = useDispatch();
  const showRecipe = async function () {
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchInput}`
      );
      const data = await res.json();
      if (!res.ok) throw new Error(`${data.message} (${res.status})`);
      console.log(data);
      let { recipes } = data.data;
      dispatch(searchactions.changeResults(recipes));
    } catch (err) {
      alert(err);
    }
  };
  console.log(results);
  useEffect(() => {
    if (best) {
      showRecipe();
    } else {
      return;
    }
  }, [searchInput, best]);
  return (
    <div className="search-results">
      <ul className="results">
        {best &&
          results.map((result, index) => {
            if (index < 10) {
              return (
                <Previews
                  key={result.id}
                  id={result.id}
                  image={result.image}
                  title={result.title}
                  publisher={result.publisher}
                />
              );
            } else {
              return;
            }
          })}
        ;
      </ul>
    </div>
  );
}

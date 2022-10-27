import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchactions } from "../store";
import "../sass/main.scss";
import Previews from "./Previews";

export default function SearchResults() {
  // const searchInput = useSelector((state) => state.search.searchInput);
  const best = useSelector((state) => state.search.best);
  const results = useSelector((state) => state.search.results);
  const dispatch = useDispatch();
  const showRecipe = async function () {
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886?key=<76cc8006-d290-4b6b-b562-faf6217f4bbf>`
      );
      const data = await res.json();
      console.log(data);
      if (!res.ok) throw new Error(`${data.message} (${res.status})`);
      let { recipe } = data.data;
      dispatch(searchactions.changeResults([recipe]));
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    if (best) {
      showRecipe();
    } else {
      return;
    }
  }, [best]);

  return (
    <div className="search-results">
      <ul className="results">
        {best &&
          results.map((result) => (
            <Previews
              key={result.id}
              id={result.id}
              image={result.image}
              title={result.title}
              publisher={result.publisher}
            />
          ))}
        ;
      </ul>
    </div>
  );
}

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
          `https://forkify-api.herokuapp.com/api/v2/recipes?search=banana&key=<26b2eb82-636a-4934-b57e-fee44ac0a136>`
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
    return showRecipe;
  }, [searchInput, dispatch]);
  console.log(results);

  return (
    <div className="search-results">
      <ul className="results">
        {results.map((result) => (
          <Previews
            key={result.id}
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

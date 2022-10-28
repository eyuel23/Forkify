import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchactions } from "../store/index.js";
import "../sass/main.scss";
import Message from "./message.js";
import RecipeDetals from "./RecipeDetails.js";

export default function FullRecipe() {
  const take = useSelector((state) => state.search.take);
  const dispatch = useDispatch();
  const fullInfoId = useSelector((state) => state.search.fullInfoId);
  const fullInfo = useSelector((state) => state.search.fullInfo);
  const need = useSelector((state) => state.search.need);
  const showRecipe = async function () {
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${fullInfoId}?key<cdb4e5a8-6f81-457e-9d71-c58393b34ec5></cdb4e5a8-6f81-457e-9d71-c58393b34ec5>`
      );
      const data = await res.json();
      if (!res.ok) throw new Error(`${data.message} (${res.status})`);
      let { recipe } = data.data;
      dispatch(searchactions.changeFullInfo(recipe));
    } catch (err) {
      alert(err);
    }
  };
  useEffect(() => {
    if (need) {
      showRecipe();
    } else {
      return;
    }
  }, [fullInfoId, need]);

  return <>{take ? <RecipeDetals fullInfo={fullInfo} /> : <Message />}</>;
}

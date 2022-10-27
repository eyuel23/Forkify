import React from "react";
import { useSelector } from "react-redux";
import "../sass/main.scss";
import FullRecipe from "./FullRecipe";
import Message from "./message";

export default function Recipe() {
  const take = useSelector((state) => state.search.take);
  return <div className="recipe">{take ? <FullRecipe /> : <Message />}</div>;
}

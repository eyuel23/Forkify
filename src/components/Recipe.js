import React from "react";
import { useSelector } from "react-redux";
import "../sass/main.scss";
import FullRecipe from "./FullRecipe";
import Message from "./message";

export default function Recipe() {
  return (
    <div className="recipe">
      <FullRecipe />
    </div>
  );
}

import React from "react";
import "../sass/main.scss";

export default function Search() {
  return (
    <form className="search">
      <input
        type="text"
        className="search__field"
        placeholder="Search over 1,000,000 recipes..."
      />
      <button className="btn search__btn">
        <svg className="search__icon">
          <use href={require("../img/icons.svg#icon-search")}></use>
        </svg>
        <span>Search</span>
      </button>
    </form>
  );
}

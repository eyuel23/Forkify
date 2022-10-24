import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchactions } from "../store";
import "../sass/main.scss";

export default function Search() {
  const dispatch = useDispatch();
  const searchInput = useSelector((state) => state.search.searchInput);
  const inputHandler = (e) => {
    e.preventDefault();
    const value = e.target.value;

    dispatch(searchactions.newSearchInput(value));
  };
  console.log(searchInput);

  return (
    <form className="search">
      <input
        type="text"
        className="search__field"
        placeholder="Search over 1,000,000 recipes..."
        onChange={inputHandler}
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

import React from "react";
import { useDispatch } from "react-redux";
import { searchactions } from "../store";
import "../sass/main.scss";

export default function Search() {
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
  };
  const inputHandler = (event) => {
    const value = event.target.value;
    dispatch(searchactions.newSearchInput(value));
  };

  return (
    <form className="search" onSubmit={submitHandler}>
      <input
        type="text"
        className="search__field"
        placeholder="Search over 1,000,000 recipes..."
        onChange={inputHandler}
      />
      <button type="submit" className="btn search__btn">
        <svg className="search__icon">
          <use href={require("../img/icons.svg#icon-search")}></use>
        </svg>
        <span>Search</span>
      </button>
    </form>
  );
}

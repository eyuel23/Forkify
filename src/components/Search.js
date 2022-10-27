import React from "react";
import { useDispatch } from "react-redux";
import { searchactions } from "../store";
import "../sass/main.scss";

export default function Search() {
  const dispatch = useDispatch();
  let value;
  const submitHandler = (event) => {
    dispatch(searchactions.changeBest());
    event.preventDefault();
    dispatch(searchactions.newSearchInput(value));
  };
  const inputHandler = (event) => {
    value = event.target.value;
  };

  return (
    <form className="search" onSubmit={submitHandler}>
      <input
        type="text"
        className="search__field"
        placeholder="Search over 1,000,000 recipes..."
        onChange={inputHandler}
      />
      <button onClick={submitHandler} type="submit" className="btn search__btn">
        <svg className="search__icon">
          <use href={require("../img/icons.svg#icon-search")}></use>
        </svg>
        <span>Search</span>
      </button>
    </form>
  );
}

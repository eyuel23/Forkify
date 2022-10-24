import React from "react";
import "../sass/main.scss";

export default function Search() {
  return (
    <form class="search">
      <input
        type="text"
        class="search__field"
        placeholder="Search over 1,000,000 recipes..."
      />
      <button class="btn search__btn">
        <svg class="search__icon">
          <use href="src/img/icons.svg#icon-search"></use>
        </svg>
        <span>Search</span>
      </button>
    </form>
  );
}

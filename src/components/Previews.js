import React from "react";
import { searchactions } from "../store/index.js";
import { useDispatch } from "react-redux";
import sprite from "../img/icons.svg";
export default function Previews(props) {
  const dispatch = useDispatch();

  const previewHandler = (event) => {
    event.preventDefault();
    const clickedId = event.target.closest("li").id;
    dispatch(searchactions.changeFullInfoId(clickedId));
    dispatch(searchactions.changeNeed());
    setTimeout(() => {
      dispatch(searchactions.changeTake());
    }, 100);
  };

  return (
    <li id={props.id} onClick={previewHandler} className="preview">
      <a className="preview__link" href="#23456">
        <figure className="preview__fig">
          <img src={props.image_url} alt="Test" />
        </figure>
        <div className="preview__data">
          <h4 className="preview__title">{props.title}</h4>
          <p className="preview__publisher">{props.publisher}</p>
          <div className="preview__user-generated">
            <svg>
              <use href={sprite + "#icon-user"}></use>
            </svg>
          </div>
        </div>
      </a>
    </li>
  );
}

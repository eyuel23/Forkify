import React, { useEffect } from "react";
import { searchactions } from "../store/index.js";
import { useDispatch, useSelector } from "react-redux";
import sprite from "../img/icons.svg";
export default function Previews(props) {
  const dispatch = useDispatch();
  const fullInfoId = useSelector((state) => state.search.fullInfoId);
  const need = useSelector((state) => state.search.need);
  const previewHandler = (event) => {
    event.preventDefault();
    const clickedId = event.target.closest("li").id;
    dispatch(searchactions.changeFullInfoId(clickedId));
    dispatch(searchactions.changeNeed());
    setTimeout(() => {
      dispatch(searchactions.changeTake());
    }, 1000);
  };
  const showRecipe = async function () {
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${fullInfoId}?key<cdb4e5a8-6f81-457e-9d71-c58393b34ec5></cdb4e5a8-6f81-457e-9d71-c58393b34ec5>`
      );
      const data = await res.json();
      console.log("preview", data);
      if (!res.ok) throw new Error(`${data.message} (${res.status})`);

      let { recipe } = data.data;
      dispatch(searchactions.changeFullInfo(recipe));
    } catch (err) {
      alert(err);
    }
    console.log("preview");
  };
  useEffect(() => {
    if (need) {
      showRecipe();
    } else {
      return;
    }
  }, [fullInfoId, need]);

  return (
    <li id={props.id} onClick={previewHandler} className="preview">
      <a className="preview__link preview__link--active" href="#23456">
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

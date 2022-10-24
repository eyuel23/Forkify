import React from "react";
import "../sass/main.scss";

export default function Container(props) {
  return <div className="container">{props.children}</div>;
}

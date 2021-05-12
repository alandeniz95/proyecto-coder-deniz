import React from "react";
import { Link } from "react-router-dom";
import "./items.scss"

export const Item = (props) => {
  return (
    <div className="item">
      <div>
        <Link
          to={{ pathname: `/itemdetail/${props.id}` }}
        >
          <h5>{props.title}</h5>
        </Link>
        <li>Precio: {props.price}</li>
        <hr />
      </div>
    </div>
  );
}

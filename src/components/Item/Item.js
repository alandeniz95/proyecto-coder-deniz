import React from "react";
import { Link } from "react-router-dom";
import "./items.scss";

export const Item = (props) => {
  return (
    <div className="item">
      <div>
        <Link to={{ pathname: `/itemdetail/${props.id}` }}>
          <h5>{props.title}</h5>
          <li>Precio: {props.price}</li>
        </Link>
        <hr />
      </div>
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import "./items.scss";

export const Item = (props) => { 

  return (
    <div className="item">
      <div>
        <Link to={{ pathname: `/itemdetail/${props.id}` }}>
          <h2>{props.title}</h2>
          <h5>Precio: {props.price}</h5>
          <img src={props.image} alt="{image}"></img>
        </Link>
      </div>
    </div>
  );
};

import React, { useContext } from "react";
import { CartContext } from "../../Context/cartContext";
import { Link } from "react-router-dom";


export const CartItem = ({ props }) => {
  const { delProduct, totalCartPrice } = useContext(CartContext);

  return (
    <div className="row-cart-list">
      <div className="items-cart">
        <Link to={`/producto/${props.id}`}>
          <div className="item-image">
            <img clasName="imgInCart" src={props.image} />
          </div>
        </Link>
        <div className="item-description">
          <p>
            <strong>{props.title}</strong>
          </p>
          <p>
            <strong>$</strong> {props.price * props.quantity}{" "}
          </p>
          <p>
            {" "}
            <strong>Cantidad:</strong> {props.quantity}{" "}
          </p>
        </div>
        <div className="item-description">
          <button className="btn-danger" onClick={() => delProduct(props.id)}>
            X
          </button>
        </div>
      </div>

      <div className="priceTotal">
        <h2>Total: {totalCartPrice()}</h2>
      </div>
    </div>
  );
};

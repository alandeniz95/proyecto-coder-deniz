import React, { useContext } from "react";
import { CartContext } from "../../Context/cartContext";

export const CartItem = ({ props }) => {
  const { delProduct } = useContext(CartContext);

  const totalPrice = () =>{
    
  }

  return (
    <div className="row-cart-list">
      <div className="items-cart">
        <div className="item-image">
          <img src={props.image} />
        </div>
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
    </div>
  );
};

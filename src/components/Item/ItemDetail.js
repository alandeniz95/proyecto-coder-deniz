import { useState, useContext } from "react";
import { ItemCount } from "./ItemCount";
import { CartContext } from "../../Context/cartContext";
import "./styles/itemDetail.scss";

export const ItemDetail = ({ props }) => {
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useContext(CartContext);

  const onAdd = (quantity) => {
    setQuantity(quantity);
    addToCart(props, quantity);
  };

  return (
    <div className="product">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-6">
            <div className="product-image-container">
              <img src={props.image} alt={props.title} className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="product-detail">
              <h3> {props.title} </h3>
              <p>{props.description} </p>
              <h4>${props.price}</h4>
              <ItemCount
                initial={1}
                onAdd={onAdd}
                count={quantity}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

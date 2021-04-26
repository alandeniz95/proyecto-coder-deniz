import "./listProduct.scss";
import { ItemCount } from "../itemCount/itemCount";

export const Products = (props) => {
  return (
    <div className="itemList">
      <img src={props.image} />
      <h2>{props.title}</h2>
      <p className="description">{props.description}</p>
      <strong>
        <p>${props.price}</p>
      </strong>
      <ItemCount />
    </div>
  );
};

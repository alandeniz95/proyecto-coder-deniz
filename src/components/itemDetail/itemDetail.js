import { ItemCount } from "../itemCount/itemCount";
import { Route } from "react-router-dom";

export const ItemDetail = (props, { onAdd }) => {
  return (
    <div className="itemDetail">
      <h4>{props.title}</h4>
      <ul>
        <li>
          <strong>Precio $ {props.price}</strong>
        </li>
      </ul>
      <ItemCount />
      <Route pathname="/cart">
        <button onClick={onAdd}>Agregar al carrito</button>
      </Route>
    </div>
  );
};

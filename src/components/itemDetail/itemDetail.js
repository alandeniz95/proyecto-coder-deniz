import { ItemCount } from "../itemCount/itemCount";
export const ItemDetail = (props) => {
  //console.log(props.tite);
  return (
    <div className="itemDetail">
      <h4>{props.title}</h4>
      <ul>
        <li>
          <strong>Precio $ {props.price}</strong>
        </li>
      </ul>
      <ItemCount />
    </div>
  );
};

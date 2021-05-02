import "./items.scss";
//import { ItemCount } from "../itemCount/itemCount"

export const Items = (props) => {
  return (
    <div className="items">
      <img src={props.picture} />
      <p className="title">
        <strong>
          <i>
            <big >{props.title}</big>
          </i>
        </strong>
        <br /> <strong>Precio $ {props.price.amount}</strong>
      </p>
    </div>
  );
};

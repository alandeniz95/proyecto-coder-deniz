import "./items.scss";
import { Link } from "react-router-dom";

export const Items = (props) => {
  return (
    <div className="item">
      <div>
        <Link to={{ pathname: `/itemdetail/${props.id}` }}>
          <div className="items">
            <h4>{props.title}</h4>
            <ul>
              <li>
                <strong>Precio $ {props.price}</strong>
              </li>
            </ul>
          </div>
        </Link>
      </div>
    </div>
  );
};

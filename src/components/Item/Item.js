import { Link } from "react-router-dom";
import "./styles/items.scss";

export const Item = (item) => {
  return (
    <div className="cardProductGeneral col-lg-6 col-sm-12">
      <Link to={`/producto/${item.id}`}>
        <div className="product-card">
          <div className="card-content">
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <h5>${item.price}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

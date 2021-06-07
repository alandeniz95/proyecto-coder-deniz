import { Link } from "react-router-dom";
import "./styles/items.scss"

export const Item = (item) => {
  return (
    <div className="col-lg-6 col-sm-12">
      <div className="product-card">
        <Link to={`/producto/${item.id}`}>
          <div className="card-content">
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <h5>${item.price}</h5>
          </div>
        </Link>
      </div>
    </div>
  );
};

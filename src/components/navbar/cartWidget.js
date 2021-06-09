import cartIcon from "../../images/cart.svg";
import { CartContext } from "../../Context/cartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  const cartQuantity = useContext(CartContext);

  return (
    <div className="cartWidhetMenu collapse navbar-collapse" id="navbarText">
      <ul>
        <li>
          <Link to={"/cart"}>
            <img src={cartIcon} alt="cart icon" />
            {cartQuantity.cartQuantity >= 1 ? (
              <span className="cartCountTrue">{cartQuantity.cartQuantity}</span>
            ) : (
              <span className="cartCountFalse">
                {cartQuantity.cartQuantity}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </div>
  );
};

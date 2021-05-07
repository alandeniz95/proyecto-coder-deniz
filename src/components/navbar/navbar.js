import { Link } from "react-router-dom";
import logo from "../../logo.jpg";
import { CartWidget } from "./cartWidget";
import "./navbar.scss";

export const Navbar = () => {
  const nameApp = "Anthon Bakery";
  const NAVIGATION = ["Home", "Galería", "Productos", "Contacto"];

  return (
    <header className="navbar">
      <Link to={"/"}>
        <div className="logo-name">
          <img className="logo" src={logo} alt="Logo" />
          <h3 className="title">{nameApp}</h3>
        </div>
      </Link>
      <nav>
        <ul className="links-list">
          <Link to={"/"}>
            <li className="links-link">{NAVIGATION[0]}</li>
          </Link>
          <Link to={"/"}>
            <li className="links-link">{NAVIGATION[1]}</li>
          </Link>
          <Link to={"/"}>
            <li className="links-link">{NAVIGATION[2]}</li>
          </Link>
          <Link to={"/"}>
            <li className="links-link">{NAVIGATION[3]}</li>
          </Link>
        </ul>
      </nav>
      <div className="cart">
        <CartWidget />
      </div>
    </header>
  );
};

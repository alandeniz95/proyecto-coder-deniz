import logo from "../../logo.jpg";
import { CartWidget } from "./cartWidget";
import "./navbar.scss";

export const Navbar = () => {
  const nameApp = "Anthon Bakery";
  const NAVIGATION = ["Home", "Galería", "Productos", "Contacto"];

  return (
    <header className="navbar">
      <div className="logo-name">
        <img className="logo" src={logo} alt="Logo" />
        <h3 className="title">{nameApp}</h3>
      </div>
      <nav>
        <ul>
          {NAVIGATION.map((navigation) => (
            <li>{navigation}</li>
          ))}
        </ul>
      </nav>
      <div className="cart">
        <CartWidget />
      </div>
    </header>
  );
};

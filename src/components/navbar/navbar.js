import "./navbar.scss";

import { CartWidget } from "./CartWidget";
import { NavLink } from "react-router-dom";
import logoAnthon from "../../images/logoAnthon.jpg";

const nameApp = "Anthon Bakery";
const NAVIGATION = ["Home", "Galería", "Productos"];
export const Navbar = () => {
  return (
    <div className="navbar-container">
      <header className="">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <NavLink exact to="/">
              <div className="brand">
                <img className="logo" src={logoAnthon} alt="Logo Anthon" />
                <p className="appName">{nameApp}</p>
              </div>
            </NavLink>
            <button
              className="btn-collapse navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav navbar-Link me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="navlink"
                    activeClassName="nav-active"
                    exact
                    to="/"
                  >
                    {NAVIGATION[0]}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="navlink"
                    activeClassName="nav-active"
                    to="/galery"
                  >
                    {NAVIGATION[1]}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="navlink"
                    activeClassName="nav-active"
                    to="/category/products"
                  >
                    {NAVIGATION[2]}
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="cartWidget">
              <CartWidget id="navbarText" />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

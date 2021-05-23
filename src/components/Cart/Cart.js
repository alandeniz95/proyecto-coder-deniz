import React, { Fragment, useContext, useEffect } from "react";
import { CartContext } from "../../Context/Context";
import { Link } from "react-router-dom";
import "./Cart.scss";

export const Cart = () => {
  const [products, productsCount, addProduct, delProduct, getGrandTotal] =
    useContext(CartContext);

  useEffect(() => {});

  return (
    <Fragment>
      <h3 className="WelcomeCart">Bienvenida/o al carrito de compras</h3>
      <div>
        {products.length >= 1 ? (
          products.map((product) => (
            <div>
              <p>Producto: {product.title}</p>
              {/* <img src={product.image} alt={product.title} /> */}
              <p>Cantidad:{product.quantity}</p>
              <button onClick={delProduct}>Eliminar producto</button>
            </div>
          ))
        ) : (
          <h2 className="messajeCart">
            Aún no hay productos en el carrito, ve al inicio{" "}
            <Link to="/" value="inicio">
              Inicio
            </Link>{" "}
            para agregar productos
          </h2>
        )}
      </div>
    </Fragment>
  );
};

// Falta mostrar imagen del producto en Cart, revisar el context...
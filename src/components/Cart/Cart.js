import React, { Fragment, useContext, useState } from "react";
import { CartContext } from "../../Context/Context";
import { Link } from "react-router-dom";
import "./Cart.scss";
import { getFirestore } from "../firebase/firebase";

export const Cart = () => {
  const [cart, productsCount, addProduct, delProduct, getGrandTotal] =
    useContext(CartContext);

  const buyOrder = () => {
    const db = getFirestore();
    const orders = db.collection("orders");
    const newOrder = {
      buyer: {
        name: "Alan",
        email: "mail@gmail.com",
        phone: "123456789",
      },
      item: cart.map((product) => ({
        id: product.id,
        title: product.title,
        price: product.price,
      })),
    };
    orders.add(newOrder);
    console.log(newOrder);
  };
  console.log(cart);

  return (
    <Fragment>
      <h3 className="WelcomeCart">Bienvenida/o al carrito de compras</h3>
      <div>
        {cart.length >= 1 ? (
          cart.map((product) => (
            <Fragment>
              <div>
                <p>Producto: {product.title}</p>
                <p>Cantidad:{product.quantity}</p>
                <p>Subtotal: {product.id * product.quantity}</p>
                <button onClick={delProduct}>Eliminar producto</button>
              </div>
              <div>{/* <h4>Precio total: {}</h4> */}</div>
              <button onClick={buyOrder}>Finalizar compra</button>

              {/* Formulario que recibe datos de comprador */}

              <form action="">
                {/* <input type="text" value={name}></input>
                <input type="email" value={email}></input>
                <input type="text" value={phone}></input> */}
              </form>
            </Fragment>
          ))
        ) : (
          <h2 className="messajeCart">
            Aún no hay productos en el carrito, ve al{" "}
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


//Revisar porque al llamar product.id muestra el precio, y al llamar product.price muestra el id

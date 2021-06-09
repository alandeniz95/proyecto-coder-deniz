import { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/cartContext";
import { getFirestore } from "../../firebase";
import { Input } from "../input/Input";
import firebase from "firebase/app";
import { CartItem } from "./CartItem";
import anthon from "../../images/anthon.svg";
import "./cart.scss";

export const Cart = () => {
  const { cart, clearCart, setCart } = useContext(CartContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [order, setOrder] = useState("");

  const handleFinishBuy = async () => {
    const db = getFirestore();
    const batch = db.batch();

    cart.forEach((item) => {
      const itemReference = db.collection("items").doc(item.id);
      batch.update(itemReference, { stock: item.stock - item.quantity });
    });

    setCart([]);
    orderCart();
  };

  const formFields = [
    {
      id: "name",
      label: "Nombre",
      value: form.name,
      type: "text",
    },
    {
      id: "email",
      label: "Correo Electrónico",
      value: form.email,
      type: "email",
    },
    {
      id: "phone",
      label: "Teléfono",
      value: form.phone,
      type: "text",
    },
  ];

  const { name, phone, email } = form;

  const solveForm = (id, value) => {
    const newForm = { ...form, [id]: value };
    setForm(newForm);
  };

  const handleShipping = (e) => {
    e.preventDefault();
    [name.trim(), email.trim(), phone.trim()].includes("") ? (
      alert("Completa los datos para continuar con la compra")
    ) : (
      handleFinishBuy()
    );
  };

  const orderCart = () => {
    const db = getFirestore();
    const ordersCollection = db.collection("orders");

    const items = cart.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
    }));

    const newOrder = {
      buyer: { name, email, phone },
      items: items,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
    };

    ordersCollection.add(newOrder).then(({ id }) => {
      setOrder(id);
    });
  };

  return (
    <section className="cart">
      <div className="container">
        <div className="row">
          {cart.length >= 1 ? (
            <Fragment>
              <div className=" col-lg-12 col-sm-12">
                <div className="cart-list-container">
                  <div className="row-cart-list">
                    <div className="items-head">
                      <div className="item-description">
                        {cart.length > 1 ? (
                          <h2>Detalles de los producto</h2>
                        ) : (
                          <h2>Detalles del producto</h2>
                        )}
                      </div>
                    </div>
                  </div>
                  {cart.map((props) => (
                    <CartItem props={props} />
                  ))}

                  <div className="row-cart-list">
                    {cart.length > 1 && (
                      <button
                        className="btn-danger btn-delProduct"
                        onClick={clearCart}
                      >
                        Eliminar todos los productos
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-sm-12">
                <form className="form">
                  <h3>Completa el formulario y nos pondremos en contacto</h3>
                  {formFields.map(({ id, label, value, type }) => (
                    <Input
                      key={id}
                      id={id}
                      label={label}
                      value={value}
                      type={type}
                      onChange={solveForm}
                    />
                  ))}
                </form>
                <div className="button-finish-container">
                  <button
                    className="btn-success"
                    type="submit"
                    onClick={(handleFinishBuy, handleShipping)}
                  >
                    Finalizar compra
                  </button>
                </div>
              </div>
            </Fragment>
          ) : (
            <div className="col-12">
              <div className="empty-cart-content">
                <div className="empty-cart-text">
                  <h2>
                    Anthon está esperando, agregá productos al carrito{" "}
                    <img className="anthon" src={anthon} alt="" />
                  </h2>
                </div>
                <div className="empty-cart-button">
                  <Link exact to="/category/products">
                    <button className="btn-info">
                      Ver todos los productos
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

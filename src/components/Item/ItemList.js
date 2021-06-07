import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/cartContext";
import { Item } from "./Item";
import { getFirestore } from "../../firebase";
import { Loading } from "../Loading/Loading";
import sad from "../../images/ansiedad.svg";

export const ItemList = () => {
  const [products, setProducts] = useState([]);
  const [thereProducts, setThereProducts] = useState(false);
  const [loader, setLoader] = useState(false);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    setLoader(true);
    const db = getFirestore();
    const itemCollection = db.collection("items");
    let filteredProd = [];

    products
      ? (filteredProd = itemCollection.where("stock", ">=", 1))
      : (filteredProd = itemCollection);

    filteredProd
      .get()
      .then((querySnapshot) => {
        querySnapshot.size === 0
          ? setThereProducts(true)
          : setProducts(
              querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            );
      })
      .catch((error) => console.error("Error en base de datos", error))
      .finally(() => setLoader(false));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {loader ? (
          <Loading />
        ) : (
          <h2 className="title-itemlist">Nuestros productos</h2>
        )}
      </div>
      <div className="row row-cols-lg-4 row-cols-sm-12">
        {thereProducts ? (
          <div className="empty-list">
            <h2>No tenemos productos para mostrar en este momento</h2>
            <img className="iconSad" src={sad} alt="iconSad" />
          </div>
        ) : (
          products.map((product, index) => (
            <Item
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              onAdd={() => addToCart(product)}
              key={index}
            />
          ))
        )}
      </div>
    </div>
  );
};

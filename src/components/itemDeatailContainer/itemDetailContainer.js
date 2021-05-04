import { ItemDetail } from "../itemDetail/itemDetail";
import { useState, useEffect } from "react";

export const ItemDetailContainer = (props) => {
  const [product, setProduct] = useState(false);
  const id = props.match.params.id;

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await fetch(
          `https://challenge-meli-backend.herokuapp.com/api/items?q=jardin/${id}`
        );
        const data = await res.json();
        setProduct(data.items);
      } catch (error) {
        console.error(error);
      }
    };
    getProduct();
  }, [id]);
  return (
    <div className="catalog">
      {product ? (
          <ItemDetail
            id={product.id}
            picture={product.picture}
            title={product.title}
            price={product.price}
            condition={product.condition}
          />
      ) : (
        <p>Cargando productos</p>
      )}
    </div>
  );
};

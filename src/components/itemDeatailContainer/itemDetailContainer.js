import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import "./itemDetailContainer.scss";
import { getFirestore } from "../firebase/firebase";

export const ItemDetailContainer = (props) => {
  const [item, setItem] = useState(false);
  const productId = props.match.params.id;

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const item = itemCollection.doc(productId);
    item
      .get()
      .then((doc) => {
        setItem({ id: doc.id, ...doc.data() });
      })
      .catch((error) =>
        console.error(
          "Error al cargar los productos desde la base de datos" + error
        )
      );
  }, [productId]);
  return (
    <div className="infoProduct">
      {item ? (
        <ItemDetail 
          title={item.title}
          price={item.price}
          id={item.id}
          image={item.image}
          description={item.description}
        />
      ) : (
        <p className="loading">Cargando producto...</p>
      )}
    </div>
  );
};

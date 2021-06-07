import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFirestore } from "../../firebase";
import { Loading } from "../Loading/Loading";

export const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("items");

    const item = itemCollection.doc(productId);
    item
      .get()
      .then((doc) => {
        setItem({ id: doc.id, ...doc.data() });
      })
      .catch((error) => console.error("Error en base de datos:", error))
      .finally(() => setLoading(false));
  }, [productId]);

  return (
    <div className="container">
      <div className="row">
        {loading ? <Loading /> : <ItemDetail props={item} />}
      </div>
    </div>
  );
};

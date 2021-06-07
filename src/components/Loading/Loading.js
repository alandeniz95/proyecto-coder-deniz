import "./loading.scss";
import loading from "../../images/loading.svg";

export const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading">
        <h2>Cargando</h2>
        <img src={loading} />
      </div>
    </div>
  );
};

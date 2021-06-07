import "./styles/notFound.scss";
import { Link } from "react-router-dom";
export const notFoundPage = () => {
  return (
    <div className="notFoundPage">
      <p>
        La página que esta intentado encontrar no existe, use la navegación a
        continuación para regresar a la página de inicio
      </p>
      <div className="btnToHome">
        <Link exact to="/">
          <button className="btn btn-primary">Inicio</button>
        </Link>
      </div>
    </div>
  );
};

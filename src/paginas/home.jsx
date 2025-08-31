import "../css/home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <h2 className="home-title">Bienvenido a la tienda</h2>
      <p className="home-subtitle">
        Explora nuestros productos y encuentra lo que necesitas
      </p>
      <Link to="/catalogo" className="home-button">
        Ver catálogo
      </Link>
    </div>
  );
}

export default Home;

import "../css/producto.css";

function producto({ nombre, precio, imagen }) {
  return (
    <div className="product-card">
      <img src={imagen} alt={nombre} className="product-image" />
      <h3 className="product-name">{nombre}</h3>
      <p className="product-price">Precio: ${precio}</p>
    </div>
  );
}
export default producto;

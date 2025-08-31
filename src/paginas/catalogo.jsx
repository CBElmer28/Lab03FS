import Product from "../componentes/producto";

function Catalogo() {
  const productos = [
    {
      nombre: 'Monitor 24"',
      precio: 450,
      imagen: "/imagenes/monitor.jpeg",
    },
    {
      nombre: "Teclado Mecánico",
      precio: 180,
      imagen: "../imagenes/teclado.jpeg",
    },
    {
      nombre: "SSD 1TB",
      precio: 320,
      imagen: "../imagenes/ssd.jpg",
    },
  ];

  return (
    <div className="catalogo-wrapper">
      <h2 className="catalogo-title">Catálogo de Productos</h2>
      <div className="catalogo-grid">
        {productos.map((p, i) => (
          <Product
            key={i}
            nombre={p.nombre}
            precio={p.precio}
            imagen={p.imagen}
          />
        ))}
      </div>
    </div>
  );
}

export default Catalogo;

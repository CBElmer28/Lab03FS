import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./componentes/navbar";
import Home from "./paginas/home";
import Catalogo from "./paginas/catalogo";
import Carrito from "./paginas/carrito";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </>
  );
}

export default App;

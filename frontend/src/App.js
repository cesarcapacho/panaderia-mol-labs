import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';// Importar componentes de React Router
import Home from './components/Home';
import InventoryList from './components/InventoryList';// Componente para listar inventarios

function App() {// Componente principal de la aplicación
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <Link className="navbar-brand" to="/">Panadería Mol Labs</Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/materias-primas">Materias Primas</Link>
            <Link className="nav-link" to="/productos-terminados">Productos Terminados</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/materias-primas" element={<InventoryList type="materias_primas" />} />
          <Route path="/productos-terminados" element={<InventoryList type="productos_terminados" />} />
        </Routes>
      </div>
    </Router>
  );// Fin del componente App se basa en un titulo y dos links para navegar entre las dos categorias de inventario
}

export default App;

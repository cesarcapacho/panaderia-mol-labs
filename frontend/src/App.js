import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import InventoryList from './components/InventoryList';

function App() {
  return (
    <Router>
      <div
        className="min-vh-100"
        style={{
          background: 'linear-gradient(135deg, #e3f0ff 0%, #b6d0ff 100%)',
        }}
      >
        <nav
          className="navbar navbar-expand-lg navbar-light shadow-sm mb-4 rounded justify-content-center"
          style={{
            backgroundColor: '#ffffffcc',
            backdropFilter: 'blur(6px)',
            border: '1px solid #b6d0ff',
          }}
        >
          <div className="w-100 d-flex justify-content-center">
            <Link
              className="navbar-brand fs-3 fw-bold mx-auto d-flex align-items-center gap-2"
              to="/"
              style={{
                color: '#1565c0',
                letterSpacing: '1px',
                textShadow: '0 2px 8px #b6d0ff55',
              }}
            >
              <i className="bi bi-shop me-2"></i>
              Panadería Mol Labs
            </Link>
          </div>
        </nav>
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/materias-primas" element={<InventoryList type="materias_primas" />} />
            <Route path="/productos-terminados" element={<InventoryList type="productos_terminados" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
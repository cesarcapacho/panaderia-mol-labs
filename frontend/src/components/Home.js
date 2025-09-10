import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center py-5 bg-light rounded">
      {" "}
      {/*  padding y fondo suave para llenar */}
      <h1 className="display-3 fw-bold mb-3" style={{ color: "black" }}>
        Panadería Mol Labs
      </h1>{" "}
      {/* Tipografía llamativa, bold */}
      <p className="lead mb-4" style={{ fontSize: "x-largue" }}>
        Bienvenido a nuestro sistema de gestión de inventarios. Administra
        fácilmente materias primas y productos terminados para mantener tu
        panadería organizada y eficiente.
      </p>
      <hr className="my-4 w-50 mx-auto" />{" "}
      {/* Separador para llenar visualmente */}
      <p className="mb-5">
        Explora las opciones a continuación para empezar. ¡Hornea con control
        total!
      </p>
      <div className="row justify-content-center">
        <div className="col-md-5 me-3 mb-3">
          <div className="card shadow-sm h-100 border-0 rounded overflow-hidden">
            {" "}
            {/* Bordes suaves, sombra ligera */}
            <img
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff"
              alt="Materias Primas"
              className="card-img-top"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">Materias Primas</h5>
              <p className="card-text">
                Gestiona harina, azúcar, agua y otros insumos esenciales.
              </p>
              <Link to="/materias-primas" className="btn btn-primary btn-lg">
                Ingresar
              </Link>{" "}
              {/* Botón más grande */}
            </div>
          </div>
        </div>
        <div className="col-md-5 mb-3">
          <div className="card shadow-sm h-100 border-0 rounded overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff"
              alt="Productos Terminados"
              className="card-img-top"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">Productos Terminados</h5>
              <p className="card-text">
                Administra panes, yogures, paquetes y productos listos para
                venta.
              </p>
              <Link
                to="/productos-terminados"
                className="btn btn-primary btn-lg"
              >
                Ingresar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React, { useState, useEffect } from "react";
import axios from "axios";

function InventoryList({ type }) {
  // Componente para listar y gestionar inventarios
  const [items, setItems] = useState([]); // Estado para los items del inventario
  const [formData, setFormData] = useState({ name: "", quantity: 0, unit: "" }); // Estado para el formulario
  const [editId, setEditId] = useState(null); // Estado para el ID del item que se está editando

  useEffect(() => {
    fetchItems();
  }, [type]); // Fetch items cuando el tipo cambia

  const fetchItems = async () => {
    const response = await axios.get("http://localhost:8001/api/inventories");
    setItems(response.data.filter((item) => item.type === type)); // Filtrar por tipo
  };

  const handleSubmit = async (e) => {
    // Manejar el envío del formulario
    e.preventDefault();
    if (editId) {
      // Si hay un editId, actualizar el item existente
      await axios.put(`http://localhost:8001/api/inventories/${editId}`, {
        ...formData,
        type,
      });
      setEditId(null); // Resetear editId después de actualizar
    } else {
      // Si no, crear un nuevo item
      await axios.post("http://localhost:8001/api/inventories", {
        ...formData,
        type,
      });
    }
    setFormData({ name: "", quantity: 0, unit: "" }); // Resetear el formulario
    fetchItems();
  };

  const handleEdit = (item) => {
    // Manejar la edición de un item
    setFormData({ name: item.name, quantity: item.quantity, unit: item.unit });
    setEditId(item.id); // Establecer el ID del item que se está editando
  };

  const handleDelete = async (id) => {
    // Manejar la eliminación de un item
    await axios.delete(`http://localhost:8001/api/inventories/${id}`);
    fetchItems(); // Refrescar la lista después de eliminar
  };

  return (
    // Renderizar el componente
    <div>
      <h2>
        {type === "materias_primas" // Si el tipo es materias_primas, mostrar "Materias Primas", si no, "Productos Terminados"
          ? "Materias Primas"
          : "Productos Terminados"}
      </h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })} // Actualizar el nombre en el estado del formulario
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Cantidad"
            value={formData.quantity} // Actualizar la cantidad en el estado del formulario
            onChange={(e) =>
              setFormData({ ...formData, quantity: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Unidad (ej. kg, unidades)"
            value={formData.unit}
            onChange={(e) => setFormData({ ...formData, unit: e.target.value })} // Actualizar la unidad en el estado del formulario
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {editId ? "Actualizar" : "Agregar"}
        </button>
      </form>
      <table className="table">
        // Tabla para mostrar los items del inventario
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Unidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {items.map(
            (
              item // Mapear los items para mostrarlos en la tabla
            ) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.unit}</td>
                <td>
                  <button
                    className="btn btn-warning me-2"
                    onClick={() => handleEdit(item)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default InventoryList;
// Componente para listar y gestionar inventarios de materias primas y productos terminados
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function InventoryList({ type }) {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({ name: '', quantity: 0, unit: '' });
  const [editId, setEditId] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchItems();
  }, [type]);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/inventories');
      setItems(response.data.filter(item => item.type === type));
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio';
    if (!formData.quantity || formData.quantity < 0) newErrors.quantity = 'La cantidad debe ser 0 o mayor';
    if (!formData.unit.trim()) newErrors.unit = 'La unidad es obligatoria';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      if (editId) {
        await axios.put(`http://localhost:8000/api/inventories/${editId}`, { ...formData, type });
        setEditId(null);
      } else {
        await axios.post(`http://localhost:8000/api/inventories`, { ...formData, type });
      }
      setFormData({ name: '', quantity: 0, unit: '' });
      setErrors({});
      fetchItems();
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setErrors(error.response.data.errors || {});
      }
    }
  };

  const handleEdit = (item) => {
    setFormData({ name: item.name, quantity: item.quantity, unit: item.unit });
    setEditId(item.id);
    setErrors({});
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/inventories/${id}`);
      fetchItems();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div className="card shadow-sm p-4">
      <h2 className="mb-4">{type === 'materias_primas' ? 'Materias Primas' : 'Productos Terminados'}</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row">
          <div className="col-md-4 mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              placeholder="Ej. Harina"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">Cantidad</label>
            <input
              type="number"
              className={`form-control ${errors.quantity ? 'is-invalid' : ''}`}
              placeholder="Ej. 10.5"
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              min="0"
              step="0.1"
              required
            />
            {errors.quantity && <div className="invalid-feedback">{errors.quantity}</div>}
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">Unidad</label>
            <input
              type="text"
              className={`form-control ${errors.unit ? 'is-invalid' : ''}`}
              placeholder="Ej. kg"
              value={formData.unit}
              onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
              required
            />
            {errors.unit && <div className="invalid-feedback">{errors.unit}</div>}
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-success"
          disabled={!formData.name.trim() || !formData.unit.trim() || formData.quantity < 0}
        >
          {editId ? 'Actualizar' : 'Agregar'}
        </button>
        {editId && (
          <button
            type="button"
            className="btn btn-secondary ms-2"
            onClick={() => {
              setEditId(null);
              setFormData({ name: '', quantity: 0, unit: '' });
              setErrors({});
            }}
          >
            Cancelar
          </button>
        )}
      </form>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Unidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
            items.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.unit}</td>
                <td>
                  <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(item)}>
                    Editar
                  </button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No hay ítems disponibles
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default InventoryList;

/*Agregamos un estado errors para manejar mensajes de error.
La función validateForm verifica que los campos no estén vacíos y que quantity sea no negativa antes de enviar.
El botón de enviar se deshabilita (disabled) si los campos no son válidos.
Mostramos mensajes de error con la clase is-invalid de Bootstrap.
Capturamos errores 422 del backend y mostramos los mensajes de validación.
Agregamos manejo de errores con try/catch para las peticiones.*/
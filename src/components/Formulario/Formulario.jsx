import React, { useState } from 'react';
import Card from '../Card';

const Formulario = ({ setUserEmail }) => {
  const [mostrarResumen, setMostrarResumen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    urlFoto: '',
    edad: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Actualiza el email en el componente Head
    setUserEmail(formData.email);
    setMostrarResumen(true);
  };

  const clearItems = () =>{
    setFormData({
      nombre: '',
      email: '',
      urlFoto: '',
      edad: '',
    }); 
    setMostrarResumen(false)
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="urlFoto">URL de la Foto:</label>
        <input type="url" id="urlFoto" name="urlFoto" value={formData.urlFoto} onChange={handleChange} required />

        <label htmlFor="edad">Edad:</label>
        <input type="number" id="edad" name="edad" value={formData.edad} onChange={handleChange} required />

        <button type="submit">Enviar</button>
      </form>

      <button onClick={clearItems}>Limpiar</button>

      
      {mostrarResumen && formData.email && (
        <div>
          <h2>Resumen de Datos</h2>
          <p><strong>Nombre:</strong> {formData.nombre}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Edad:</strong> {formData.edad}</p>
          <img src={formData.urlFoto} alt="userImage"  />
        </div>
      )}
    </section>
  );
};

export default Formulario;
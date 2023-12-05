import React, { useState, useContext } from 'react';
import { UserContext } from '../../../context/UserContext';
import Card from '../Card';

const Formulario = () => {
  const { updateUserData } = useContext(UserContext);

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
    updateUserData(formData.email);
    setMostrarResumen(true);
  };

  const clearItems = () => {
    setFormData({
      nombre: '',
      email: '',
      urlFoto: '',
      edad: '',
    });
    setMostrarResumen(false);
  };

  return (
    <UserContext.Provider value={formData}>
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

        {mostrarResumen && formData.email && <Card />}
      </section>
    </UserContext.Provider>
  );
};

export default Formulario;

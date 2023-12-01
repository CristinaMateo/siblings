import React from 'react';

const Card = ({ userData }) => {
  return (
    <article>
      <h2>Datos del Usuario</h2>
      <p><strong>Nombre:</strong> {userData.nombre}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>Edad:</strong> {userData.edad}</p>
      <img src={userData.urlFoto} alt="userImage"  />
    </article>
  );
};

export default Card;

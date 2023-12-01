import React, { useContext } from 'react';
import { UserContext } from '../../App';

const Head = () => {
  const userEmail = useContext(UserContext);

  return (
    <section>
      <h2>Email del Usuario: {userEmail}</h2>
    </section>
  );
};

export default Head;


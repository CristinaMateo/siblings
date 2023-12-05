import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Header = () => {
  const { userData } = useContext(UserContext);

  return (
    <>
      {userData ? (
        <>
          <p>Welcome, {userData}</p>
        </>
      ) : (
        <p>Introduce tus datos de usuario</p>
      )}
    </>
  );
};

export default Header;

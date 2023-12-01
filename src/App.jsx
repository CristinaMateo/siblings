import React, { createContext, useState } from 'react';
import Head from './components/Head';
import Formulario from './components/Formulario';

// Crear un contexto para el email del usuario
export const UserContext = createContext();

const App = () => {
  const [userEmail, setUserEmail] = useState('');

  return (
    <UserContext.Provider value={userEmail}>
        <Head />
        <Formulario setUserEmail={setUserEmail} />
    </UserContext.Provider>
  );
};

export default App;

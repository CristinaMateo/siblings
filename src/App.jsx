import React, { useState } from 'react';
import { UserContext } from "./context/UserContext";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [userData, setUserData] = useState("");

  const updateUserData = (newUserData) => {
    setUserData(newUserData);
  };

  const userContextValue = { userData, updateUserData };

  return (
    <>
      <UserContext.Provider value={userContextValue}>
        <Header />
        <Main />
      </UserContext.Provider>
      <Footer />
    </>
  );
}

export default App;

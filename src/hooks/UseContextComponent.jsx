import React, { createContext, useState } from 'react';
import Navbar from '../components/Navbar';
import Page from '../components/Page';

export const LoginContext = createContext();

const UseContextComponent = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <LoginContext.Provider value={[isLogin, setIsLogin]}>
      <Navbar />
      <Page />
    </LoginContext.Provider>
  );
};

export default UseContextComponent;

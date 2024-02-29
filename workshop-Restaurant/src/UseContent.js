// MyContext.js
import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [someData, setSomeData] = useState('Default Data');

  const contextValue = {
    someData,
    setSomeData,
    // Други данни и функции, които искате да предоставите в контекста
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error('useMyContext трябва да се използва вътре в MyProvider');
  }

  return context;
};
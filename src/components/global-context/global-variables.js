import React, { createContext, useContext } from "react";

const GlobalVarContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");

  return (
    <GlobalVarContext.Provider value={{ token }}>
      {children}
    </GlobalVarContext.Provider>
  );
};

const useGlobalVarContext = () => useContext(GlobalVarContext);

export { useGlobalVarContext, GlobalContextProvider };

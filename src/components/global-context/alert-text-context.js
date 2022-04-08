import React from "react";
import { useContext, createContext, useState } from "react";

const AlertTextContext = createContext();

const AlertTextContextProvider = ({ children }) => {
  const [alertText, setAlertText] = useState({
    isActive: false,
    alertType: "",
    message: "",
  });
  return (
    <AlertTextContext.Provider value={{ alertText, setAlertText }}>
      {children}
    </AlertTextContext.Provider>
  );
};

const useAlertTextContext = () => useContext(AlertTextContext);

export { AlertTextContextProvider, useAlertTextContext };

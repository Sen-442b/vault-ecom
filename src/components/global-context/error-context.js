import React, { createContext, useContext, useState } from "react";

const ErrorContext = createContext();

const ErrorContextProvider = ({ children }) => {
  const [error, setError] = useState({
    hasError: false,
    message: "",
  });
  return (
    <ErrorContext.Provider value={{ error, setError }}>
      {children}
    </ErrorContext.Provider>
  );
};

const useErrorContext = () => useContext(ErrorContext);

export { ErrorContextProvider, useErrorContext };

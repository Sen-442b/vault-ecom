import React, { useState, createContext, useEffect, useContext } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  const getEncToken = () => {
    const hasEncToken =
      localStorage.getItem("token") || sessionStorage.getItem("token");

    hasEncToken ? setIsUserAuthenticated(true) : setIsUserAuthenticated(false);
  };

  useEffect(getEncToken, [isUserAuthenticated]);
  return (
    <AuthContext.Provider
      value={{ isUserAuthenticated, setIsUserAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};
const useAuthContext = () => useContext(AuthContext);
export { AuthContextProvider, useAuthContext };

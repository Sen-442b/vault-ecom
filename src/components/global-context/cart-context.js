import axios from "axios";
import React, { useEffect, createContext, useContext, useReducer } from "react";
import { useAuthContext } from "./auth-context";
import { useGlobalVarContext } from "./global-variables";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "GET_CARTLIST":
      return { ...state, cartlist: action.payload };

    default:
      break;
  }
};

const CartContextProvider = ({ children }) => {
  const { token } = useGlobalVarContext();
  const [state, dispatch] = useReducer(cartReducer, { cartlist: [] });
  const { isUserAuthenticated } = useAuthContext();
  const getCartlist = async (encToken) => {
    try {
      if (encToken) {
        const response = await axios.get("/api/user/cart", {
          headers: { authorization: encToken },
        });

        dispatch({ type: "GET_CARTLIST", payload: response.data.cart });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => getCartlist(token), [token]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartlistContext = () => useContext(CartContext);

export { CartContextProvider, useCartlistContext };

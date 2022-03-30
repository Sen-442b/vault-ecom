import axios from "axios";
import React, { useEffect, createContext, useContext, useReducer } from "react";
import { useGlobalVarContext } from "./global-variables";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "GET_CARTLIST":
      console.log(action.payload, "see if added");
      return { ...state, cartlist: action.payload };

    default:
      break;
  }
};

const CartContextProvider = ({ children }) => {
  const { token } = useGlobalVarContext();
  const [state, dispatch] = useReducer(cartReducer, { cartlist: [] });
  const getCartlist = async (encToken) => {
    try {
      const response = await axios.get("/api/user/cart", {
        headers: { authorization: encToken },
      });
      console.log(response, "check if successful");
      dispatch({ type: "GET_CARTLIST", payload: response.data.cart });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => getCartlist(token), []);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartlistContext = () => useContext(CartContext);

export { CartContextProvider, useCartlistContext };

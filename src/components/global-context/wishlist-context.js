import axios from "axios";
import React from "react";
import { createContext, useContext, useReducer, useEffect } from "react";
import {
  addToWishlistService,
  removeFromWishlistService,
} from "../../services/wishlist-services";
import { useAuthContext } from "./auth-context";
import { useGlobalVarContext } from "./global-variables";

const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "GET_WISHLIST":
      return { ...state, wishlist: action.payload };
  }
};

const WishlistContext = createContext();

const WishlistContextProvider = ({ children }) => {
  const { isUserAuthenticated } = useAuthContext();
  const { token } = useGlobalVarContext();

  const [state, dispatch] = useReducer(wishlistReducer, { wishlist: [] });

  const getWishlist = async (encToken) => {
    if (encToken) {
      const response = await axios.get("/api/user/wishlist", {
        headers: {
          authorization: token,
        },
      });

      dispatch({ type: "GET_WISHLIST", payload: response.data.wishlist });
    }
  };

  useEffect(() => getWishlist(token), [token]);

  return (
    <WishlistContext.Provider value={{ state, dispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlistContext = () => useContext(WishlistContext);

export { WishlistContextProvider, useWishlistContext };

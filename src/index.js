import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductContextProvider } from "./components/global-context/product-context";
import { AuthContextProvider } from "./components/global-context/auth-context";
import { WishlistContextProvider } from "./components/global-context/wishlist-context";
import { GlobalContextProvider } from "./components/global-context/global-variables";
import { CartContextProvider } from "./components/global-context/cart-context";
import { ErrorContextProvider } from "./components/global-context/error-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <GlobalContextProvider>
          <ErrorContextProvider>
            <ProductContextProvider>
              <WishlistContextProvider>
                <CartContextProvider>
                  <App />
                </CartContextProvider>
              </WishlistContextProvider>
            </ProductContextProvider>
          </ErrorContextProvider>
        </GlobalContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

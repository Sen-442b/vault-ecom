import MockmanEs from "mockman-js";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./global-context/auth-context";
import Cart from "./screens/Cart/Cart";

import Home from "./screens/Home/Home";
import LogIn from "./screens/LogIn/LogIn";
import LogOut from "./screens/LogOut/LogOut";
import NotFound from "./screens/NotFound/NotFound";
import Products from "./screens/Products/Products";
import SignUp from "./screens/SignUp/SignUp";
import Wishlist from "./screens/Wishlist/Wishlist";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/products" element={<Products />} /> {/*Courses*/}
      <Route path="/mock" element={<MockmanEs />} />
      <Route
        path="/sign-up"
        element={
          <PublicRoutes>
            <SignUp />
          </PublicRoutes>
        }
      />
      <Route
        path="/log-in"
        element={
          <PublicRoutes>
            <LogIn />
          </PublicRoutes>
        }
      />
      <Route
        path="/cart"
        element={
          <PrivateRoutes>
            <Cart />
          </PrivateRoutes>
        }
      />
      <Route
        path="/wishlist"
        element={
          <PrivateRoutes>
            <Wishlist />
          </PrivateRoutes>
        }
      />
      <Route path="/log-out" element={<LogOut />} />
    </Routes>
  );
};

export default MyRoutes;

function PrivateRoutes({ children }) {
  const { isUserAuthenticated } = useAuthContext();
  return isUserAuthenticated ? children : <Navigate to="/log-in" />;
}

function PublicRoutes({ children }) {
  const { isUserAuthenticated } = useAuthContext();
  return isUserAuthenticated ? <Navigate to={-1} /> : children;
}

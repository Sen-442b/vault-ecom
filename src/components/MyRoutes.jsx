import MockmanEs from "mockman-js";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./screens/Home/Cart/Cart";

import Home from "./screens/Home/Home";
import LogIn from "./screens/LogIn/LogIn";
import LogOut from "./screens/LogOut/LogOut";
import Products from "./screens/Products/Products";
import SignUp from "./screens/SignUp/SignUp";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/mock" element={<MockmanEs />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/log-in" element={<LogIn />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/log-out" element={<LogOut />} />
    </Routes>
  );
};

export default MyRoutes;

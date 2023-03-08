import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../components/views/Home";
import Products from "../components/views/Products";
import ProductDetails from "../components/views/ProductDetails";
import NotFound from "../components/views/NotFound";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="product/:id" element={<ProductDetails/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default Router;

import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Categories from "./pages/categories/index";
import Products from "./pages/products/index";
import Assets from "./pages/productAssets/index";
import CreateProduct from "./pages/products/create";
import EditProduct from "./pages/products/edit";
import CreateAssts from "./pages/productAssets/create";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/products/create" element={<CreateProduct />} />
          <Route path="/products/:id/edit" element={<EditProduct />} />
          <Route path="/assets/create" element={<CreateAssts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

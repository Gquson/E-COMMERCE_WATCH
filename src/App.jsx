import React from "react";
import {HashRouter as Router, Routes, Route } from "react-router-dom";
import AppProvider from "./context/AppProvider";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900">
        <Router>
          <Navbar/>
          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/products" element={<Products/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/checkout" element={<Checkout/>}/>
              <Route path="/order-success" element={<OrderSuccess/>}/>
            </Routes>
          </main>
        </Router>
      </div>
    </AppProvider>
  );
}

export default App;
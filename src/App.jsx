import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppProvider from "./context/AppProvider";
import Navbar from "./components/Navbar";
import Products from "./Pages/Products";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import About from "./Pages/About";
import Checkout from "./Pages/Checkout";
import OrderSuccess from "./Pages/OrderSuccess";

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
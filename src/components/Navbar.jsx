import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useApp } from "../hooks/useApp";

const Navbar = () => {
  const location = useLocation();
  const { getCartItemsCount } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cartItemsCount = getCartItemsCount();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Collection" },
    { path: "/cart", label: "My Cart", showCount: true },
    { path: "/about", label: "Heritage" },
  ];

  const isActivePath = (path) => location.pathname === path;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md shadow-2xl shadow-yellow-500/20 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold text-yellow-500 font-serif tracking-wider transition-transform hover:scale-105 flex items-center space-x-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="text-3xl border-2 rounded-full ">RL</span>
            <span className="hidden sm:block mx-3">Royal Legacy</span>
          </Link>

          <nav className="hidden md:flex space-x-6 lg:space-x-8 xl:space-x-12 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-medium transition-all duration-300 flex items-center space-x-1 ${
                  isActivePath(item.path)
                    ? "text-yellow-500 font-semibold"
                    : "text-gray-300 hover:text-yellow-400"
                } group`}
              >
                <span>{item.label}</span>
                {item.showCount && cartItemsCount > 0 && (
                  <span className="bg-yellow-500 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold min-w-5">
                    {cartItemsCount}
                  </span>
                )}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full ${
                    isActivePath(item.path) ? "w-full" : ""
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden text-yellow-500 text-2xl p-2 transition-transform hover:scale-110"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-yellow-500/20 animate-slide-down">
          <nav className="flex flex-col space-y-4 p-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-all duration-300 flex items-center justify-between p-3 rounded-lg ${
                  isActivePath(item.path)
                    ? "text-yellow-500 font-semibold bg-yellow-500/10"
                    : "text-gray-300 hover:text-yellow-400 hover:bg-yellow-500/5"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>{item.label}</span>
                {item.showCount && cartItemsCount > 0 && (
                  <span className="bg-yellow-500 text-black text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                    {cartItemsCount}
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

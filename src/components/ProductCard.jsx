import React, { useState } from "react";
import { useApp } from "../hooks/useApp";

const ProductCard = ({ product }) => {
  const {
    addToCart,
    addToFavorites,
    removeFromFavorites,
    isInFavorites,
    cart,
  } = useApp();
  const [isHovered, setIsHovered] = useState(false);

  const isInCart = cart.some((item) => item.id === product.id);
  const isFavorite = isInFavorites(product.id);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleFavoriteToggle = (e) => {
    e.stopPropagation();
    if (isFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product.id);
    }
  };

  const handleQuickView = (e) => {
    e.stopPropagation();
    alert(
      `Quick view: ${product.title}\n\nFeatures: ${
        product.features
      }\nPrice: $${product.amount.toLocaleString()}`
    );
  };

  const handleProductClick = () => {
    alert(
      `Product details for: ${product.title}\n\nWe would show detailed product information here with more images and specifications.`
    );
  };

  return (
    <div
      className="relative bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-yellow-500/20 hover:scale-105 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleProductClick}
    >
      {!product.inStock && (
        <div className="absolute inset-0 bg-black/60 z-10 flex items-center justify-center">
          <span className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold text-sm">
            Out of Stock
          </span>
        </div>
      )}

      <div className="h-48 sm:h-56 lg:h-64 overflow-hidden relative">
        <img
          src={product.image}
          alt={product.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/400x400/1a1a1a/cccccc?text=Watch+Image";
          }}
        />
        <div
          className={`absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        <div
          className={`absolute top-3 right-3 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
          }`}
        >
          <button
            onClick={handleFavoriteToggle}
            className={`rounded-full p-2 mx-5 shadow-lg transition-all duration-300 hover:scale-110 mb-2 ${
              isFavorite
                ? "bg-red-500 text-white"
                : "bg-white/90 hover:bg-white text-gray-800"
            }`}
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
          >
            {isFavorite ? " ❤️ " : " ♡ "}
          </button>
          <button
            onClick={handleQuickView}
            className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Quick view"
          >
            👁
          </button>
        </div>

        <div className="absolute bottom-3 left-3 bg-black/70 rounded-full px-3 py-1 text-yellow-400 text-sm font-semibold flex items-center space-x-1">
          <span>⭐</span>
          <span>{product.rating}</span>
        </div>
      </div>

      <div className="p-4 sm:p-6 bg-linear-to-b from-gray-800 to-gray-900">
        <h3 className="text-lg sm:text-xl font-serif font-semibold text-white mb-2 line-clamp-1">
          {product.title}
        </h3>
        <p className="text-gray-400 mb-3 text-sm line-clamp-2 min-h-10">
          {product.features}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl sm:text-2xl font-bold text-yellow-500">
            ${product.amount.toLocaleString()}
          </span>
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`px-4 sm:px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base ${
              isInCart
                ? "bg-green-600 text-white hover:bg-green-700"
                : !product.inStock
                ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                : "bg-yellow-600 hover:bg-yellow-700 text-white"
            }`}
          >
            {isInCart
              ? "Added ✓"
              : !product.inStock
              ? "Out of Stock"
              : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

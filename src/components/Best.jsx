import React, { useState, useEffect } from "react";
import { useApp } from "../hooks/useApp";

const Best = () => {
  const { products, addToCart } = useApp();
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredProducts = products.slice(0, 5).map((product, index) => ({
    ...product,
    discount: 30 - index * 5, // 30%, 25%, 20%, etc.
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [featuredProducts.length]);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <section className="py-20 bg-linear-to-b from-yellow-900/20 to-yellow-800/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-yellow-500 mb-4">
            CROWN JEWELS COLLECTION
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Exclusive timepieces crafted for royalty. Limited offers on our most
            prestigious collections.
          </p>
        </div>

        <div className="relative">
          <div className="scrollbar-hide overflow-x-auto py-8">
            <div className="flex space-x-8 min-w-max px-8">
              {featuredProducts.map((product) => (
                <div key={product.id} className="shrink-0 w-80">
                  <div className="relative group bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-yellow-500/20">
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-linear-to-r from-yellow-600 to-yellow-800 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                        {product.discount}% OFF
                      </span>
                    </div>

                    <div className="h-64 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/400x400/1a1a1a/cccccc?text=Watch+Image";
                        }}
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="p-6 bg-linear-to-b from-gray-800 to-gray-900">
                      <h3 className="text-xl font-serif font-semibold text-white mb-2">
                        {product.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-yellow-500">
                            ${product.amount}
                          </span>
                          <span className="ml-2 text-sm text-gray-400 line-through">
                            $
                            {Math.round(
                              product.amount / (1 - product.discount / 100)
                            )}
                          </span>
                        </div>
                        <button
                          onClick={() => handleAddToCart(product)}
                          disabled={!product.inStock}
                          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                            !product.inStock
                              ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                              : "bg-yellow-600 hover:bg-yellow-700 text-white"
                          }`}
                        >
                          {!product.inStock ? "Out of Stock" : "Add to Cart"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10 hidden md:block"
            onClick={() =>
              setCurrentSlide(
                (prev) =>
                  (prev - 1 + featuredProducts.length) % featuredProducts.length
              )
            }
          >
            ←
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10 hidden md:block"
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % featuredProducts.length)
            }
          >
            →
          </button>
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {featuredProducts.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-yellow-600 w-8" : "bg-yellow-300"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Best;

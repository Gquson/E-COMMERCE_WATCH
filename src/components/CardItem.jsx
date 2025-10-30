import React from "react";
import { useApp } from "../hooks/useApp";

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useApp();

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) return;
    updateQuantity(item.id, newQuantity);
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  const totalPrice = item.amount * item.quantity;

  return (
    <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-yellow-500/20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <div className="md:col-span-1">
          <div className="rounded-xl overflow-hidden bg-linear-to-br from-yellow-900/30 to-yellow-800/30 p-6">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-lg"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/400x400/1a1a1a/cccccc?text=Watch+Image";
              }}
            />
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-serif font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 mb-2">{item.features}</p>
              <p className="text-yellow-500 text-lg font-semibold">
                ${item.amount.toLocaleString()} each
              </p>
            </div>
            <button
              onClick={handleRemove}
              className="text-red-500 hover:text-red-400 text-xl font-bold transition-colors duration-300"
              aria-label="Remove item"
            >
              ×
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-gray-300">Quantity:</span>
              <div className="flex items-center space-x-3 bg-gray-700 rounded-full px-4 py-2">
                <button
                  onClick={() => handleQuantityChange(item.quantity - 1)}
                  className="w-8 h-8 rounded-full bg-yellow-600 text-white flex items-center justify-center transition-all duration-300 hover:bg-yellow-700 hover:scale-110"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="text-lg font-semibold text-white min-w-8 text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(item.quantity + 1)}
                  className="w-8 h-8 rounded-full bg-yellow-600 text-white flex items-center justify-center transition-all duration-300 hover:bg-yellow-700 hover:scale-110"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            <div className="text-right">
              <div className="text-2xl font-bold text-yellow-500">
                ${totalPrice.toLocaleString()}
              </div>
              <div className="text-sm text-gray-400">
                {item.quantity} × ${item.amount.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

import React from "react";
import { useApp } from "../hooks/useApp";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CardItem";

const Cart = () => {
  const { cart, getCartTotal, clearCart } = useApp();
  const navigate = useNavigate();

  const subtotal = getCartTotal();
  const shipping = subtotal > 0 ? 0 : 0;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  if (cart.length === 0) {
    return (
      <div className="pt-24 min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">🛒</div>
          <h1 className="text-4xl font-serif font-bold text-yellow-500 mb-4">
            YOUR CART IS EMPTY
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Discover our royal collection and add some timeless pieces to your
            cart
          </p>
          <button
            onClick={() => navigate("/products")}
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore Collection
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-yellow-500 mb-8 text-center">
          YOUR ROYAL COLLECTION
        </h1>
        <p className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Review your selected timepieces and proceed to secure your legacy
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}

            <div className="flex justify-end">
              <button
                onClick={clearCart}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Clear Entire Cart
              </button>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 h-fit sticky top-24">
            <h2 className="text-2xl font-serif font-semibold text-yellow-500 mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-lg">
                <span className="text-gray-300">Subtotal</span>
                <span className="font-semibold text-white">
                  ${subtotal.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-lg">
                <span className="text-gray-300">Shipping</span>
                <span className="font-semibold text-green-500">FREE</span>
              </div>
              <div className="flex justify-between text-lg">
                <span className="text-gray-300">Tax (10%)</span>
                <span className="font-semibold text-white">
                  ${tax.toLocaleString()}
                </span>
              </div>
              <div className="border-t border-yellow-500/30 pt-4">
                <div className="flex justify-between text-xl font-bold">
                  <span className="text-yellow-500">Total</span>
                  <span className="text-yellow-500">
                    ${total.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-4"
            >
              PROCEED TO CHECKOUT
            </button>

            <button
              onClick={() => navigate("/products")}
              className="w-full bg-gray-700 hover:bg-gray-600 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              CONTINUE SHOPPING
            </button>

            <div className="mt-6 pt-6 border-t border-yellow-500/30">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="text-yellow-500">
                  <div className="text-2xl">🔒</div>
                  <div className="text-xs text-gray-400 mt-1">
                    Secure Payment
                  </div>
                </div>
                <div className="text-yellow-500">
                  <div className="text-2xl">🚚</div>
                  <div className="text-xs text-gray-400 mt-1">
                    Free Shipping
                  </div>
                </div>
                <div className="text-yellow-500">
                  <div className="text-2xl">↩️</div>
                  <div className="text-xs text-gray-400 mt-1">
                    30-Day Return
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

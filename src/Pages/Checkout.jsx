import React, { useState } from "react";
import { useApp } from "../hooks/useApp";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, getCartTotal, placeOrder } = useApp();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  });

  const subtotal = getCartTotal();
  const shipping = 0;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      id: Date.now(),
      items: cart,
      total,
      customerInfo: formData,
      orderDate: new Date().toISOString(),
      status: "confirmed",
    };

    placeOrder(order);
    navigate("/order-success", { state: { order } });
  };

  if (cart.length === 0) {
    return (
      <div className="pt-24 min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-bold text-yellow-500 mb-4">
            NO ITEMS TO CHECKOUT
          </h1>
          <button
            onClick={() => navigate("/products")}
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-yellow-500 mb-8 text-center">
          SECURE CHECKOUT
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-serif font-semibold text-yellow-500 mb-6">
                Shipping Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-700 border border-yellow-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-700 border border-yellow-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-700 border border-yellow-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-700 border border-yellow-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-gray-300 mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-700 border border-yellow-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors duration-300"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-gray-300 mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-700 border border-yellow-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">ZIP Code</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-700 border border-yellow-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors duration-300"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-serif font-semibold text-yellow-500 mb-6">
                Payment Information
              </h2>

              <div className="mb-4">
                <label className="block text-gray-300 mb-2">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="1234 5678 9012 3456"
                  required
                  className="w-full bg-gray-700 border border-yellow-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors duration-300"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                    required
                    className="w-full bg-gray-700 border border-yellow-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    placeholder="123"
                    required
                    className="w-full bg-gray-700 border border-yellow-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-gray-300 mb-2">Name on Card</label>
                <input
                  type="text"
                  name="nameOnCard"
                  value={formData.nameOnCard}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-700 border border-yellow-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors duration-300"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 sticky top-24">
              <h2 className="text-2xl font-serif font-semibold text-yellow-500 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center"
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div>
                        <div className="text-white font-semibold text-sm">
                          {item.title}
                        </div>
                        <div className="text-gray-400 text-xs">
                          Qty: {item.quantity}
                        </div>
                      </div>
                    </div>
                    <div className="text-yellow-500 font-semibold">
                      ${(item.amount * item.quantity).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Shipping</span>
                  <span className="text-green-500">FREE</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Tax (10%)</span>
                  <span>${tax.toLocaleString()}</span>
                </div>
                <div className="border-t border-yellow-500/30 pt-3">
                  <div className="flex justify-between text-xl font-bold">
                    <span className="text-yellow-500">Total</span>
                    <span className="text-yellow-500">
                      ${total.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-4"
              >
                PLACE ORDER - ${total.toLocaleString()}
              </button>

              <div className="text-center text-gray-400 text-sm">
                <div className="flex justify-center space-x-4 mb-2">
                  <span>🔒 Secure</span>
                  <span>🛡️ Protected</span>
                  <span>✓ Verified</span>
                </div>
                Your payment information is encrypted and secure
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;

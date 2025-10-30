import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useApp } from "../hooks/useApp";

const OrderSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orders } = useApp();

  const order = location.state?.order || orders[orders.length - 1];

  if (!order) {
    return (
      <div className="pt-24 min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-bold text-yellow-500 mb-4">
            ORDER NOT FOUND
          </h1>
          <button
            onClick={() => navigate("/")}
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl text-white">✓</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-yellow-500 mb-4">
            ORDER CONFIRMED!
          </h1>
          <p className="text-xl text-gray-300 mb-2">
            Thank you for your purchase
          </p>
          <p className="text-gray-400">
            Order #:{" "}
            <span className="text-yellow-500 font-mono">{order.id}</span>
          </p>
        </div>

        <div className="bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-serif font-semibold text-yellow-500 mb-6 text-center">
            Order Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Shipping Information
              </h3>
              <div className="text-gray-300 space-y-2">
                <p>
                  {order.customerInfo.firstName} {order.customerInfo.lastName}
                </p>
                <p>{order.customerInfo.email}</p>
                <p>{order.customerInfo.phone}</p>
                <p>{order.customerInfo.address}</p>
                <p>
                  {order.customerInfo.city}, {order.customerInfo.zipCode}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Order Summary
              </h3>
              <div className="space-y-3">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between text-gray-300"
                  >
                    <span>
                      {item.title} × {item.quantity}
                    </span>
                    <span>
                      ${(item.amount * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
                <div className="border-t border-yellow-500/30 pt-3">
                  <div className="flex justify-between text-xl font-bold">
                    <span className="text-yellow-500">Total</span>
                    <span className="text-yellow-500">
                      ${order.total.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-serif font-semibold text-yellow-500 mb-6 text-center">
            What's Next?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="text-white font-semibold mb-2">
                Order Confirmation
              </h3>
              <p className="text-gray-400 text-sm">
                You'll receive an email confirmation with your order details
              </p>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-3">🚚</div>
              <h3 className="text-white font-semibold mb-2">Shipping</h3>
              <p className="text-gray-400 text-sm">
                Your order will be shipped within 2-3 business days
              </p>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="text-white font-semibold mb-2">Support</h3>
              <p className="text-gray-400 text-sm">
                Need help? Contact our customer support team
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/products")}
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Continue Shopping
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Return Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;

import React, { useReducer } from "react";
import { AppContext, initialState, appReducer } from "./AppContext";

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;
    dispatch({ type: "UPDATE_QUANTITY", payload: { id: productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const addToFavorites = (productId) => {
    dispatch({ type: "ADD_TO_FAVORITES", payload: productId });
  };

  const removeFromFavorites = (productId) => {
    dispatch({ type: "REMOVE_FROM_FAVORITES", payload: productId });
  };

  const setSearchTerm = (term) => {
    dispatch({ type: "SET_SEARCH_TERM", payload: term });
  };

  const setSortOption = (option) => {
    dispatch({ type: "SET_SORT_OPTION", payload: option });
  };

  const setFilterCategory = (category) => {
    dispatch({ type: "SET_FILTER_CATEGORY", payload: category });
  };

  const placeOrder = (order) => {
    dispatch({ type: "PLACE_ORDER", payload: order });
  };

  const getCartTotal = () => {
    return state.cart.reduce(
      (total, item) => total + item.amount * item.quantity,
      0
    );
  };

  const getCartItemsCount = () => {
    return state.cart.reduce((count, item) => count + item.quantity, 0);
  };

  const isInFavorites = (productId) => {
    return state.favorites.includes(productId);
  };

  const value = {
    ...state,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    addToFavorites,
    removeFromFavorites,
    setSearchTerm,
    setSortOption,
    setFilterCategory,
    placeOrder,
    getCartTotal,
    getCartItemsCount,
    isInFavorites,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;

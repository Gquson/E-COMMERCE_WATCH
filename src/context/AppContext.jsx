import React, { createContext } from "react";
import watch1 from "../assets/GENEVQ.jpg"
import watch2 from "../assets/poedagar.jpg"
import watch3 from "../assets/Rolex.jpg"
import watch4 from "../assets/JIANUO.jpg"
import watch5 from "../assets/Rolex1.jpg"
import watch6 from "../assets/CRRJU.jpg"
import watch7 from "../assets/CRRJU1.jpg"
import watch8 from "../assets/ECONOMICXI.jpg"
// Create context
export const AppContext = createContext(undefined);

// Initial state
export const initialState = {
  cart: [],
  products: [
    {
      id: 1,
      title: "Royal Chronometer",
      features: "Stainless Steel • Automatic • Waterproof",
      amount: 2999,
      image: watch1,
      category: "luxury",
      rating: 4.8,
      inStock: true,
    },
    {
      id: 2,
      title: "Imperial Heritage",
      features: "18K Gold • Manual Wind • Sapphire Crystal",
      amount: 4599,
      image: watch2,
      category: "luxury",
      rating: 4.9,
      inStock: true,
    },
    {
      id: 3,
      title: "Crown Diver",
      features: "Titanium • Automatic • 300m Water Resistant",
      amount: 3299,
      image: watch3,
      category: "sports",
      rating: 4.7,
      inStock: true,
    },
    {
      id: 4,
      title: "Regent Classic",
      features: "Rose Gold • Quartz • Leather Strap",
      amount: 1899,
      image: watch4,
      category: "classic",
      rating: 4.6,
      inStock: true,
    },
    {
      id: 5,
      title: "Monarch Automatic",
      features: "Stainless Steel • Automatic • Chronograph",
      amount: 3799,
      image:watch5,
      category: "luxury",
      rating: 4.8,
      inStock: true,
    },
    {
      id: 6,
      title: "Royal GMT",
      features: "Ceramic • Automatic • Dual Time Zone",
      amount: 4199,
      image:watch6,
      category: "luxury",
      rating: 4.9,
      inStock: false,
    },
    {
      id: 7,
      title: "Heritage Moonphase",
      features: "White Gold • Automatic • Moonphase",
      amount: 5899,
      image: watch7,
      category: "luxury",
      rating: 5.0,
      inStock: true,
    },
    {
      id: 8,
      title: "Imperial Tourbillon",
      features: "Platinum • Manual Wind • Tourbillon",
      amount: 12999,
      image: watch8,
      category: "luxury",
      rating: 5.0,
      inStock: true,
    },
  ],
  favorites: [],
  orders: [],
  user: null,
  searchTerm: "",
  sortOption: "",
  filterCategory: "all",
};

// Reducer function
export function appReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "UPDATE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    case "ADD_TO_FAVORITES":
      if (state.favorites.includes(action.payload)) {
        return state;
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter((id) => id !== action.payload),
      };

    case "SET_SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.payload,
      };

    case "SET_SORT_OPTION":
      return {
        ...state,
        sortOption: action.payload,
      };

    case "SET_FILTER_CATEGORY":
      return {
        ...state,
        filterCategory: action.payload,
      };

    case "PLACE_ORDER":
      return {
        ...state,
        orders: [...state.orders, action.payload],
        cart: [],
      };

    default:
      return state;
  }
}

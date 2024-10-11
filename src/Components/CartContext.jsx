import React, { createContext, useReducer, useContext } from 'react';

// Crear el contexto
const CartContext = createContext();

// Reducer para gestionar el carrito
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.product];
    case 'REMOVE_FROM_CART':
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar el contexto del carrito
export const useCart = () => useContext(CartContext);

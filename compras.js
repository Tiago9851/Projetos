// context/CartContext.js
import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id));
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

// components/Cart.jsx
import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div>
      <h2>Seu Carrinho</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>R${item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
      <button onClick={clearCart}>Esvaziar Carrinho</button>
    </div>
  );
};

export default Cart;
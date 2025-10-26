import React, { createContext, useState, useEffect, useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

export const CartContext = createContext();

const API_URL = import.meta.env.VITE_API_URL;

const CartProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const userId = user?.uid;

  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart items when userId changes
  useEffect(() => {
    if (!userId) {
      setCartItems([]);
      return;
    }

    const controller = new AbortController();

    fetch(`${API_URL}/cart/${userId}`, { signal: controller.signal })
      .then(async res => {
        if (!res.ok) {
          const text = await res.text();
          throw new Error(`Server error: ${res.status} - ${text}`);
        }
        return res.json();
      })
      .then(data => setCartItems(data.items || []))
      .catch(err => {
        if (err.name !== 'AbortError') {
          console.error("Failed to load cart:", err.message);
        }
      });

    return () => controller.abort();
  }, [userId]);

  const toggleCart = () => setIsCartOpen(prev => !prev);

  const safeFetch = async (url, options) => {
    const res = await fetch(url, options);
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Server error: ${res.status} - ${text}`);
    }
    return res.json();
  };

  const addToCart = async (item) => {
    if (!userId || !item || !item._id) {
      console.warn("Invalid cart item or user.");
      return;
    }

    try {
      const updatedCart = await safeFetch(`${API_URL}/cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, item })
      });
      setCartItems(updatedCart.items || []);
    } catch (err) {
      console.error("Failed to add to cart:", err.message);
    }
  };

  const incrementQty = async (id) => {
    if (!userId || !id) return;
    try {
      const updatedCart = await safeFetch(`${API_URL}/cart/${userId}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "increment" })
      });
      setCartItems(updatedCart.items || []);
    } catch (err) {
      console.error("Failed to increment quantity:", err.message);
    }
  };

  const decrementQty = async (id) => {
    if (!userId || !id) return;
    try {
      const updatedCart = await safeFetch(`${API_URL}/cart/${userId}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "decrement" })
      });
      setCartItems(updatedCart.items || []);
    } catch (err) {
      console.error("Failed to decrement quantity:", err.message);
    }
  };

  const removeFromCart = async (id) => {
    if (!userId || !id) return;
    try {
      const updatedCart = await safeFetch(`${API_URL}/cart/${userId}/${id}`, {
        method: "DELETE"
      });
      setCartItems(updatedCart.items || []);
    } catch (err) {
      console.error("Failed to remove item:", err.message);
    }
  };

   const checkout = async () => {
    if (!userId || cartItems.length === 0) {
      console.warn("Cannot checkout with an empty cart or without a user.");
      return;
    }
    
    // 1. Create the order object to send to the backend
    const newOrder = {
      userId,
      items: cartItems,
      total: totalPrice,
      status: "pending", // Default status
      // The backend will add the 'createdAt' date
    };

    try {
      // 2. Send the order to the '/orders' endpoint
      const orderResult = await safeFetch(`${API_URL}/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newOrder)
      });

      console.log("Order placed successfully:", orderResult.message);
      console.log("Checkout payload:", newOrder, "Total:", totalPrice);

      
      
      
      // 4. Clear the local cart state
      setCartItems([]);
      alert("Checkout successful! Your order has been placed.");

    } catch (err) {
      console.error("Checkout failed:", err.message);
      alert("There was an error placing your order. Please try again.");
    }
  };


  const totalPrice = cartItems.reduce(
    (acc, item) => acc + Number(item.price) * Number(item.quantity),
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        incrementQty,
        decrementQty,
        totalPrice,
        isCartOpen,
        toggleCart,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
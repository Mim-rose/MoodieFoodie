import React, { createContext, useState, useEffect } from 'react';
import { food_items } from '../food'; // ✅ Correct path

export const dataContext = createContext();

const UserProvider = ({ children }) => {
  const [input, setInput] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem('cartItems');
    return stored ? JSON.parse(stored) : [];
  });
  const [filteredItems, setFilteredItems] = useState(food_items);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // ✅ Search-based filtering
  useEffect(() => {
    setFilteredItems(
      food_items.filter((item) =>
        item.food_name.toLowerCase().includes(input.toLowerCase())
      )
    );
  }, [input]);

  // ✅ Category filtering - keeps original items intact
  const filterCategory = (catName) => {
  if (catName === 'all') {
    setFilteredItems(food_items);
  } else {
    setFilteredItems(food_items.filter((item) => item.food_category === catName)); // ✅ Use food_category instead
  }
};

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  // ✅ Cart management
  const addToCart = (item) => {
    setCartItems((prev) => {
      const found = prev.find((x) => x.id === item.id);
      if (found) {
        return prev.map((x) =>
          x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const incrementQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <dataContext.Provider
      value={{
        input,
        setInput,
        filteredItems,
        filterCategory,
        cartItems,
        addToCart,
        removeFromCart,
        incrementQty,
        decrementQty,
        totalPrice,
        isCartOpen,
        toggleCart,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default UserProvider;
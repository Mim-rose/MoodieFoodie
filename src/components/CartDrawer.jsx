import React, { useContext } from 'react';
import { RxCrossCircled } from "react-icons/rx";
import { dataContext } from '../context/UserProvider';

const CartDrawer = () => {
  const {
    isCartOpen,
    toggleCart,
    cartItems,
    incrementQty,
    decrementQty,
    removeFromCart,
    totalPrice,
    checkout
  } = useContext(dataContext);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* ✅ Drawer Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
        <h2 className="text-lg font-semibold">Your Cart</h2>
        <button onClick={toggleCart} className="p-2">
          <RxCrossCircled className="text-red-600 w-6 h-6  hover:text-black transition" />
        </button>
      </div>

      {/* ✅ Drawer Content */}
      <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-150px)]">
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center mt-10">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border border-gray-200 p-3 rounded-lg"
            >
              {/* Image display - Issue likely originates from UserProvider.jsx */}
              <img
                src={item.image} // This src is receiving the image URL from your cartItems
                alt={item.name}
                className="w-16 h-16 object-contain rounded"
              />
              <div className="flex-1 ml-4">
                <h4 className="font-semibold text-sm">{item.name}</h4>
                <p className="text-gray-600 text-sm ">
                  Price: ${item.price} × {item.quantity}
                </p>
                <div className="flex items-center space-x-2 mt-1">
                  {/* Decrement Button - Styled Red */}
                  <button
                    onClick={() => decrementQty(item.id)}
                    className="px-2 py-1 rounded bg-red-600 text-white hover:bg-red-700 transition"
                  >
                    -
                  </button>
                  <span className="font-bold">{item.quantity}</span>
                  {/* Increment Button - Styled Red */}
                  <button
                    onClick={() => incrementQty(item.id)}
                    className="px-2 py-1 rounded bg-red-600 text-white hover:bg-red-700 transition"
                  >
                    +
                  </button>
                  {/* Remove Button - Styled with Red Border */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-2 text-sm border border-red-600 text-red-600 px-2 py-1 rounded hover:bg-red-600 hover:text-white transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* ✅ Drawer Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex justify-between mb-4">
          <span className="text-gray-600 font-medium">Total:</span>
          <span className="font-semibold text-lg">${totalPrice.toFixed(2)}</span>
        </div>
        {/* Checkout Button - Styled Red */}
        <button
          onClick={() => {
            toggleCart(); // ✅ Closes drawer after checkout
            checkout();
          }}
          className="w-full bg-red-700 text-white py-2 rounded hover:bg-red-800 transition"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartDrawer;
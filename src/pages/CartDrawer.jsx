import React, { useContext } from 'react';
import { CartContext } from './CartProvider';
import { RxCrossCircled } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const {
    isCartOpen,
    toggleCart,
    cartItems,
    incrementQty,
    decrementQty,
    removeFromCart,
    totalPrice,
    checkout,
  } = useContext(CartContext);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-amber-700">Your Cart</h2>
        <button onClick={toggleCart} className="p-2">
          <RxCrossCircled className="text-red-600 w-6 h-6 hover:text-black transition" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-150px)]">
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center mt-10">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between border border-gray-200 p-3 rounded-lg"
            >
              <img
                src={item.food_image}
                alt={item.food_name}
                className="w-16 h-16 object-contain rounded"
              />
              <div className="flex-1 ml-4">
                <h4 className="font-semibold text-sm">{item.food_name}</h4>
                <p className="text-gray-600 text-sm">
                  Price: ₹{item.price} × {item.quantity}
                </p>
                <div className="flex items-center space-x-2 mt-1">
                  <button
                    onClick={() => decrementQty(item._id)}
                    className="px-2 py-1 rounded bg-red-600 text-white hover:bg-red-700 transition"
                  >
                    -
                  </button>
                  <span className="font-bold">{item.quantity}</span>
                  <button
                    onClick={() => incrementQty(item._id)}
                    className="px-2 py-1 rounded bg-red-600 text-white hover:bg-red-700 transition"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item._id)}
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

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex justify-between mb-4">
          <span className="text-gray-600 font-medium">Total:</span>
          <span className="font-semibold text-lg">₹{totalPrice.toFixed(2)}</span>
        </div>
       
        <Link to="/checkout">
  <button
    onClick={toggleCart}
    className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-amber-500 text-white py-2 rounded hover:brightness-110 transition"
  >
    Checkout
  </button> 
</Link>



      </div>
    </div>
  );
};

export default CartDrawer;
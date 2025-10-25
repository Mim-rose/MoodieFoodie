import React, { useContext } from 'react';
import { CartContext } from '../pages/CartProvider';
import { Link } from 'react-router-dom';

const CartView = () => {
  const {
    cartItems,
    incrementQty,
    decrementQty,
    removeFromCart,
    checkout,
    totalPrice,
  } = useContext(CartContext);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">🛒 My Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item, index) => (
            <div
              key={item._id}
              className="flex items-center justify-between bg-white shadow-md rounded-lg p-4"
            >
              {/* Index */}
              <div className="text-xl font-semibold text-gray-600 w-6">{index + 1}.</div>

              {/* Image */}
              <img
                src={item.food_image}
                alt={item.food_name}
                className="w-20 h-20 object-cover rounded-md mr-4"
              />

              {/* Details */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.food_name}</h3>
                <p className="text-sm text-gray-600">৳{item.price.toFixed(2)}</p>
                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => decrementQty(item._id)}
                  className="px-2 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200"
                >
                  −
                </button>
                <button
                  onClick={() => incrementQty(item._id)}
                  className="px-2 py-1 bg-green-100 text-green-600 rounded hover:bg-green-200"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Summary */}
          <div className="flex justify-between items-center mt-8 border-t pt-4">
            <h3 className="text-xl font-bold">Total: ৳{totalPrice.toFixed(2)}</h3>
            
             <Link to="/checkout">
  <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
    Checkout
  </button>
</Link>

           
          </div>
        </div>
      )}
    </div>
  );
};

export default CartView;
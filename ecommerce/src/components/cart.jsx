import React from 'react';

const Cart = ({ cart = [], removeFromCart, increaseQty, decreaseQty }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">🛒 Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-lg text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg shadow-sm bg-gray-50">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">Price: ₹{(item.price * 83).toFixed(0)}</p>
                  <div className="flex items-center space-x-3 mt-2">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="bg-gray-300 hover:bg-gray-400 text-black px-2 rounded"
                    >
                      −
                    </button>
                    <span className="font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="bg-gray-300 hover:bg-gray-400 text-black px-2 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <span className="text-lg font-semibold text-green-700">
                    ₹{(item.price * item.quantity * 83).toFixed(0)}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center mt-6 pt-4 border-t">
              <h2 className="text-2xl font-bold text-gray-800">Total</h2>
              <span className="text-2xl font-bold text-blue-700">₹{(total * 83).toFixed(0)}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
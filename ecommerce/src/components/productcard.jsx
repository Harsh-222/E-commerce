import React from 'react';
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain mb-4"
      />
      <h3 className="text-lg font-semibold mb-2 line-clamp-2">{product.title}</h3>
      <p className="text-gray-600 font-medium mb-2">₹{(product.price * 83).toFixed(0)}</p>
      <Link to={`/products/${product.id}`} className="text-blue-600 hover:underline">
      <button className="mt-auto bg-gray-800 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        View Details
      </button>
      </Link>
    </div>
  );
};

export default ProductCard;
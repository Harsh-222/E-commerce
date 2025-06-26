import React from 'react'
import { MdShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';
import Products from './products';

function Home() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg max-w-3xl text-center">
        <h1 className="text-3xl md:text-5xl text-gray-800 font-bold mb-4">
          Welcome to Our E-commerce Store
        </h1>
        <p className="text-gray-700 text-lg md:text-2xl mb-6">
          Discover a wide range of products at unbeatable prices.
          <br className="hidden md:block" />
          Shop now and enjoy exclusive deals!
        </p>
        <Link to="/products">
         
        <button className="bg-gray-800 text-white text-lg font-medium px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center mx-auto">
          Shop Now <MdShoppingCart className="ml-2" size={28} />
        </button>
        </Link>
      </div>
      
    </div>
  );
}
export default Home
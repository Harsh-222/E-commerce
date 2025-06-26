import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import Cart from "./cart";


const Navbar = ({ cartCount, isLoggedIn, user, handleLogout,searchTerm,setSearchTerm,handleSearch }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" flex flex-wrap justify-between  items-center p-4 bg-gray-800 text-white">
      <span className="text-2xl font-bold">Ecommerce</span>

      <div className="md:hidden">
        {isOpen ? (
          <MdClose
            size={32}
            onClick={() => setIsOpen(false)}
            className="cursor-pointer"
          />
        ) : (
          <MdMenu
            size={32}
            onClick={() => setIsOpen(true)}
            className="cursor-pointer"
          />
        )}
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-full md:flex md:items-center md:space-x-6 text-lg md:w-auto mt-4 md:mt-0`}
      >
        <input
          type="text"
          placeholder="Search products..."
          className="px-2 py-2 rounded-md text-black"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
       
        
        <Link to="/" className="block md:inline hover:text-amber-700 px-4 py-2">
          Home
        </Link>
        <Link
          to="/products"
          className="block md:inline hover:text-amber-700 px-4 py-2"
        >
          Products
        </Link>
        <Link
          to="/cart"
          className="block md:inline hover:text-amber-700 px-4 py-2"
        >
          Cart ({cartCount})
        </Link>
        {isLoggedIn ? (
          <div className="flex items-center space-x-4">
            <span className="font-medium text-amber-400">Hi, {user}</span>
            <button
              onClick={handleLogout}
              className="border-2 hover:text-amber-700 px-6 py-2 rounded-3xl"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="mt-2 md:mt-0 border-2 hover:text-amber-700 px-6 py-2 rounded-3xl">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

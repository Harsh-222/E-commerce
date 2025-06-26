import React, { useState } from "react";
import Navbar from "./components/navbar.jsx";
import Home from "./components/home.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./components/products.jsx";
import ProductDetail from "./components/productdetails.jsx";
import Cart from "./components/cart.jsx";
import { useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import Signup from "./components/signup.jsx";
import Login from "./components/login.jsx";
import { useNavigate, Navigate } from "react-router-dom";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const navigate = useNavigate();
  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    if (!isLoggedIn) {
      toast.error("Please log in to add to cart.");
      navigate("/login");
      return;
    }
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
      saveCartToStorage(updatedCart, user);
      toast.success("Added to cart!");
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
      saveCartToStorage(updatedCart, user);
    }
  };
  const increaseQty = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    saveCartToStorage(updatedCart, user);
    toast.success("Added to cart!");
  };

  const decreaseQty = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0); // remove if qty is 0
    setCart(updatedCart);
    saveCartToStorage(updatedCart, user);
    toast.error("Removed from cart");
  };
  const removeFromCart = (id) => {
    const updateCart = cart.filter((item) => item.id !== id);
    setCart(updateCart);
    saveCartToStorage(updatedCart, user);
    toast.error("Removed all items from cart");
  };
  const cartQuantity = cart.reduce((count, item) => count + item.quantity, 0);

  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem("isLoggedIn") === "true"
  );
  const [user, setUser] = useState(() => localStorage.getItem("user") || "");
  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUser(username);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("user", username);
    const savedCart =
      JSON.parse(localStorage.getItem(`cart-${username}`)) || [];
    setCart(savedCart);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser("");
    setCart([]);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    navigate("/");
  };
  const saveCartToStorage = (cart, username) => {
    if (!username) return;
    localStorage.setItem(`cart-${username}`, JSON.stringify(cart));
  };

  const handleSearch = () => {
  if (searchTerm.trim() !== '') {
    navigate('/products');
  }
};
  return (
    <>
      <Navbar
        cartCount={cartQuantity}
        isLoggedIn={isLoggedIn}
        user={user}
        handleLogout={handleLogout}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<Products searchTerm={searchTerm} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route
          path="/products/:id"
          element={<ProductDetail addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            isLoggedIn ? (
              <Cart
                cart={cart}
                removeFromCart={removeFromCart}
                increaseQty={increaseQty}
                decreaseQty={decreaseQty}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
export default App;

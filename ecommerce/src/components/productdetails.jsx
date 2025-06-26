import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';



const ProductDetail= ({ addToCart }) => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching product:', err);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!product) return <p className="text-center mt-10">Product not found.</p>;

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl w-full flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-1/2 object-contain h-72"
        />
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-xl font-semibold mb-4 text-green-600">₹{(product.price * 83).toFixed(0)}</p>
          </div>
         <button
      onClick={() => addToCart(product)}
      className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
    >
      Add to Cart
    </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
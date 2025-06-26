import React from 'react'

function Cartw() {
    const [cart, setCart] = useState([]);
    
      const addToCart = (product) => {
      const exists = cart.find((item) => item.id === product.id);
    
      if (exists) {
        const updatedCart = cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }  
            : item
        );
        setCart(updatedCart);
      } else {
        setCart([...cart, { ...product, quantity: 1 }]);  
      }
    };
      const increaseQty = (id) => {
      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    };
    
    const decreaseQty = (id) => {
      const updatedCart = cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0); 
      setCart(updatedCart);
    };
    const removeFromCart =(id) =>{
      const updateCart = cart.filter((item) => item.id !==id);
      setCart(updateCart);
    }
    
    
  return (
<></>
  )
}

export default Cartw
export { increaseQty, decreaseQty, removeFromCart };
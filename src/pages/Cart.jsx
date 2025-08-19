import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id} style={{ display: "flex", alignItems: "center", marginBottom: 16 }}>
          <img src={item.image} alt={item.title} style={{ width: 60, height: 60, objectFit: "contain" }} />
          <div style={{ marginLeft: 16 }}>
            <h4>{item.title}</h4>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.qty}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <h3>
        Total: $
        {cart.reduce((sum, item) => sum + item.price * item.qty, 0).toFixed(2)}
      </h3>
    </div>
  );
};

export default Cart;
import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? <p>Cart is empty</p> : 
        cart.map((item) => (
          <div key={item.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <img src={item.image} style={{width:300, height:300, objectFit:"contain"}} alt="" />
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      }
    </div>
  );
};

export default Cart;

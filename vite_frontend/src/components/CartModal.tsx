import React from "react";
import "./CartModal.css";

// PUBLIC_INTERFACE
const CartModal: React.FC = () => {
  // Would fetch cart items from context/store or backend
  // For demonstration simple display (modal not implemented here; show for layout)
  return (
    <div className="cart-modal">
      <h2>Your Cart</h2>
      <p>[Cart items will display here]</p>
      <button className="btn-accent">Go to Checkout</button>
    </div>
  );
};

export default CartModal;

import React from "react";
import "./ProductCard.css";

interface ProductProps {
  product: {
    id: number | string;
    name: string;
    price: number;
    image: string;
    category: string;
  };
}

// PUBLIC_INTERFACE
const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="product-card">
      <img className="product-img" src={product.image} alt={product.name} />
      <h4 className="product-title">{product.name}</h4>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <div className="product-actions">
        <button className="btn-accent">Add to Cart</button>
        <button className="btn-secondary">Wishlist</button>
      </div>
    </div>
  );
};

export default ProductCard;

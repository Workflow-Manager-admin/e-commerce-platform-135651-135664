import React from "react";
import "./ProductGrid.css";
import ProductCard from "./ProductCard";

// Dummy data for demonstration
const demoProducts = [
  {
    id: 1,
    name: "Blue T-Shirt",
    price: 29.99,
    image: "https://via.placeholder.com/200x200.png?text=T-shirt",
    category: "tshirt",
  },
  {
    id: 2,
    name: "Running Shoes",
    price: 89.99,
    image: "https://via.placeholder.com/200x200.png?text=Shoes",
    category: "shoes",
  },
  {
    id: 3,
    name: "Stylish Cap",
    price: 19.5,
    image: "https://via.placeholder.com/200x200.png?text=Cap",
    category: "accessories",
  },
];

const ProductGrid: React.FC = () => {
  // Would fetch products from API and pass as prop or via context
  return (
    <div className="product-grid">
      {demoProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;

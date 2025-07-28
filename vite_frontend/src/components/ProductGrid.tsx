import React from "react";
import "./ProductGrid.css";
import ProductCard from "./ProductCard";
import { useProductFilter } from "./ProductFilterContext";

/**
 * Utility for filter logic.
 */
function applyProductFilters(
  products: {
    id: number | string;
    name: string;
    price: number;
    image: string;
    category: string;
  }[],
  filter: {
    search: string;
    category: string;
    priceMin: string;
    priceMax: string;
  }
) {
  return products.filter((prod) => {
    // Search text (case insensitive substring on name or category)
    const text = filter.search.trim().toLowerCase();
    if (text.length > 0) {
      if (
        !prod.name.toLowerCase().includes(text) &&
        !prod.category.toLowerCase().includes(text)
      ) {
        return false;
      }
    }
    // Category
    if (filter.category && filter.category !== "all" && prod.category !== filter.category) {
      return false;
    }
    // Price min
    if (
      filter.priceMin !== "" &&
      !isNaN(Number(filter.priceMin)) &&
      prod.price < Number(filter.priceMin)
    ) {
      return false;
    }
    // Price max
    if (
      filter.priceMax !== "" &&
      !isNaN(Number(filter.priceMax)) &&
      prod.price > Number(filter.priceMax)
    ) {
      return false;
    }
    return true;
  });
}

// PUBLIC_INTERFACE
/**
 * ProductGrid displays the list of filtered products
 */
const ProductGrid: React.FC = () => {
  const { products, filter } = useProductFilter();
  const filtered = applyProductFilters(products, filter);

  return (
    <div className="product-grid">
      {filtered.length > 0 ? (
        filtered.map((product) => <ProductCard key={product.id} product={product} />)
      ) : (
        <div style={{ gridColumn: "1/-1", textAlign: "center", color: "#888", padding: "2rem" }}>
          No products found matching the selected criteria.
        </div>
      )}
    </div>
  );
};

export default ProductGrid;

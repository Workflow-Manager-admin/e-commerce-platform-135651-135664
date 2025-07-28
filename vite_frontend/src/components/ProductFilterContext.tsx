import React, { createContext, useContext, useState, ReactNode } from "react";

// Define product type for context
export interface Product {
  id: number | string;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductFilterState {
  search: string;
  category: string;
  priceMin: string;
  priceMax: string;
}

interface ProductFilterContextType {
  filter: ProductFilterState;
  setFilter: React.Dispatch<React.SetStateAction<ProductFilterState>>;
  // For convenience, add products list here
  products: Product[];
}

// Dummy data; in real app would fetch from API
const demoProducts: Product[] = [
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

const ProductFilterContext = createContext<ProductFilterContextType | undefined>(undefined);

// PUBLIC_INTERFACE
/**
 * ProductFilterProvider - Context provider for product filters & shared product list.
 * Wrap App/Sidebar/ProductGrid with this.
 */
export const ProductFilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [filter, setFilter] = useState<ProductFilterState>({
    search: "",
    category: "all",
    priceMin: "",
    priceMax: "",
  });
  return (
    <ProductFilterContext.Provider value={{ filter, setFilter, products: demoProducts }}>
      {children}
    </ProductFilterContext.Provider>
  );
};

// PUBLIC_INTERFACE
/**
 * Hook to access filter state
 */
export const useProductFilter = () => {
  const ctx = useContext(ProductFilterContext);
  if (!ctx) throw new Error("useProductFilter must be used inside ProductFilterProvider");
  return ctx;
};

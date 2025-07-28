import React, { useState } from "react";
import "./Sidebar.css";

// PUBLIC_INTERFACE
const Sidebar: React.FC = () => {
  // Placeholder values for categories and filters
  const [category, setCategory] = useState("all");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");

  return (
    <aside className="sidebar">
      <h3>Filters</h3>
      <div className="sidebar-section">
        <label>Search</label>
        <input type="text" placeholder="Product or keyword" className="input full-width" />
      </div>
      <div className="sidebar-section">
        <label htmlFor="category">Category</label>
        <select id="category" className="input full-width" value={category} onChange={e => setCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="tshirt">T-Shirts</option>
          <option value="shoes">Shoes</option>
          <option value="accessories">Accessories</option>
        </select>
      </div>
      <div className="sidebar-section">
        <label>Price Range</label>
        <div style={{ display: "flex", gap: 6 }}>
          <input
            type="number"
            className="input"
            placeholder="Min"
            style={{ width: "45%" }}
            value={priceMin}
            onChange={e => setPriceMin(e.target.value)}
          />
          <input
            type="number"
            className="input"
            placeholder="Max"
            style={{ width: "45%" }}
            value={priceMax}
            onChange={e => setPriceMax(e.target.value)}
          />
        </div>
      </div>
      <button className="btn-accent full-width">Apply</button>
    </aside>
  );
};

export default Sidebar;

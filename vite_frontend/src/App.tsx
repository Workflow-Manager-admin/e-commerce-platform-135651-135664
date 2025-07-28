import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProductGrid from "./components/ProductGrid";
import CartModal from "./components/CartModal";
import WishlistModal from "./components/WishlistModal";
import AuthPage from "./pages/AuthPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderSummaryPage from "./pages/OrderSummaryPage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import ProfilePage from "./pages/ProfilePage";

const App: React.FC = () => {
  // GLOBAL app state may be put in context providers (not shown here)
  return (
    <Router>
      <div className="app-root">
        <Navbar />
        <div className="main-content-layout">
          <Sidebar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<ProductGrid />} />
              <Route path="/auth/*" element={<AuthPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/order-summary/:orderId" element={<OrderSummaryPage />} />
              <Route path="/orders" element={<OrderHistoryPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </main>
        </div>
        <CartModal />
        <WishlistModal />
      </div>
    </Router>
  );
};

export default App;

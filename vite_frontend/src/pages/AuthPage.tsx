import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import SignupForm from "../components/auth/SignupForm";
import ForgotPasswordForm from "../components/auth/ForgotPasswordForm";

const AuthPage: React.FC = () => (
  <div className="auth-page">
    <div className="auth-card">
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/forgot" element={<ForgotPasswordForm />} />
        <Route path="*" element={<div>
          <h2>Authentication</h2>
          <div style={{display:'flex', flexDirection:'column',gap:17}}>
            <Link to="login" className="btn-accent">Login</Link>
            <Link to="signup" className="btn-secondary">Sign Up</Link>
          </div>
        </div>} />
      </Routes>
    </div>
  </div>
);

export default AuthPage;

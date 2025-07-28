import React, { useState } from "react";
// PUBLIC_INTERFACE
const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  return (
    <form className="form" autoComplete="off">
      <h2>Login</h2>
      <label>Email</label>
      <input type="email" className="input" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password</label>
      <input type="password" className="input" autoComplete="current-password" value={pwd} onChange={(e) => setPwd(e.target.value)} />
      <button className="btn-accent full-width" type="submit">Login</button>
      <div style={{marginTop:7}}><a href="/auth/forgot">Forgot password?</a></div>
      <div style={{marginTop:7}}>Don't have an account? <a href="/auth/signup">Sign Up</a></div>
    </form>
  );
};
export default LoginForm;

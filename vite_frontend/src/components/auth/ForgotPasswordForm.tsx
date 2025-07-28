import React, { useState } from "react";
// PUBLIC_INTERFACE
const ForgotPasswordForm: React.FC = () => {
  const [email, setEmail] = useState("");
  return (
    <form className="form" autoComplete="off">
      <h2>Forgot Password</h2>
      <label>Email</label>
      <input type="email" className="input" value={email} autoComplete="email" onChange={e => setEmail(e.target.value)} />
      <button className="btn-accent full-width" type="submit" style={{marginTop:15}}>Send Reset Link</button>
      <div style={{marginTop:7}}><a href="/auth/login">Back to Login</a></div>
    </form>
  );
};
export default ForgotPasswordForm;

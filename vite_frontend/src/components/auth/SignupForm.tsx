import React, { useState } from "react";
// PUBLIC_INTERFACE
const SignupForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [conf, setConf] = useState("");
  return (
    <form className="form" autoComplete="off">
      <h2>Sign Up</h2>
      <label>Email</label>
      <input type="email" className="input" autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} />
      <label>Password</label>
      <input type="password" className="input" value={pwd} autoComplete="new-password" onChange={e => setPwd(e.target.value)} />
      <label>Confirm Password</label>
      <input type="password" className="input" autoComplete="new-password" value={conf} onChange={e => setConf(e.target.value)} />
      <button className="btn-accent full-width" type="submit">Sign Up</button>
      <div style={{marginTop:7}}>Already have an account? <a href="/auth/login">Login</a></div>
    </form>
  );
};
export default SignupForm;

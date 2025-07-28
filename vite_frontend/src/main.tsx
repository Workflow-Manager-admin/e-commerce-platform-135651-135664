import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./theme.css";
import "./index.css";

// PUBLIC_INTERFACE
/**
 * Entrypoint for the Vite e-commerce frontend
 */
ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

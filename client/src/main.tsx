import { createRoot } from "react-dom/client";
import { Router } from "wouter";
import { useState, useEffect } from "react";
import App from "./App";
import "./index.css";

// Hash routing hook for wouter
const useHashLocation = () => {
  const [loc, setLoc] = useState(window.location.hash.replace(/^#/, "") || "/");
  useEffect(() => {
    const handler = () => {
      const current = window.location.hash.replace(/^#/, "") || "/";
      setLoc(current);
    };
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);
  const navigate = (to: string) => { window.location.hash = to; };
  return [loc, navigate] as const;
};

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <Router hook={useHashLocation}>
      <App />
    </Router>
  );
} else {
  console.error("Root element not found");
}

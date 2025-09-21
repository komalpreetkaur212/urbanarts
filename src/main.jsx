// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";  // ✅ Add this
import "./index.css";

import Navbar from "./components/Navbar";
import Home from "./components/home";
import About from "./components/about";
import Recent from "./components/recent";
import Work from "./components/work";
import Contact from "./components/contact";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Home />
    <About />
    <Recent />
    <Work />
    <Contact />
  </StrictMode>
);

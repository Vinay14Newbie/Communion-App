import { createRoot } from "react-dom/client";
import React from "react";
import { App } from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Components/molecules/Header.jsx";
import { Footer } from "./Components/molecules/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Header />
    <App />
    <Footer />
  </BrowserRouter>
);

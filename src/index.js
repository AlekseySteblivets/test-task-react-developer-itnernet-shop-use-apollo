import React from "react";
import ReactDOM from "react-dom/client";

import "modern-normalize/modern-normalize.css";

import App from "./App";

import "./assets/styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

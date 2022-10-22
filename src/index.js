import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./index.css";
import Portfolio from "./Portfolio";

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);

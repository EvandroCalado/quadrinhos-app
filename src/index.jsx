import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import 'remixicon/fonts/remixicon.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Layout />
    </React.StrictMode>
  </BrowserRouter>
);


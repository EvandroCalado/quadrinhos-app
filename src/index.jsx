import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/Layout";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "./styles/Global.css";
import "remixicon/fonts/remixicon.css";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
      <React.StrictMode>
        <Layout />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);


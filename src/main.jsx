import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store"; // Import your Redux store
import App from "./App";
import { ToastContainer } from "react-toastify";  
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer  theme="dark" position="top-right"/>
    </Provider>
  </React.StrictMode>
);  

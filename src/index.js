import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Sidebar from "./Components/Sidebar";
import Title from "./Components/Title";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Title />
    <Sidebar />
  </React.StrictMode>
);

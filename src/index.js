import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./Home.js";
import Page1 from "./Page1.js";
import Freetiles from "./FreeTiles";
import "./index.css";
import NavFuture from "./NavFuture";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <div>
      <NavFuture />
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/free" exact element={<Freetiles />} />

        <Route path="/Page1" exact element={<Page1 />} />
      </Routes>
    </div>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

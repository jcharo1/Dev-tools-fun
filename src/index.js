import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, BrowserRouter, Routes, Route } from "react-router-dom";
import Links from "./Links.js";
import Page1 from "./Page1.js";
import Home from "./Home.js";
import Freetiles from "./FreeTiles";
import "./index.css";
import NavFuture from "./NavFuture";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" index element={<Links />} />
        <Route path="/test" index element={<Home />} />
      </Routes>
    </div>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

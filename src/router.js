import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import Home from "./views/Home";
import Home from "./views/Contact";
import Home from "./views/TradingConditions";
import Home from "./views/Webshop";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="kontakt" element={<Contact />} />
      <Route path="webshop" element={<Webshop />} />
      <Route path="handelsbetingelser" element={<TradingConditions />} />
    </Route>
  )
);

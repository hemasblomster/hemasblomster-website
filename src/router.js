import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import Home from "./views/Home";
import Contact from "./views/Contact";
import TradingConditions from "./views/TradingConditions";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="kontakt" element={<Contact />} />
      <Route path="handelsbetingelser" element={<TradingConditions />} />
    </Route>
  )
);

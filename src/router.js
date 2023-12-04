import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import Home from "./views/Home";
import Contact from "./views/Contact";
import Thanks from "./views/Thanks";
import NotFound from "./views/NotFound";
import TradingConditions from "./views/TradingConditions";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="kontakt" element={<Contact />} />
      <Route path="handelsbetingelser" element={<TradingConditions />} />
      <Route path="tak" element={<Thanks />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

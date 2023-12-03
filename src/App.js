import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Home from "./views/Home";
import HeaderMenu from "./components/HeaderMenu";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <HeaderMenu />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

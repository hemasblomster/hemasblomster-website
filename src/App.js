import "./App.css";
import "./index.css";
import HeaderMenu from "./components/HeaderMenu";
import MenuFlower from "./components/MenuFlower";
import Footer from "./components/Footer";
import { Outlet, useNavigation } from "react-router-dom";

function App() {
  const navigation = useNavigation();
  return (
    <div className="App">
      <HeaderMenu />
      <MenuFlower />
      <main>
        {navigation.state === "loading" ? <p>loading...</p> : <Outlet />}
      </main>
      <Footer />
    </div>
  );
}

export default App;

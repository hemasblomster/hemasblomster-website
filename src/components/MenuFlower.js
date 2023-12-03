import logo from "../images/logo.png";
import { Link, useLocation } from "react-router-dom";

const MenuFlower = () => {
  return (
    <>
      <nav>
        <div className="burger bg-violet-200">
          <i className="fas fa-solid fa-bars fa-2x"></i>
        </div>
        <ul className="md:flex justify-center items-center p-4 gap-5 text-xl menu">
          <li>
            <a href="index.html">
              <img src={logo} alt="logo" className="w-auto h-24" />
            </a>
          </li>
          <li className="dropdown">
            <a
              href="https://hemasblomster.dk/webshop/6-buketter"
              className="hover:text-violet-800"
            >
              Buketter
            </a>
          </li>
          <li>
            <a
              href="https://hemasblomster.dk/webshop/9-begravelse"
              className="hover:text-violet-800"
            >
              Begravelse
            </a>
          </li>

          <li>
            <a
              href="https://hemasblomster.dk/webshop/10-bryllup"
              className="hover:text-violet-800"
            >
              Bryllup
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MenuFlower;

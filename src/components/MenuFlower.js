import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const MenuFlower = () => {
  return (
    <>
      <nav>
        <div className="burger bg-violet-200">
          <i className="fas fa-solid fa-bars fa-2x"></i>
        </div>
        <ul className="md:flex justify-center items-center p-4 gap-5 text-xl menu">
          <li>
            <Link to="/">
              <img src={logo} alt="logo" className="w-auto h-24" />
            </Link>
          </li>
          <li>
            <Link
              to="https://hemasblomster.dk/webshop/13-alle"
              className="hover:text-violet-800"
            >
              Alle
            </Link>
          </li>
          <li className="dropdown">
            <Link
              to="https://hemasblomster.dk/webshop/6-buketter"
              className="hover:text-violet-800"
            >
              Buketter
            </Link>
          </li>
          <li>
            <Link
              to="https://hemasblomster.dk/webshop/9-begravelse"
              className="hover:text-violet-800"
            >
              Begravelse
            </Link>
          </li>

          <li>
            <Link
              to="https://hemasblomster.dk/webshop/10-bryllup"
              className="hover:text-violet-800"
            >
              Bryllup
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MenuFlower;

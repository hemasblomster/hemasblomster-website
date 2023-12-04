import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const iconStyle = {
    textDecoration: "none",
    fontSize: "2rem",
    color: "#000",
  };

  return (
    <>
      <footer className="bg-violet-200 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center  p-5">
          <div className="flex flex-col">
            <h3 className="text-xl pt-3 mb-2 border-b-2 border-black">
              HEMA'S BLOMSTER
            </h3>
            <p>Søborg Hovedgade 157-159</p>
            <p>2860 Søborg</p>
            <p>+45 31 33 61 05</p>
            <p>CVR: 44119730</p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-xl  pt-7 md:pt-0 mb-2 border-b-2 border-black">
              Åbningstider
            </h3>
            <p>Mandag - Lørdag 09.00 -18.00</p>
            <p> Søndag 09.00 -15.00</p>
          </div>

          <div className="flex-col hidden md:flex">
            <h3 className="text-xl pt-3 mb-2 border-b-2 border-black ">
              Kategori
            </h3>
            <Link
              to="https://hemasblomster.dk/webshop/6-buketter"
              className="hover:text-violet-800"
            >
              Buketter
            </Link>
            <Link
              to="https://hemasblomster.dk/webshop/9-begravelse"
              className="hover:text-violet-800"
            >
              Begravelse
            </Link>
            <Link
              to="https://hemasblomster.dk/webshop/10-bryllup"
              className="hover:text-violet-800"
            >
              Bryllup
            </Link>
          </div>
        </div>
        <div className="text-3xl pl-4">
          <div className="flex gap-3">
            <Link
              to={`https://www.instagram.com/hemasblomster/`}
              target="_blank"
              style={iconStyle}
            >
              <FaInstagram className="icons hover:text-violet-800" />
            </Link>
            <Link
              to={`https://www.facebook.com/profile.php?id=61553725191988`}
              target="_blank"
              style={iconStyle}
            >
              <FaFacebook className="icons hover:text-violet-800" />
            </Link>
          </div>

          <div className="flex text-xl gap-5">
            <Link to="/handelsbetingelser" className="hover:text-violet-800">
              HANDELSBETINGELSER
            </Link>
            <Link to="kontakt" className="hover:text-violet-800">
              KUNDSERVICE
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

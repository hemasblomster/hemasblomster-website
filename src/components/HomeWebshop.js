import buketter1 from "../images/flowers/buketter/img1.jpg";
import begravelse1 from "../images/flowers/begravelse/img1.jpg";
import bryllup1 from "../images/flowers/bryllup/img1.jpg";
import { Link } from "react-router-dom";

const HomeWebshop = () => {
  return (
    <>
      <h2 className="text-3xl text-center py-6">Vores varekategorier</h2>

      <section className="grid  grid-cols-1 md:grid-cols-3 place-items-center gap-5  mx-3 md:mx-96  my-3 md:my-6">
        <div className="relative image-container">
          <Link to="https://hemasblomster.dk/webshop/6-buketter">
            <img
              src={buketter1}
              alt="kategori 1"
              className="w-96 h-80 border-violet-800 border-4 p-2 hover-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-2xl font-bold bg-violet-800 p-4">
                Buketter
              </h2>
            </div>
          </Link>
        </div>

        <div className="relative image-container">
          <Link to="https://hemasblomster.dk/webshop/9-begravelse">
            <img
              src={begravelse1}
              alt="kategori 1"
              className="w-96 h-80 border-violet-800 border-4 p-2 hover-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-2xl font-bold bg-violet-800 p-4">
                Begravelse
              </h2>
            </div>
          </Link>
        </div>

        <div className="relative image-container">
          <Link to="https://hemasblomster.dk/webshop/10-bryllup">
            <img
              src={bryllup1}
              alt="kategori 1"
              className="w-96 h-80 border-violet-800 border-4 p-2 hover-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-2xl font-bold bg-violet-800 p-4">
                Bryllup
              </h2>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomeWebshop;

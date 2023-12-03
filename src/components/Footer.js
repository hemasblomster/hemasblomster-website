const Footer = () => {
  return (
    <>
      <footer className="bg-violet-200">
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
            <a
              href="https://hemasblomster.dk/webshop/6-buketter"
              className="hover:text-violet-800"
            >
              Buketter
            </a>
            <a
              href="https://hemasblomster.dk/webshop/9-begravelse"
              className="hover:text-violet-800"
            >
              Begravelse
            </a>
            <a
              href="https://hemasblomster.dk/webshop/10-bryllup"
              className="hover:text-violet-800"
            >
              Bryllup
            </a>
          </div>
        </div>
        <div className="flex p-4">
          <div className="text-3xl pl-4">
            <a
              href="https://www.instagram.com/hemasblomster/"
              className="hover:text-violet-800"
            >
              <i className="fa-brands fa-instagram mr-4"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61553725191988"
              className="hover:text-violet-800"
            >
              <i className="fa-brands fa-square-facebook"></i>
            </a>
            <div className="flex text-xl gap-5">
              <a
                href="handelsbetingelser.html"
                className="hover:text-violet-800"
              >
                HANDELSBETINGELSER
              </a>
              <a href="kontakt.html" className="hover:text-violet-800">
                KUNDSERVICE
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

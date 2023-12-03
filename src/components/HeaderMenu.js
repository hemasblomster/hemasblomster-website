const HeaderMenu = () => {
  return (
    <>
      <div className="flex justify-around bg-violet-800 text-white p-6 mt-10 md:mt-0">
        <div>
          <p>Søborg Hovedgade 157-159</p>
          <p>2860 Søborg</p>
        </div>
        <div className="grid grid-cols-3 gap-6 text-2xl">
          <a href="/" className="hover:border-white hover:border-b-4">
            Forside
          </a>
          <a href="#" className="hover:border-white hover:border-b-4">
            Kontakt
          </a>
        </div>
      </div>
    </>
  );
};

export default HeaderMenu;
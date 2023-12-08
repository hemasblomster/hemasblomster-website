import { Link } from "react-router-dom";

const HomeInfo = () => {
  return (
    <>
      <section className="bg-img text-white">
        <div className=" w-full md:w-1/2 pt-28  pl-8 md:pl-72 text-left">
          <h1 className="text-5xl pb-4">Hema's Blomster</h1>
          <p className="text-xl">
            Hos Hema's blomster, lægger vi vægt på friskhed og kvalitet, hvilket
            gør vores blomster, buketter og kranse populære hos vores kunder.
            Gennem årene har vi anvendt vores unikke teknikker inden for
            blomsterbinderi for at betjene vores kunder med et bredt udvalg af
            blomster i forskellige former og typer. Bestil dine blomster hurtigt
            og nemt.
          </p>

          <div className="flex gap-4 pt-10">
            <a href="http://www.hemasblomster.dk/webshop">
              <button className="bg-violet-800 hover:bg-violet-400 text-white font-bold py-4 px-6 rounded-xl">
                Se vores udvalg
              </button>
            </a>
            <Link to="kontakt">
              <button className="bg-violet-50 hover:bg-violet-200 text-black font-bold py-4 px-6 rounded-xl">
                Kontakt os
              </button>
            </Link>
          </div>
        </div>
      </section>

      <div className="hidden md:flex justify-around  py-4 text-xl bold bg-violet-200">
        <p>Afhent i butik</p>
        <p>Hurtig levering</p>
        <p>Flotte og friske blomster</p>
      </div>
    </>
  );
};

export default HomeInfo;

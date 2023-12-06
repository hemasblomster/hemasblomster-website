import { Link } from "react-router-dom";

const Thanks = () => {
  return (
    <>
      <section className="bg-subsite bg-cover bg-no-repeat w-full text-white">
        <h1 className="text-4xl text-center pt-32">Tak!</h1>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 place-items-center my-10 text-left">
        <div className="p-5 md:p-1">
          <h2 className="text-5xl mb-3">Tak for din besked,</h2>
          <h2 className="text-5xl mb-3">vi vender snarest tilbage!</h2>
          <p>
            Klik
            <Link to="http://hemasblomster.dk/" class="text-red-700">
              &nbsp;<Link to="/">her</Link>&nbsp;
            </Link>
            for at vende til Forsiden
          </p>
        </div>

        <div></div>
      </section>
    </>
  );
};

export default Thanks;

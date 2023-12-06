import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="pt-40 p-40 border-t-2 border-black">
        <h1 className="text-5xl pb-4">OUPS</h1>
        <p>Det, du leder efter, kan ikke findes!</p>
        <p>
          Klik
          <span className="text-pink-700 text-1xl">
            <Link to="/"> her </Link>
          </span>
          for at komme tilbage til hjemmesiden.
        </p>
      </div>
    </>
  );
};

export default NotFound;

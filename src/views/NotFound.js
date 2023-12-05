import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="mt-40 mb-40">
        <h1 className="text-5xl pb-4">OUPS</h1>
        <p>Det, du leder efter, kan ikke findes!</p>
        <p>
          Klik
          <span className="text-pink-700 text-2xl">
            <Link to="/"> her </Link>
          </span>
          for at komme tilbage til hjemmesiden.
        </p>
      </div>
    </>
  );
};

export default NotFound;

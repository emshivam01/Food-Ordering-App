import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex justify-between items-center px-10 py-5">
      <img className="w-28 rounded-full" src={logo} />
      <div className="Nav-items">
        <Link
          className="p-3 font-medium text-xl hover:underline hover:underline-offset-4"
          to="/"
        >
          Home
        </Link>
        <Link
          className="p-3 font-medium text-xl hover:underline hover:underline-offset-4"
          to="/about"
        >
          About
        </Link>
        <Link
          className="p-3 font-medium text-xl hover:underline hover:underline-offset-4"
          to="/contact"
        >
          Contact
        </Link>
        <Link
          className="p-3 font-medium text-xl hover:underline hover:underline-offset-4"
          to="/quote"
        >
          Quote Of The Day
        </Link>
      </div>
      <div className="flex gap-5">
        {!(pathname == "/login") ? (
          <Link to="/login">
            <button className="p-2 px-5 font-medium text-xl border-2 border-gray-800 rounded-md hover:bg-black hover:text-white transition-colors delay-100">
              Login
            </button>
          </Link>
        ) : null}
        <button className="p-2 px-5 font-medium text-xl  border-2 border-gray-800 rounded-md hover:bg-black hover:text-white transition-colors delay-100">
          Cart
        </button>
      </div>
    </div>
  );
};

export default Navbar;

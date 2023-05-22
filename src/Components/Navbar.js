<<<<<<< HEAD
import { useContext, useState } from "react";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import RestaurantContext from "../../utlis/useRestaurantContext";

const Navbar = () => {
  const { pathname } = useLocation();

  const [brandName, setBrandName] = useState("Meal Magic");

  const BrandName = useContext(RestaurantContext);

  return (
    <div className="flex justify-between items-center px-12 py-4 shadow-lg rounded-b-lg">
      <RestaurantContext.Provider value={}>
        <Link
          className="Brand-name text-2xl font-bold underline underline-offset-8"
          to="/"
        >
          {brandName}
        </Link>
      </RestaurantContext.Provider>
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
        <Link
          className="p-3 font-medium text-xl hover:underline hover:underline-offset-4"
          to="/faqs"
        >
          FAQs
        </Link>
      </div>
      <div className="flex gap-5">
        {!(pathname == "/login") ? (
          <Link to="/login">
            <button className="p-2 px-5 font-medium text-xl border-2 border-[#118091] rounded-md hover:bg-[#118091] hover:text-white transition-colors delay-100">
              Login
            </button>
          </Link>
        ) : null}
        <button className="p-2 px-5 font-medium text-xl  border-2 border-[#118091] rounded-md hover:bg-[#118091] hover:text-white transition-colors delay-100">
          Cart
        </button>
      </div>
    </div>
  );
};

export default Navbar;
=======
import { useContext, useState } from "react";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import BrandNameContext from "../../utlis/BrandNameContext";

const Navbar = () => {
  const { pathname } = useLocation();

  const { name } = useContext(BrandNameContext);

  return (
    <div className="flex justify-between items-center px-12 py-4 shadow-lg rounded-b-lg">
      {console.log(name)}
      <Link
        className="Brand-name text-2xl font-bold underline underline-offset-8"
        to="/"
      >
        {name}
      </Link>
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
        <Link
          className="p-3 font-medium text-xl hover:underline hover:underline-offset-4"
          to="/faqs"
        >
          FAQs
        </Link>
      </div>
      <div className="flex gap-5">
        {!(pathname == "/login") ? (
          <Link to="/login">
            <button className="p-2 px-5 font-medium text-xl border-2 border-[#118091] rounded-md hover:bg-[#118091] hover:text-white transition-colors delay-100">
              Login
            </button>
          </Link>
        ) : null}
        <button className="p-2 px-5 font-medium text-xl  border-2 border-[#118091] rounded-md hover:bg-[#118091] hover:text-white transition-colors delay-100">
          Cart
        </button>
      </div>
    </div>
  );
};

export default Navbar;
>>>>>>> d914d4057fa28a11ac453af1480c314adf9e2b44

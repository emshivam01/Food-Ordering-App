import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div className="Navbar">
      <img className="logo" src={logo} />
      <div className="Nav-items">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="Nav-items">
        {!(pathname == "/login") ? (
          <Link to="/login">
            <button>Login</button>
          </Link>
        ) : null}
        <button>Cart</button>
      </div>
    </div>
  );
};

export default Navbar;

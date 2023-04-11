import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <img className="logo" src={logo} />
      <div className="Nav-items">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="Nav-items">
        <button>Log in</button>
        <button>Cart</button>
      </div>
    </div>
  );
};

export default Navbar;

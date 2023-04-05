import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="Navbar">
      <img className="logo" src={logo} />
      <div className="Nav-items">
        <button>Log in</button>
        <button>Sign up</button>
        <button>Cart</button>
      </div>
    </div>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import pic from "../assests/logo.png";
function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={pic} alt="logo" className="logocircle" />
      </Link>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Shop">Shop</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Cart" className="cartlink">
          {" "}
          Cart 🛒{" "}
        </Link>
      </div>

      <div className="Login">
        <Link to="/login" className=" loginbtn">
          Login
        </Link>
        <Link to="/signup" className=" signupbtn">
          Sign up
        </Link>
      </div>
    </nav>
  );
}
export default NavBar;

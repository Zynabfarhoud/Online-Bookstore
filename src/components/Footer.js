import { Link } from "react-router-dom";
import "../styles/footer.css";
function Footer() {
  return (
    <footer className="footer">
      <h2>Bookora</h2>

      <p>Read more. Dream more. </p>

      <div className="footerlinks">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/About">About Us</Link>
        <Link to="/Contact">Contact</Link>
      </div>

      <p className="copyright">© 2026 Bookora. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

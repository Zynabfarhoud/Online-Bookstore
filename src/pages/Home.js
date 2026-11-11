import { Link } from "react-router-dom";
import "../styles/home.css";
import homeImage from "../assests/home1.jfif";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="content">
          <h4> ➖ WELCOME TO BOOKORA </h4>
          <h1>
            Discover
            <br /> Your Next Book
          </h1>

          <p>Read more. Dream more.</p>
          <Link to="/shop" className="shopbtn">
            Shop Now ➡
          </Link>
        </div>

        <div className="heroimage">
          <img src={homeImage} alt="" />
        </div>
      </section>
      <section className="welcomesec">
        <h2>Explore Our Collection</h2>
        <p>Find your next favorite story with Bookora</p>
        <Link to="/shop" className="shopbtn">
          Explore Books
        </Link>
      </section>
    </div>
  );
}
export default Home;

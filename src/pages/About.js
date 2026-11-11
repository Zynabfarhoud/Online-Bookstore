import "../styles/about.css";
import flowerimage from "../assests/image2.jfif";
import imagetwo from "../assests/image2.jfif";
function About() {
  return (
    <section className="aboutpage">
      <h1>
        <img src={flowerimage} alt="" className="circle" />
        <span>About Bookora</span>
        <img src={imagetwo} alt="" className="circle" />
      </h1>
      <p className="aboutintro">
        Welcome to Bookora, your Online destination for discovering wonderful
        books.
      </p>
      <div className="aboutcontent">
        <p>
          🔆 WE BELIEVE THAT EVERY BOOK HAS A STORY TO TELL AND EVERY READER
          DESERVES TO FIND THE NEXT FAVORITE BOOK.
        </p>
        <h2>Our Mission</h2>
        <p>
          ◽ Make discovering and buying books simple and enjoyable. <br /> ◽
          Connect every reader with their next favorite story. <br /> ◽ Provide
          an accessible and welcoming space for all book lovers.
        </p>
      </div>
    </section>
  );
}
export default About;

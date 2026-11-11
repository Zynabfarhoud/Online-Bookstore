import "../styles/contact.css";
function Contact() {
  return (
    <section className="contactpage">
      <h1>Contact Us</h1>
      <p>We would love to hear from you!</p>

      <form className="conform">
        <input type="text" placeholder="Your name" required />

        <input type="email" placeholder="Your Email" required />

        <textarea type="Your Message" rows="5" required />

        <button type="submit" className="shop-btn">
          Send Message
        </button>
      </form>
    </section>
  );
}
export default Contact;

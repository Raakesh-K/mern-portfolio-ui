import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>
        Let's <span>Connect</span>
      </h2>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
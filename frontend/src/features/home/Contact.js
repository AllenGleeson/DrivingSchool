import '../../assets/css/contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5"></textarea>
        <button type="submit" className="btn-primary">Send</button>
      </form>
    </section>
  );
};

export default Contact;
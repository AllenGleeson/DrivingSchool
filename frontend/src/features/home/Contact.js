import '../../assets/css/contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p>Ready to start your driving journey? Contact us today to book your first lesson or ask any questions.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📞</div>
                <div className="method-details">
                  <h3>Phone</h3>
                  <p>+1 (555) 123-4567</p>
                  <span>Mon-Fri: 8AM-6PM</span>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">✉️</div>
                <div className="method-details">
                  <h3>Email</h3>
                  <p>info@drivewithus.com</p>
                  <span>We'll respond within 24 hours</span>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">📍</div>
                <div className="method-details">
                  <h3>Location</h3>
                  <p>123 Driving Street</p>
                  <span>City, State 12345</span>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">💬</div>
                <div className="method-details">
                  <h3>WhatsApp</h3>
                  <p>+1 (555) 123-4567</p>
                  <span>Quick responses available</span>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="#" className="social-link">📘</a>
                <a href="#" className="social-link">📷</a>
                <a href="#" className="social-link">🐦</a>
                <a href="#" className="social-link">💼</a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form">
              <h3>Send us a Message</h3>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Your full name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="your.email@example.com" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="+1 (555) 123-4567" />
              </div>
              
              <div className="form-group">
                <label htmlFor="lesson-type">Lesson Type</label>
                <select id="lesson-type" name="lesson-type">
                  <option value="">Select lesson type</option>
                  <option value="car">Car Lessons</option>
                  <option value="motorcycle">Motorcycle Training</option>
                  <option value="truck">Truck Driving</option>
                  <option value="refresher">Refresher Course</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="experience">Driving Experience</label>
                <select id="experience" name="experience">
                  <option value="">Select your experience level</option>
                  <option value="beginner">Complete Beginner</option>
                  <option value="some-experience">Some Experience</option>
                  <option value="experienced">Experienced Driver</option>
                  <option value="refresher">Need Refresher</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Tell us about your goals, preferred schedule, or any questions you have..." rows="5" required></textarea>
              </div>
              
              <button type="submit" className="btn-submit">Send Message</button>
            </form>
          </div>
        </div>

        <div className="contact-note">
          <p>💡 <strong>Quick Response:</strong> We typically respond to all inquiries within 2-4 hours during business hours. For urgent matters, please call us directly.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
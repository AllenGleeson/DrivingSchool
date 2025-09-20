import '../../assets/css/hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Master the Road with Confidence</h1>
        <p className="hero-subtitle">Professional driving instruction for cars, motorcycles, and trucks. Over 10 years of experience helping students become safe, confident drivers.</p>
        <div className="hero-features">
          <div className="feature-item">
            <span className="feature-icon">🚗</span>
            <span>Car Lessons</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🏍️</span>
            <span>Motorcycle Training</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🚛</span>
            <span>Truck Driving</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn-primary">Get Started Today</button>
          <button className="btn-secondary">View Pricing</button>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">500+</span>
            <span className="stat-label">Students Taught</span>
          </div>
          <div className="stat">
            <span className="stat-number">95%</span>
            <span className="stat-label">Pass Rate</span>
          </div>
          <div className="stat">
            <span className="stat-number">10+</span>
            <span className="stat-label">Years Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
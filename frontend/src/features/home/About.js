import '../../assets/css/about.css';

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-content">
          <h2>About Our Driving School</h2>
          <p className="about-intro">
            At DriveWithUs, we've been shaping confident, safe drivers for over a decade. 
            Our mission is to provide comprehensive driving education that goes beyond 
            just passing the test – we teach you to be a responsible, skilled driver for life.
          </p>
          
          <div className="about-features">
            <div className="feature">
              <div className="feature-icon">🎓</div>
              <h3>Certified Instructors</h3>
              <p>All our instructors are fully certified and undergo continuous training to stay updated with the latest driving techniques and regulations.</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">🚗</div>
              <h3>Modern Fleet</h3>
              <p>We maintain a modern fleet of well-maintained vehicles equipped with the latest safety features and dual controls for your protection.</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">📚</div>
              <h3>Comprehensive Training</h3>
              <p>From basic maneuvers to advanced defensive driving techniques, we cover everything you need to become a confident driver.</p>
            </div>
          </div>

          <div className="instructor-profile">
            <div className="instructor-info">
              <h3>Meet Your Instructor</h3>
              <div className="instructor-details">
                <div className="instructor-text">
                  <h4>John Smith</h4>
                  <p className="instructor-title">Lead Driving Instructor</p>
                  <ul className="instructor-credentials">
                    <li>✅ 12+ years of professional driving instruction</li>
                    <li>✅ Certified by the National Driving Standards Agency</li>
                    <li>✅ Specialized in nervous and anxious drivers</li>
                    <li>✅ 98% first-time pass rate</li>
                    <li>✅ Advanced defensive driving instructor</li>
                  </ul>
                  <p className="instructor-bio">
                    "I believe every student has the potential to become a great driver. 
                    My approach is patient, encouraging, and tailored to each individual's 
                    learning style. I'm here to build your confidence and ensure you're 
                    fully prepared for the road ahead."
                  </p>
                </div>
                <div className="instructor-image">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" 
                    alt="John Smith - Driving Instructor"
                    className="instructor-photo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
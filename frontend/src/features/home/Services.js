import '../../assets/css/services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Car Driving Lessons",
      icon: "🚗",
      description: "Comprehensive car driving instruction for all skill levels",
      features: [
        "Dual control vehicles for safety",
        "Theory and practical training",
        "Test preparation and booking",
        "Flexible scheduling options",
        "Nervous driver specialist",
        "Defensive driving techniques"
      ],
      duration: "1-2 hours per lesson",
      suitable: "All ages and experience levels"
    },
    {
      id: 2,
      title: "Motorcycle Training",
      icon: "🏍️",
      description: "Professional motorcycle riding instruction and certification",
      features: [
        "CBT (Compulsory Basic Training)",
        "Full motorcycle license preparation",
        "Safety gear provided",
        "Theory test support",
        "Practical test preparation",
        "Advanced riding techniques"
      ],
      duration: "2-4 hours per session",
      suitable: "Ages 16+ with provisional license"
    },
    {
      id: 3,
      title: "Truck Driving",
      icon: "🚛",
      description: "Commercial vehicle training for professional drivers",
      features: [
        "Category C & C+E training",
        "Professional driver development",
        "Industry-specific training",
        "Job placement assistance",
        "Fleet management basics",
        "Advanced maneuvering"
      ],
      duration: "4-8 hours per session",
      suitable: "Experienced drivers seeking commercial license"
    },
    {
      id: 4,
      title: "Refresher Courses",
      icon: "🔄",
      description: "Brush up your driving skills and regain confidence",
      features: [
        "Skill assessment and evaluation",
        "Targeted practice sessions",
        "Confidence building exercises",
        "Modern driving techniques",
        "Highway driving practice",
        "Parallel parking mastery"
      ],
      duration: "1-3 hours per session",
      suitable: "Licensed drivers wanting to improve"
    },
    {
      id: 5,
      title: "Intensive Courses",
      icon: "⚡",
      description: "Fast-track your learning with concentrated training",
      features: [
        "Daily lessons for rapid progress",
        "Comprehensive skill development",
        "Mock test practice",
        "Test booking assistance",
        "Confidence building",
        "Personalized learning plan"
      ],
      duration: "5-10 days intensive",
      suitable: "Students wanting quick results"
    },
    {
      id: 6,
      title: "Theory Test Preparation",
      icon: "📚",
      description: "Comprehensive theory test training and support",
      features: [
        "Hazard perception training",
        "Mock theory tests",
        "Highway Code study",
        "Test booking assistance",
        "Confidence building",
        "Pass guarantee support"
      ],
      duration: "2-4 hours per session",
      suitable: "All students preparing for theory test"
    }
  ];

  return (
    <section className="services">
      <div className="services-container">
        <div className="services-header">
          <h2>Our Driving Services</h2>
          <p>Comprehensive driving instruction tailored to your needs and goals</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <div className="service-features">
                <h4>What's Included:</h4>
                <ul>
                  {service.features.map((feature, index) => (
                    <li key={index}>
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-details">
                <div className="detail-item">
                  <span className="detail-label">Duration:</span>
                  <span className="detail-value">{service.duration}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Suitable for:</span>
                  <span className="detail-value">{service.suitable}</span>
                </div>
              </div>

              <button className="btn-service">Learn More</button>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <h3>Ready to Start Your Driving Journey?</h3>
          <p>Contact us today to discuss which service is right for you and book your first lesson.</p>
          <div className="cta-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">View Pricing</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

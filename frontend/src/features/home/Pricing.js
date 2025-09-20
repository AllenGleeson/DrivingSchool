import '../../assets/css/pricing.css';

const Pricing = () => {
  const lessonTypes = [
    {
      type: "Car Lessons",
      icon: "🚗",
      description: "Learn to drive safely with our comprehensive car driving program",
      features: [
        "Dual control vehicle for safety",
        "Theory and practical training",
        "Test preparation included",
        "Flexible scheduling"
      ],
      price: "€40",
      period: "per hour",
      popular: false
    },
    {
      type: "Motorcycle Training",
      icon: "🏍️",
      description: "Master motorcycle riding with our specialized training program",
      features: [
        "CBT (Compulsory Basic Training)",
        "Full license preparation",
        "Safety gear provided",
        "Experienced instructors"
      ],
      price: "€35",
      period: "per hour",
      popular: true
    },
    {
      type: "Truck Driving",
      icon: "🚛",
      description: "Professional truck driving training for commercial licenses",
      features: [
        "Category C & C+E training",
        "Professional driver development",
        "Industry-specific training",
        "Job placement assistance"
      ],
      price: "€70",
      period: "per hour",
      popular: false
    }
  ];

  const packages = [
    {
      name: "Beginner Package",
      price: "€320",
      originalPrice: "€400",
      description: "Perfect for complete beginners",
      lessons: "8 hours",
      features: [
        "Basic car controls",
        "Road awareness training",
        "Maneuvering practice",
        "Theory test preparation"
      ]
    },
    {
      name: "Intensive Course",
      price: "€600",
      originalPrice: "€800",
      description: "Fast-track your learning",
      lessons: "16 hours",
      features: [
        "Comprehensive training",
        "Mock test practice",
        "Confidence building",
        "Test booking assistance"
      ]
    },
    {
      name: "Refresher Course",
      price: "€120",
      originalPrice: "€160",
      description: "Brush up your skills",
      lessons: "3 hours",
      features: [
        "Skill assessment",
        "Weakness identification",
        "Targeted practice",
        "Confidence boost"
      ]
    }
  ];

  return (
    <section className="pricing">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2>Our Pricing & Packages</h2>
          <p>Choose the perfect learning path for your driving journey</p>
        </div>

        <div className="lesson-types">
          <h3>Individual Lesson Types</h3>
          <div className="lesson-grid">
            {lessonTypes.map((lesson, index) => (
              <div key={index} className={`lesson-card ${lesson.popular ? 'popular' : ''}`}>
                {lesson.popular && <div className="popular-badge">Most Popular</div>}
                <div className="lesson-icon">{lesson.icon}</div>
                <h4>{lesson.type}</h4>
                <p className="lesson-description">{lesson.description}</p>
                <div className="lesson-features">
                  {lesson.features.map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      <span className="check">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="lesson-price">
                  <span className="price">{lesson.price}</span>
                  <span className="period">{lesson.period}</span>
                </div>
                <button className="btn-lesson">Book Now</button>
              </div>
            ))}
          </div>
        </div>

        <div className="packages">
          <h3>Learning Packages</h3>
          <p className="packages-subtitle">Save money with our structured learning packages</p>
          <div className="package-grid">
            {packages.map((pkg, index) => (
              <div key={index} className="package-card">
                <div className="package-header">
                  <h4>{pkg.name}</h4>
                  <p className="package-description">{pkg.description}</p>
                </div>
                <div className="package-price">
                  <span className="current-price">{pkg.price}</span>
                  <span className="original-price">{pkg.originalPrice}</span>
                  <span className="lessons">{pkg.lessons}</span>
                </div>
                <div className="package-features">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      <span className="check">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="btn-package">Choose Package</button>
              </div>
            ))}
          </div>
        </div>

        <div className="pricing-note">
          <p>💡 <strong>Flexible Payment:</strong> All packages can be paid in installments. Contact us for more information about payment plans.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
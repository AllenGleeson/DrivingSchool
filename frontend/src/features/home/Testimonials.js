import '../../assets/css/testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      age: "23",
      course: "Car Lessons",
      rating: 5,
      text: "John is an amazing instructor! He was so patient with me as a complete beginner. I passed my test on the first try thanks to his excellent teaching methods and encouragement.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Mike Chen",
      age: "28",
      course: "Motorcycle Training",
      rating: 5,
      text: "The motorcycle training was fantastic! The instructor made me feel safe and confident throughout the entire process. I now ride with confidence and safety.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emma Davis",
      age: "31",
      course: "Truck Driving",
      rating: 5,
      text: "Professional truck driving training that prepared me perfectly for my commercial license. The instructor's industry experience really showed in the quality of training.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "James Wilson",
      age: "45",
      course: "Refresher Course",
      rating: 5,
      text: "After 20 years of not driving, I was nervous about getting back behind the wheel. The refresher course was perfect - I felt confident and safe in just 3 lessons!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Lisa Rodriguez",
      age: "19",
      course: "Car Lessons",
      rating: 5,
      text: "I was terrified of driving, but John's calm and patient approach helped me overcome my fears. Now I love driving and feel completely safe on the road.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "David Thompson",
      age: "35",
      course: "Intensive Course",
      rating: 5,
      text: "The intensive course was exactly what I needed to get my license quickly. Great value for money and excellent instruction. Highly recommended!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ⭐
      </span>
    ));
  };

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2>What Our Students Say</h2>
          <p>Don't just take our word for it - hear from our successful students</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="testimonial-image"
                />
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <p className="testimonial-age">{testimonial.age} years old</p>
                  <p className="testimonial-course">{testimonial.course}</p>
                </div>
              </div>
              
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
              
              <blockquote className="testimonial-text">
                "{testimonial.text}"
              </blockquote>
            </div>
          ))}
        </div>

        <div className="testimonials-stats">
          <div className="stat">
            <span className="stat-number">500+</span>
            <span className="stat-label">Happy Students</span>
          </div>
          <div className="stat">
            <span className="stat-number">98%</span>
            <span className="stat-label">Pass Rate</span>
          </div>
          <div className="stat">
            <span className="stat-number">4.9/5</span>
            <span className="stat-label">Average Rating</span>
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

export default Testimonials;

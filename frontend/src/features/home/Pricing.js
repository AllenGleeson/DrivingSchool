import '../../assets/css/pricing.css';

const Pricing = () => {
  const drivers = [
    { name: "John", vehicle: "Toyota Corolla", categories: ["Cars"], price: "€40/hr" },
    { name: "Sarah", vehicle: "Yamaha MT-07", categories: ["Motorcycles"], price: "€35/hr" },
    { name: "Mike", vehicle: "Scania R450", categories: ["Trucks", "Cars"], price: "€70/hr" },
  ];

  return (
    <section className="pricing">
      <div className='row'>
        <div className='col-6'>
          <div>
            <h2>Our Lessons & Prices</h2>
            <div className="driver-grid">
              {drivers.map((d, i) => (
                <div className="driver-card">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/017/173/365/small_2x/medical-avatar-flat-icons-elements-png.png"
                    alt={d.name}
                    className="about-img mb-3 mb-md-0 me-md-4"
                  />
                  <div>
                    <h3>{d.name}</h3>
                    <p><strong>Vehicle:</strong> {d.vehicle}</p>
                    <div>
                      <strong>Categories:</strong>{" "}
                      {d.categories.map((c, idx) => (
                        <span key={idx} className="badge bg-primary me-1">{c}</span>
                      ))}
                    </div>
                    <p><strong>Price:</strong> {d.price}</p>
                  </div>
                </div>

              ))}
            </div>
          </div>
        </div>
        <div className='col-6'>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
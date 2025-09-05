import '../../assets/css/pricing.css';

const Pricing = () => {
  const drivers = [
    { name: "John", vehicle: "Toyota Corolla", type: "Cars", price: "€40/hr" },
    { name: "Sarah", vehicle: "Yamaha MT-07", type: "Motorcycles", price: "€35/hr" },
    { name: "Mike", vehicle: "Scania R450", type: "Trucks", price: "€70/hr" },
  ];

  return (
    <section className="pricing">
      <h2>Our Lessons & Prices</h2>
      <div className="driver-grid">
        {drivers.map((d, i) => (
          <div key={i} className="driver-card">
            <h3>{d.name}</h3>
            <p><strong>Vehicle:</strong> {d.vehicle}</p>
            <p><strong>Category:</strong> {d.type}</p>
            <p><strong>Price:</strong> {d.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
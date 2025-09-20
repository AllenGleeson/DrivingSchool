import '../assets/css/home.css';
import Hero from "../features/home/Hero";
import Services from '../features/home/Services';
import Pricing from '../features/home/Pricing';
import About from '../features/home/About';
import Testimonials from '../features/home/Testimonials';
import Contact from '../features/home/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="container">
        <Services />
        <Pricing />
        <About />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
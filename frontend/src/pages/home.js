import '../assets/css/home.css';
import Hero from "../features/home/Hero";
import Pricing from '../features/home/Pricing';
import About from '../features/home/About';
import Contact from '../features/home/Contact';
import BookingCalendar from '../features/home/BookingCalendar';

const Home = () => {
  return (
    <div>
      <Hero />
      <Pricing />
      <About />
      <BookingCalendar />
      <Contact />
    </div>
  );
};

export default Home;
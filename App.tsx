import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Fleet from './components/Fleet';
import VehicleFinder from './components/VehicleFinder';
import Destinations from './components/Destinations';
import Pricing from './components/Pricing';
import WhyUs from './components/WhyUs';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';
import { Vehicle } from './types';

function App() {
  const [bookingVehicle, setBookingVehicle] = useState<string>('');

  const handleBook = (vehicle: Vehicle) => {
    setBookingVehicle(vehicle.name);
    setTimeout(() => {
      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <Navbar />
      <Hero />
      <Fleet onBook={handleBook} />
      <VehicleFinder />
      <Destinations />
      <Pricing />
      <WhyUs />
      <Reviews />
      <FAQ />
      <BookingForm prefillVehicle={bookingVehicle} />
      <Footer />
      <WhatsAppFAB />
    </>
  );
}

export default App;

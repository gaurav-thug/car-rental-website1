import { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Fleet from './Fleet';
import VehicleFinder from './VehicleFinder';
import Destinations from './Destinations';
import Pricing from './Pricing';
import WhyUs from './WhyUs';
import Reviews from './Reviews';
import FAQ from './FAQ';
import BookingForm from './BookingForm';
import Footer from './Footer';
import WhatsAppFAB from './WhatsAppFAB';
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

import { ArrowRight, Search, MessageCircle, Star } from 'lucide-react';

const WA_NUMBER = '919999999999';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-eyebrow">
          <Star size={12} fill="currentColor" />
          Premium Car Rental & Travel Agency
        </div>
        <h1 className="hero-title">
          Book The <span className="accent">Perfect Vehicle</span> For Every Journey
        </h1>
        <p className="hero-subtitle">
          From family trips to corporate travel and group tours — find your ideal vehicle at transparent, honest pricing.
        </p>
        <div className="hero-actions">
          <a href="#fleet" className="btn-primary">
            <ArrowRight size={18} />
            Explore Fleet
          </a>
          <a href="#finder" className="btn-outline">
            <Search size={18} />
            Find My Vehicle
          </a>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hi!%20I'd%20like%20to%20book%20a%20vehicle.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <MessageCircle size={18} />
            WhatsApp Booking
          </a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-number">5000+</div>
            <div className="hero-stat-label">Happy Travelers</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">14+</div>
            <div className="hero-stat-label">Vehicle Types</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">100+</div>
            <div className="hero-stat-label">Destinations</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">24/7</div>
            <div className="hero-stat-label">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}

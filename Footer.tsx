import { Car, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const WA_NUMBER = '919999999999';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1rem' }}>
            <div className="logo-icon"><Car size={22} color="#0a1628" /></div>
            <span className="logo-text">Drive<span>Ease</span></span>
          </div>
          <p>
            Premium car rental and travel services across North India. Trusted by families, corporates, and adventure seekers since 2012.
          </p>
          <a
            href={`https://wa.me/${WA_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            style={{ display: 'inline-flex', marginTop: '1rem', fontSize: '0.88rem', padding: '0.6rem 1.2rem' }}
          >
            <MessageCircle size={16} />
            Chat on WhatsApp
          </a>
        </div>

        <div>
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#fleet">Our Fleet</a></li>
            <li><a href="#finder">Find Vehicle</a></li>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#booking">Book Now</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-heading">Fleet Categories</h4>
          <ul className="footer-links">
            <li><a href="#fleet">Hatchback & Sedan</a></li>
            <li><a href="#fleet">Premium Sedan</a></li>
            <li><a href="#fleet">SUV & 4x4</a></li>
            <li><a href="#fleet">Innova Crysta</a></li>
            <li><a href="#fleet">Luxury Cars</a></li>
            <li><a href="#fleet">Tempo Traveller</a></li>
            <li><a href="#fleet">Buses & Coaches</a></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-heading">Contact Us</h4>
          <div className="footer-contact-item">
            <Phone size={14} />
            <span>+91 99999 99999</span>
          </div>
          <div className="footer-contact-item">
            <Mail size={14} />
            <span>bookings@driveease.in</span>
          </div>
          <div className="footer-contact-item">
            <MapPin size={14} />
            <span>New Delhi, India — Serving Pan North India</span>
          </div>
          <div style={{ marginTop: '1.25rem' }}>
            <h4 className="footer-heading">Services</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {['Local', 'Outstation', 'Airport Transfer', 'Wedding', 'Corporate', 'Group Tours', 'Pilgrimage'].map(s => (
                <span key={s} style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)', padding: '2px 10px', borderRadius: 100, fontSize: '0.72rem', fontFamily: 'var(--font-ui)' }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2025 DriveEase. All rights reserved.</span>
        <span>Made with ❤️ for travelers across India</span>
      </div>
    </footer>
  );
}

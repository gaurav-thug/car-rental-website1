import { X, MapPin, MessageCircle } from 'lucide-react';
import { Vehicle } from '../types';

interface Props {
  vehicle: Vehicle;
  onClose: () => void;
  onBook: (v: Vehicle) => void;
}

const WA_NUMBER = '919999999999';

export default function VehicleModal({ vehicle, onClose, onBook }: Props) {
  const waMsg = encodeURIComponent(
    `Hi! I'm interested in booking a ${vehicle.name}.\nRate: ₹${vehicle.pricePerKm}/km\nPlease share availability.`
  );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X size={18} /></button>
        <img src={vehicle.image} alt={vehicle.name} className="modal-image" />
        <div className="modal-body">
          <h2 className="modal-title">{vehicle.name}</h2>
          <div className="modal-best-for">✦ Best for: {vehicle.bestFor}</div>
          <p className="modal-desc">{vehicle.description}</p>

          <div className="modal-specs-grid">
            <div className="modal-spec">
              <div className="modal-spec-label">Capacity</div>
              <div className="modal-spec-value">{vehicle.capacity}</div>
            </div>
            <div className="modal-spec">
              <div className="modal-spec-label">Luggage</div>
              <div className="modal-spec-value">{vehicle.luggage}</div>
            </div>
            <div className="modal-spec">
              <div className="modal-spec-label">AC</div>
              <div className="modal-spec-value">{vehicle.ac ? '✅ Yes' : '❌ No'}</div>
            </div>
          </div>

          <div className="modal-features-grid">
            {vehicle.features.map(f => (
              <span key={f} className="modal-feature-tag">{f}</span>
            ))}
          </div>

          <div className="modal-destinations">
            <h4>Popular Destinations</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {vehicle.destinations.map(d => (
                <span key={d} style={{ display: 'flex', alignItems: 'center', gap: '4px', background: '#f1f4f9', padding: '3px 10px', borderRadius: '100px', fontSize: '0.78rem', color: '#475569', fontFamily: 'var(--font-ui)' }}>
                  <MapPin size={10} />
                  {d}
                </span>
              ))}
            </div>
          </div>

          <div className="modal-pricing">
            <div>
              <div className="modal-price-label">Starting Rate</div>
              <div className="modal-price-amount">₹{vehicle.pricePerKm}<span style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)' }}>/km</span></div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="modal-price-label">Driver Included</div>
              <div style={{ color: '#f0c040', fontFamily: 'var(--font-ui)', fontWeight: 700 }}>✅ Always</div>
            </div>
          </div>

          <div className="modal-actions">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ flex: 1, justifyContent: 'center' }}
            >
              <MessageCircle size={18} />
              WhatsApp Enquiry
            </a>
            <button
              className="btn-primary"
              style={{ flex: 1, justifyContent: 'center' }}
              onClick={() => { onBook(vehicle); onClose(); }}
            >
              Book This Vehicle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

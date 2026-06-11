import { useState } from 'react';
import { Search, Users, MapPin, Wind, Briefcase, MessageCircle } from 'lucide-react';
import { FinderForm, Vehicle } from '../types';
import { getRecommendations } from './recommendations';

const WA_NUMBER = '919999999999';

export default function VehicleFinder() {
  const [form, setForm] = useState<FinderForm>({
    passengers: 2,
    destination: '',
    tripType: 'outstation',
    luggage: 'medium',
  });
  const [results, setResults] = useState<{ vehicles: Vehicle[]; reason: string } | null>(null);

  const handleSubmit = () => {
    if (!form.destination.trim()) {
      alert('Please enter your destination.');
      return;
    }
    setResults(getRecommendations(form));
  };

  const makeWaLink = (v: Vehicle) => {
    const msg = encodeURIComponent(
      `Hi! I'd like to book a ${v.name} for ${form.passengers} passengers to ${form.destination} (${form.tripType} trip).\nPlease share availability and pricing.`
    );
    return `https://wa.me/${WA_NUMBER}?text=${msg}`;
  };

  return (
    <section className="section section-dark" id="finder">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Smart Finder</p>
          <h2 className="section-title">Find Your Perfect Vehicle</h2>
          <p className="section-subtitle">
            Tell us about your trip and we'll instantly recommend the best vehicle options for you.
          </p>
        </div>

        <div className="finder-card">
          <div className="finder-grid">
            <div className="form-group">
              <label className="form-label">
                <Users size={12} style={{ display: 'inline', marginRight: 4 }} />
                Passengers
              </label>
              <input
                type="number"
                className="form-input"
                min={1}
                max={50}
                value={form.passengers}
                onChange={e => setForm(f => ({ ...f, passengers: Number(e.target.value) }))}
              />
            </div>
            <div className="form-group">
              <label className="form-label">
                <MapPin size={12} style={{ display: 'inline', marginRight: 4 }} />
                Destination
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Manali, Jaipur..."
                value={form.destination}
                onChange={e => setForm(f => ({ ...f, destination: e.target.value }))}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Trip Type</label>
              <select
                className="form-select"
                value={form.tripType}
                onChange={e => setForm(f => ({ ...f, tripType: e.target.value }))}
              >
                <option value="local">Local</option>
                <option value="one-way">One Way</option>
                <option value="round-trip">Round Trip</option>
                <option value="outstation">Outstation</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">
                <Briefcase size={12} style={{ display: 'inline', marginRight: 4 }} />
                Luggage
              </label>
              <select
                className="form-select"
                value={form.luggage}
                onChange={e => setForm(f => ({ ...f, luggage: e.target.value }))}
              >
                <option value="light">Light (1–2 bags)</option>
                <option value="medium">Medium (3–4 bags)</option>
                <option value="heavy">Heavy (5+ bags)</option>
              </select>
            </div>
          </div>
          <button className="finder-submit" onClick={handleSubmit}>
            <Search size={18} />
            Find Best Vehicles
          </button>

          {results && (
            <div className="rec-results">
              <div className="rec-reason">
                <strong>Our Recommendation:</strong> {results.reason}
              </div>
              <div className="rec-grid">
                {results.vehicles.map(v => (
                  <div key={v.id} className="rec-card">
                    <img src={v.image} alt={v.name} loading="lazy" />
                    <div className="rec-card-name">{v.name}</div>
                    <div className="rec-specs">
                      <div className="rec-spec"><Users size={12} /> {v.capacity}</div>
                      <div className="rec-spec"><Briefcase size={12} /> {v.luggage}</div>
                      <div className="rec-spec"><Wind size={12} /> {v.ac ? 'AC Included' : 'Non-AC'}</div>
                    </div>
                    <div className="rec-price">₹{v.pricePerKm}<span>/km onwards</span></div>
                    <a
                      href={makeWaLink(v)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp"
                      style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem', padding: '0.6rem 1rem' }}
                    >
                      <MessageCircle size={15} />
                      Enquire on WhatsApp
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

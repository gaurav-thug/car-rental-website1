import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { BookingForm as BF } from '../types';
import { vehicles } from '../data/vehicles';

const WA_NUMBER = '919999999999';

interface Props {
  prefillVehicle?: string;
}

export default function BookingForm({ prefillVehicle }: Props) {
  const [form, setForm] = useState<BF>({
    name: '',
    phone: '',
    pickupCity: '',
    destination: '',
    date: '',
    passengers: '',
    vehiclePreference: prefillVehicle || '',
    message: '',
  });

  const set = (k: keyof BF) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = () => {
    const { name, phone, pickupCity, destination, date, passengers } = form;
    if (!name || !phone || !pickupCity || !destination || !date) {
      alert('Please fill in all required fields.');
      return;
    }
    const msg = encodeURIComponent(
      `🚗 *New Booking Request — DriveEase*\n\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Pickup:* ${pickupCity}\n` +
      `*Destination:* ${destination}\n` +
      `*Date:* ${date}\n` +
      `*Passengers:* ${passengers || 'Not specified'}\n` +
      `*Vehicle Preference:* ${form.vehiclePreference || 'Any suitable'}\n` +
      `*Message:* ${form.message || 'None'}`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
  };

  return (
    <section className="section section-alt" id="booking">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Book Your Ride</p>
          <h2 className="section-title" style={{ color: 'var(--navy)' }}>
            Start Your Journey Today
          </h2>
          <p className="section-subtitle">
            Fill in your details and we'll send you a confirmed quote via WhatsApp within 30 minutes.
          </p>
        </div>

        <div className="booking-form">
          <div className="booking-grid">
            <div className="form-group">
              <label className="form-label">Your Name *</label>
              <input className="form-input" placeholder="Full name" value={form.name} onChange={set('name')} />
            </div>
            <div className="form-group">
              <label className="form-label">Phone Number *</label>
              <input className="form-input" placeholder="WhatsApp number" value={form.phone} onChange={set('phone')} />
            </div>
            <div className="form-group">
              <label className="form-label">Pickup City *</label>
              <input className="form-input" placeholder="e.g. Delhi, Noida" value={form.pickupCity} onChange={set('pickupCity')} />
            </div>
            <div className="form-group">
              <label className="form-label">Destination *</label>
              <input className="form-input" placeholder="e.g. Manali, Jaipur" value={form.destination} onChange={set('destination')} />
            </div>
            <div className="form-group">
              <label className="form-label">Travel Date *</label>
              <input className="form-input" type="date" value={form.date} onChange={set('date')} />
            </div>
            <div className="form-group">
              <label className="form-label">Passengers</label>
              <input className="form-input" type="number" placeholder="Number of passengers" min={1} value={form.passengers} onChange={set('passengers')} />
            </div>
            <div className="form-group" style={{ gridColumn: '1 / -1' }}>
              <label className="form-label">Vehicle Preference</label>
              <select className="form-select" value={form.vehiclePreference} onChange={set('vehiclePreference')}>
                <option value="">Any suitable vehicle</option>
                {vehicles.map(v => (
                  <option key={v.id} value={v.name}>{v.name} — ₹{v.pricePerKm}/km</option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Additional Message</label>
            <textarea
              className="booking-textarea"
              placeholder="Any special requirements, preferred pickup time, return date for round trips..."
              value={form.message}
              onChange={set('message')}
            />
          </div>
          <button className="booking-submit" onClick={handleSubmit}>
            <MessageCircle size={20} />
            Send Booking Request on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}

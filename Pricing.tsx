import { Info } from 'lucide-react';
import { vehicles } from './vehicles';

export default function Pricing() {
  return (
    <section className="section section-alt" id="pricing">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Transparent Pricing</p>
          <h2 className="section-title" style={{ color: 'var(--navy)' }}>
            Clear Rates, No Hidden Charges
          </h2>
          <p className="section-subtitle">
            Straightforward per-kilometre pricing. Driver allowance and fuel included. Tolls & parking extra.
          </p>
        </div>

        <div className="pricing-table" style={{ maxWidth: 720, margin: '0 auto 2rem' }}>
          {vehicles.map(v => (
            <div key={v.id} className="pricing-row">
              <div>
                <div className="pricing-vehicle">{v.name}</div>
              </div>
              <div className="pricing-capacity">{v.capacity}</div>
              <div className="pricing-amount">₹{v.pricePerKm}/km</div>
            </div>
          ))}
        </div>

        <div style={{
          background: 'rgba(212,160,23,0.08)',
          border: '1px solid rgba(212,160,23,0.3)',
          borderRadius: 'var(--radius)',
          padding: '1.25rem 1.5rem',
          maxWidth: 720,
          margin: '0 auto',
          display: 'flex',
          gap: '12px',
          alignItems: 'flex-start'
        }}>
          <Info size={18} color="var(--gold)" style={{ flexShrink: 0, marginTop: 2 }} />
          <div style={{ fontSize: '0.85rem', color: 'var(--gray-600)', lineHeight: 1.7 }}>
            <strong style={{ color: 'var(--navy)' }}>Pricing Notes:</strong> All rates include driver allowance and fuel. Toll taxes, parking, and state permits are charged extra. Night charges apply between 10 PM – 6 AM. Outstation minimum billing is 250 km/day. Rates are indicative — final quote shared on booking.
          </div>
        </div>
      </div>
    </section>
  );
}

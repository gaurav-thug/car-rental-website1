import { MapPin } from 'lucide-react';
import { destinations } from './destinations';
import { vehicles } from './vehicles';

const typeLabel: Record<string, string> = {
  hill: '⛰ Hill Station',
  heritage: '🏛 Heritage',
  spiritual: '🪔 Spiritual',
  city: '🏙 City',
};

export default function Destinations() {
  const getVehicleName = (id: string) => {
    return vehicles.find(v => v.id === id)?.name || id;
  };

  return (
    <section className="section" id="destinations">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Popular Destinations</p>
          <h2 className="section-title" style={{ color: 'var(--navy)' }}>
            Where Would You Like to Go?
          </h2>
          <p className="section-subtitle">
            From snow-capped hills to ancient heritage sites — we'll get you there in comfort and style.
          </p>
        </div>

        <div className="destinations-grid">
          {destinations.map(dest => (
            <div key={dest.id} className="destination-card">
              <img src={dest.image} alt={dest.name} loading="lazy" />
              <div className="destination-overlay" />
              <div className="destination-content">
                <div className="destination-type">{typeLabel[dest.type]}</div>
                <div className="destination-name">{dest.name}</div>
                <div className="destination-state">{dest.state}</div>
                {dest.distance && (
                  <div className="destination-distance">
                    <MapPin size={10} style={{ display: 'inline', marginRight: 3 }} />
                    {dest.distance}
                  </div>
                )}
                <div className="destination-vehicles">
                  {dest.recommendedVehicles.slice(0, 2).map(id => (
                    <span key={id} className="dest-vehicle-tag">{getVehicleName(id)}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

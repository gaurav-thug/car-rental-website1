import { useState } from 'react';
import { Users, Briefcase, Wind, Eye, MessageCircle } from 'lucide-react';
import { vehicles, filterCategories } from '../data/vehicles';
import { Vehicle } from '../types';
import VehicleModal from './VehicleModal';


interface Props {
  onBook: (v: Vehicle) => void;
}

export default function Fleet({ onBook }: Props) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const filtered = activeFilter === 'all'
    ? vehicles
    : vehicles.filter(v => v.category.includes(activeFilter));

  return (
    <section className="section section-alt" id="fleet">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Our Fleet</p>
          <h2 className="section-title" style={{ color: 'var(--navy)' }}>
            Vehicles For Every Need
          </h2>
          <p className="section-subtitle">
            From compact hatchbacks to luxury coaches — browse our complete fleet and find your perfect match.
          </p>
        </div>

        <div className="filter-bar">
          {filterCategories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn${activeFilter === cat.id ? ' active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="fleet-grid">
          {filtered.map(vehicle => (
            <div key={vehicle.id} className="vehicle-card">
              <div className="vehicle-card-image">
                <img src={vehicle.image} alt={vehicle.name} loading="lazy" />
                {vehicle.badge && <div className="vehicle-badge">{vehicle.badge}</div>}
                <div className="vehicle-price-chip">₹{vehicle.pricePerKm}/km</div>
              </div>
              <div className="vehicle-card-body">
                <h3 className="vehicle-card-name">{vehicle.name}</h3>
                <p className="vehicle-card-best">{vehicle.bestFor}</p>
                <div className="vehicle-specs">
                  <div className="vehicle-spec">
                    <Users size={14} />
                    {vehicle.capacity}
                  </div>
                  <div className="vehicle-spec">
                    <Briefcase size={14} />
                    {vehicle.luggage}
                  </div>
                  <div className="vehicle-spec">
                    <Wind size={14} />
                    {vehicle.ac ? 'AC' : 'Non-AC'}
                  </div>
                </div>
                <div className="vehicle-features">
                  {vehicle.features.slice(0, 3).map(f => (
                    <span key={f} className="feature-tag">{f}</span>
                  ))}
                  {vehicle.features.length > 3 && (
                    <span className="feature-tag">+{vehicle.features.length - 3} more</span>
                  )}
                </div>
                <div className="vehicle-card-actions">
                  <button className="btn-card-secondary" onClick={() => setSelectedVehicle(vehicle)}>
                    <Eye size={14} style={{ display: 'inline', marginRight: 4 }} />
                    View Details
                  </button>
                  <button className="btn-card-primary" onClick={() => onBook(vehicle)}>
                    <MessageCircle size={14} style={{ display: 'inline', marginRight: 4 }} />
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedVehicle && (
        <VehicleModal
          vehicle={selectedVehicle}
          onClose={() => setSelectedVehicle(null)}
          onBook={onBook}
        />
      )}
    </section>
  );
}

import { Shield, Sparkles, IndianRupee, Clock, Navigation, Building2, PlaneTakeoff, Heart, Users, MapPin } from 'lucide-react';

const features = [
  { icon: Shield, title: 'Verified Drivers', desc: 'Background-checked, experienced professionals with valid commercial licenses.' },
  { icon: Sparkles, title: 'Sanitized Vehicles', desc: 'Every vehicle deep-cleaned and sanitized before your journey begins.' },
  { icon: IndianRupee, title: 'Transparent Pricing', desc: 'What we quote is what you pay — no hidden charges, ever.' },
  { icon: Clock, title: '24/7 Support', desc: 'Round-the-clock assistance from our dedicated travel coordinators.' },
  { icon: Navigation, title: 'GPS Tracking', desc: 'Real-time vehicle tracking for safety and peace of mind.' },
  { icon: Building2, title: 'Corporate Services', desc: 'Dedicated account managers and monthly billing for businesses.' },
  { icon: PlaneTakeoff, title: 'Airport Transfers', desc: 'Punctual pickups and drops with live flight monitoring.' },
  { icon: Heart, title: 'Wedding Packages', desc: 'Decorated luxury vehicles and coordinated wedding fleets.' },
  { icon: Users, title: 'Family Specialists', desc: 'Child-friendly vehicles and extra care for elderly travelers.' },
  { icon: MapPin, title: 'Outstation Experts', desc: '10+ years of outstation routing experience across North India.' },
];

export default function WhyUs() {
  return (
    <section className="section section-dark" id="why-us">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Why DriveEase</p>
          <h2 className="section-title">Travel With Confidence</h2>
          <p className="section-subtitle">
            Ten reasons thousands of families and businesses trust us for every journey.
          </p>
        </div>
        <div className="features-grid">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="feature-card">
              <div className="feature-icon">
                <Icon size={24} />
              </div>
              <div className="feature-title">{title}</div>
              <div className="feature-desc">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

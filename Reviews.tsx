import { Star } from 'lucide-react';

const reviews = [
  {
    text: "Booked an Innova Crysta for our Manali trip with 6 people. The driver was incredibly professional and knowledgeable about the mountain roads. Highly recommend DriveEase!",
    name: "Priya Sharma",
    trip: "Manali Trip • Innova Crysta",
    initial: "P",
  },
  {
    text: "Used their luxury car service for our wedding. The vehicle was spotless, decorated beautifully, and the chauffeur was on time. Made our special day even more special.",
    name: "Rahul & Anjali Mehta",
    trip: "Wedding • Luxury Car",
    initial: "R",
  },
  {
    text: "Our office organized a Jaipur trip for 20 employees. DriveEase arranged a mini bus — comfortable, AC, punctual, and within budget. Will definitely use again.",
    name: "Vikram Patel",
    trip: "Corporate Outing • Mini Bus",
    initial: "V",
  },
  {
    text: "Transparent pricing is what I love most. No surprises on the final bill. Driver was polite and vehicle was clean. Did Delhi–Haridwar–Rishikesh trip comfortably.",
    name: "Meera Joshi",
    trip: "Haridwar–Rishikesh • Sedan",
    initial: "M",
  },
  {
    text: "Needed a 4x4 for Leh-Ladakh. DriveEase provided a well-maintained vehicle with a driver who knew every switchback on the route. Absolutely worth every rupee.",
    name: "Arjun Singh",
    trip: "Leh-Ladakh • 4×4 SUV",
    initial: "A",
  },
  {
    text: "The airport transfer was seamless. Driver tracked my flight delay and was waiting when I landed. That's the kind of service that makes you a loyal customer.",
    name: "Deepa Nair",
    trip: "Airport Transfer • Sedan",
    initial: "D",
  },
];

export default function Reviews() {
  return (
    <section className="section section-alt" id="reviews">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Customer Stories</p>
          <h2 className="section-title" style={{ color: 'var(--navy)' }}>
            What Our Travelers Say
          </h2>
          <p className="section-subtitle">
            Real reviews from real journeys — because nothing speaks louder than experience.
          </p>
        </div>
        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <div key={i} className="review-card">
              <div className="review-stars">
                {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
              </div>
              <p className="review-text">"{r.text}"</p>
              <div className="reviewer">
                <div className="reviewer-avatar">{r.initial}</div>
                <div>
                  <div className="reviewer-name">{r.name}</div>
                  <div className="reviewer-trip">{r.trip}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

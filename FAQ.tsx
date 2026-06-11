import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'How are per km charges calculated?',
    a: 'Our rates are calculated on the actual kilometres driven from pickup to drop. For outstation trips, a minimum of 250 km per day applies. All charges are shared upfront before booking confirmation.',
  },
  {
    q: 'Is the driver\'s allowance included in the rate?',
    a: 'Yes. Driver allowance (batta), fuel costs, and the driver\'s accommodation for outstation overnight trips are included in our quoted rate. No surprise additions at the end of your journey.',
  },
  {
    q: 'Are there night driving charges?',
    a: 'Night charges of ₹200–₹400 apply for trips that require the driver to work between 10 PM and 6 AM. This is clearly communicated at the time of booking.',
  },
  {
    q: 'Who pays for toll tax and parking?',
    a: 'Toll taxes and parking charges are paid by the customer as they are government-levied fees and vary by route. We always provide receipts for all such charges.',
  },
  {
    q: 'How do outstation bookings work?',
    a: 'For outstation trips, share your pickup location, destination, date, and passenger count. We confirm availability within 30 minutes and send a detailed quote. Payment can be made 50% upfront and 50% on trip completion.',
  },
  {
    q: 'What is the cancellation policy?',
    a: 'Cancellations made 24+ hours before the trip: full refund. Within 12–24 hours: 50% refund. Less than 12 hours: no refund. Cancellations during special events or peak seasons may have different terms.',
  },
  {
    q: 'Are vehicles available for multi-day trips?',
    a: 'Absolutely. We specialize in multi-day outstation trips. Our drivers are experienced with long routes and familiar with major destinations across North India, Rajasthan, and the Himalayan belt.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section section-dark" id="faq">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">FAQ</p>
          <h2 className="section-title">Common Questions</h2>
          <p className="section-subtitle">
            Everything you need to know before you book.
          </p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
              <button
                className="faq-question"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {faq.q}
                <ChevronDown size={18} className="faq-icon" />
              </button>
              {open === i && (
                <div className="faq-answer">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

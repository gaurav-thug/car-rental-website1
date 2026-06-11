import { MessageCircle } from 'lucide-react';

const WA_NUMBER = '919999999999';

export default function WhatsAppFAB() {
  return (
    <a
      href={`https://wa.me/${WA_NUMBER}?text=Hi!%20I'd%20like%20to%20book%20a%20vehicle%20with%20DriveEase.`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} fill="white" />
    </a>
  );
}

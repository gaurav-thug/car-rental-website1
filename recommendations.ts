import { vehicles } from './vehicles';
import { Vehicle, FinderForm } from '../types';

const hillStations = ['manali', 'shimla', 'nainital', 'mussoorie', 'kasol', 'leh', 'dharamshala', 'leh-ladakh'];

function isHillStation(dest: string): boolean {
  return hillStations.some(h => dest.toLowerCase().includes(h));
}


export function getRecommendations(form: FinderForm): { vehicles: Vehicle[]; reason: string } {
  const { passengers, destination, luggage } = form;
  const dest = destination.toLowerCase();
  const isHill = isHillStation(dest);

  let candidateIds: string[] = [];
  let reason = '';

  // Passenger-based selection
  if (passengers <= 3) {
    candidateIds = ['hatchback', 'sedan'];
    reason = 'For 1–3 passengers, compact vehicles offer the best value and maneuverability.';
  } else if (passengers === 4) {
    candidateIds = ['sedan', 'premium-sedan', 'compact-suv'];
    reason = 'For 4 passengers, a Sedan or Compact SUV provides the ideal comfort-to-cost ratio.';
  } else if (passengers === 5) {
    candidateIds = ['compact-suv', 'suv', 'muv-mpv'];
    reason = 'A Compact SUV or MUV comfortably fits 5 passengers with room for luggage.';
  } else if (passengers <= 7) {
    candidateIds = ['suv', 'muv-mpv', 'innova-crysta'];
    reason = 'For 6–7 passengers, an Innova Crysta or SUV is the go-to choice for comfort.';
  } else if (passengers <= 17) {
    candidateIds = ['tempo-traveller', 'force-traveller'];
    reason = 'Tempo or Force Traveller provides the perfect group travel experience for your team.';
  } else if (passengers <= 25) {
    candidateIds = ['mini-bus'];
    reason = 'A Mini Bus is perfectly sized for your group, with comfortable seating for all.';
  } else {
    candidateIds = ['coach-bus', 'luxury-bus'];
    reason = 'A Coach or Luxury Bus is the best option for large groups ensuring everyone travels together.';
  }

  // Override/refine for hill stations
  if (isHill && passengers <= 7) {
    const hillCandidates = ['4x4-suv', 'innova-crysta', 'suv'];
    // Merge, prioritizing hill-capable vehicles
    candidateIds = [...hillCandidates, ...candidateIds.filter(id => !hillCandidates.includes(id))];
    reason = 'Hill routes require better ground clearance, powerful engines, and 4WD capability. ' + reason;
  }

  // Refine for luggage
  if (luggage === 'heavy') {
    const heavyVehicles = ['innova-crysta', 'suv', '4x4-suv', 'muv-mpv', 'tempo-traveller', 'force-traveller', 'mini-bus', 'coach-bus', 'luxury-bus'];
    candidateIds = candidateIds.filter(id => heavyVehicles.includes(id));
    if (candidateIds.length === 0) {
      candidateIds = ['suv', 'innova-crysta'];
    }
  }

  const result = candidateIds
    .map(id => vehicles.find(v => v.id === id))
    .filter((v): v is Vehicle => !!v)
    .slice(0, 3);

  if (result.length === 0) {
    return { vehicles: [vehicles[1]], reason: 'We recommend a Sedan for your journey.' };
  }

  return { vehicles: result, reason };
}

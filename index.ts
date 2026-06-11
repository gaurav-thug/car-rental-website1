export interface Vehicle {
  id: string;
  name: string;
  category: string[];
  capacity: string;
  luggage: string;
  ac: boolean;
  pricePerKm: number;
  image: string;
  features: string[];
  bestFor: string;
  description: string;
  destinations: string[];
  badge?: string;
}

export interface Destination {
  id: string;
  name: string;
  state: string;
  image: string;
  type: 'hill' | 'heritage' | 'spiritual' | 'city';
  recommendedVehicles: string[];
  distance?: string;
}

export interface BookingForm {
  name: string;
  phone: string;
  pickupCity: string;
  destination: string;
  date: string;
  passengers: string;
  vehiclePreference: string;
  message: string;
}

export interface FinderForm {
  passengers: number;
  destination: string;
  tripType: string;
  luggage: string;
}

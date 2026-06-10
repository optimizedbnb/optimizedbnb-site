export interface Property {
  id: string;
  name: string;
  publicName: string;
  city: string;
  neighborhood: string;
  photo: string;
  guests?: number;
  bedrooms?: number;
  bathrooms?: number;
  pricePerNight?: number;
  rating?: number;
  reviewCount?: number;
  slug?: string;
  description?: string;
  amenities?: string[];
  photos?: string[];
  images?: { url: string; caption?: string | null }[];
  available?: boolean;
}

export interface Review {
  guest: string;
  rating: number;
  tag: string;
  text: string;
}

export interface SearchParams {
  checkIn?: string;
  checkOut?: string;
  guests?: number;
}

export interface InquiryPayload {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  message: string;
}

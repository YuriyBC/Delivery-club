export interface DeliveryItem {
  id: number;
  name: string;
  category: string[];
  cuisine: string[];
  price_average: number;
  price_currency: string;
  delivery_time_average: number;
  delivery_distance_average: number;
  rating: number;
  popularity: string;
  img: string;
  workTimeStart: number;
  workTimeEnd: number;
}

export interface ActiveFilters {
  categories: string[];
  cuisines: string[];
  availabilityTime: number | null;
  pricing: number | null;
  range: number | null;
}

export interface SortingOption {
  displayName: string;
  value: string;
}

export interface DeliveryInfo {
  id: number;
  name: string;
  category: string[];
  cuisine: string[];
  price_average: number;
  price_currency: string;
  delivery_time_average: number;
  delivery_distance_average: number;
  rating: number;
  popularity: string;
  workTimeStart: number;
  workTimeEnd: number;
  img: string;
  companyLogo: string;
  companyBackground: string;
  items: MenuEntity[];
  city: string,
  line1: string,
  building: string,
}

export interface MenuEntity {
  id: number;
  type: string;
  name: string;
  description: string;
  price: number;
  weight: number;
  image: string;
}

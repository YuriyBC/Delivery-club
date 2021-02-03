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

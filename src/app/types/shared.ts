export interface DeliveryItem {
  id: number,
  name: string,
  category: string[],
  cuisine: string[],
  price_average: number,
  price_currency: string,
  delivery_time_average: number,
  delivery_distance_average: number,
  rating: string,
  popularity: string,
  img: string,
}

import { DeliveryItem } from "../types/shared";

export default [
  {
    id: 2131,
    name: 'PIZZA ITALIANO',
    category: ['Soup', 'Pizza', 'Burger'],
    cuisine: ['Italian'],
    price_average: 10,
    price_currency: 'USD',
    delivery_time_average: 3300,
    delivery_distance_average: 20000,
    rating: 4.233112,
    popularity: '2130',
    workTimeStart: 28800, // 08:00
    workTimeEnd: 57600, // 16:00
    img: 'https://www.delivery-club.ru/naturmort/1000034_480x300.jpg?resize=fill&width=480&height=480&gravity=ce&out=webp',
  },
  {
    id: 2132,
    name: 'SUSHI SHOP',
    category: ['Soup', 'Cake', 'Sushi', 'Rolls'],
    cuisine: ['Japanese', 'Chinese'],
    price_average: 8,
    price_currency: 'USD',
    delivery_time_average: 3000,
    delivery_distance_average: 10000,
    rating: 4.3332,
    workTimeStart: 7200, // 02:00
    workTimeEnd: 46800, // 13:00
    popularity: '1130',
    img: 'https://www.delivery-club.ru/naturmort/2000029_480x300.jpg?resize=fill&width=480&height=480&gravity=ce&out=webp',
  },
  {
    id: 2133,
    name: 'Taunuki',
    category: ['Soup'],
    cuisine: ['Japanese', 'Chinese'],
    price_average: 6,
    price_currency: 'USD',
    delivery_time_average: 2400,
    delivery_distance_average: 8000,
    rating: 4.2432,
    workTimeStart: 46800, // 13:00
    workTimeEnd: 0, // 00:00
    popularity: '1330',
    img: 'https://www.delivery-club.ru/naturmort/5ce524391a77c_480x300.jpg?resize=fill&width=480&height=480&gravity=ce&out=webp',
  },
  {
    id: 2133,
    name: 'Subway',
    category: ['Coffie'],
    cuisine: ['Japanese', 'Chinese'],
    price_average: 23,
    price_currency: 'USD',
    delivery_time_average: 1500,
    delivery_distance_average: 8000,
    rating: 4.302,
    workTimeStart: 0, // 00:00
    workTimeEnd: 0, // 00:00
    popularity: '4330',
    img: "https://www.delivery-club.ru/naturmort/5f97d422703ef_480x300.jpg?resize=fill&width=480&height=480&gravity=ce&out=webp",
  },
] as DeliveryItem[];

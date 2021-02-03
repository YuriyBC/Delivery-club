import { Injectable } from '@angular/core';
import { ActiveFilters, DeliveryItem } from "../types/shared";

@Injectable({
  providedIn: 'root'
})
export class FiltrationHelperService {
  getAvailableCategories (deliveryList: DeliveryItem[]) {
    return [...new Set(deliveryList.reduce(( reducer: string[], item) => {
      reducer.push(...item.category);

      return reducer;
    }, []))];
  }

  getAvailableCuisines(deliveryList: DeliveryItem[]) {
    return [...new Set(deliveryList.reduce(( reducer: string[], item) => {
      reducer.push(...item.cuisine);

      return reducer;
    }, []))];
  }

  getMaxPricing (deliveryList: DeliveryItem[]) {
    return deliveryList.reduce((reducer, item) => {
      if (item.price_average > reducer) {
        return item.price_average;
      }

      return reducer;
    }, 0);
  }

  getMaxRange (deliveryList: DeliveryItem[]) {
    return deliveryList.reduce((reducer, item) => {
      if (item.delivery_distance_average > reducer) {
        return item.delivery_distance_average;
      }

      return reducer;
    }, 0);
  }

  getCountByField (deliveryList: DeliveryItem[], field: string, value: string) {
    return deliveryList.reduce((reducer, item) => {
      // @ts-ignore
      if ((item[field] as string[]).indexOf(value) > -1) {
        reducer++;
      }

      return reducer;
    }, 0);
  }

  getAvailableTime () {
    const hours = 24;
    const timeCollection = [];

    for (let i = 0; i <= hours; i++) {
      timeCollection.push(`${i}:00`);
    }

    return timeCollection;
  }

  getFilteredDeliveryList (deliveryCollection: DeliveryItem[], filterSettings: ActiveFilters) {
    let deliveryList = [...deliveryCollection];

    Object.entries(filterSettings).forEach(([key, value]: any) => {
      switch (key) {
        case 'categories':
          if (!value.length) {
            break;
          }

          deliveryList = deliveryList.filter((item => (
            !!item.category.find(item => (
              value.indexOf(item) !== -1
            ))
          )));

          break;
        case 'cuisines':
          if (!value.length) {
            break;
          }

          deliveryList = deliveryList.filter((item => {
            return !!item.cuisine.find(item => (
              value.indexOf(item) !== -1
            ));
          }));

          break;
        case 'availabilityTime':
          if (typeof value !== 'number') {
            break;
          }

          deliveryList = deliveryList.filter((item => (
            item.workTimeStart <= value && (!item.workTimeEnd ? true : value < item.workTimeEnd)
          )));

          break;
        case 'pricing':
          if (typeof value !== 'number') {
            break;
          }

          deliveryList = deliveryList.filter((item => item.price_average <= value));
          break;
        case 'range':
          if (typeof value !== 'number') {
            break;
          }

          deliveryList = deliveryList.filter((item => value >= item.delivery_distance_average));
          break;
      }
    });

    return deliveryList;
  }
}

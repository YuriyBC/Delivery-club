import { Injectable } from '@angular/core';
import deliveryList from '../mocks/delivery-list';
import deliveryInfo from '../mocks/delivery-info';
import { DeliveryItem } from "../types/shared";

@Injectable()
export class ApiProvider {
  async getDeliveryList () :Promise<DeliveryItem[]> {
    return new Promise((resolve) => {
      resolve(deliveryList);
    });
  }

  async getDeliveryInfo (id: string) {
    return new Promise((resolve) => {
      resolve(deliveryInfo);
    });
  }
}

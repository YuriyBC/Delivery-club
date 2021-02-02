import { Injectable } from '@angular/core';
import deliveryList from '../mocks/delivery-list';
import { DeliveryItem } from "../types/shared";

@Injectable()
export class ApiProvider {
  async getDeliveryList () :Promise<DeliveryItem[]> {
    return new Promise((resolve) => {
      resolve(deliveryList);
    });
  }
}

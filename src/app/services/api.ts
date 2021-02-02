import { Injectable } from '@angular/core';
import deliveryList from '../mocks/delivery-list';

@Injectable()
export class ApiProvider {
  async getDeliveryList () {
    return new Promise((resolve) => {
      resolve(deliveryList)
    });
  }
}

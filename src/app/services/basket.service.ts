import { Injectable, EventEmitter } from '@angular/core';
import { MenuEntity } from '../types/shared';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  public eventEmitter = new EventEmitter();
  basketItems: MenuEntity[] = [];

  addBasketItem (item: MenuEntity) {
    this.basketItems.push(item);
    this.eventEmitter.emit(this.basketItems);
  }

  removeBasketItem (item: any) {
    const index = this.basketItems.findIndex(basketItem => basketItem.id === item.id);

    if (index > -1) {
      this.basketItems.splice(index, 1);
    }
    this.eventEmitter.emit(this.basketItems);
  }
}

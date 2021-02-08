import { Injectable } from '@angular/core';
import { MenuEntity } from '../types/shared';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  public observable: Observable<MenuEntity[]> = new Observable(sub => {
    sub.next(0 as any)
    this.sub = sub
  });
  basketItems: MenuEntity[] = [];
  sub: any;


  addBasketItem (item: MenuEntity) {
    this.basketItems.push(item);
    console.log(this.sub)
    // this.sub.next(this.basketItems);
  }

  removeBasketItem (item: any) {
    const index = this.basketItems.findIndex(basketItem => basketItem.id === item.id);

    if (index > -1) {
      this.basketItems.splice(index, 1);
    }
    this.sub.next(this.basketItems);
  }
}

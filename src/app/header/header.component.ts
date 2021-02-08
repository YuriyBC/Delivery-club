import { Component } from '@angular/core';
import { BasketService } from '../services/basket.service';
import { MenuEntity } from '../types/shared';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  basketCount: number = 0;

  constructor(private basketService: BasketService = new BasketService()) {
    this.basketService.eventEmitter.subscribe((basketItems: MenuEntity[]) => {
      this.basketCount = basketItems.reduce((acc: number[], item) => {
        if (acc.indexOf(item.id) === -1) {
          return [...acc, item.id]
        }

        return acc;
      }, []).length;
    });
  }
}

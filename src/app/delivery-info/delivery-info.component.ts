import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiProvider } from '../services/api';
import { BasketService } from '../services/basket.service';
import { DeliveryInfo, MenuEntity } from '../types/shared';

@Component({
  selector: 'app-delivery-info',
  templateUrl: './delivery-info.component.html',
  styleUrls: ['./delivery-info.component.scss']
})
export class DeliveryInfoComponent implements OnInit {
  companyInfo: DeliveryInfo = {} as any;
  basketItems: MenuEntity[] = [];

  constructor(
    private apiProvider: ApiProvider,
    private route: ActivatedRoute,
    private basketService: BasketService = new BasketService(),
  ) {
    this.basketService.eventEmitter.subscribe((basketItems: MenuEntity[]) => {
      this.basketItems = basketItems;
    });
  }

  async ngOnInit() {
    this.companyInfo = await this.apiProvider.getDeliveryInfo(this.route.snapshot.params.id);
  }

  updateCount (id: number, count: number) {
    const item = this.companyInfo.items.find(item => item.id === id);

    if (count) {
      this.basketService.addBasketItem(item as MenuEntity);
    } else {
      this.basketService.removeBasketItem(item as MenuEntity);
    }
  }

  getCategories () {
    if (!this.companyInfo.category) {
      return '';
    }

    return this.companyInfo.category.join(', ')
  }

  getCuisines () {
    if (!this.companyInfo.cuisine) {
      return '';
    }

    return this.companyInfo.cuisine.join(', ')
  }

  getTime () {
    return this.companyInfo.delivery_time_average / 60;
  }

  getRating () {
    if (!this.companyInfo.rating) {
      return '';
    }

    let rating = this.companyInfo.rating.toFixed(2);

    if (rating.toString().length === 1) {
      rating = rating + '.00';
    }

    return rating;
  }

  getWorkingHours () {
    if (!this.companyInfo.workTimeStart || !this.companyInfo.workTimeEnd) {
      return '';
    }

    return `${this.companyInfo.workTimeStart / 60 / 60}:00 - ${this.companyInfo.workTimeEnd / 60 / 60}:00`;
  }

  getQuantity (id: number) {
    return this.basketItems.filter(item => item.id === id).length;
  }

  getAddress () {
    if (!this.companyInfo.city) {
      return '';
    }

    return `${this.companyInfo.city}, ${this.companyInfo.line1}, ${this.companyInfo.building}`;
  }
}

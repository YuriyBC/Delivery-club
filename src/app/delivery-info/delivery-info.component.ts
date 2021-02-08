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

  constructor(
    private apiProvider: ApiProvider,
    private route: ActivatedRoute,
    private basketService: BasketService = new BasketService(),
  ) { }

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
}

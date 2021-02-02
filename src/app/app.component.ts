import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiProvider } from './services/api';
import { DeliveryItem } from './types/shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  deliveryList: DeliveryItem[] = [];
  updatedDeliveryList: DeliveryItem[] = [];

  public constructor(
    private titleService: Title,
    private apiProvider: ApiProvider,
  ) {
    titleService.setTitle('Delivery Club')
  }

  async ngOnInit() {
    this.deliveryList = await this.apiProvider.getDeliveryList();
    this.updatedDeliveryList = this.deliveryList;
  }

  updateDeliveryList (deliveryList: DeliveryItem[]) {
    this.updatedDeliveryList = deliveryList;
  }
}

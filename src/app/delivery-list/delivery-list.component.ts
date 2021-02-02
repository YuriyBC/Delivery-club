import { Component, OnInit } from '@angular/core';
import { ApiProvider } from '../services/api';
import { DeliveryItem } from '../types/shared';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.scss']
})

export class DeliveryListComponent implements OnInit {
  deliveryList: DeliveryItem[] = [];

  constructor(private apiProvider: ApiProvider) {}

  async ngOnInit() {
    this.deliveryList = await this.apiProvider.getDeliveryList();
  }
}

import { Component, OnInit } from '@angular/core';
import { ApiProvider } from '../services/api';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.scss']
})

export class DeliveryListComponent implements OnInit {
  deliveryList: any = [];

  constructor(private apiProvider: ApiProvider) {}

  async ngOnInit() {
    this.deliveryList = await this.apiProvider.getDeliveryList();
  }
}

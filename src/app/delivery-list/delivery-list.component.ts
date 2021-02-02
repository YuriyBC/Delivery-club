import { Component, Input, OnInit } from '@angular/core';
import { DeliveryItem } from '../types/shared';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.scss']
})

export class DeliveryListComponent implements OnInit {
  @Input() deliveryList: DeliveryItem[] = [];

  async ngOnInit() {}
}

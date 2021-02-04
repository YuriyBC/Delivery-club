import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DeliveryItem } from '../types/shared';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.scss']
})

export class DeliveryListComponent {
  @Input() deliveryList: DeliveryItem[] = [];
  @Output() onProductClicked = new EventEmitter();
}

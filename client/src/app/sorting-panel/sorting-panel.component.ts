import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { DeliveryItem, SortingOption } from '../types/shared';

const sortingOptions: SortingOption[] = [
  {
    displayName: 'Name',
    value: 'name',
  },
  {
    displayName: 'Delivery Time',
    value: 'time',
  },
  {
    displayName: 'Rating',
    value: 'rating',
  },
  {
    displayName: 'Popularity',
    value: 'popularity',
  },
];

@Component({
  selector: 'app-sorting-panel',
  templateUrl: './sorting-panel.component.html',
  styleUrls: ['./sorting-panel.component.scss']
})

export class SortingPanelComponent implements OnInit {
  @Input() deliveryList: DeliveryItem [];
  @Output() updateSortingOption = new EventEmitter();
  defaultOption: string;
  sortingOptions = sortingOptions;

  ngOnInit() {
    this.defaultOption = sortingOptions[0].value;
    this.updateSortingOption.emit(this.defaultOption);
  }

  sortElements ($event: MatSelectChange) {
    this.updateSortingOption.emit($event.value);
  }
}

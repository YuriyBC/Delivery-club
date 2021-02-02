import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { DeliveryItem } from '../types/shared';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-filtration',
  templateUrl: './filtration.component.html',
  styleUrls: ['./filtration.component.scss'],
})

export class FiltrationComponent implements OnChanges {
  @Input() deliveryList: DeliveryItem[] = [];
  @Output() updateDeliveryList = new EventEmitter();

  categories: string[];
  filtratedCategories: string[] = [];

  constructor() { }


  getAvailableCategories () {
    return [...new Set(this.deliveryList.reduce(( reducer: string[], item) => {
      reducer.push(...item.category);

      return reducer;
    }, []))];
  }

  ngOnChanges(): void {
    this.categories = this.getAvailableCategories();
  }

  updateCategory ($event: MatCheckboxChange) {
    if ($event.checked) {
      this.filtratedCategories.push($event.source.value);
    } else {
      const index = this.filtratedCategories.indexOf($event.source.value);
      this.filtratedCategories.splice(index, 1);
    }

    const filtratedList = this.deliveryList.filter((item => {
      return !!item.category.find(item => (
        this.filtratedCategories.indexOf(item) !== -1
      ));
    }));

    this.updateDeliveryList.emit(this.filtratedCategories.length ? filtratedList : this.deliveryList);
  }

  getCategoryCount (category: string) {
    return this.deliveryList.reduce((reducer, item) => {
      if (item.category.indexOf(category) > -1) {
        reducer++;
      }

      return reducer;
    }, 0);
  }
}

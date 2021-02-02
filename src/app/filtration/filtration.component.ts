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
  maxAveragePricing: number;
  pricingValue: number;
  filtratedCategories: string[] = [];
  

  getAvailableCategories () {
    return [...new Set(this.deliveryList.reduce(( reducer: string[], item) => {
      reducer.push(...item.category);

      return reducer;
    }, []))];
  }

  getMaxPricing () {
    return this.deliveryList.reduce((reducer, item) => {
      if (item.price_average > reducer) {
        return item.price_average;
      }

      return reducer;
    }, 0);
  }

  ngOnChanges(): void {
    this.categories = this.getAvailableCategories();
    this.maxAveragePricing = this.getMaxPricing();
    this.pricingValue = this.maxAveragePricing;
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

  updatePricing ($event: any) {
    this.pricingValue = +$event.value;

    const filtratedList = this.deliveryList.filter((item => {
      return item.price_average >= this.pricingValue;
    }));

    this.updateDeliveryList.emit(filtratedList);
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

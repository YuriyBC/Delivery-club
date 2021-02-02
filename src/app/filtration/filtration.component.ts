import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { DeliveryItem } from '../types/shared';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { FiltrationHelperService } from '../services/filtration-helper.service';

@Component({
  selector: 'app-filtration',
  templateUrl: './filtration.component.html',
  styleUrls: ['./filtration.component.scss'],
})

export class FiltrationComponent implements OnChanges {
  @Input() deliveryList: DeliveryItem[] = [];
  @Output() updateDeliveryList = new EventEmitter();

  categories: string[];
  cuisines: string[];
  maxAveragePricing: number;
  pricingValue: number;
  filtratedCategories: string[] = [];
  filtratedCuisines: string[] = [];
  availableTime: string[];
  maxDistanceRange: number;
  distanceRange: number;

  constructor (private filtrationService: FiltrationHelperService) {}

  ngOnChanges(): void {
    this.categories = this.filtrationService.getAvailableCategories(this.deliveryList);
    this.cuisines = this.filtrationService.getAvailableCuisines(this.deliveryList);
    this.maxAveragePricing = this.filtrationService.getMaxPricing(this.deliveryList);
    this.pricingValue = this.maxAveragePricing;
    this.availableTime = this.filtrationService.getAvailableTime();
    this.maxDistanceRange = this.filtrationService.getMaxRange(this.deliveryList);
    this.distanceRange = this.maxDistanceRange;
  }

  filterByCategory ($event: MatCheckboxChange) {
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

  filterByCuisine ($event: MatCheckboxChange) {
    if ($event.checked) {
      this.filtratedCuisines.push($event.source.value);
    } else {
      const index = this.filtratedCuisines.indexOf($event.source.value);
      this.filtratedCuisines.splice(index, 1);
    }

    const filtratedList = this.deliveryList.filter((item => {
      return !!item.cuisine.find(item => (
        this.filtratedCuisines.indexOf(item) !== -1
      ));
    }));

    this.updateDeliveryList.emit(this.filtratedCuisines.length ? filtratedList : this.deliveryList);
  }

  filterByAvailabilityTime ($event: any) {
    const secondsModifier = 3600;

    if (!$event.value) {
      return this.updateDeliveryList.emit(this.deliveryList);
    }

    const selectedTime = +$event.value.split(':')[0] * secondsModifier;
    const filtratedList = this.deliveryList.filter((item => (
      item.workTimeStart <= selectedTime && (!item.workTimeEnd ? true : selectedTime < item.workTimeEnd)
    )));

    this.updateDeliveryList.emit(filtratedList);
  }

  filterByPricing ($event: any) {
    this.pricingValue = +$event.value;

    const filtratedList = this.deliveryList.filter((item => {
      return item.price_average <= this.pricingValue;
    }));

    this.updateDeliveryList.emit(filtratedList);
  }

  filterByRange ($event: any) {
    this.distanceRange = +$event.value;

    const filtratedList = this.deliveryList.filter((item => {
      return this.distanceRange >= item.delivery_distance_average;
    }));

    this.updateDeliveryList.emit(filtratedList);
  }

  getCategoryCount (category: string) {
    return this.filtrationService.getCountByField(this.deliveryList, 'category', category);
  }

  getCuisineCount (cuisine: string) {
    return this.filtrationService.getCountByField(this.deliveryList, 'cuisine', cuisine);
  }
}

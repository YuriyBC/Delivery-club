import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { FiltrationHelperService } from '../services/filtration-helper.service';
import { ActiveFilters, DeliveryItem } from '../types/shared';

@Component({
  selector: 'app-filtration',
  templateUrl: './filtration.component.html',
  styleUrls: ['./filtration.component.scss'],
})

export class FiltrationComponent implements OnChanges {
  @Input() deliveryList: DeliveryItem[] = [];
  @Output() updateDeliveryList = new EventEmitter();
  updatedDeliveryList: DeliveryItem[] = [];

  categories: string[];
  cuisines: string[];
  maxAveragePricing: number;
  availableTime: string[];
  maxDistanceRange: number;
  distanceRange: number;
  filterCollection: ActiveFilters = {
    categories: [],
    cuisines: [],
    availabilityTime: null,
    pricing: null,
    range: null,
  };

  constructor (private filtrationService: FiltrationHelperService) {}

  ngOnChanges(): void {
    if (!this.updatedDeliveryList.length) {
      this.updatedDeliveryList = this.deliveryList;
    }

    this.categories = this.filtrationService.getAvailableCategories(this.deliveryList);
    this.cuisines = this.filtrationService.getAvailableCuisines(this.deliveryList);
    this.maxAveragePricing = this.filtrationService.getMaxPricing(this.deliveryList);
    this.filterCollection.pricing = this.maxAveragePricing;
    this.availableTime = this.filtrationService.getAvailableTime();
    this.maxDistanceRange = this.filtrationService.getMaxRange(this.deliveryList);
    this.distanceRange = this.maxDistanceRange;
  }

  filterByCategory ($event: MatCheckboxChange) {
    if ($event.checked) {
      this.filterCollection.categories.push($event.source.value);
    } else {
      const index = this.filterCollection.categories.indexOf($event.source.value);
      this.filterCollection.categories.splice(index, 1);
    }

    this.syncFilters();
  }

  filterByCuisine ($event: MatCheckboxChange) {
    if ($event.checked) {
      this.filterCollection.cuisines.push($event.source.value);
    } else {
      const index = this.filterCollection.cuisines.indexOf($event.source.value);
      this.filterCollection.cuisines.splice(index, 1);
    }

    this.syncFilters();
  }

  filterByAvailabilityTime ($event: any) {
    const secondsModifier = 3600;

    if (!$event.value) {
      this.filterCollection.availabilityTime = null;
    } else {
      this.filterCollection.availabilityTime = +$event.value.split(':')[0] * secondsModifier;
    }

    this.syncFilters();
  }

  filterByPricing ($event: any) {
    this.filterCollection.pricing = +$event.value;
    this.syncFilters();
  }

  filterByRange ($event: any) {
    this.filterCollection.range = +$event.value;
    this.syncFilters();
  }

  syncFilters () {
    const deliveryList = this.filtrationService.getFilteredDeliveryList(this.deliveryList, this.filterCollection);

    this.updateDeliveryList.emit(deliveryList);
  }

  getCategoryCount (category: string) {
    return this.filtrationService.getCountByField(this.deliveryList, 'category', category);
  }

  getCuisineCount (cuisine: string) {
    return this.filtrationService.getCountByField(this.deliveryList, 'cuisine', cuisine);
  }
}

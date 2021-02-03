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
  sortingOption: string = '';

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

  updateSortingOption (option: string) {
    this.sortingOption = option;
    this.updateDeliveryList(this.updatedDeliveryList);
  }

  sortBy (deliveryList: DeliveryItem[]) {
    return deliveryList.sort((a: DeliveryItem, b: DeliveryItem) => {
      if (this.sortingOption === 'name') {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }

        return 0;
      }

      if (this.sortingOption === 'time') {
        if (a.delivery_time_average < b.delivery_time_average) { return -1; }
        if (a.delivery_time_average > b.delivery_time_average) { return 1; }

        return 0;
      }

      if (this.sortingOption === 'rating') {
        if (a.rating < b.rating) { return -1; }
        if (a.rating > b.rating) { return 1; }

        return 0;
      }

      if (this.sortingOption === 'popularity') {
        if (+a.popularity < +b.popularity) { return 1; }
        if (+a.popularity > +b.popularity) { return -1; }

        return 0;
      }

      return 0;
    });
  }

  updateDeliveryList (deliveryList: DeliveryItem[]) {
    this.updatedDeliveryList = this.sortBy(deliveryList);
  }
}

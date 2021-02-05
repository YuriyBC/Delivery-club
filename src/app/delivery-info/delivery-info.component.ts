import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiProvider } from '../services/api';

@Component({
  selector: 'app-delivery-info',
  templateUrl: './delivery-info.component.html',
  styleUrls: ['./delivery-info.component.scss']
})
export class DeliveryInfoComponent implements OnInit {
  companyInfo: any = {};

  constructor(
    private apiProvider: ApiProvider,
    private route: ActivatedRoute,
  ) { }

  async ngOnInit() {
    this.companyInfo = await this.apiProvider.getDeliveryInfo(this.route.snapshot.params.id);
  }

}

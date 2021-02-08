import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-delivery-details-page',
  templateUrl: './delivery-details-page.component.html',
  styleUrls: ['./delivery-details-page.component.scss']
})

export class DeliveryDetailsPage implements OnInit {
  public constructor(
    private titleService: Title,
  ) {
    titleService.setTitle('Delivery Club')
  }

  ngOnInit(): void {}
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'delivery-item',
  templateUrl: './delivery-item.component.html',
  styleUrls: ['./delivery-item.component.scss']
})
export class DeliveryItemComponent implements OnInit {
  @Input() name: string;
  @Input() imgSrc: string;
  @Input() time: number;
  @Input() rating: string;
  @Input() pricing: number;

  ngOnInit(): void {
    this.time = this.time / 60;
  }
}

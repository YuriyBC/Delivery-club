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
  @Input() rating: number;
  @Input() pricing: number;

  formattedRating: string;

  ngOnInit(): void {
    this.time = this.time / 60;
    this.formattedRating = this.rating.toFixed(2);

    if (this.formattedRating.toString().length === 1) {
      this.formattedRating = this.formattedRating + '.00';
    }
  }
}

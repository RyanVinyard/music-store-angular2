import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component ({
  selector: "price",
  template: `
    <h3>Total Price: {{ addedToCart | price}}
    `
})

export class PriceComponent {
  @Input() addedToCart: Album[];
}

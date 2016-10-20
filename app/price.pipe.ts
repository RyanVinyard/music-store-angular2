import { Pipe, PipeTransform } from '@angular/core';
import { Album } from './album.model';

@Pipe({
  name: "price",
  pure: false
})

export class PricePipe implements PipeTransform {
  transfrom(input: Album[], checkedAlbum) {
    var totalCost: number = 0;
    for(var i = 0; i < input.length; i++) {
      totalCost += input[i].price;
    }

  }
}

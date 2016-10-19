import {Pipe, PipeTransform} from '@angular/core';
import {Album} from './album.model';

@Pipe({
  name: "genre",
  pure: false
})

export class GenrePipe implements PipeTransform {
  transform(input: Album[], desiredGenre) {
    var output: Album[] = [];
    if(desiredGenre === "Genre1") {
      console.log(desiredGenre);
      for (var i = 0; i < input.length; i++) {
        if (input[i].genre === "Genre1") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredGenre === "Genre2") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].genre === "Genre2") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredGenre === "Genre3") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].genre === "Genre3") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredGenre === "Genre4") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].genre === "Genre4") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
      }
    }

  }

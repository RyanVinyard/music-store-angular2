import {Pipe, PipeTransform} from '@angular/core';
import {Album} from './album.model';

@Pipe({
  name: "genre",
  pure: false
})

export class GenrePipe implements PipeTransform {
  transform(input: Album[], desiredGenre) {
    var output: Album[] = [];
    if(desiredGenre === "Rock") {
      console.log(desiredGenre);
      for (var i = 0; i < input.length; i++) {
        if (input[i].genre === "Rock") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredGenre === "Indie") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].genre === "Indie") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredGenre === "Rap") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].genre === "Rap") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredGenre === "Salsa") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].genre === "Salsa") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredGenre === "ClassicRock") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].genre === "ClassicRock") {
        output.push(input[i]);
      }
    }
    return output;
  } else if (desiredGenre === "Son") {
      for (var i = 0; i < input.length; i++) {
      if (input[i].genre === "Son") {
       output.push(input[i]);
     }
   }
   return output; 
 } else if (desiredGenre === "Pop") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].genre === "Pop") {
        output.push(input[i]);
      }
    }
    return output;
  } else {
    return input;
    }
  }

  }

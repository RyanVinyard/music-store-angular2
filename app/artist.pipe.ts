import {Pipe, PipeTransform} from '@angular/core';
import {Album} from './album.model';

@Pipe({
  name: "artist",
  pure: false
})

export class ArtistPipe implements PipeTransform {
  transform(input: Album[], desiredArtist) {
    var output: Album[] = [];
    if(desiredArtist === "Barenaked Ladies") {
      console.log(desiredArtist);
      for (var i = 0; i < input.length; i++) {
        if (input[i].artist === "Barenaked Ladies") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredArtist === "The Shins") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].artist === "The Shins") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredArtist === "Foster the People") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].artist === "Foster the People") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredArtist === "Buena Vista Social Club") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].artist === "Buena Vista Social Club") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredArtist === "Nas") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].artist === "Nas") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredArtist === "Biggie") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].artist === "Biggie") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredArtist === "Willie Colon") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].artist === "Willie Colon") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredArtist === "Bruce Springsteen") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].artist === "Bruce Springsteen") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredArtist === "Michael Jackson") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].artist === "Michael Jackson") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}

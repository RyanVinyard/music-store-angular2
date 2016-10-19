import {Pipe, PipeTransform} from '@angular/core';
import {Album} from './album.model';

@Pipe({
  name: "artist",
  pure: false
})

export class ArtistPipe implements PipeTransform {
  transform(input: Album[], desiredArtist) {
    var output: Album[] = [];
    if(desiredArtist === "Artist1") {
      console.log(desiredArtist);
      for (var i = 0; i < input.length; i++) {
        if (input[i].artist === "Artist1") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredArtist === "Artist2") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].artist === "Artist2") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredArtist === "Artist3") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].artist === "Artist3") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredArtist === "Artist4") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].artist === "Artist4") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
      }
    }

  }

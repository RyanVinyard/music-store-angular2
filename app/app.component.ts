import { Component } from '@angular/core';
import { Album } from './album.model';


@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Welcome to our Music Store</h1>
    <album-list
      [childAlbumList]="masterAlbumList"
    ></album-list>
  </div>
    `
})

export class AppComponent {
  public masterAlbumList: Album[] = [
    new Album("Album1", "Artist1", "Genre1", 8),
    new Album("Album2", "Artist2", "Genre2", 7),
    new Album("Album3", "Artist3", "Genre3", 9),
    new Album("Album4", "Artist4", "Genre4", 4),
  ];
  selectedAlbum: Album = null;
  showDetails(clickedAlbum: Album) {
    this.selectedAlbum = clickedAlbum;
  }
  }

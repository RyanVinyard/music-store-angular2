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
    new Album("Stunt", "Barenaked Ladies", "Rock", 8),
    new Album("Oh, Inverted World", "The Shins", "Indie", 7),
    new Album("Torches", "Foster the People", "Indie", 9),
    new Album("Buena Vista Social Club", "Buena Vista Social Club", "Son", 4),
    new Album("Illmatic", "Nas", "Rap", 6),
    new Album("Ready To Die", "Biggie", "Rap", 10),
    new Album("Lo Mato", "Willie Colon", "Salsa", 12),
    new Album("Born to Run", "Bruce Springsteen", "Classic Rock", 15),
    new Album("Thriller", "Michael Jackson", "Pop", 100)
    ];
  selectedAlbum: Album = null;
  showDetails(clickedAlbum: Album) {
    this.selectedAlbum = clickedAlbum;
  }
  }

import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Album } from './album.model';

@Component ({
  selector: "album-list",
  template: `
    <h2>The albums we offer:</h2>
    <select (change)="onChange($event.target.value)">
      <option value="All">Show all genres</option>
      <option value="Genre1">Genre 1</option>
      <option value="Genre2">Genre 2</option>
      <option value="Genre3">Genre 3</option>
      <option value="Genre4">Genre 4</option>
    </select>
      <div *ngFor="let currentAlbum of childAlbumList | genre:genreSelected">
        <h3>{{ currentAlbum.name }}</h3>
        <h4>{{ currentAlbum.artist }}</h4>
        <p>{{ currentAlbum.genre }}</p>
        <p>{{ currentAlbum.price }}</p>
      </div>

  `

})

export class AlbumListComponent {
  @Input() childAlbumList: Album[];
  @Output() clickSender = new EventEmitter();
  selectGenre(genreSelected: Album) {
    this.clickSender.emit(genreSelected);
  }
  public genreSelected: string = "All";

  onChange(optionFromMenu) {
    this.genreSelected = optionFromMenu;
    console.log(this.genreSelected);
  }
}

//You were trying to get genres to show up. Your selector currently doesn't do anything. Fix it!

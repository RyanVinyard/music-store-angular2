import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Album } from './album.model';

@Component ({
  selector: "album-list",
  template: `
    <h2>The albums we offer:</h2>
    <select (change)="genreChange($event.target.value)">
      <option value="All">Show all genres</option>
      <option value="Genre1">Genre 1</option>
      <option value="Genre2">Genre 2</option>
      <option value="Genre3">Genre 3</option>
      <option value="Genre4">Genre 4</option>
    </select>
    <select (change)="artistChange($event.target.value)">
      <option value="All">Show all artists</option>
      <option value="Artist1">Artist 1</option>
      <option value="Artist2">Artist 2</option>
      <option value="Artist3">Artist 3</option>
      <option value="Artist4">Artist 4</option>
    </select>
      <div *ngFor="let currentAlbum of childAlbumList | genre:genreSelected | artist:artistSelected">
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
  public genreSelected: string = "All";
  public artistSelected: string = "All";

  selectGenre(genreSelected: Album) {
    this.clickSender.emit(genreSelected);
  }
  selectArtist(artistSelected: Album) {
    this.clickSender.emit(artistSelected);
  }
  genreChange(optionFromMenu) {
    this.genreSelected = optionFromMenu;
    console.log(this.genreSelected);
  }
  artistChange(optionFromMenu) {
    this.artistSelected = optionFromMenu;
    console.log(this.artistSelected);
  }
}

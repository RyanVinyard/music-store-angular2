import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Album } from './album.model';
import { AlbumCheckboxComponent } from './album-checkbox.component';

@Component ({
  selector: "album-list",
  template: `
    <h2>The albums we offer:</h2>
      <select (change)="genreChange($event.target.value)">
        <option value="All">Show all genres</option>
        <option value="Rap">Rap</option>
        <option value="Rock">Rock</option>
        <option value="Indie">Indie</option>
        <option value="Salsa">Salsa</option>
        <option value="ClassicRock">Classic Rock</option>
        <option value="Son">Son</option>
        <option value="Pop">Pop</option>
      </select>
      <select (change)="artistChange($event.target.value)">
        <option value="All">Show all artists</option>
        <option value="Barenaked Ladies">Barenaked Ladies</option>
        <option value="The Shins">The Shins</option>
        <option value="Foster the People">Foster the People</option>
        <option value="Buena Vista Social Club">Buena Vista Social Club</option>
        <option value="Nas">Nas</option>
        <option value="Biggie">Biggie</option>
        <option value="Willie Colon">Willie Colon</option>
        <option value="Bruce Springsteen">Bruce Springsteen</option>
        <option value="Michael Jackson">Michael Jackson</option>
      </select>
      <div *ngFor="let currentAlbum of childAlbumList | genre:genreSelected | artist:artistSelected">
        <h3>{{ currentAlbum.name }}</h3>
        <h4>{{ currentAlbum.artist }}</h4>
        <p>{{ currentAlbum.genre }}</p>
        <p>{{ currentAlbum.price }}</p>
        <album-checkbox
            [album]="currentAlbum"
            (addTotalSender)="addTotal($event)"
            (subtractTotalSender)="subtractTotal($event)"
          ></album-checkbox>
        <hr>
      </div>
  `
})

export class AlbumListComponent {
  @Input() childAlbumList: Album[];
  @Output() addClickSender = new EventEmitter();
  @Output() subtractClickSender = new EventEmitter();
  public genreSelected: string = "All";
  public artistSelected: string = "All";
  // public albumChecked: boolean = false;

  genreChange(optionFromMenu) {
    this.genreSelected = optionFromMenu;
  }
  artistChange(optionFromMenu) {
    this.artistSelected = optionFromMenu;
  }
  addTotal(album: Album) {
    this.addClickSender.emit(album);
  }
  subtractTotal(album: Album) {
    this.subtractClickSender.emit(album);
  }
}

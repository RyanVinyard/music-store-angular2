import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component ({
  selector: 'album-checkbox',
  template: `
    <div>
      <input *ngIf="album.addedToCart === true" type="checkbox" checked (click)="toggleAdded(false)"/>
      <input *ngIf="album.addedToCart === false" type="checkbox" (click)="toggleAdded(true)">
    </div>
  `
})

export class AlbumCheckboxComponent {
  @Input() album: Album;
  @Output() addTotalSender = new EventEmitter();
  @Output() subtractTotalSender = new EventEmitter();
  toggleAdded(setAdded: boolean) {
    this.album.addedToCart = setAdded;
    console.log(this.album.addedToCart);
  }
  addToTotal(album: Album) {
    this.addTotalSender.emit(album);
  }
  subtractFromTotal(album: Album) {
    this.subtractTotalSender.emit(album);
  }
}

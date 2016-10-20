import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { AlbumListComponent } from './album-list.component';
import { GenrePipe } from './genre.pipe';
import { ArtistPipe } from './artist.pipe';
import { AlbumCheckboxComponent } from './album-checkbox.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AlbumListComponent,
    AppComponent,
    GenrePipe,
    ArtistPipe,
    AlbumCheckboxComponent,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { };

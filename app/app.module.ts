import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { AlbumListComponent } from './album-list.component';
import { GenrePipe } from './genre.pipe';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AlbumListComponent,
    AppComponent,
    GenrePipe,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { };

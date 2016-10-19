"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var album_model_1 = require('./album.model');
var AppComponent = (function () {
    function AppComponent() {
        this.masterAlbumList = [
            new album_model_1.Album("Album1", "Artist1", "Genre1", 8),
            new album_model_1.Album("Album2", "Artist2", "Genre2", 7),
            new album_model_1.Album("Album3", "Artist3", "Genre3", 9),
            new album_model_1.Album("Album4", "Artist4", "Genre4", 4),
        ];
        this.selectedAlbum = null;
    }
    AppComponent.prototype.showDetails = function (clickedAlbum) {
        this.selectedAlbum = clickedAlbum;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <div class=\"container\">\n    <h1>Welcome to our Music Store</h1>\n    <album-list\n      [childAlbumList]=\"masterAlbumList\"\n    ></album-list>\n  </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
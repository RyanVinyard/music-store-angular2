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
var core_1 = require("@angular/core");
var AlbumListComponent = (function () {
    function AlbumListComponent() {
        this.clickSender = new core_1.EventEmitter();
        this.genreSelected = "All";
    }
    AlbumListComponent.prototype.selectGenre = function (genreSelected) {
        this.clickSender.emit(genreSelected);
    };
    AlbumListComponent.prototype.onChange = function (optionFromMenu) {
        this.genreSelected = optionFromMenu;
        console.log(this.genreSelected);
    };
    return AlbumListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], AlbumListComponent.prototype, "childAlbumList", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AlbumListComponent.prototype, "clickSender", void 0);
AlbumListComponent = __decorate([
    core_1.Component({
        selector: "album-list",
        template: "\n    <h2>The albums we offer:</h2>\n    <select (change)=\"onChange($event.target.value)\">\n      <option value=\"All\">Show all genres</option>\n      <option value=\"Genre1\">Genre 1</option>\n      <option value=\"Genre2\">Genre 2</option>\n      <option value=\"Genre3\">Genre 3</option>\n      <option value=\"Genre4\">Genre 4</option>\n    </select>\n      <div *ngFor=\"let currentAlbum of childAlbumList | genre:genreSelected\">\n        <h3>{{ currentAlbum.name }}</h3>\n        <h4>{{ currentAlbum.artist }}</h4>\n        <p>{{ currentAlbum.genre }}</p>\n        <p>{{ currentAlbum.price }}</p>\n      </div>\n\n  "
    }),
    __metadata("design:paramtypes", [])
], AlbumListComponent);
exports.AlbumListComponent = AlbumListComponent;
//You were trying to get genres to show up. Your selector currently doesn't do anything. Fix it!
//# sourceMappingURL=album-list.component.js.map
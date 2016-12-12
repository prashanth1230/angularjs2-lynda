import {Component} from '@angular/core';
import {MediaItem} from "./media-item.component";

@Component({
    selector: 'mw-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent {
    firstMediaItem: MediaItem = {
        id: 1,
        name: "Firebug",
        medium: "Series",
        category: "Science Fiction",
        year: 2010,
        watchedOn: null,
        isFavorite: false
    };

    onMediaItemDelete(mediaItem: MediaItem) {

    }
}
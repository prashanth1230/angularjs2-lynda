import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
    selector: 'mw-media-item',
    templateUrl: 'app/media-item.component.html',
    styleUrls: ['app/media-item.component.css']
})
export class MediaItemComponent {
    @Input() mediaItem: MediaItem;
    @Output() delete = new EventEmitter();
    onDelete() {
        alert('Deleted!');
        this.delete.emit(this.mediaItem);
    }
}
export interface MediaItem {
    id: number;
    name: string;
    medium: string;
    category: string;
    year: number;
    watchedOn: number;
    isFavorite: boolean;
}
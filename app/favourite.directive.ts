import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[mwFavourite]'
})
export class FavouriteDirective {
    @HostBinding('class.is-favourite') isFavourite;
    @HostBinding('class.is-favourite-hovering') hovering = false;
    @HostListener('mouseenter') onMouseEnter() {
        this.hovering = true;
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.hovering = false;
    }
    @Input() set mwFavourite(value) {
        this.isFavourite = value;
    }
}
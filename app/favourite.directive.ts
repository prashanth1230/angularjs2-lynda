import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[mwFavourite]'
})
export class FavouriteDirective {
    @HostBinding('class.is-favourite') isFavourite = true;
}
import { NgModule } from '@angular/core';
import  { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { FavouriteDirective } from './favourite.directive';
import  { CategoryListPipe } from './category-list.pipe';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent, MediaItemComponent, MediaItemListComponent, FavouriteDirective, CategoryListPipe ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'mw-media-item-form',
    templateUrl: 'app/media-item-form.component.html',
    styleUrls: ['app/media-item-form.component.css']
})
export class MediaItemFormComponent {
    form;

    ngOnInit() {
        this.form = new FormGroup({
            medium: new FormControl('Movies'),
            name: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('[\\w\\-\\s\\/]+')
            ])),
            category: new FormControl(''),
            year: new FormControl('', this.yearValidator)
        });
    }

    yearValidator(control) {
        if (control.value.trim().length === 0) {
            return null;
        }
        let year: number = parseInt(control.value);
        const MIN_YEAR: number = 1900;
        const MAX_YEAR: number = 2100;
        if (year >= MIN_YEAR && year <= MAX_YEAR) {
            return null;
        }
        return { 'year': true };
    }

    onSubmit(mediaItem) {
        console.log(mediaItem);
    }
}
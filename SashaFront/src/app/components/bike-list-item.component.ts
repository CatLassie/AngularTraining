import { Component, Input } from '@angular/core';
import { Bike } from '../models/bike';

@Component({
    selector: 'bike-list-item',
    templateUrl: './bike-list-item.component.html'
})
export class BikeListItemComponent {
    @Input() bike: Bike

}
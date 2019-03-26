import { Component } from '@angular/core';
import { Bike } from '../models/bike';
import { BikeService } from '../services/bike.service';

@Component({
    selector: 'bike-list',
    templateUrl: './bike-list.component.html' 
})
export class BikeListComponent {
    public bikes: Bike[] = [];
    
    constructor(public service: BikeService){};

    public searchBikes(): void {
        this.bikes = this.service.getBikes();
    }
    
} 
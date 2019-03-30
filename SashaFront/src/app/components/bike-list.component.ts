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
        console.log('start of searchBikes()')
        this.service.getBikes().subscribe(
            bikes => {
                console.log('callback of searchBikes()')
                this.bikes = bikes;
            }
        );
        console.log('end of searchBikes()')
    }
    
} 
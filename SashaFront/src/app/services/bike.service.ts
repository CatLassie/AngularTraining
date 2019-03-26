import { Injectable } from '@angular/core';
import { Bike } from '../models/bike';

@Injectable()
export class BikeService {
    private bikes: Bike[] = [
        new Bike(22, 'BroomStick69', 5),
        new Bike(6, 'GhostRider', 666)
    ];

    public getBikes(): Bike[] {
        return this.bikes; 
    }
}
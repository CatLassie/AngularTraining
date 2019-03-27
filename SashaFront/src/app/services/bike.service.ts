import { Injectable } from '@angular/core';
import { Bike } from '../models/bike';

@Injectable()
export class BikeService {
    private bikes: Bike[] = [
        new Bike(5, 'BroomStick69', 5, 'lol'),
        new Bike(6, 'GhostRider', 666 , 'Nikolas Cage'),
        new Bike(7, 'BongRider', 7, 'Post Malone'),
        new Bike(8, 'RoadRider', 10, 'Mad Max'),
    ];

    public getBikes(): Bike[] {
        return this.bikes; 
    }

    public getBike(id: number): Bike{
        return this.bikes.find(bike => bike.id === id);
    }
}
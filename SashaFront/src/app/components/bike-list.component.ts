import { Component, OnInit } from '@angular/core';
import { Bike } from '../models/bike';
import { BikeService } from '../services/bike.service';
import { Router } from '@angular/router';

@Component({
    selector: 'bike-list',
    templateUrl: './bike-list.component.html' 
})
export class BikeListComponent implements OnInit{
    public bikes: Bike[] = [];
    
    constructor(private service: BikeService, private router: Router ){};

    public ngOnInit(){
        this.searchBikes();
    }

    public createBike(){
        this.router.navigate(['bikes/create'])
    }

    private searchBikes(): void {
        console.log('start of searchBikes()')
        this.service.getBikes().subscribe(
            bikes => {
                console.log('callback of searchBikes()')
                this.bikes = bikes;
                this.bikes.sort((a,b) => a.id - b.id);
            }
        );
        console.log('end of searchBikes()')
    }
    
} 
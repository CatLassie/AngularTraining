import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { BikeService } from '../services/bike.service';
import { Bike } from '../models/bike';

@Component({
    selector: 'bike-detail',
    templateUrl: './bike-detail.component.html'
})
export class BikeDetailComponent implements OnInit{
    public bike:Bike
    constructor(public service:BikeService, public router: Router, public activatedRoute: ActivatedRoute){}
    	
    ngOnInit() {
        const bikeId = +this.activatedRoute.snapshot.params['id'];
        this.bike = this.service.getBike(bikeId);
    }

    public backClick(){
        this.router.navigate(['bikes'])
    }
}
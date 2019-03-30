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
    public title: string
    public text: string
    public speed: number
  //  bike.speed
   // bike.text
    constructor(public service:BikeService, public router: Router, public activatedRoute: ActivatedRoute){}
    	
    ngOnInit() {
        const bikeId = +this.activatedRoute.snapshot.params['id'];
        this.service.getBike(bikeId).subscribe(
            bike => {
                this.bike = bike;
                this.title = bike.title
                this.speed = bike.speed
                this.text = bike.text
            }
        );
    }

    public submitData(){
        let updatedBike = new Bike(this.bike.id, this.title, this.speed, this.text)
        this.service.saveBike(updatedBike)
        this.router.navigate(['bikes'])
    }

    public backClick(){
        this.router.navigate(['bikes'])
    }

    public deleteBike() {
        this.service.deleteBike(this.bike.id)
        this.router.navigate(['bikes'])
    }
}
import { Component, OnInit, OnDestroy} from '@angular/core';
import { PlanetStore } from '../stores/planet.store';
import { Subscription } from 'rxjs';

@Component({
    selector: 'planet',
    templateUrl: './planet.component.html' 
})
export class PlanetComponent implements OnInit, OnDestroy{

    public planet: string;
    public inputPlanet: string;

    private sub: Subscription;

    constructor(private planetStore: PlanetStore){}

    public ngOnInit(){
         this.sub = this.planetStore.planet.subscribe(
            planet => this.planet = planet
        );
    }

    public ngOnDestroy() {
        this.sub.unsubscribe();
    }

    public changePlanet(){
        this.planetStore.setPlanet(this.inputPlanet);
    }

}
import { Component, OnInit, OnDestroy} from '@angular/core';
import { PersonService } from '../services/person.service';
import { Person } from '../models/person';
import { PlanetStore } from '../stores/planet.store';
import { Subscription } from 'rxjs';

@Component({
    selector: 'person',
    templateUrl: './person.component.html' 
})
export class PersonComponent implements OnInit, OnDestroy{

    public persons: Person[] = [];
    public planet: string;

    private sub: Subscription;

    constructor(private service: PersonService, private planetStore: PlanetStore){};

    public ngOnInit(){
        this.persons = this.service.getPersons();
        this.sub = this.planetStore.planet.subscribe(
            planet => this.planet = planet
        );
    }

    public ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
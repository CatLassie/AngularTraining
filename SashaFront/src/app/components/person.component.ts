import { Component, OnInit} from '@angular/core';
import { PersonService } from '../services/person.service';
import { Person } from '../models/person';

@Component({
    selector: 'person',
    templateUrl: './person.component.html' 
})
export class PersonComponent implements OnInit{

    public persons: Person[] = [];

    constructor(private service: PersonService){};

    public ngOnInit(){
        this.persons = this.service.getPersons();
    }

}
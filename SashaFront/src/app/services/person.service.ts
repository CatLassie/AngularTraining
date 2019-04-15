import { Injectable } from '@angular/core';
import { Person } from '../models/person';

@Injectable()
export class PersonService {
    private persons = [
        new Person(1, "Peter", "Ryabochenko"),
        new Person(2, "Sashka", "Bidyak")
    ];

    public getPersons(): Person[] {
        return this.persons;
    }
}



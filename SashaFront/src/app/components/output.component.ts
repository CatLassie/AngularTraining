import { Component, OnInit } from '@angular/core';
import { DataStore } from '../stores/data.store';

@Component({
    selector: 'output-custom',
    templateUrl: './output.component.html'
})
export class OutputComponent implements OnInit {

    public store: DataStore;
    public dsiplayFirstName: string = '';
    public displayLastName: string = '';
    public userNameChanged: number = 0;

    constructor(store: DataStore) {
        this.store = store;
    }

    public ngOnInit() {
        const person = this.store.person;
        this.updatePersonData(person);
    }

    public updatePersonData(person: Person) {
        if(person) {
            this.dsiplayFirstName = person.firstName;
            this.displayLastName = person.lastName;
            this.userNameChanged = this.userNameChanged++;
        } else {
            console.log('sorry bro, person was undefined');
        }
    }

}
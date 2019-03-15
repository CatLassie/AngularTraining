import { Component } from '@angular/core';
import { DataStore } from '../stores/data.store';
import { Person } from '../models/person';

@Component({
    selector: 'input-custom',
    templateUrl: './input.component.html'
})
export class InputComponent {
    public firstName: string;
    public lastName: string;

    constructor(public store: DataStore) { }

    public onInputSave() {
        const admin: Person = new Person(this.firstName, this.lastName);
        this.store.setAdmin(admin);
    }
}
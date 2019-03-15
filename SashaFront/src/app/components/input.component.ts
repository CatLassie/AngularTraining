import { Component, OnInit } from '@angular/core';
import { DataStore } from '../stores/data.store';
import { store } from '@angular/core/src/render3';

@Component({
    selector: 'input-custom',
    templateUrl: './input.component.html'
})
export class InputComponent {
    public inputValue: string;
    public firstName: string;
    public lastName: string;

    public store: DataStore;

    constructor(store: DataStore) {
        this.store = store;
    }

    public onInputSave() {
        console.log(this.inputValue);
        this.store.updateData(this.inputValue);
        console.log(this.store.data);
    }

    public onUserSave() {
        this.store.person = new Person(this.firstName, this.lastName);
    }

}
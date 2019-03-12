import { Component } from '@angular/core';
import { DataStore } from '../stores/data.store';

@Component({
    selector: 'output-custom',
    templateUrl: './output.component.html'
})
export class OutputComponent {

    public store: DataStore;

    constructor(store: DataStore) {
        this.store = store;
    }

}
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStore } from '../stores/data.store';
import { Person } from '../models/person';
import { Subscription } from 'rxjs';

@Component({
    selector: 'output-custom',
    templateUrl: './output.component.html'
})
export class OutputComponent implements OnInit, OnDestroy {

    firstName: string = ' ';
    lastName: string = ' ';
    timesChanged = 0;

    subscription: Subscription;

    constructor(private store: DataStore) { }

    public ngOnInit() {
        this.subscription = this.store.getAdmin().subscribe(
            (admin) => {
                console.log("currently in subscribe callback!")
                this.setAdminData(admin);            
            }, 
            (err) => {
                console.log('an error occured', err);
            }
        )   
    }

    public ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    public setAdminData(admin: Person) {
        if(admin) {
            this.firstName = admin.firstName; 
            this.lastName = admin.lastName;
            this.timesChanged++;
        } else {
            console.error('Person UNDEFINED!');
        }
    }
}
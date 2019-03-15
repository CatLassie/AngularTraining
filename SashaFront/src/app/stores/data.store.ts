import { Injectable } from '@angular/core';
import { Person } from '../models/person';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class DataStore{
    private adminSubject: BehaviorSubject<Person> = new BehaviorSubject<Person>(undefined);
    //public admnin: Observable<Person> = this.adminSubject.asObservable();

    public getAdmin(): Observable<Person> {
        return this.adminSubject;
    }

    public setAdmin(admin: Person): void {
        this.adminSubject.next(admin);
    }
}
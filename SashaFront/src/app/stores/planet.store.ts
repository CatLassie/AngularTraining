import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class PlanetStore{
    // private planet: string = 'Earth';

    private planetSubject: BehaviorSubject<string> = new BehaviorSubject<string>('Earth');
    public planet: Observable<string> = this.planetSubject.asObservable();

    public setPlanet(planet: string) {
        this.planetSubject.next(planet);
    }

}
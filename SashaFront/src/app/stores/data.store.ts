import { Injectable } from '@angular/core';

@Injectable()
export class DataStore{
    public data: string = 'Important Data';
    public person: Person; 

    public updateData(value: string){
        this.data = value;
    }
}
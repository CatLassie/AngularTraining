import { Routes } from "@angular/router";
import { BikeListComponent } from '../components/bike-list.component';
import { BikeDetailComponent } from '../components/bike-detail.component';

export const appRoutes: Routes = [
    { path: 'bikes', component:  BikeListComponent},
    { path: 'bikes/create', component:  BikeDetailComponent},
    { path: 'bikes/:id', component:  BikeDetailComponent},
    { path: '', redirectTo: 'bikes', pathMatch: 'full' }
];
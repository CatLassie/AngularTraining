import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { DataStore } from './stores/data.store';
import { BikeListComponent } from './components/bike-list.component';
import { BikeService } from './services/bike.service';
import { BikeListItemComponent } from './components/bike-list-item.component';
import { BikeDetailComponent } from './components/bike-detail.component';
import { RouterModule} from '@angular/router';
import { appRoutes} from './routes/routes';
import { HttpClientModule } from  '@angular/common/http';
import { PersonComponent } from './components/person.component';
import { PersonService } from './services/person.service';
import { PlanetStore } from './stores/planet.store';
import { PlanetComponent } from './components/planet.component';

@NgModule({
  declarations: [
    AppComponent,
    BikeListComponent,
    BikeListItemComponent,
    BikeDetailComponent,
    PersonComponent,
    PlanetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    // DataStore,
    BikeService,
    PersonService,
    PlanetStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataStore } from './stores/data.store';
import { BikeListComponent } from './components/bike-list.component';
import { BikeService } from './services/bike.service';
import { BikeListItemComponent } from './components/bike-list-item.component';
import { BikeDetailComponent } from './components/bike-detail.component';
import { RouterModule} from '@angular/router';
import { appRoutes} from './routes/routes';

@NgModule({
  declarations: [
    AppComponent,
    BikeListComponent,
    BikeListItemComponent,
    BikeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DataStore,
    BikeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

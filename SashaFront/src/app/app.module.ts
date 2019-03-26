import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input.component';
import { OutputComponent } from './components/output.component';
import { DataStore } from './stores/data.store';
import { BikeListComponent } from './components/bike-list.component';
import { BikeService } from './services/bike.service';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    OutputComponent,
    BikeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DataStore,
    BikeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EachCountryComponent } from './each-country/each-country.component';
import { EachStateComponent } from './each-state/each-state.component';
import { EachWeatherComponent } from './each-weather/each-weather.component';
import { CountriesComponent } from './countries/countries.component';
import { StatesComponent } from './states/states.component';
import { StoreModule } from '@ngrx/store';
import { allReducers } from './store/reducers';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NotfoundComponent,
    EachCountryComponent,
    EachStateComponent,
    EachWeatherComponent,
    CountriesComponent,
    StatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(allReducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

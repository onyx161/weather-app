import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherListComponent } from './weather/weather-list.component';
import { WeatherItemComponent } from './weather/weather-item.component';
import { WeatherSearchComponent } from './weather/weather-search.component';
import { SidebarComponent } from './sidebar.component';
import { WeatherService } from 'app/weather/weather.service';
import { ProfileService } from 'app/profile.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherListComponent,
    WeatherItemComponent,
    WeatherSearchComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [WeatherService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }

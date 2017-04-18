import { Component, OnInit } from '@angular/core';

import { WeatherItem } from 'app/weather/weather-item';
import { WeatherService } from 'app/weather/weather.service';

@Component({
  selector: 'wa-weather-list',
  template: `
    <section class="weather-list">
      <wa-weather-item *ngFor="let item of weatherItems" [weatherItem]="item"></wa-weather-item>
    </section>
  `,
  styles: []
})
export class WeatherListComponent implements OnInit {
  weatherItems: WeatherItem[];

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherItems = this._weatherService.getWeatherItems();
  }

}

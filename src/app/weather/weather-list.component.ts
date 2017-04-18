import { Component, OnInit } from '@angular/core';

import { WeatherItem } from 'app/weather/weather-item';
import { WEATHER_ITEMS } from 'app/weather/weather.data';

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

  constructor() { }

  ngOnInit() {
    this.weatherItems = WEATHER_ITEMS;
  }

}

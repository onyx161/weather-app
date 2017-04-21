import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/forms';

import { WeatherItem } from './weather-item';
import { WeatherService } from './weather.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'wa-weather-search',
  templateUrl: './weather-search.component.html',
  styles: []
})
export class WeatherSearchComponent implements OnInit {
  private searchStream = new Subject<string>();
  data: any = {};

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this.searchStream
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap((input: string) => this._weatherService.searchWeatherData(input))
      .subscribe(
        data => this.data = data
      );
  }

  onSubmit() {
    const weatherItem = new WeatherItem(this.data.name, this.data.weather[0].description, this.data.main.temp);
    this._weatherService.addWeatherItem(weatherItem);
  }

  onSearchLocation(cityName: string) {
    this.searchStream
      .next(cityName);
  }

}

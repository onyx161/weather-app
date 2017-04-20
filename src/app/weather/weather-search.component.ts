import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/forms';

import { WeatherItem } from './weather-item';
import { WeatherService } from './weather.service';

@Component({
  selector: 'wa-weather-search',
  templateUrl: './weather-search.component.html',
  styles: []
})
export class WeatherSearchComponent implements OnInit {

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log(f);
    this._weatherService.searchWeatherData(f.value.location)
      .subscribe(
        data => {
          const weatherItem = new WeatherItem(data.name, data.weather[0].description, data.main.temp);
          this._weatherService.addWeatherItem(weatherItem);
        }
      );
  }

}

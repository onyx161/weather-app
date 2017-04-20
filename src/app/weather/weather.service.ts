import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { WEATHER_ITEMS } from './weather.data';
import { WeatherItem } from './weather-item';

@Injectable()
export class WeatherService {
  private key = '12a9fcd0a3279c818db85a1e60cc83ad';

  constructor(private _http: Http) { }

  getWeatherItems() {
    return WEATHER_ITEMS;
  }

  addWeatherItem(weatherItem: WeatherItem) {
    WEATHER_ITEMS.push(weatherItem);
  }

  searchWeatherData(cityName: string): Observable<any> {
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=' + this.key + '&units=metric')
      .map(response => response.json())
      .catch(error => {
        console.error(error);
        return Observable.throw(error.json());
      });
  }
}

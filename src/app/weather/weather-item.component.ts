import { Component, OnInit, Input } from '@angular/core';
import { WeatherItem } from 'app/weather/weather-item';

@Component({
  selector: 'wa-weather-item',
  template: `
    <article class="weather-element">
      <div class="col-1">
        <h3>{{ weatherItem.cityName }}</h3>
        <p class="info">{{ weatherItem.description }}</p>
      </div>
      <div class="col-2">
        <span class="temperature">{{ weatherItem.temperature }}°C</span>
      </div>
    </article>
  `,
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {
   @Input() weatherItem: WeatherItem;

  constructor() {
  }

  ngOnInit() {
  }

}

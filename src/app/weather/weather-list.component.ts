import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wa-weather-list',
  template: `
    <section class="weather-list">
      <wa-weather-item></wa-weather-item>
    </section>
  `,
  styles: []
})
export class WeatherListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

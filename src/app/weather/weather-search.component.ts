import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/forms';

@Component({
  selector: 'wa-weather-search',
  templateUrl: './weather-search.component.html',
  styles: []
})
export class WeatherSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log(f);
  }

}

import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../cities.service';
import { CityResponse } from '../cityResponse';
import { CityStructure } from '../cityStructure';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  cities = [];
  results: any;
  res: CityResponse;
  struct : CityStructure;
  cityData = [];

  constructor(private citiesService:CitiesService) { }

  ngOnInit() {
  }

  search(city:string) {
    this.citiesService.getCities(city).subscribe( data => {
      this.res = data;
      this.cityData = this.res.data;
      console.log(this.res.data);
    });
  }
}

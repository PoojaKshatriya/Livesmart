import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CityResponse } from './cityResponse';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private _http: HttpClient) { }

    getCities(city) {

      var API_URL = "https://jsonmock.hackerrank.com/api/cities/";
      let params = new HttpParams().set('city', city);
      return this._http.get<CityResponse>(`${API_URL}`, { params: params })
  }
}

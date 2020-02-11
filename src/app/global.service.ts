import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http : HttpClient) { }

  weatherApi = 'http://api.openweathermap.org/data/2.5/weather?q=indore&appid=c97f1d414698fdb109b557eaa1080816';
  

  getWeatherData() {
      return this.http.get(this.weatherApi);
  }

}

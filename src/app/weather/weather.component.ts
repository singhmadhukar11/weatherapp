import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherData : any = [];
  tempData : any;
  todayDate : any;

  constructor(private global_service: GlobalService) { }

  getWeatherDataService() {
    this.global_service.getWeatherData().subscribe(
      (res:any) => {
          this.weatherData = Object.entries(res).map((e) => ( { [e[0]]: e[1] } ));
          this.tempData = this.getCelsiusFromkelvin(res.main.temp);
      }
    );
  }

   getCelsiusFromkelvin(kelvin){
    return (kelvin - 273.15);
 }

  ngOnInit() {
    this.getWeatherDataService();
    this.todayDate = new Date().toDateString();
  }

}

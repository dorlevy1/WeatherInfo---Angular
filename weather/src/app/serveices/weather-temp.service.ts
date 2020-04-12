import { Injectable, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BoxWeatherComponent } from '../componentes/box-weather/box-weather.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherTempService implements OnInit {
  favorite: BoxWeatherComponent;

  constructor(private http: HttpClient) {
    // console.log(this.locations);


  }
  ngOnInit() {


  }

  //if not pass argument so the was location tel aviv 
  getWeather(location = this.favorite.locationSearch.location = "") {
    return this.http.get("http://api.weatherstack.com/current?access_key=6e642065ef77747a963102c86a912900&query=" + location);

  }


  getFavorite(location: string) {
    return this.http.get("http://api.weatherstack.com/current?access_key=6e642065ef77747a963102c86a912900&query=" + location);

  }


  // getWeatherWeek(locationKey=215854){

  //   return this.http.get('http://dataservice.accuweather.com/forecasts/v1/daily/5day/locationKey?apikey=Gi3een1ldFiVGxImtGlGbHabpu1EJsuh&language=en')
  // }
}



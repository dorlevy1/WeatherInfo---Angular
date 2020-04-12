import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { BoxWeatherModel } from './box-weather.model'
import { WeatherTempService } from "../../serveices/weather-temp.service";
import { CountryFavoriteComponent } from '../country-favorite/country-favorite.component';

@Component({
  selector: "app-box-weather",
  templateUrl: "./box-weather.component.html",
  styleUrls: ["./box-weather.component.css"]
})
export class BoxWeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public data: any;
  @Output() public locations = [];
  @Output() public locationSearch: any = "";
  public locationKey: any;
  dataArray: Array<any> = [];

  constructor(
    private favorite: CountryFavoriteComponent,
    private formBuilder: FormBuilder,
    private weatherData: WeatherTempService,
  ) {
    this.locations = this.favorite.locations;

  }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: [" "]
    });
    this.locationKey = '';
  }
  // get location from form and send api
  sendToApi(formvalue) {

    this.locationSearch = formvalue;
    this.locations.push(this.locationSearch.location);

    console.log(this.locations);

    this.weatherData.getWeather(formvalue.location).subscribe(data => {
      this.data = data
      this.dataArray.push(data);

    });

  }

}

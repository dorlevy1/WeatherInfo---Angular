import { Component, OnInit, Input, Injectable } from "@angular/core";
import { WeatherTempService } from "../../serveices/weather-temp.service";
import { BoxWeatherComponent } from '../box-weather/box-weather.component';
import { BoxWeatherModel } from '../box-weather/box-weather.model';
import { Observable } from 'rxjs';

@Injectable()
@Component({
    selector: "app-country-favorite",
    templateUrl: "./country-favorite.component.html",
    styleUrls: ["./country-favorite.component.css"]
})
export class CountryFavoriteComponent implements OnInit {
    public dataWeek: any;
    @Input()
    public dataDay: any;
    @Input() locations = [];

    constructor(
        private boxWeather: BoxWeatherComponent,
        private weatherDefault: WeatherTempService,

        private weatherData: WeatherTempService,

    ) {
        this.locations = this.boxWeather.locations;

    }

    ngOnInit() {

        console.log(this.locations + 'string');

        this.dataWeek = {
            "Headline": {
                "EffectiveDate": "2020-04-03T08:00:00+02:00",
                "EffectiveEpochDate": 1585893600,
                "Severity": 5,
                "Text": "Expect showers Friday",
                "Category": "rain",
                "EndDate": "2020-04-03T20:00:00+02:00",
                "EndEpochDate": 1585936800,
                "MobileLink": "http://m.accuweather.com/en/fr/paris/623/extended-weather-forecast/623?lang=en-us",
                "Link": "http://www.accuweather.com/en/fr/paris/623/daily-weather-forecast/623?lang=en-us"
            },
            "DailyForecasts": [
                {
                    "Date": "2020-04-01T07:00:00+02:00",
                    "EpochDate": 1585717200,
                    "Temperature": {
                        "Minimum": {
                            "Value": 32,
                            "Unit": "F",
                            "UnitType": 18
                        },
                        "Maximum": {
                            "Value": 55,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Day": {
                        "Icon": 1,
                        "IconPhrase": "Sunny",
                        "HasPrecipitation": false
                    },
                    "Night": {
                        "Icon": 33,
                        "IconPhrase": "Clear",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/fr/paris/623/daily-weather-forecast/623?day=1&lang=en-us",
                    "Link": "http://www.accuweather.com/en/fr/paris/623/daily-weather-forecast/623?day=1&lang=en-us"
                },
                {
                    "Date": "2020-04-02T07:00:00+02:00",
                    "EpochDate": 1585803600,
                    "Temperature": {
                        "Minimum": {
                            "Value": 40,
                            "Unit": "F",
                            "UnitType": 18
                        },
                        "Maximum": {
                            "Value": 52,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Day": {
                        "Icon": 4,
                        "IconPhrase": "Intermittent clouds",
                        "HasPrecipitation": false
                    },
                    "Night": {
                        "Icon": 36,
                        "IconPhrase": "Intermittent clouds",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/fr/paris/623/daily-weather-forecast/623?day=2&lang=en-us",
                    "Link": "http://www.accuweather.com/en/fr/paris/623/daily-weather-forecast/623?day=2&lang=en-us"
                },
                {
                    "Date": "2020-04-03T07:00:00+02:00",
                    "EpochDate": 1585890000,
                    "Temperature": {
                        "Minimum": {
                            "Value": 39,
                            "Unit": "F",
                            "UnitType": 18
                        },
                        "Maximum": {
                            "Value": 58,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Day": {
                        "Icon": 7,
                        "IconPhrase": "Cloudy",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Light"
                    },
                    "Night": {
                        "Icon": 36,
                        "IconPhrase": "Intermittent clouds",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/fr/paris/623/daily-weather-forecast/623?day=3&lang=en-us",
                    "Link": "http://www.accuweather.com/en/fr/paris/623/daily-weather-forecast/623?day=3&lang=en-us"
                },
                {
                    "Date": "2020-04-04T07:00:00+02:00",
                    "EpochDate": 1585976400,
                    "Temperature": {
                        "Minimum": {
                            "Value": 42,
                            "Unit": "F",
                            "UnitType": 18
                        },
                        "Maximum": {
                            "Value": 62,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Day": {
                        "Icon": 3,
                        "IconPhrase": "Partly sunny",
                        "HasPrecipitation": false
                    },
                    "Night": {
                        "Icon": 33,
                        "IconPhrase": "Clear",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/fr/paris/623/daily-weather-forecast/623?day=4&lang=en-us",
                    "Link": "http://www.accuweather.com/en/fr/paris/623/daily-weather-forecast/623?day=4&lang=en-us"
                },
                {
                    "Date": "2020-04-05T07:00:00+02:00",
                    "EpochDate": 1586062800,
                    "Temperature": {
                        "Minimum": {
                            "Value": 50,
                            "Unit": "F",
                            "UnitType": 18
                        },
                        "Maximum": {
                            "Value": 71,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Day": {
                        "Icon": 3,
                        "IconPhrase": "Partly sunny",
                        "HasPrecipitation": false
                    },
                    "Night": {
                        "Icon": 38,
                        "IconPhrase": "Mostly cloudy",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/fr/paris/623/daily-weather-forecast/623?day=5&lang=en-us",
                    "Link": "http://www.accuweather.com/en/fr/paris/623/daily-weather-forecast/623?day=5&lang=en-us"
                }
            ]
        }


        // this.weatherData.getWeatherWeek().subscribe(res => {
        //   (this.dataWeek = res), console.log(res);
        // });

        this.weatherDefault.getFavorite(this.boxWeather.locations[1]).subscribe((res) => {
            this.dataDay = res
        });


    }
}

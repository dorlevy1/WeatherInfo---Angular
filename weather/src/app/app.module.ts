import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { TopnavComponent } from "./componentes/topnav/topnav.component";
import { BoxWeatherComponent } from "./componentes/box-weather/box-weather.component";
import { AppRoutingModule } from "./app-routing.module";
import { CountryFavoriteComponent } from "./componentes/country-favorite/country-favorite.component";

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    BoxWeatherComponent,
    CountryFavoriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BoxWeatherComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

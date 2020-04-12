import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { CountryFavoriteComponent} from './componentes/country-favorite/country-favorite.component'
import { BoxWeatherComponent } from './componentes/box-weather/box-weather.component';

 const appRouter:Routes=[
   {path:'favorite', component: CountryFavoriteComponent},
   {path:'home',component:BoxWeatherComponent}
  ];

@NgModule({
  exports:[RouterModule],
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRouter) 
  ]
})
export class AppRoutingModule { }

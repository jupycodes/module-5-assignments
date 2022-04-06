import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './components/cities/cities.component';
import { HomeComponent } from './components/home/home.component';
import { TechIdeasComponent } from './components/tech-ideas/tech-ideas.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { WeatherComponent } from './components/weather/weather.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'techideas', component: TechIdeasComponent},
  {path: 'cities', component: CitiesComponent},
  {path: 'weather', component: WeatherComponent},
  {path:"weather/:name/:springN/:springM/:summerN/:summerM/:winterN/:winterM/:autumnN/:autumnM/:visitFrom/:visitTo", component: WeatherDetailsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

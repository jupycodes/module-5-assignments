import { Injectable } from '@angular/core';
import { GetWeatherService } from './get-weather.service';

@Injectable({
  providedIn: 'root'
})
export class GetCityNamesService {
  arrayWeather: any[] = []
  arrayNames=[]

  constructor(private _getW:GetWeatherService) { }

  getNames() {
    this.arrayWeather = this._getW.getWeather();
    for (var i=0; i<this.arrayWeather.length;i++){
      // @ts-ignore
      this.arrayNames.push(this.arrayWeather[i].name);
    }
    return this.arrayNames
  }
}

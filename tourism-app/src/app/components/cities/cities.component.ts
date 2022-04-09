import { Component, OnInit } from '@angular/core';
import { GetcitiesService } from 'src/app/services/getcities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities:any;


  constructor(private _cities: GetcitiesService) { }

  ngOnInit(): void {
    this.cities = this._cities.getCities();
 
  }

}

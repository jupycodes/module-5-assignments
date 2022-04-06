import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GetCityNamesService } from 'src/app/services/get-city-names.service';
import { forbiddenWordValidator } from './custom.validator';

@Component({
  selector: 'app-tech-ideas',
  templateUrl: './tech-ideas.component.html',
  styleUrls: ['./tech-ideas.component.css']
})
export class TechIdeasComponent implements OnInit {

  constructor(private _cities:GetCityNamesService, private formB: FormBuilder) { }
  
  techIdeasForm = this.formB.group({
    name:['', [Validators.required, Validators.minLength(3), forbiddenWordValidator(/tourist/)]],
    age:['',[Validators.required]],
    email:['',[Validators.required, ,Validators.email]],
    city:['',[Validators.required]],
    brief:['',[Validators.required, Validators.minLength(100), forbiddenWordValidator(/nothing/)]]
  })

  cities = this._cities.getNames()

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.techIdeasForm.value);
    this.techIdeasForm.reset()
  }

  get nameFormControl(){
    return this.techIdeasForm.get('name')!
  }
  get ageFormControl(){
    return this.techIdeasForm.get('age')!
  }
  get emailFormControl(){
    return this.techIdeasForm.get('email')!
  }
  get cityFormControl(){
    return this.techIdeasForm.get('city')!
  }
  get briefFormControl(){
    return this.techIdeasForm.get('brief')!
  }

}

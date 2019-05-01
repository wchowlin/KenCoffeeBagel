import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';

export interface FoodQty{
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-plain',
  templateUrl: './plain.component.html',
  styleUrls: ['./plain.component.css']
})
export class PlainComponent {

  constructor() { }
  
  foods: FoodQty[] = [
    {value: '1-qty', viewValue: '1'},
    {value: '2-qty', viewValue: '2'},
    {value: '3-qty', viewValue: '3'},
  ];
}

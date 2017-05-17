import {Component,Input} from '@angular/core';
import {ApartmentModel} from '../apartment.model';
@Component({
selector:'app-apartment',
templateUrl:'./apartment.component.html'
})
export class ApartmentComponent{

@Input() apartment:ApartmentModel;
@Input() index:number;
}